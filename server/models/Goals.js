const { Schema } = require('mongoose');

const goalsSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
        required: true,
    }
});

module.exports = goalsSchema;