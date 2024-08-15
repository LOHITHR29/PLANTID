"use client";

import { useState, useRef, useEffect } from "react";

interface ImageUploadProps {
  setPlantInfo: (info: any) => void;
  setUploadedImage: (image: string | null) => void;
}

export default function ImageUpload({
  setPlantInfo,
  setUploadedImage,
}: ImageUploadProps) {
  const [loading, setLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
      setShowCamera(true);
    } catch (err) {
      console.error("Error accessing the camera", err);
      alert(
        "Unable to access the camera. Please make sure you've granted the necessary permissions."
      );
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setStream(null);
    setShowCamera(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageDataUrl = canvasRef.current.toDataURL("image/jpeg");
        setUploadedImage(imageDataUrl);
        handleImageUpload(imageDataUrl);
        stopCamera();
      }
    }
  };

 // ... (keep the existing imports and component definition)

const handleImageUpload = async (imageDataUrl: string) => {
  setLoading(true);

  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageDataUrl }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const result = await response.json();

    console.log("Raw JSON response:", result);

    // Check if result is an object
    if (typeof result === 'object' && result !== null) {
      // Extract relevant information from the result
      const plantInfo = {
        name: result.name || "Unknown Plant",
        scientificName: result.scientificName || "",
        description: result.description || "No description available.",
        details: result.details || {}
      };

      setPlantInfo(plantInfo);
    } else {
      console.error("Unexpected JSON structure:", result);
      setPlantInfo({
        name: "Error",
        description: `Unable to parse the plant information. Raw response: ${JSON.stringify(result)}`,
      });
    }
  } catch (error) {
    console.error("Error processing the request:", error);
    setPlantInfo({
      name: "Error",
      description: error.message || "Unable to identify plant. Please try again.",
    });
  } finally {
    setLoading(false);
  }
};

// ... (keep the rest of the component unchanged)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setUploadedImage(imageDataUrl);
        handleImageUpload(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-8">
      {!showCamera ? (
        <div className="flex space-x-4">
          <label
            htmlFor="image-upload"
            className={`bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full cursor-pointer transition duration-300 shadow-md ${loading && 'cursor-not-allowed'}`}
          >
            {loading ? "Identifying..." : "Upload Image"}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={startCamera}
            aria-label="Capture Photo"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full cursor-pointer transition duration-300 shadow-md"
          >
            Capture Photo
          </button>
        </div>
      ) : (
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="rounded-lg shadow-lg"
            style={{ width: "640px", height: "480px" }}
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button
              onClick={capturePhoto}
              aria-label="Capture Photo"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer transition duration-300 shadow-md"
            >
              Capture
            </button>
            <button
              onClick={stopCamera}
              aria-label="Cancel Camera"
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer transition duration-300 shadow-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        width="640"
        height="480"
      />
    </div>
  );
}