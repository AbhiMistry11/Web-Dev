import React from "react";
import Card from "./Card";

const Cards = ({ courses,category }) => {
  const [likedCourses, setLikedCourses] = React.useState([]);

  const getCourse = () => {
    let allCourses = [];
   if(category === "All"){
     Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
   }else{
      return courses[category];
   }
  };
  return (
    <div className="flex flex-wrap justify-center">
      {getCourse().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
