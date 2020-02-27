var mongoose = require("mongoose");

// save reference to the schema constructor
var Schema = mongoose.Schema;


// Using the Schema constructor, create a new NoteSchema object

var NoteSchema = new Schema({
      type: String,
      body: String
    });
  
  // Creates our model from the above schema
  var Note = mongoose.model("Note", NoteSchema);
  
  // Exporting Note model
  module.exports = Note
  