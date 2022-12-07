const User = require('../model/User1');


exports.home = (req,res)=>{

    res.send("Welcome to full stack");
}


exports.createUser = async (req,res)=>{

    try{

    const {name,email} = req.body

    if(!name && !email){

        res.status(401).send("email and name are required");
    }

    const userExists = await User.findOne({email});

    if(userExists){

        throw new Error("Email already exists");
    }

    const user = await User.create({name,email});

     res.status(201).json({
        success:true,
        message:"user created successfully",
        user
     })   
    }catch(error){

        console.log(error);
    }
}


exports.getUsers = async (req,res)=>{

    try{

    const users = await User.find();

    res.status(200).json({

        success:true,
        users
    })

    }catch(error){

res.status(404).json({

    success:false,
    message:error.message
})

    }

}


exports.editUser = async (req,res)=>{


    try{

        const userUpdated = await User.findByIdAndUpdate(req.params.id,req.body);

res.status(200).json({
    success:true,
    message:"User updated successfully"
})


    }catch(error){



        res.status(401).json({
success:false,
            message:error.message

        })
    }
}

exports.deleteUser = async (req,res)=>{


    try{
        console.log('inside delete user');
const userDeleted = await User.findByIdAndDelete(req.params.id);


res.status(201).json({
    success:true,
    message:"User deleted successfully"
})

    }catch(error){
res.status(401).json({
    success:false,
    message:error.message
})

    }
}