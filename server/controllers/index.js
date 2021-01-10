const models = require('../models');

const getFilms = (req, res) => {
  models.getFilms((err, films) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(films)
    }
  })
}

module.exports = {
  getFilms
}