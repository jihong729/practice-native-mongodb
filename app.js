const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentsDB');

// Creating a new model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Student = mongoose.model('Student', studentSchema);

// Creating a new document
const student = new Student({ name: 'John', age: 35 });

// Saving the document
student.save().then(() => console.log('Successfully saved'));
