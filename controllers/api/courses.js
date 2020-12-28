const Course = require('../../models/course');
//const { default: CourseForm } = require('../../src/components/CourseForm/CourseForm');

module.exports = {
    create,
    index
}

async function create(req, res) {
    const course = await Course.create(req.body);
    res.status(201).json(course);
}

async function index(req, res) {
    const courses = await Course.find({});
    res.status(200).json(courses);
}