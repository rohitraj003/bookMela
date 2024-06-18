const { compare } = require('bcrypt');
const user = require('../model/user_model.js')
// const bycrypt = require('bcryptjs')


const signup = async(req,res) => {
    try {
        const {Name,Email,Password} = req.body;
        const newUser = await user.findOne({ Email })
        if(newUser){
            return res.status(400).json({message:"User already exists"})
        }
        // const hashpassword = await bycrypt.hash(Password,10);
        const createUser = new user({
            Name:Name,
            Email:Email,
            Password:Password
        })
        await createUser.save();
        res.status(200).json({message:"User created successfully"})


    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({message:"Server Error"});
    }
}

const login = async(req,res) =>{
    try {
        const {Email,Password} = req.body;
        const userExist = await user.findOne({Email})
        // const isMatch = await compare(Password,userExist.Password)
        if(!userExist || userExist.Password !== Password){
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
}

module.exports = {signup,login}