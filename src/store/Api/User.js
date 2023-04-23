import axios from "axios";
import { CONSTANTS } from "./constants";

export default class User {
  static login(credential) {
    return axios.post(CONSTANTS.LOGIN_USER, credential);
  }

  static async getProfile() {
    return axios.get(CONSTANTS.GET_PROFILE);
  }

  static logout() {
    return axios.post(CONSTANTS.LOGOUT_USER);
  }

  static update(id, data) {
    const url  = CONSTANTS.UPDATE_PROFILE.replace(':id', id);
    return axios.put(url, data);
  }
}