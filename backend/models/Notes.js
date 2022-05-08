const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    description:{
            type:String,
            required: true,
    },
    tag:{
        type:String,
        dafault:"General"
    },
    date:{
        type: Date,
        default:Date.now
    }
});
module.exports = mongoose.model(notes,NotesSchema);