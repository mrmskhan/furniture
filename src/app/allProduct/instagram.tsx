"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { instagramQuery } from "../../sanity/lib/queries/instagram-query";
import Link from "next/link";

// Instagram Component
const Instagram = () => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    // Fetch images from Sanity
    const fetchInstagramImages = async () => {
      try {
        // Fetch data imported Instagram query
        const fetchedImages = await client.fetch(instagramQuery);
        console.log("Fetched Instagram Images: ", fetchedImages);

        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching Instagram images:", error);
      }
    };

    fetchInstagramImages();
  }, []);

  return (
    <div className="w-full bg-gray-100 py-16">
      <h2 className="text-center text-black font-roboto font-semibold text-[32px] leading-[40px] mb-10">
        Follow Products and Discounts on Instagram
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {images.length > 0 ? (
          images.map((image, index) => (
            <Link key={index} href={`/instagram/${image._id}`}>
              <Image
                src={image.imageUrl}
                alt={`Instagram Image ${index + 1}`}
                width={200}
                height={200}
                className="object-cover rounded-lg cursor-pointer"
              />
            </Link>
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </div>
  );
};

export default Instagram;
