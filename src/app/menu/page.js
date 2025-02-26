'use client';
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Card from "@/components/Card"; // Import the Card component
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Menu() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items to display per page
  const searchParams = useSearchParams();
  const router = useRouter();

  // Data for the menu items
  const menuItems = [
    {
      title: "Burgers",
      image: "1.jpg", // Just the filename
      items: [
        "Classic Burger - $5.99",
        "Cheeseburger - $6.99",
        "Bacon Burger - $7.99",
      ],
    },
    {
      title: "Fries",
      image: "2.jpg", // Just the filename
      items: [
        "Regular Fries - $2.99",
        "Cheese Fries - $4.99",
        "Curly Fries - $3.99",
      ],
    },
    {
      title: "Shawarma",
      image: "3.jpg", // Just the filename
      items: [
        "Chicken Shawarma - $8.99",
        "Beef Shawarma - $9.99",
        "Falafel Shawarma - $7.99",
      ],
    },
    {
      title: "Drinks",
      image: "4.jpg", // Just the filename
      items: [
        "Soda - $1.99",
        "Iced Tea - $1.99",
        "Milkshake - $3.99",
      ],
    },
    {
      title: "Desserts",
      image: "5.jpg", // Just the filename
      items: [
        "Ice Cream - $3.99",
        "Cake - $4.99",
        "Cookie - $1.99",
      ],
    },
    {
      title: "Salads",
      image: "food1.jpg", // Just the filename
      items: [
        "Caesar Salad - $5.99",
        "Greek Salad - $6.99",
        "Garden Salad - $4.99",
      ],
    },
    {
      title: "Salads",
      image: "food1.jpg", // Just the filename
      items: [
        "Caesar Salad - $5.99",
        "Greek Salad - $6.99",
        "Garden Salad - $4.99",
      ],
    },
    {
      title: "Salads",
      image: "food1.jpg", // Just the filename
      items: [
        "Caesar Salad - $5.99",
        "Greek Salad - $6.99",
        "Garden Salad - $4.99",
      ],
    },
    {
      title: "Salads",
      image: "5.jpg", // Just the filename
      items: [
        "Caesar Salad - $5.99",
        "Greek Salad - $6.99",
        "Garden Salad - $4.99",
      ],
    },
    {
      title: "Salads",
      image: "6.jpg", // Just the filename
      items: [
        "Caesar Salad - $5.99",
        "Greek Salad - $6.99",
        "Garden Salad - $4.99",
      ],
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  // Get current page from URL query params
  useEffect(() => {
    const pageFromUrl = searchParams.get("page");
    if (pageFromUrl) {
      const pageNumber = parseInt(pageFromUrl, 10);
      if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    }
  }, [searchParams]);

  // Slice menu items based on current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = menuItems.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      router.push(`/menu?page=${newPage}`);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Death Note Mixed Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image} // Pass the filename
            items={item.items}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {/* Render page numbers */}
            {[...Array(totalPages).keys()].map((page) => (
              <PaginationItem key={page + 1}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page + 1);
                  }}
                  isActive={currentPage === page + 1}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}