const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const StudentGrade = require('../src/models/gradeModel');

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD,
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log('database connected successful yad');
    });

//* Reading the json file *\\

const grades = JSON.parse(fs.readFileSync(`${__dirname}/natega.json`, 'utf-8'));

const insertData = async () => {
    try {
        await StudentGrade.create(grades);
        console.log('Student grade inserted successfully');
    } catch (error) {
        console.log(error);
    }
    process.exit();
};

const deleteData = async () => {
    try {
        await StudentGrade.deleteMany();
        console.log('Data deleted successfully');
    } catch (error) {
        console.log(error);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    insertData();
}
if (process.argv[2] === '--delete') {
    deleteData();
}
