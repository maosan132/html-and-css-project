const express = require('express');

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

quotesRouter = express.Router();

// GET Random quote
quotesRouter.get('/random', (req, res, next) => {
    const rand = getRandomElement(quotes);
    res.send({quote: rand});
});
// GET All quotes or a single one
quotesRouter.get('/', (req, res, next) => {
    res.send({
        quotes: req.query.person === undefined ? quotes : [quotes.find(e => e.person === req.query.person)]
    });
});

// POST a new quote
quotesRouter.post('/', (req, res, next) => {
    if (req.query.hasOwnProperty('quote') && req.query.hasOwnProperty('person') ) {
        const maxId = Math.max.apply(Math, quotes.map(o => o.id));
        quotes.push({
            id: maxId+1,
            quote: req.query.quote,
            person: req.query.person,
            year: req.query.year
        });
        res.status(201).send({quote: req.query});
    } else {
        res.status(400).send();
    }
});

// Update an existing quote with PUT
quotesRouter.put('/:id', (req, res, next) => {
    const quoteIndex = quotes.findIndex(e => e.id === Number(req.params.id));
    if (quoteIndex !== -1 ) {
        // Object.assign(quotes[quoteIndex], req.query); 
        quotes[quoteIndex].person = req.query.person;
        quotes[quoteIndex].quote = req.query.quote;
        res.send(quotes[quoteIndex]);
    } else {
        res.status(404).send();
    }
});

// DELETE a quote
quotesRouter.delete('/:id', (req, res, next) => {
    const quoteIndex = quotes.findIndex(e => e.id === Number(req.params.id));
    if (quoteIndex !== -1 ) {
        quotes.splice(quoteIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    };
});

module.exports = quotesRouter;
