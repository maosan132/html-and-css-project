const express = require('express');

const apiRouter = express.Router();
const menusRouter = require('./menus');
const employeesRouter = require('./employees');
const menuItemsRouter = require('./menuitems');
apiRouter.use('/menus', menusRouter);
apiRouter.use('/employees', employeesRouter);
apiRouter.use('/menu-items', menuItemsRouter);

module.exports = apiRouter;
