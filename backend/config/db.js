const mongoose = require('mongoose');

const {MONGODB_URL} = process.env

const connectToDB = ()=>{


    mongoose.connect(MONGODB_URL,

        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    ).then((conn)=>{

        console.log(conn.connection.host,'DB connected with a success');
    }).catch((error)=>{

        console.log(error.message);
        process.exit(1);
    })
}

module.exports = connectToDB;