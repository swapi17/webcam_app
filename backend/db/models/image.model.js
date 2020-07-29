const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* 
    Image Schema for storing images in the 
    mongodb database
*/
var ImageSchema = new Schema({
   
    imageData: {
        type: String,
        required: true
    },
	// with auth
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

var Image = mongoose.model('Image', ImageSchema);

module.exports = Image;