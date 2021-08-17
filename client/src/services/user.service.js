import api from "../api/api"

class userService {
    addUser() {
        return api.post("/api/user");
    }

    getAllUser() {
        return api.get("/api/user/add");
    }
}


export default new prefService();