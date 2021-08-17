import express from "express";
import {getUser, getAllUsers, postUser, deleteUser} from "../Controllers/userController.js";
const router = express.Router();

// Create User
router.post('/add', postUser);

router.get('/', getAllUsers);

router.get('/:id', getUser );

router.get('/delete/:id', deleteUser );

export default router;