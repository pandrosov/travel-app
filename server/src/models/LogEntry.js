var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//            * Schema of LogEntry *
// * Title - Text
// * Description - Text
// * Comments - Text
// * Rating - scale of 1 - 10
// * Image - Text - URL
// * Start Date - DateTime
// * End Date - DateTime
// * Latitude - Number
// * Longitude - Number
// * Create At - DateTime
// * Update At - DateTime

const requiredString = {
    type: String,
    required: true
}

const requiredNumber = {
  type: Number,
  required: true
}

const logEntrySchema = new Schema({
  title:  requiredString,
  description: String,
  comments: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180
  },
  visitDate: {
    type: Date,
    required: true
  }
}, {
  timestamp: true
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
