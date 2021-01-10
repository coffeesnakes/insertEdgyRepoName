const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/weebs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", ()=> {
  console.log('connected to mongoDB database')
})

const weebSchema = new mongoose.Schema({
  title: String,
  description: String,
  director: String,
  producer: String,
});

const Weeb = mongoose.model("Weebs", weebSchema);

module.exports = {
  Weeb
}