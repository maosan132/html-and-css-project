const minionsRouter = require('express').Router();

const {
    getAllFromDatabase, 
    getFromDatabaseById, 
    addToDatabase, 
    updateInstanceInDatabase, 
    deleteFromDatabasebyId
} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion !== undefined) {
      req.minion = minion;
      next();
    } else {
      res.status(404).send('Minion Not Found.');
    }
});
  
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
    req.body.id = req.minion.id;
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    if (deleteFromDatabasebyId('minions', req.minion.id)) {
        res.status(204).send();
    } else {
        res.status(404).send('Minion not found.');
    };
});

module.exports = minionsRouter;
