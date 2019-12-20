const express = require('express');
const ideasRouter = express.Router();
const {
    getAllFromDatabase, 
    getFromDatabaseById, 
    addToDatabase, 
    updateInstanceInDatabase, 
    deleteFromDatabasebyId
} = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea !== undefined) {
      req.idea = idea;
      next();
    } else {
      res.status(404).send('Idea Not Found.');
    }
  });
  
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    res.status(201).send(addToDatabase('ideas',req.body));
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    req.body.id = req.idea.id;
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdea);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    if (deleteFromDatabasebyId('ideas', req.idea.id)) {
        res.status(204).send();
    } else {
        res.status(404).send('Idea not found.');
    };
});

module.exports = ideasRouter;
