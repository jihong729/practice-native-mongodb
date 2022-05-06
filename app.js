const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

// Creating a new model
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Creating a new document
const apple = new Fruit({
  name: "Apple",
  raging: 7,
  review: "Pretty good but needs more juice"
});

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture"
});

// Fruit.insertMany([apple, kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB")
//   }
// })

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close( function() {
      process.exit(0);
    });

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Saving the document one by one
// fruit.save().then(() => console.log('Successfully saved fruit to fruitsDB'));

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({ name: 'John', age: 35 });

// person.save();
