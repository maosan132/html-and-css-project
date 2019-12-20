const express = require('express');
const app = express();
const appRouter = express.Router();
app.use('/strips', appRouter);

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

const PORT = process.env.PORT || 4001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/strips', (req, res, next) => {
  db.all('SELECT * FROM Strip', (err, rows) => {
    if (err) {
        res.sendStatus(500);
      } else {
        res.send({strips: rows});
      }
    })
});
app.post('/strips', (req, res, next) => {
  if (!req.body.strip.head || !req.body.strip.body || !req.body.strip.background || !req.body.strip.bubbleType) {
    res.status(400).send();
  } else {
    db.run("INSERT INTO Strip (head, body, background, bubble_type, bubble_text, caption) VALUES ($head, $body, $background, $bubbleType, $bubbleText, $caption)", {
      $head: req.body.strip.head,
      $body: req.body.strip.body,
      $background: req.body.strip.background,
      $bubbleType: req.body.strip.bubbleType,
      $bubbleText: req.body.strip.bubbleText,
      $caption: req.body.strip.caption
    }, function (err) {
      if (err) {
        res.status(500).send();
      } else {
        db.get("SELECT * FROM Strip WHERE id = $id", {
          $id: this.lastID
        }, (err, row) => {
          if (err) {
            res.status(500).send();
          } else {
            res.status(201).send({strip: row})
          }
        })
      }
    })
    
  }
});

app.listen(PORT, () => console.log(`Server is listenning on port ${PORT}`));

module.exports = app;
