import axios from "axios";
import { CONSTANTS } from "./constants";

export default class Product {
  static getProducts() {
    return axios.get(CONSTANTS.GET_PRODUCTS);
  }

  static getImages() {
    return axios.get(CONSTANTS.GET_IMAGES);
  }

  static getVideos() {
    return axios.get(CONSTANTS.GET_VIDEOS);
  }
}