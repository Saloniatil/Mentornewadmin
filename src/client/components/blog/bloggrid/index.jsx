import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
//images
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG_th01,
  IMG_th02,
  IMG_th03,
  IMG_th04,
  IMG_th05,
  IMG_th06,
} from "./img.jsx";
//components
import BlogListSearch from "../search/search.jsx";
import LastestBlog from "../lastestblog";
import CategoryWidget from "../categoryWidget";
import TagsWidget from "../tagswidget";
import Header from "../../header";
import Footer from "../../footer";

const BlogGrid = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container-fluid">
          <div className="row align-items-start inner-banner">
            <div className="col-md-12 col-12 text-start">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Blog Grid
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Blog Grid</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row blog-grid-row">
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <img className="img-fluid" src={IMG01} alt="Post" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/mentee/mentor-profile">
                              <img src={IMG_th01} alt="Post Author" />
                              <span>Ruby Perrin</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-clock"></i> 4 Dec 2024
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                        Lorem Ipsum is simply dummy text of the printing
                        </Link>
                      </h3>

                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <img className="img-fluid" src={IMG02} alt="Post" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/mentee/mentor-profile">
                              <img src={IMG_th02} alt="Post Author" />
                              <span>Darren Elder</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-clock"></i> 3 Dec 2024
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                        It is a long established fact that a reader will be
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <img className="img-fluid" src={IMG03} alt="Post" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/mentee/mentor-profile">
                              <img src={IMG_th03} alt="Post Author" />
                              <span>Deborah Angel</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-clock"></i> 3 Dec 2024
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                        here are many variations of passages of Lorem Ipsum
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <img className="img-fluid" src={IMG04} alt="Post" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/mentee/mentor-profile">
                              <img src={IMG_th04} alt="Post Author" />
                              <span>Sofia Brient</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-clock"></i> 2 Dec 2024
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                        The standard chunk of Lorem Ipsum used since the
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <img className="img-fluid" src={IMG05} alt="Post" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/mentee/mentor-profile">
                              <img src={IMG_th05} alt="Post Author" />
                              <span>Marvin Campbell</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-clock"></i> 1 Dec 2024
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                        generate Lorem Ipsum which looks reasonable
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <img className="img-fluid" src={IMG06} alt="Post" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/mentee/mentor-profile">
                              <img src={IMG_th06} alt="Post Author" />
                              <span>Marvin Campbell</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-clock"></i>30 Nov 2024
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                        Lorem Ipsum is simply dummy text of the printing
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur em adipiscing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <BlogListSearch />
                <LastestBlog />
                <CategoryWidget />
                <TagsWidget />
              </StickyBox>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default BlogGrid;
