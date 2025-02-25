'use client';
import Card from "@/components/Card"; // Import the Card component

export default function Menu() {
  // Data for the menu items
  const menuItems = [
    {
      title: "Burgers",
      image: "food1.jpg", // Just the filename
      items: [
        "Classic Burger - $5.99",
        "Cheeseburger - $6.99",
        "Bacon Burger - $7.99",
      ],
    },
    {
      title: "Fries",
      image: "food1.jpg", // Just the filename
      items: [
        "Regular Fries - $2.99",
        "Cheese Fries - $4.99",
        "Curly Fries - $3.99",
      ],
    },
    {
      title: "Shawarma",
      image: "food1.jpg", // Just the filename
      items: [
        "Chicken Shawarma - $8.99",
        "Beef Shawarma - $9.99",
        "Falafel Shawarma - $7.99",
      ],
    },
    {
      title: "Drinks",
      image: "food1.jpg", // Just the filename
      items: [
        "Soda - $1.99",
        "Iced Tea - $1.99",
        "Milkshake - $3.99",
      ],
    },
    {
      title: "Drinks",
      image: "food1.jpg", // Just the filename
      items: [
        "Soda - $1.99",
        "Iced Tea - $1.99",
        "Milkshake - $3.99",
      ],
    },
    {
      title: "Drinks",
      image: "food1.jpg", // Just the filename
      items: [
        "Soda - $1.99",
        "Iced Tea - $1.99",
        "Milkshake - $3.99",
      ],
    },
    {
      title: "Drinks",
      image: "food1.jpg", // Just the filename
      items: [
        "Soda - $1.99",
        "Iced Tea - $1.99",
        "Milkshake - $3.99",
      ],
    },
    {
      title: "Drinks",
      image: "food1.jpg", // Just the filename
      items: [
        "Soda - $1.99",
        "Iced Tea - $1.99",
        "Milkshake - $3.99",
      ],
    },

  ];

  return (
    <div className="bg-white text-black min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Death Note Food Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image} // Pass the filename
            items={item.items}
          />
        ))}
      </div>
    </div>
  );
}