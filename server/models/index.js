const {Weeb} = require('../../database');

const getFilms = (callback) => {
  Weeb.find(callback);
}

module.exports = {
  getFilms
}