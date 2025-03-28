import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Result = () => {
  const locationData = useLocation();
  let [selectedImg, setSelectedImg] = useState(null)
  let [uploadImage, setUploadImage] = useState(null);
  let [processedImg, setProcessedImage] = useState(null);
  let [processing, setProcessing] = useState(false);
  let [bgColor, setColor] = useState("transparent");
  // let [imgHeight, setImgHeight] = useState(null);
  // let [imgWidth, setImgWidth] = useState(null);

  useEffect(() => {
    setSelectedImg(locationData.state)
    setUploadImage(URL.createObjectURL(locationData.state));
  }, []);

  const removingBG = async () => {
    if(!selectedImg) return
    setProcessing(true);
    const formData = new FormData();
    formData.append('image_file', selectedImg);
    formData.append('size', 'auto');

    try {
      const response = await axios.post(
        // "https://api.slazzer.com/v2.0/remove_image_background",
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": "SdHpUyHdP5SYJ9x34VTF3m4q",
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );
      console.log(response);

      if (response.status == 200) {
        const imgURL = URL.createObjectURL(response.data);
        setProcessedImage(imgURL);
        setProcessing(false);
        alert("Removed successfull")
      }

      
    } catch (error) {
      if (error.status != 200) {
        setProcessing(false);
        alert(`${error.message}` );
        
      }
    
    }
  };

 

  setTimeout(() => {
    const convaFunc = () => {
      const canvas = document.getElementById("convas");
      const image = document.getElementById("image");
      const download = document.getElementById("download");

      // setImgHeight(image.clientHeight);
      // setImgWidth(image.clientWidth);

      let ctx = canvas.getContext("2d");
      let pngData = canvas.toDataURL("image/png");

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      download.href = pngData;
      ctx.drawImage(image, 0, 0, 315, 380);
    };
    convaFunc();
  }, 100);

  const setBGColor = (color) => {
    setColor(color);
  };

  return (
    <div className="md:flex items-center text-center justify-center gap-6 p-5">
      <div className="p-4 ">
        <img src={processedImg} id="image" className=" w-[300px] hidden" />
      </div>

      <div className="p-4 flex items-center justify-center">
        <img src={uploadImage} id="uploadImage" className=" w-[300px] " />
      </div>

      

      <div className="flex items-center justify-center">
        <canvas id="convas" height={380} width={315} className=" shadow-2xl">
          {" "}
        </canvas>
      </div>

      <div className="flex items-center justify-center flex-col gap-3 shadow-2xl p-10 rounded">
        <h1 className="py-4 text-xl font-bold text-gray-700">
          Background Effect
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-5 p-4 shadow-2xl">
          <button
            className="bg-red-500 py-4 px-5"
            onClick={() => setBGColor("red")}
          ></button>
          <button
            className="bg-blue-500 py-4 px-5"
            onClick={() => setBGColor("blue")}
          ></button>
          <button
            className="bg-orange-500 py-4 px-5"
            onClick={() => setBGColor("orange")}
          ></button>
          <button
            className="bg-green-500 py-4 px-5"
            onClick={() => setBGColor("green")}
          ></button>
          <button
            className="bg-purple-500 py-4 px-5"
            onClick={() => setBGColor("purple")}
          ></button>
          <button
            className="bg-yellow-400 py-4 px-5"
            onClick={() => setBGColor("yellow")}
          ></button>
        </div>
        <a
          href=""
          id="download"
          download={"remove-background.png"}
          className="border px-5 py-2 bg-sky-600 text-white rounded cursor-pointer hover:bg-sky-700"
        >
          Download Image
        </a>
        <button
          className="border px-5 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700"
          onClick={removingBG}
        >
          {processing ? "Removing..." : "Remove bg"}
        </button>
      </div>
      {processing ? (
        <div className="bg-transparent w-full h-screen fixed top-0 right-0 bottom-0 left-0">
          <div className=" h-screen w-full bg-[rgba(0,0,0,0.9)] p-4 text-center flex items-center justify-center flex-col">
            <div className="w-[40px] h-[40px] border-7 border-gray-300 border-b-gray-700 rounded-full my-4 animate-spin"></div>
            <h1 className="text-center text-xl font-bold text-white">
              Removing background...
            </h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
