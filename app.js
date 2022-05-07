const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

// Creating a new model
const fruitSchema = new mongoose.Schema({
  // name: {
  //   type: String
  //   // required: [true, 'Please check your data entry, no names added.']
  // },
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Creating a new document
const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy!"
});

// fruit.save();


// Saving the document one by one
// fruit.save().then(() => console.log('Successfully saved fruit to fruitsDB'));

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture"
// });

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

    // mongoose.connection.close(function () {
    //   console.log('Mongoose connection disconnected');
    // });

    fruits.forEach(function(fruit){
      console.log(fruit);
    });
  }
});

// Fruit.updateOne({_id: "627680da67f47eb5e7283eab"}, {name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document");
//   }
// });

Fruit.deleteMany({review: "Peaches are so yummy!"}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the documents");
  }
});


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({ name: 'John', age: 35 });

// person.save();
