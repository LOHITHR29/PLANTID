"use client";

import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import PlantInfo from "./components/PlantInfo";

export default function Home() {
  const [plantInfo, setPlantInfo] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-green-800">
        Plant Identifier
      </h1>
      <p className="text-xl text-green-700 mb-8 text-center max-w-2xl">
        Upload an image or capture a photo of a plant to get detailed
        information about it. Our AI-powered system will identify the plant and
        provide you with interesting facts.
      </p>
      <ImageUpload
        setPlantInfo={setPlantInfo}
        setUploadedImage={setUploadedImage}
      />
      <PlantInfo plantInfo={plantInfo} uploadedImage={uploadedImage} />
    </main>
  );
}
