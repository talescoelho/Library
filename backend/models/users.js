const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    birth: {
      type: Date,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    register : {
      type: Date,
      default: Date.now,
    },
    lastChange : {
      type: Date,
      default: Date.now,
    },
    addresses: {
      postalCode: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
    },
    contact: {
      email : {
        type: String,
        required: true,
      }, 
      phoneNumber: {
        type: String,
        required: true,
      }
    },
    lastRead: {
      type: String,
      required: false,
    },
    loansQuantity: {
      type: Number,
      required: false,
    },
    readGenders: {
      first: {
        type: String,
        required: false,
      },
      second: {
        type: String,
        required: false,
      },
      third: {
        type: String,
        required: false,
      },
      required: false,
    },
    loans: [
      {
        bookId: {
          type: String,
          required: false,
        },
        loanDate: {
          type: Date,
          required: false,
        },
        returnDate: {
          type: Date,
          required: false,
        },
      }
    ],
    permission: {
      cargo: {
        type: String,
        required: true,
      },
      level : {
        type: Number,
        required: true,
      },
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model('Users', usersSchema, 'users');