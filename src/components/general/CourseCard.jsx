import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

const CourseCard = (props) => {
  const cardRef = useRef(null);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCardVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full px-4 sm:px-6 md:px-10 lg:px-14 py-10 transform transition-all duration-700 delay-600 ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <a href={props.courseUrl} target="_blank" rel="noopener noreferrer">

        <div className="w-full h-auto flex flex-col justify-center items-center rounded-2xl bg-slate-500 bg-opacity-15 hover:scale-105 transition-transform duration-500 ease-in-out">
          <img
            className="w-full rounded-t-xl object-cover"
            src={props.url}
            alt="Course Thumbnail"
          />

          <div className="w-full h-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <h2 className="text-2xl sm:text-xl text-red-100">{props.name}</h2>

            <div className="flex flex-wrap gap-4 mt-2">
              {props.batchType && (
                <small className="bg-red-500 px-2 py-1 rounded-lg font-semibold">
                  {props.batchType}
                </small>
              )}
              <small className="bg-green-800 px-2 py-1 rounded-lg font-semibold">
                HINGLISH
              </small>
            </div>

            <div className="flex flex-col gap-2 py-6 sm:px-4 sm:py-8">
              <h2 className="text-red-500">{props.sale}</h2>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <p className="text-lg sm:text-xl">
                  ₹{props.currentPrice} (+ GST)
                  <span className="line-through opacity-50 px-2">
                    ₹ {props.actualPrice}
                  </span>
                </p>
                <div className="flex bg-white text-black items-center px-4 sm:px-4 md:px-2 py-1 rounded text-sm font-semibold">
                  {props.discount} OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <Button url={props.courseUrl} />
    </div>
  );
};

export default CourseCard;
