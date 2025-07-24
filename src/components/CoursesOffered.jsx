import React from "react";
import CourseCard from "./general/CourseCard";

const CoursesOffered = () => {
  const courses = [
    {
      courseName: "2.0 Job Ready AI Powred Cohort: Web + DSA + Aptitude",
      ActualPrice: "11999",
      CurrentPrice: "5999",
      Discount: "50%",
      url: "public\\Assets\\job-ready.png",
      sale: "Limited Time Discount",
      batchType: "LIVE BATCH",
      courseUrl:"/courses"
    },
    {
      courseName: "DSA Domination Chohort",
      ActualPrice: "7500",
      CurrentPrice: "6600",
      Discount: "12%",
      url: "public\\Assets\\dsa-domination-cohort.png",
      sale: "Limited Time Discount",
      batchType: "LIVE BATCH",
      courseUrl:"https://sheryians.com/courses/courses-details/DSA%20Domination%20Cohort"
    },
    {
      courseName: "Job Ready AI Powred Cohort: Web + DSA + Aptitude",
      ActualPrice: "11999",
      CurrentPrice: "5999",
      Discount: "50%",
      url: "public\\Assets\\job-ready.png",
      sale: "Limited Time Discount",
      batchType: "LIVE BATCH",
      courseUrl:"https://sheryians.com/courses/courses-details/Job%20Ready%20AI%20Powered%20Cohort:%20Web%20+%20DSA%20+%20Aptitude"
    },
    {
      courseName: "Three.js Domination",
      ActualPrice: "3500",
      CurrentPrice: "2499",
      Discount: "29%",
      url: "public\\Assets\\threeJs.png",
      sale: "Black Friday sale",
      batchType: "LIVE BATCH",
      courseUrl:"https://sheryians.com/courses/courses-details/Three.js%20Domination"
    },
    {
      courseName: "Aptitude & Reasoning for campus Placements",
      ActualPrice: "3500",
      CurrentPrice: "2499",
      Discount: "29%",
      url: "public\\Assets\\aptitude-reasoning.png",
      sale: "Black Friday sale",
      courseUrl:"https://sheryians.com/courses/courses-details/Aptitude%20&%20Reasoning%20for%20Campus%20Placements"
    },
    {
      courseName: "Front-End Domination: Create Anything With Code",
      ActualPrice: "9999",
      CurrentPrice: "3999",
      Discount: "40%",
      url: "public\\Assets\\frontend-domination.png",
      sale: "Limited Time Discount",
      courseUrl:"https://sheryians.com/courses/courses-details/Front-End%20Domination:%20Create%20Anything%20with%20Code"
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-10 ">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            name={course.courseName}
            actualPrice={course.ActualPrice}
            currentPrice={course.CurrentPrice}hh
            discount={course.Discount}
            url={course.url}
            sale={course.sale}
            batchType={course.batchType}
            courseUrl={course.courseUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesOffered;
