// eslint-disable-next-line no-unused-vars
import React from "react";
import unsplash from "../../assets/unsplash1.png";
import unsplash2 from "../../assets/unsplash2.png";
import unsplash3 from "../../assets/unsplash3.png";
import unsplash4 from "../../assets/unsplash4.png";

const Image = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <img
        className="w-full h-auto object-cover"
        src={unsplash}
        alt="Unsplash 1"
      />
      <img
        className="w-full h-auto object-cover"
        src={unsplash2}
        alt="Unsplash 2"
      />
      <img
        className="w-full h-auto object-cover"
        src={unsplash3}
        alt="Unsplash 3"
      />
      <img
        className="w-full h-auto object-cover"
        src={unsplash4}
        alt="Unsplash 4"
      />
    </div>
  );
};

export default Image;
