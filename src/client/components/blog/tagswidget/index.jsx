import React from "react";
import { Link } from "react-router-dom";

const TagsWidget = () => {
  return (
    <div className="card tags-widget">
      <div className="card-header">
        <h4 className="card-title">Tags</h4>
      </div>
      <div className="card-body">
        <ul className="tags">
          <li>
            <Link to="#" className="tag">
              HTML
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Css
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Java Script
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Jquery
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Wordpress
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Php
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Angular js
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              React js
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Vue js
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Photoshop
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Ajax
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Json
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              C
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              C++
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Vb
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Vb.net
            </Link>
          </li>
          <li>
            <Link to="#" className="tag">
              Asp.net
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TagsWidget;
