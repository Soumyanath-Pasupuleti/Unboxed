import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import Pageheader from "../components/Pageheader";
import Tags from "../Shop/Tags";
import PopularPost from "../Shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  return (
    <div>
      <Pageheader
        title={"Single Blog Pages "}
        curPage={"Blog / Blog Details"}
      />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}>
                                          {val.text}
                                        </i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>{item.desc}</p>
                                <blockquote>
                                  <p>
                                    jsjjsjjsjsjkkskksksmxmxskmxmsmmxmmxmsmxmmxmxm
                                    mkxsmxm xmksm kmxsm mxksms mxksmx mxkm mx
                                    xmk xmksx xmkkksksx mxmxmsmxksmxmxmxmk
                                    mkmxsmmm mxxxmkisfjff.
                                  </p>
                                  <cite>
                                    <a href="#">...Thomas Shelby</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  jsjjsjjsjsjkkskksksmxmxskmxmsmmxmmxmsmxmmxmxm
                                  mkxsmxm xmksm kmxsm mxksms mxksmx mxkm mx xmk
                                  xmksx xmkkksksx mxmxmsmxksmxmxmxmk mkmxsmmm
                                  mxxxmkisfjff.
                                </p>
                                <img src="/images/blog/single/01.jpg" alt="" />
                                <p>
                                  jsjjsjjsjsjkkskksksmxmxskmxmsmmxmmxmsmxmmxmxm
                                  mkxsmxm xmksm kmxsm mxksms mxksmx mxkm mx xmk
                                  xmksx xmkkksksx mxmxmsmxksmxmxmxmk mkmxsmmm
                                  mxxxmkisfjff.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/eGguwYPC32I?si=xnf5oFK3xJCB8pJ3"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  jsjjsjjsjsjkkskksksmxmxskmxmsmmxmmxmsmxmmxmxm
                                  mkxsmxm xmksm kmxsm mxksms mxksmx mxkm mx xmk
                                  xmksx xmkkksksx mxmxmsmxksmxmxmxmk mkmxsmmm
                                  mxxxmkisfjff.
                                  jsjjsjjsjsjkkskksksmxmxskmxmsmmxmmxmsmxmmxmxm
                                  mkxsmxm xmksm kmxsm mxksms mxksmx mxkm mx xmk
                                  xmksx xmkkksksx mxmxmsmxksmxmxmxmk mkmxsmmm
                                  mxxxmkisfjff.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        This is bizsiness bizsiness
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i>
                            Previous Blog
                          </a>
                          <a className="title" href="#">
                            Whatever.............asdsdsdsds
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            <i className="icofont-double-right"></i>
                            Previous Blog
                          </a>
                          <a className="title" href="#">
                            Whatever.............asdsdsdsds
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* right side */}
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
