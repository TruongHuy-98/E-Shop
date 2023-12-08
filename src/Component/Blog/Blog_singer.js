import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menuleft from "../Layout/Menuleft";
import Comment from "./Comment";

function Blog_single () {

    let params = useParams();

    const [getData, setData] = useState('');

    useEffect(() => {
      axios.get(`http://localhost:8080/laravel8/laravel8/public/api/blog/detail/${params.id}`)
      .then(response => {
        console.log(response)
        setData(response.data.data)
        // setComment(response.data.blog.data.comment)
      })
      .catch(function (error) {
        console.log(error)
      })
    }, [])
    
    

    function fetchDataBlog() {
      console.log(getData);

      if (getData && Object.keys(getData).length > 0 ) {
          return (
            <div className="single-blog-post">
                  <h3>{getData.title}</h3>
                  <div className="post-meta">
                    <ul>
                      <li><i className="fa fa-user" /> Mac Doe</li>
                      <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                      <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                    </ul>
                    
                  </div>
                  <a href>
                    <img src={`http://localhost:8080/laravel8/laravel8/public/upload/Blog/image/${getData.image}`} alt="" />
                  </a>
                  <p>{getData.description}</p>
                  <p>
                    {getData.content}
                  </p>
                  <div className="pager-area">
                    <ul className="pager pull-right">
                      <li><a href="#">Pre</a></li>
                      <li><a href="#">Next</a></li>
                    </ul>
                  </div>
                </div>
          )
        }
    }
    return (
      <div className="row">
      <Menuleft />
            <div className="col-sm-9">
              <div className="blog-post-area">
                <h2 className="title text-center">Latest From our Blog</h2>
                {fetchDataBlog()}
              </div>{/*/blog-post-area*/}
              <div>
        <div className="rating-area">
          <ul className="ratings">
            <li className="rate-this">Rate this item:</li>
            <li>
              <i className="fa fa-star color" />
              <i className="fa fa-star color" />
              <i className="fa fa-star color" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </li>
            <li className="color">(6 votes)</li>
          </ul>
          <ul className="tag">
            <li>TAG:</li>
            <li><a className="color" href>Pink <span>/</span></a></li>
            <li><a className="color" href>T-Shirt <span>/</span></a></li>
            <li><a className="color" href>Girls</a></li>
          </ul>
        </div>{/*/rating-area*/}
        <div className="socials-share">
          <a href><img src="images/blog/socials.png" alt="" /></a>
        </div>{/*/socials-share*/}

        <div className="response-area">
          <h2>3 RESPONSES</h2>
          <ul className="media-list">
            <li className="media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-two.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-four.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
          </ul>					
        </div>{/*/Response-area*/}
        <Comment />
        
        </div>
            </div>	
            </div>
    );
}
export default Blog_single;