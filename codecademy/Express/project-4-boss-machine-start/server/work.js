const express = require('express');
const workRouter = express.Router({ mergeParams: true });
const {
    getFromDatabaseByAltId, 
    getFromDatabaseById, 
    addToDatabase, 
    updateInstanceInDatabase, 
    deleteFromDatabasebyId
} = require('./db');

workRouter.param('workId', (req, res, next, id) => {
    const work = getFromDatabaseById('work', id);
    if (work !== undefined) {
      req.work = work;
      next();
    } else {
      res.status(404).send('Work Not Found.');
    }
  });
  
workRouter.get('/', (req, res, next) => {
    const minion = getFromDatabaseById('work', req.params.minionId);
    if (minion ) {
        res.send(getFromDatabaseByAltId('work', 'minionId', req.params.minionId));
    } else {
        res.status(404).send();
    }
});

workRouter.get('/:workId', (req, res, next) => {
    res.send(req.work);
});

workRouter.post('/', (req, res, next) => {
    req.body.minionId = req.params.minionId;
    res.status(201).send(addToDatabase('work',req.body));
});

workRouter.put('/:workId', (req, res, next) => {
    const worksByMinion = getFromDatabaseByAltId('work', 'minionId', req.params.minionId);
    const thisWorkId = worksByMinion.filter(e => e.id === req.params.workId);
    if (thisWorkId.length !== 0) {
        req.body.minionId = req.params.minionId;
        req.body.id = req.work.id;
        const updatedWork = updateInstanceInDatabase('work', req.body);
        res.send(updatedWork);
    } else {
        res.status(400).send();
    }
});

workRouter.delete('/:workId', (req, res, next) => {
    const worksByMinion = getFromDatabaseByAltId('work', 'minionId', req.params.minionId);
    const thisWorkId = worksByMinion.filter(e => e.id === req.params.workId);
    if (thisWorkId.length !== 0) {
        res.status(204).send(deleteFromDatabasebyId('work', req.params.workId));
    } else {
        res.status(400).send();
    };
});

module.exports = workRouter;
