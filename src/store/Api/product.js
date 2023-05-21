import axios from "axios";
import { CONSTANTS } from "./constants";

export default class Product {
  static getProducts() {
    return axios.get(CONSTANTS.GET_PRODUCTS);
  }

  static getImages() {
    return axios.get(CONSTANTS.GET_IMAGES);
  }

  static getImageCategories() {
    return axios.get(CONSTANTS.GET_IMAGE_CATEGORY);
  }

  static getVideoCategories() {
    return axios.get(CONSTANTS.GET_VIDEO_CATEGORY);
  }

  static getFeaturedImages() {
    return axios.get(CONSTANTS.GET_FEATURED_IMAGES);
  }

  static getFeaturedVideos() {
    return axios.get(CONSTANTS.GET_FEATURED_VIDEOS);
  }

  static getVideos() {
    return axios.get(CONSTANTS.GET_VIDEOS);
  }
}