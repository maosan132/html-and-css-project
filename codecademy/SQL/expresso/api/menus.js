const express =require('express');
const menuitemsRouter = require('./menuitems');
const menusRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE ||'./database.sqlite');

menusRouter.get('/', (req, res, next) => {
    db.all("SELECT * FROM Menu;", (err, menus) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({menus: menus});
        }
    })
});

menusRouter.param('menuId', (req, res, next, menuId) => {
    const sql = 'SELECT * FROM Menu WHERE id = $menuId';
    const values = {$menuId: menuId};
    db.get(sql, values, (err, menu) => {
        if (err) {
            next(err);
        } else if (menu) {
            req.menu = menu;
            next();
        } else {
            res.sendStatus(404);
        }
    });
});

const validateMenu = (req, res, next) => {
    req.title = req.body.menu.title;
    if (!req.title) {
        return res.sendStatus(400);
    } else {
        next();
    }
};

menusRouter.use('/:menuId/menu-items', menuitemsRouter);

menusRouter.get('/:menuId', (req, res, next) => {
    res.status(200).json({menu: req.menu});
});

menusRouter.post('/', validateMenu, (req, res, next) => {
    if (!req.title) {
        return res.sendStatus(400);
    };
    const sql = 'INSERT INTO Menu (title) VALUES ($title)';
    const values = {
      $title: req.title,
    };
    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Menu WHERE id = ${this.lastID}`, (err, menu) => {
                res.status(201).json({menu: menu});
           });
        }
    });
});

menusRouter.put('/:menuId', validateMenu, (req, res, next) => {
    if (!req.title) {
        return res.sendStatus(400);
    };
    const sql = 'UPDATE Menu SET title = $title WHERE id = $menuId';
    const values = {
        $title:     req.title,
        $menuId:    req.params.menuId
    };
    db.run(sql, values, (err) => {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Menu WHERE id = ${req.params.menuId}`, (err, menu) => {
                res.status(200).json({menu: menu});
           });
        }
    });

});

menusRouter.delete('/:menuId', (req, res, next) => {
    const sql = "SELECT * FROM MenuItem WHERE menu_id = $menuId;";
    const values = {$menuId: req.params.menuId};
    db.get(sql, values, (err, menuItems) => {
        if (err) {
            next(err);
        } else {
            if (menuItems) {
                res.sendStatus(400); // Cannot delete series with related issues
            } else {
                const sql = "DELETE FROM Menu WHERE id = $menuId;";
                const values = {$menuId: req.params.menuId};
                db.run(sql, values, (err) => {
                    if (err) {
                        next(err);
                    } else {
                        res.sendStatus(204);
                    }
                });
            }
        }
    });
});

module.exports = menusRouter;
