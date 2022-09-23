import Image from "next/image";
import React from "react";

const ImageBubbleSection = () => {
  return (
    <div className="flex justify-center items-center py-10 px-4 gap-2 md:gap-5">
      <div className="overflow-hidden scale-100 hover:scale-110 transition-all duration-500 ease-in-out flex rounded-[1.5rem] md:rounded-[3rem]">
        <Image
          src="/images/youzi-unsplash.jpeg"
          height={400}
          width={250}
          className="rounded-[1.5rem] md:rounded-[3rem] object-cover scale-100 hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>
      <div className="overflow-hidden scale-100 hover:scale-110 transition-all duration-500 ease-in-out flex rounded-[1.5rem] md:rounded-[3rem]">
        <Image
          src="/images/julius-unsplash.jpeg"
          height={500}
          width={300}
          className="rounded-[1.5rem] md:rounded-[3rem] object-cover hover:scale-110 transition duration-500 ease-in-out shadow-md "
        />
      </div>
      <div className="overflow-hidden group scale-100 hover:scale-110 transition-all duration-500 ease-in-out flex rounded-[1.5rem] md:rounded-[3rem]">
        <Image
          src="/images/simon-unsplash.jpeg"
          height={400}
          width={250}
          className="rounded-[1.5rem] md:rounded-[3rem] object-cover hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ImageBubbleSection;
