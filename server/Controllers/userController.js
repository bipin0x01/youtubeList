import user from "../Models/userModel.js";
import AsyncHandler from "express-async-handler";


const postUser = (req, res) => {
    const newUser = new user({
        name: req.body.name,
        address: req.body.address,
        DOB: req.body.dob,
        phone: req.body.phone,
        isActice: req.body.isActive,
        createdBy: req.body.createdBy,
    });

    if (req.body = '') {
        res.json({
            "message": "empty data provided"
        });
    }

    newUser.save()
        .then(() => {
            res.json({
                "message": "User Added",
                newUser
            });
        })
        .catch(err => console.log(err))

    console.log(newUser);
}

const getAllUsers = AsyncHandler(
    async (req, res) => {
        const users = await user.find({});
        res.json(users);
    })

const getUser = AsyncHandler(
    async (req, res) => {
        const users = await user.findById(req.params.id);
        if (users) {
            res.json(users);
        } else {
            res.json({
                "error": "user not found"
            });
        }
    }
)

const deleteUser = AsyncHandler(
    async (req, res) => {
        const users = await user.deleteOne({_id:req.params.id});
        const delUser = await user.findById(req.params.id);
        if (delUser) {
            res.json({"message":"User Deleted Successfully"});
        } else {
            res.json({
                "error": "user not found for deletion"
            });
        }
    }
)



export {
    getUser,
    getAllUsers,
    postUser,
    deleteUser
}