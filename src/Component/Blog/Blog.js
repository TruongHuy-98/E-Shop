import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Menuleft from "../Layout/Menuleft";


function Blog () {

  const [getItem, setItem] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/laravel8/laravel8/public/api/blog')
        .then(response => {
            console.log(response)
            setItem(response.data.blog.data)
        })
        .catch(function (error) {
            console.log(error)
        })
    },[])

    const handlePageChange = (pageNumber) => {
        
    }
    function fetchData() {
        if (getItem.length > 0) {
            return getItem.map((item, key) => {
              return (
              <div key={item.id} className="single-blog-post">
              <h3>{item.title}</h3>
              <div className="post-meta">
                <ul>
                  <li><i className="fa fa-user" /> Mac Doe</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <span>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                </span>
              </div>
              <a href>
                <img alt="" src={`http://localhost:8080/laravel8/laravel8/public/upload/Blog/image/${item.image}`} /> 
              </a>
              <p>{item.description}</p>
              <Link className="btn btn-primary" to={`/blog/detail/${item.id}`}>Read More</Link>
            </div>
            )
            })
        }
    }

    return (
      <div className="row">
        <Menuleft />
            <div className="col-sm-9">
              <div className="blog-post-area">
                <h2 className="title text-center">Latest From our Blog</h2>
                {fetchData()}
                
                <div className="pagination-area">
                  <ul className="pagination">
                    <li><a href className="active">1</a></li>
                    <li><a href>2</a></li>
                    <li><a href>3</a></li>
                    <li><a href><i className="fa fa-angle-double-right" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
         
    );
}
export default Blog;