import React from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Roadmap = () => {
  return (
    <section className="roadmap rounded-lg my-4 ml-16 md:m-0 bg-secondary w-64 h-40 ">
      <div className="content">
        <div className="content-header flex justify-between p-2  mr-8 mx-6.5">
          <h1 className="font-bold ml-6">Roadmap</h1>
          <Link to={"/view"} className="text-tags underline">
            View
          </Link>
        </div>
        <ul className="flex flex-col  mx-6 p-2 font-light ">
          <li className="flex ">
            <FaCircle size={10} color="#F49F85" className="mt-2" />
            <p className="ml-2"> Planned</p>
          </li>
          <li className="flex ">
            <FaCircle size={10} color="#AD1FEA" className="mt-2" />
            <p className="ml-2">In-Progress</p>
          </li>
          <li className="flex">
            <FaCircle size={10} color="#62BCFA" className="mt-2" />
            <p className="ml-2">Live</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;
