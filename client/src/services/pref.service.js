import api from "../api/api"

class prefService {
    getAllPref() {
        return api.get("/api/preference");
    }

    addPref() {
        return api.get("/api/preference/add");
    }
}


export default new prefService();