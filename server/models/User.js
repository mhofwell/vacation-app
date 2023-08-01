const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: Number,
    fn: String,
    ln: String,
    email: String,
    password: String,
    vacationStatus: {
        onVacation: Boolean,
        bookingNumber: Number,
        currentUnit: {
            id: Number,
            address1: String,
            address2: String,
            city: String,
            state: String,
            country: String,
            postalCode: String,
        },
    },
    previousStays: [
        {
            bookingNumber: Number,
        },
    ],
    createdAt: Date,
    updatedAt: Date,
});

const User = model('User', userSchema);
module.exports = User;
