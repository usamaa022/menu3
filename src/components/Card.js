// components/Card.js
import Image from "next/image";

export default function Card({ title, image, items }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={`/images/${image}`} // Construct the path using the image filename
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}