const express =require('express');
const menuItemsRouter = express.Router({mergeParams: true});
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE ||'./database.sqlite');

menuItemsRouter.param('menuItemId', (req, res, next, menuItemId) => {
    const sql = "SELECT * FROM MenuItem WHERE id = $menuItemId;";
    const values = {$menuItemId: menuItemId};
    db.get(sql, values, (err, menuItem) => {
        if (err) {
            next(err);
        } else if (menuItem) {
            next();
        } else {
            res.sendStatus(404);
        }
    });
});

const validateMenuItem = (req, res, next) => {
    req.name = req.body.menuItem.name;
    req.description = req.body.menuItem.description;
    req.inventory = req.body.menuItem.inventory;
    req.price = req.body.menuItem.price;
    req.menuId = req.params.menuId;
    if (!req.name || !req.inventory || !req.price || !req.menuId) {
        return res.sendStatus(400);
    } else {
        const sql = "SELECT * FROM Menu WHERE id = $menuId";
        const values = {$menuId: req.menuId};
        db.get(sql, values, (err, menu) => {
            if (err) {
                next(err);
            } else if (menu) {
                next();
            } else {
                return res.sendStatus(404);
            }
        });
    }
};

menuItemsRouter.get('/', (req, res, next) => {
    const sql = "SELECT * FROM MenuItem WHERE menu_id = $menuId;";
    const values = {$menuId: req.params.menuId};
    db.all(sql, values, (err, menuItems) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({menuItems: menuItems});
        }
    });
});

menuItemsRouter.post('/', validateMenuItem, (req, res, next) => {
    const sql = `INSERT INTO MenuItem (name, description, inventory, price, menu_id)
                VALUES ($name, $description, $inventory, $price, $menuId)`;
    const values = {
      $name: req.name,
      $description: req.description,
      $inventory: req.inventory,
      $price: req.price,
      $menuId: req.menuId
    };
    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            const sql = "SELECT * FROM MenuItem WHERE id = $menuItemId;";
            const values = {$menuItemId: this.lastID};
            db.get(sql, values, (err, menuItem) => {
                if (err) {
                    next(err);
                } else {
                    res.status(201).json({menuItem: menuItem});
                }
           });
        }
    });
});

menuItemsRouter.put('/:menuItemId', validateMenuItem, (req, res, next) => {
    const sql = "UPDATE MenuItem SET name = $name, description = $description, inventory = $inventory, price = $price, menu_id = $menuId WHERE id = $menuItemId";
    const values = {
        $name:              req.name,
        $description:       req.description,
        $inventory:         req.inventory,
        $price:             req.price,
        $menuId:            req.menuId,
        $menuItemId:        req.params.menuItemId
    };
    db.run(sql, values, (err, menuItem) => {
        if (err) {
            next(err);
        } else {
            const sql = "SELECT * FROM MenuItem WHERE id = $menuItemId;";
            const values = {$menuItemId: req.params.menuItemId};
            db.get(sql, values, (err, menuItem) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({menuItem: menuItem});
                }
           });
        }
    });
});

menuItemsRouter.delete('/:menuItemId', (req, res, next) => {
    const sql = "DELETE FROM MenuItem WHERE id = $menuItemId";
    const values = {$menuItemId: req.params.menuItemId};
    db.run(sql, values, (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    });
});

module.exports = menuItemsRouter;
