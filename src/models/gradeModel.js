const mongoose = require('mongoose');

const studentGradeSchema = mongoose.Schema({
    School_Name: {
        type: String,
        required: [true, 'A grade must have a School_Name'],
        trim: true,
    },
    School_Year: {
        type: String,
        required: [true, 'A grade must have a School_Year'],
        trim: true,
    },
    Term: {
        type: String,
        required: [true, 'A grade must have a Term'],
        trim: true,
    },
    Name: {
        type: String,
        required: [true, 'A grade must have a Name'],
        trim: true,
    },
    Seating_Number: {
        type: Number,
        required: [true, 'A grade must have a Seating_Number'],
    },
    National_ID: {
        type: Number,
        required: [true, 'A grade must have a National_ID'],
    },
    Grade: {
        type: String,
        required: [true, 'A grade must have a Grade'],
        trim: true,
    },
    Arabic: {
        type: Number,
        required: [true, 'A grade must have a Arabic'],
    },
    Math: {
        type: Number,
        required: [true, 'A grade must have a Math'],
    },
    Social: {
        type: Number,
        required: [true, 'A grade must have a Social'],
    },
    Science: {
        type: Number,
        required: [true, 'A grade must have a Science'],
    },
    English: {
        type: Number,
        required: [true, 'A grade must have a English'],
    },
    Religion: {
        type: Number,
        required: [true, 'A grade must have a Religion'],
    },
    Result: {
        type: String,
        required: [true, 'A grade must have a Result'],
        trim: true,
    },
});

const StudentGrade = mongoose.model('StudentGrade', studentGradeSchema);

module.exports = StudentGrade;
