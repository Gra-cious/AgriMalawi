import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-green-700">
        AgriMalawi

      </h1>

      <p className="mt-4 text-lg text-gray-700 text-center max-w-xl">
        Growing Knolegde. Harvesting Success

      </p>

      <button className="mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition">
        🌱 Start a Crop Project
      </button>
      
    </main>
  );
}
