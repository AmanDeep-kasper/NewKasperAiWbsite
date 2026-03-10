import React from 'react'
import "./Blogs.css"
import Blog1 from "../assets/images2/Blog1.svg"
import Blog2 from "../assets/images2/Blog2.svg"
import Blog3 from "../assets/images2/Blog3.svg"
import Blog4 from "../assets/images2/Blog4.svg"
 import { useState ,useRef,useEffect} from 'react';
const Blogs = () => {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {

    const dummyBlogs = [
      {
        id: 1,
        image:Blog1,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      },
      {
        id: 2,
        image:Blog2,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      },
      {
        id: 3,
        image:Blog3,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      },
      {
        id: 4,
        image:Blog4,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      },
      {
        id: 5,
        image:Blog1,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      },
      {
        id: 6,
        image:Blog4,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      },
      {
        id: 7,
        image:Blog4,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      },
      {
        id: 8,
        image:Blog3,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      },
      {
        id: 9,
        image:Blog2,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      },
      {
        id: 10,
        image:Blog1,
        tag: "HRMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh"
      }
    ];

    setBlogs(dummyBlogs);

  }, []);
   const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 324,   // card width + gap
      behavior: "smooth"
    });
  };


  return (
    <div className="Blog-main-div">

      <p className="blog-heading">Insights & Blogs</p>
<div className="slider-wrapper">


      <div className="blog-scroll" ref={scrollRef}>


{blogs.map((blogs)=>(
  <div className="blog-card" key={blogs.id}>
    <div className="blog-img"><img src={blogs.image} alt="" /></div>

<div className="blog-content">
  <span className="blog-tag">{blogs.tag}</span>
  <p className="title-blog">{blogs.title}</p>
  <div className="date-content"><p className="blog-meta">
    {blogs.date} / <span className="blog-author">{blogs.author}</span>
  </p></div>
  
</div>
  </div>
))}

      </div>
   
      <button className="arrow-right" onClick={scrollRight}>❯</button>  
      </div>

      

    </div>
  );
};



export default Blogs