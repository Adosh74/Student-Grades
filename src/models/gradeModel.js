const mongoose = require('mongoose');

const studentGradeSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
    },
    ID: {
        type: Number,
        required: true,
    },
    division: {
        type: String,
    },
    Theresult: {
        type: String,
        required: true,
    },
    Grade: {
        type: String,
        required: true,
    },
    Class: {
        type: Number,
        required: true,
    },
    Arabic: {
        type: Number,
        required: true,
    },
    E_OL: {
        type: Number,
    },
    S_language: {
        type: Number,
        required: true,
    },
    Math: {
        type: Number,
    },
    Math_2: {
        type: Number,
    },
    Chemistry: {
        type: Number,
    },
    physics: {
        type: Number,
    },
    Bio: {
        type: Number,
    },
    History: {
        type: Number,
    },
    Geography: {
        type: Number,
    },
    Psychology: {
        type: Number,
    },
    Philosophy: {
        type: Number,
    },
    Computer: {
        type: Number,
    },
    Religious: {
        type: Number,
    },
    National_Education: {
        type: Number,
    },
    E_0L: {
        type: Number,
    },
    E_AL: {
        type: Number,
    },
});

const StudentGrade = mongoose.model('StudentGrade', studentGradeSchema);

module.exports = StudentGrade;
