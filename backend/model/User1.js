const mongoose = require('mongoose');



const {Schema} = mongoose;

const User1Schema = new Schema({

name:{
    type:String,
    required:[true,"name is required"],
    trim:true,
    maxLength:[25,"Name must be 25 ch long"]

},

email:{


    type:String,
    required:[true,'email is required'],
    unique:true,

}

});

module.exports = mongoose.model("User1",User1Schema);