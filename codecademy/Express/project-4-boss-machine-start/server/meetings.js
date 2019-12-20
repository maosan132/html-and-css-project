const express = require('express');
const meetingsRouter = express.Router();
const {
    getAllFromDatabase, 
    getFromDatabaseById, 
    addToDatabase, 
    createMeeting, 
    deleteAllFromDatabase, 
    deleteFromDatabasebyId
} = require('./db');

meetingsRouter.param('meetingId', (req, res, next, id) => {
    const meeting = getFromDatabaseById('meetings', id);
    if (meeting !== undefined) {
      req.meeting = meeting;
      next();
    } else {
      res.status(404).send('Meeting Not Found.');
    }
  });
  
meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});


meetingsRouter.post('/', (req, res, next) => {
    // const newMeeting = req.query;
    // if (newMeeting.time && newMeeting.date && newMeeting.day && newMeeting.note) {
    //     res.status(201).send(addToDatabase('meetings',newMeeting));
    // } else {
    //     res.status(400).send();
    // };
    res.status(201).send(addToDatabase('meetings',createMeeting()));
});

meetingsRouter.delete('/:meetingId', (req, res, next) => {
    if (deleteFromDatabasebyId('meetings', req.params.meetingId)) {
        res.status(204).send();
    } else {
        res.status(404).send('Meeting not found.');
    };
});

meetingsRouter.delete('/', (req, res, next) => {
    res.status(204).send(deleteAllFromDatabase('meetings'));
});

module.exports = meetingsRouter;
