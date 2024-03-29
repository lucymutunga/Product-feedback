import React from "react";
import { Link } from "react-router-dom";

const Tags = () => {
  return (
    <section className="tags md:flex rounded-lg my-4 ml-16  md:my-0 bg-secondary w-64 h-40 lg:m-2">
      <div className="tags-content">
        <div className="tags-info">
          <ul className="tags-list-items">
            <div className="flex mx-4 ">
              <Link to="/all">
                <li className="tag-item rounded-lg p-2 bg-all mt-4 mr-2 text-white font-bold">
                  All
                </li>
              </Link>
              <li className="tag-item rounded-lg p-2 bg-tagsback mt-4 mr-2 text-tags font-bold">
                UI
              </li>
              <li className="tag-item rounded-lg p-2 bg-tagsback mt-4 mr-2 text-tags font-bold">
                UX
              </li>
            </div>
            <div className="flex mx-4">
              <li className="tag-item rounded-lg p-2 bg-tagsback mt-2 font-semibold text-tags ">
                Enhancement
              </li>
              <li className="tag-item rounded-lg p-2 bg-tagsback mt-2 ml-2 font-semibold text-tags">
                Bug
              </li>
            </div>
            <div>
              <li className="tag-item rounded-lg p-2 bg-tagsback mt-2 ml-3 w-24 font-semibold text-tags">
                Feature
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tags;
