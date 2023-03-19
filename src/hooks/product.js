import { useEffect, useState } from "react"

export const useProduct = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      let res = await fetch('/api/Product/images');
      res = await res.json();
      setImages(res)
    }
    fetchImages()
    async function fetchVideos() {
      let res = await fetch('/api/Product/videos');
      res = await res.json();
      setProducts(res)
    }
    fetchVideos();
    async function fetchProducts() {
      let res = await fetch('/api/Product');
      res = await res.json();
      setVideos(res)
    }
    fetchProducts();
  }, []);
  return {
    images: images,
    videos: videos,
    all: products
  }
}