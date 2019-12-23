const express =require('express');
const timesheetRouter = express.Router({mergeParams: true});
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE ||'./database.sqlite');

timesheetRouter.param('timesheetId', (req, res, next, timesheetId) => {
    const sql = "SELECT * FROM Timesheet WHERE id = $timesheetId;";
    const values = {$timesheetId: timesheetId};
    db.get(sql, values, (err, timesheet) => {
        if (err) {
            next(err);
        } else if (timesheet) {
            next();
        } else {
            res.sendStatus(404);
        }
    });
});

const validateTimesheet = (req, res, next) => {
    req.hours = req.body.timesheet.hours;
    req.rate = req.body.timesheet.rate;
    req.date = req.body.timesheet.date;
    req.employeeId = req.params.employeeId;
    if (!req.hours || !req.rate || !req.date || !req.employeeId) {
        return res.sendStatus(400);
    } else {
        const sql = "SELECT * FROM Employee WHERE id = $employeeId";
        const values = {$employeeId: req.employeeId};
        db.get(sql, values, (err, employee) => {
            if (err) {
                next(err);
            } else if (employee) {
                next();
            } else {
                return res.sendStatus(404);
            }
        });
    }
};

timesheetRouter.get('/', (req, res, next) => {
    const sql = "SELECT * FROM Timesheet WHERE employee_id = $employeeId;";
    const values = {$employeeId: req.params.employeeId};
    db.all(sql, values, (err, timesheets) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({timesheets: timesheets});
        }
    });
});

timesheetRouter.post('/', validateTimesheet, (req, res, next) => {
    const sql = `INSERT INTO Timesheet (hours, rate, date, employee_id)
                VALUES ($hours, $rate, $date, $employeeId)`;
    const values = {
      $hours:       req.hours,
      $rate:        req.rate,
      $date:        req.date,
      $employeeId:  req.employeeId
    };
    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            const sql = "SELECT * FROM Timesheet WHERE id = $timesheetId;";
            const values = {$timesheetId: this.lastID};
            db.get(sql, values, (err, timesheet) => {
                if (err) {
                    next(err);
                } else {
                    res.status(201).json({timesheet: timesheet});
                }
           });
        }
    });
});

timesheetRouter.put('/:timesheetId', validateTimesheet, (req, res, next) => {
    const sql = "UPDATE Timesheet SET hours = $hours, rate = $rate, date = $date, employee_id = $employeeId WHERE id = $timesheetId";
    const values = {
        $hours:             req.hours,
        $rate:              req.rate,
        $date:              req.date,
        $employeeId:        req.employeeId,
        $timesheetId:       req.params.timesheetId
    };
    db.run(sql, values, (err, timesheet) => {
        if (err) {
            next(err);
        } else {
            const sql = "SELECT * FROM Timesheet WHERE id = $timesheetId;";
            const values = {$timesheetId: req.params.timesheetId};
            db.get(sql, values, (err, timesheet) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({timesheet: timesheet});
                }
           });
        }
    });
});

timesheetRouter.delete('/:timesheetId', (req, res, next) => {
    const sql = "DELETE FROM Timesheet WHERE id = $timesheetId";
    const values = {$timesheetId: req.params.timesheetId};
    db.run(sql, values, (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    });
});

module.exports = timesheetRouter;
