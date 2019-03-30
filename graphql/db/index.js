const mongoose = require('mongoose');
const { dbURI } = require('../../shared/env');

mongoose.Promise = global.Promise;

const connect = () => {
  mongoose.set('debug', true);
  return mongoose.connect(dbURI, { useMongoClient: true });
};

module.exports = {
  connect,
  mongoose,
};
