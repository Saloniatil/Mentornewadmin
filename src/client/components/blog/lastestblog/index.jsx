import React from "react";
import {
  IMG_blog_th01,
  IMG_blog_th02,
  IMG_blog_th03,
  IMG_blog_th04,
  IMG_blog_th05,
} from ".././bloglist/img.jsx";
//link
import { Link } from "react-router-dom";

const LastestBlog = () => {
  return (
    <div className="card post-widget">
      <div className="card-header">
        <h4 className="card-title">Latest Posts</h4>
      </div>
      <div className="card-body">
        <ul className="latest-posts">
          <li>
            <div className="post-thumb">
              <Link to="/blog/blog-details">
                <img className="img-fluid" src={IMG_blog_th01} alt="" />
              </Link>
            </div>
            <div className="post-info">
              <h4>
                <Link to="/blog/blog-details">
                Lorem Ipsum is simply dummy text of the printing
                </Link>
              </h4>
              <p>4 Dec 2024</p>
            </div>
          </li>
          <li>
            <div className="post-thumb">
              <Link to="/blog/blog-details">
                <img className="img-fluid" src={IMG_blog_th02} alt="" />
              </Link>
            </div>
            <div className="post-info">
              <h4>
                <Link to="/blog/blog-details">
                It is a long established fact that a reader will be{" "}
                </Link>
              </h4>
              <p>3 Dec 2024</p>
            </div>
          </li>
          <li>
            <div className="post-thumb">
              <Link to="/blog/blog-details">
                <img className="img-fluid" src={IMG_blog_th03} alt="" />
              </Link>
            </div>
            <div className="post-info">
              <h4>
                <Link to="/blog/blog-details">
                here are many variations of passages of Lorem Ipsum{" "}
                </Link>
              </h4>
              <p>3 Dec 2024</p>
            </div>
          </li>
          <li>
            <div className="post-thumb">
              <Link to="/blog/blog-details">
                <img className="img-fluid" src={IMG_blog_th04} alt="" />
              </Link>
            </div>
            <div className="post-info">
              <h4>
                <Link to="/blog/blog-details">
                The standard chunk of Lorem Ipsum used since the{" "}
                </Link>
              </h4>
              <p>2 Dec 2024</p>
            </div>
          </li>
          <li>
            <div className="post-thumb">
              <Link to="/blog/blog-details">
                <img className="img-fluid" src={IMG_blog_th05} alt="" />
              </Link>
            </div>
            <div className="post-info">
              <h4>
                <Link to="/blog/blog-details">
                generate Lorem Ipsum which looks reasonable
                </Link>
              </h4>
              <p>1 Dec 2024</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LastestBlog;
