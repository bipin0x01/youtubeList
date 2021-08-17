import axios from "axios";
import dotenv from "dotenv";


dotenv.config({path: "../.env"});

const base_URL = process.env.API_URL;

export default axios.create({
        baseURL: base_URL,
        headers: {
          "Content-Type": "application/json"
        }
      })