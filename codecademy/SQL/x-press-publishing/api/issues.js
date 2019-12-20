const express =require('express');
const issueRouter = express.Router({mergeParams: true});
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE ||'./database.sqlite');

issueRouter.param('issueId', (req, res, next, issueId) => {
    const sql = "SELECT * FROM Issue WHERE id = $issueId;";
    const values = {$issueId: issueId};
    db.get(sql, values, (err, issue) => {
        if (err) {
            next(err);
        } else if (issue) {
            next();
        } else {
            res.sendStatus(404);
        }
    });
});

const validateIssue = (req, res, next) => {
    req.name = req.body.issue.name;
    req.issueNumber = req.body.issue.issueNumber;
    req.publicationDate = req.body.issue.publicationDate;
    req.artistId = req.body.issue.artistId;
    req.seriesId = req.params.seriesId;
    if (!req.name || !req.issueNumber || !req.publicationDate || !req.artistId) {
        return res.sendStatus(400);
    } else {
        const sql = "SELECT * FROM Artist WHERE id = $artistId";
        const values = {$artistId: req.artistId};
        db.get(sql, values, (err, artist) => {
            if (err) {
                next(err);
            } else if (artist) {
                next();
            } else {
                return res.sendStatus(400);
            }
        });
    }
};

issueRouter.get('/', (req, res, next) => {
    const sql = "SELECT * FROM Issue WHERE series_id = $seriesId;";
    const values = {$seriesId: req.params.seriesId};
    db.all(sql, values, (err, issues) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({issues: issues});
        }
    });  
});

issueRouter.post('/', validateIssue, (req, res, next) => {
    const sql = `INSERT INTO Issue (name, issue_number, publication_date, artist_id, series_id) 
                VALUES ($name, $issueNumber, $publicationDate, $artistId, $seriesId)`;
    const values = {
      $name: req.name,
      $issueNumber: req.issueNumber,
      $publicationDate: req.publicationDate,
      $artistId: req.artistId,
      $seriesId: req.seriesId
    };
    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            const sql = "SELECT * FROM Issue WHERE id = $issueId;";
            const values = {$issueId: this.lastID};
            db.get(sql, values, (err, issue) => {
                if (err) {
                    next(err);
                } else {
                    res.status(201).json({issue: issue});
                }
           });        
        }
    });
});

issueRouter.put('/:issueId', validateIssue, (req, res, next) => {
    const sql = "UPDATE Issue SET name = $name, issue_number = $issueNumber, publication_date = $publicationDate, artist_id = $artistId, series_id = $seriesId WHERE id = $issueId";
    const values = {
        $name:              req.name,
        $issueNumber:       req.issueNumber,
        $publicationDate:   req.publicationDate,
        $artistId:          req.artistId,
        $seriesId:          req.seriesId,
        $issueId:           req.params.issueId
    };
    db.run(sql, values, (err, issue) => {
        if (err) {
            next(err);
        } else {
            const sql = "SELECT * FROM Issue WHERE id = $issueId;";
            const values = {$issueId: req.params.issueId};
            db.get(sql, values, (err, issue) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({issue: issue});
                }
           });        
        }
    });
});

issueRouter.delete('/:issueId', (req, res, next) => {
    const sql = "DELETE FROM Issue WHERE id = $issueId";
    const values = {$issueId: req.params.issueId};
    db.run(sql, values, (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    });
});

module.exports = issueRouter;