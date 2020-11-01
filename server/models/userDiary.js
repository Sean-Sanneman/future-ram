const { Schema, model} = require('mongoose');
const bycrypt = require('bcrypt');

// import schema from diaries.js
const userDiarySchema = require('./Diaries');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must have a valid email address'],
        },
        savedDiaries: [userDiarySchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bycrypt.hash(this.password, saltRounds)
    }
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bycrypt.compare(password, this.password);
};

userSchema.virtual('')