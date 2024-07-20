const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Enter Objective"],
    },
});

module.exports = mongoose.model('ToDo', todoSchema);