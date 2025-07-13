import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {

  function clickHandle() {
    if (likedCourses.includes(course.id)) {
      // If already liked remove from liked list
      setLikedCourses((prev) => prev.filter((id) => id !== course.id));
      toast.warning("Course removed from liked list" )
    } else {
      // Otherwise → add to liked list
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Course added to liked list" )
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 w-80 m-4">
      <div className="relative">
        <img
          src={course.image.url}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={clickHandle}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:scale-110 transition"
        >
          {
            likedCourses.includes(course.id)
              ? <FcLike fontSize="1.5rem" />
              : <FcLikePlaceholder fontSize="1.5rem" />
          }
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        <p className="text-sm text-gray-700 line-clamp-3">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
