const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    // user_id: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //   },

    
});

const User = mongoose.model("user",userSchema);
module.exports = User;