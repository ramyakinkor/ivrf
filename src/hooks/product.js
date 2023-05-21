import { useEffect, useState } from "react";
import imagesData from "../data/featuredImageData";
import videosData from "../data/featuredVideoData";
import productsData from "../data/productData";
const downloadjs = require("downloadjs");
import Swal from "sweetalert2";
import { createClient } from "pexels";
import { faker } from "@faker-js/faker";
function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b);
}
function calcAspectRatio({ height, width }) {
  let r_gcd = gcd(width, height);
  let h_gcd = height / r_gcd;
  let w_gcd = width / r_gcd;
  console.log(h_gcd, w_gcd);
  return {
    height: h_gcd,
    width: w_gcd,
  };
}

export const useProduct = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [products, setProducts] = useState([]);
  const client = createClient(
    "fGkcbwXfJvP3eTdDPqDlzHO5nwMeIieddRWgNgllTkn6GYrxugUWoXez"
  );
  useEffect(() => {
    const isProduction = process.env.NODE_ENV === "production";
    // async function fetchImages() {
    //   let res = await fetch('/api/Product/images');
    //   res = await res.json();
    //   setImages(res)
    // }
    // isProduction ? fetchImages() : setImages(imagesData);

    // async function fetchVideos() {
    //   let res = await fetch("/api/Product/videos");
    //   res = await res.json();
    //   setVideos(res);
    // }
    // isProduction ? fetchVideos() : setVideos(videosData);
    // async function fetchProducts() {
    //   let res = await fetch("/api/Product");
    //   res = await res.json();
    //   setProducts(res);
    // }
    // isProduction ?  fetchProducts() : setProducts(productsData);
    async function fetchImages() {
      const res = await client.photos.curated({ page: 2, per_page: 20 });
      const data = res.photos.map((photo) => {
        const { height, width } = calcAspectRatio({
          height: photo.height, // or photo.resolution.split('x')[0]
          width: photo.width, // or photo.resolution.split('x')[1]
        });
        return {
          id: photo.id,
          title: faker.lorem.lines(),
          categoryId: faker.number.int(),
          type: "image",
          description: faker.lorem.lines(2),
          tags: faker.lorem.lines(3),
          public: photo.src.large,
          created_at: faker.date.anytime(),
          resolution: `${height} x ${width}`,
          width: width,
          height: height,
        };
      });
      setImages(data);
    }

    async function fetchVideos() {
      const res = await client.videos.popular({
        page:3 ,
        per_page:20
      });
      const data = res.videos.map((video) => {
        return {
          id: video.id,
          title: faker.lorem.lines(),
          categoryId: faker.number.int(),
          type: "video",
          description: faker.lorem.lines(2),
          tags: faker.lorem.lines(3),
          public: video.video_files[1].link,
          created_at: faker.date.anytime(),
          resolution: `4k`,
        };
      });
      setVideos(data);
    }

    fetchImages();
    fetchVideos();
  }, []);

  async function download(pid, ptype) {
    try {
      let res = await fetch("/api/Download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pid, ptype }),
      });
      res = await res.blob();
      downloadjs(res);
    } catch (errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  }

  return {
    images: images,
    videos: videos,
    all: products,
    download,
  };
};
