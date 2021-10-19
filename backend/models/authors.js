const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Authors', authorsSchema, 'authors');
