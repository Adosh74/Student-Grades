const express = require('express');
const gradesHandlers = require('../handlers/gradesHandler');

const router = express.Router();

router.get('/:id', gradesHandlers.getStudentGrade);

module.exports = router;
