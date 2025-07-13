import React from "react";

const Filter = ({ filterData,category,setCategory }) => {

  function filterHandler(title) {
    setCategory(title);
  }                                             

  return (
    <div className="text-white text-center  py-4">
      {filterData.map((data) => {
        return (
          <button
            className="bg-blue-950 p-2 mx-2 rounded border border-transparent hover:border-white"
            key={data.id}
            onClick={()=>filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
