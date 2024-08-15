export default function PlantInfo({ plantInfo, uploadedImage }: PlantInfoProps) {
  if (!plantInfo) return null;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-8 max-w-xl mx-auto">
      {uploadedImage && (
        <img
          src={uploadedImage}
          alt="Uploaded Plant"
          className="w-40 h-40 object-cover mx-auto mb-4 rounded-lg"
        />
      )}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {plantInfo.name || "Unknown Plant"}
      </h2>
      {plantInfo.scientificName && (
        <h3 className="text-xl text-gray-600 italic mb-4">
          {plantInfo.scientificName}
        </h3>
      )}
      <p className="text-gray-700 mb-6">{plantInfo.description}</p>
      {plantInfo.details && (
        <div className="text-gray-700">
          {Object.entries(plantInfo.details).map(([key, value]) => (
            <p key={key} className="mb-2">
              <strong>{key}: </strong> {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
