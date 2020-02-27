var mongoose = require("mongoose");

// save reference to the schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  summary: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Creates our model from the above schema
var Article = mongoose.model("Article", ArticleSchema);

// Exporting Article model
module.exports = Article
