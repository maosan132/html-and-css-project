const express =require('express');
const timesheetsRouter = require('./timesheets');
const employeesRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE ||'./database.sqlite');

employeesRouter.get('/', (req, res, next) => {
    db.all("SELECT * FROM Employee WHERE is_current_employee = 1;", (err, employees) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({employees: employees});
        }
    })
});

employeesRouter.param('employeeId', (req, res, next, employeeId) => {
    const sql = 'SELECT * FROM Employee WHERE Employee.id = $employeeId';
    const values = {$employeeId: employeeId};
    db.get(sql, values, (err, employee) => {
        if (err) {
            next(err);
        } else if (employee) {
            req.employee = employee;
            next();
        } else {
            res.sendStatus(404);
        }
    });
});

const validateEmployee = (req, res, next) => {
    req.name = req.body.employee.name;
    req.position = req.body.employee.position;
    req.wage = req.body.employee.wage;
    req.isCurrentEmployee = req.body.employee.isCurrentEmployee === 0 ? 0 : 1;
    if (!req.name || !req.position || !req.wage) {
        return res.sendStatus(400);
    } else {
        next();
    }
};

employeesRouter.use('/:employeeId/timesheets', timesheetsRouter);

employeesRouter.get('/:employeeId', (req, res, next) => {
    res.status(200).json({employee: req.employee});
});

employeesRouter.post('/', validateEmployee, (req, res, next) => {
    if (!req.name || !req.position || !req.wage) {
        return res.sendStatus(400);
    };
    const sql = 'INSERT INTO Employee (name, position, wage, is_current_employee) VALUES ($name, $position, $wage, $isCurrentEmployee)';
    const values = {
      $name: req.name,
      $position: req.position,
      $wage: req.wage,
      $isCurrentEmployee: req.isCurrentEmployee
    };
    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Employee WHERE Employee.id = ${this.lastID}`, (err, employee) => {
                res.status(201).json({employee: employee});
           });
        }
    });
});

employeesRouter.put('/:employeeId', validateEmployee, (req, res, next) => {
    if (!req.name || !req.position || !req.wage) {
        return res.sendStatus(400);
    };
    const sql = 'UPDATE Employee SET name = $name, position = $position, wage = $wage, is_current_employee = $isCurrentEmployee WHERE id = $employeeId';
    const values = {
        $name: req.name,
        $position: req.position,
        $wage: req.wage,
        $isCurrentEmployee: req.isCurrentEmployee,
        $employeeId: req.params.employeeId
    };
    db.run(sql, values, (err) => {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Employee WHERE Employee.id = ${req.params.employeeId}`, (err, employee) => {
                res.status(200).json({employee: employee});
           });
        }
    });

});

employeesRouter.delete('/:employeeId', (req, res, next) => {
    const sql = 'UPDATE Employee SET is_current_employee = 0 WHERE id = $employeeId';
    const values = {
        $employeeId: req.params.employeeId
    };
    db.run(sql, values, (err) => {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Employee WHERE id = ${req.params.employeeId}`, (err, employee) => {
                res.status(200).json({employee: employee});
            });
        }
    });
});

module.exports = employeesRouter;
