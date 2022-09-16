import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'


export default function Billboard() {
  const [image, setImage] = useState("");

  useEffect(() => {
    getBillboardImage();
    const interval = setInterval(getBillboardImage, 1000);
    return () => clearInterval(interval);
  })

  const getBillboardImage = async () => {
    const response = await fetch("/api/billboard", {
      method: "GET"
    });
    const data = await response.json();
    setImage(`./${data.image}`);
  }

  return (
    <img src={image}></img>
    
  )
}
