const StudentGrade = require('../models/gradeModel');

exports.getStudentGrade = async (req, res) => {
    try {
        const { id } = req.params;

        const grade = await StudentGrade.findOne({ ID: id }).select(
            '-National_ID -__v -_id',
        );

        if (!grade) {
            return res.render('search');
        }

        if (grade.Result === 'برجاء مراجعة الحسابات') {
            return res.render('result2');
        }

        return res.render('result', { grade: grade });

        // res.status(200).json({
        //     status: 'success',
        //     data: {
        //         grade,
        //     },
        // });
    } catch (error) {
        console.log(error);
        res.render('search');
    }
};
