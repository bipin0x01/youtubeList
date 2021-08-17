import express from "express";
import {postPreference, getAllPreferences} from "../Controllers/preferenceController.js"

const router = express.Router();

// Create Preference
router.post('/add', postPreference);

// Retrieve All Preference
router.get('/', getAllPreferences);

export default router;