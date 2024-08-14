import user from '../model/user_model.js'
import bcryptjs from "bcryptjs-react";


export const signup = async(req,res) => {
    try {
        const {Name,Email,Password} = req.body;
        const newUser = await user.findOne({ Email })
        if(newUser){
            return res.status(400).json({message:"User already exists"})
        }
        const hashpassword = await bcryptjs.hash(Password,10);
        const createUser = new user({
            Name:Name,
            Email:Email,
            Password:hashpassword
        })
        await createUser.save();
        res.status(200).json({
            message:"User created successfully",
            newUser:{
                _id:createUser._id,
                Name:createUser.Name,
                Email:createUser.Email
            }
        })


    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({message:"Server Error"});
    }
};

export const login = async(req,res) =>{
    try {
        const {Email,Password} = req.body;
        const userExist = await user.findOne({Email})
        const isMatch = await bcryptjs.compare(Password,userExist.Password);
        if(!userExist || !isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        } else{
            res.status(200).json({message:"User logged in successfully",cus:{
                _id:userExist._id,
                Name:userExist.Name,
                Password:userExist.Password
            }})
        }
    } catch (error) {
        console.log("Error ",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};
