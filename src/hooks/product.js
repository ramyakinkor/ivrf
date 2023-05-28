import { useEffect, useState } from "react"
import imagesData from '../data/featuredImageData';
import videosData from '../data/featuredVideoData';
import productsData from '../data/productData'
const downloadjs = require('downloadjs')
import Swal from "sweetalert2";

export const useProduct = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const isProduction = process.env.NODE_ENV === "production"
    async function fetchImages() {
      let res = await fetch('/api/Product/images');
      res = await res.json();
      setImages(res) 
    }
    isProduction ? fetchImages() : setImages(imagesData);

    async function fetchVideos() {
      let res = await fetch('/api/Product/videos');
      res = await res.json();
      setVideos(res) ;
    }
    isProduction ? fetchVideos() : setVideos(videosData);

    async function fetchProducts() {
      let res = await fetch('/api/Product');
      res = await res.json();
      setProducts(res);
    }
    // isProduction ?  fetchProducts() : setProducts(productsData);
  }, []);

  async function download(pid, ptype) {
    try{
      let res = await fetch('/api/Download', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({pid, ptype})
      })
      const filename = res.headers.get('content-disposition')
      .split(';')
      .find(n => n.includes('filename='))
      .replace('filename=', '')
      .trim();
      console.log(filename);
      res = await res.blob();
      downloadjs(res, filename);
    } catch(errorMessage) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
     })
    }
  }


  return {
    images: images,
    videos: videos,
    all: products,
    download
  }
}