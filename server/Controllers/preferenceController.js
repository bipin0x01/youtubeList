import pref from "../Models/preferenceModel.js";
import AsyncHandler from "express-async-handler";


const postPreference = (req, res) => {
    const newPref = new pref({
      favouriteMusic: req.body.favouriteMusic,
      websiteLink: req.body.websiteLink,
      youtubeLink: req.body.youtubeLink,
      isActive: req.body.isActive,
      userId: req.body.userId,
    });
  
    if (req.body = '') {
      res.json({
        "message": "empty data provided"
      });
    }
  
    newPref.save()
      .then(() => {
        res.json({
          "message": "Preference Added",
          newPref
        });
      })
      .catch(err => console.log(err))
  
    console.log(newPref);
  }

const getAllPreferences = 
AsyncHandler(
    async(req, res) => {
      const prefs = await pref.find({}).populate('userId');
      console.log(prefs);
    if (prefs){
        res.json(prefs);
    } else {
      res.json({"error":"No data found"});
    }
  }
)

export {postPreference, getAllPreferences}