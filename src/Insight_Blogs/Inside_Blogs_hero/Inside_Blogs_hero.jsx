import React, { useState } from "react";
import "./Inside_blogs_hero.css";

import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog33 from "../../assets/images/blog33.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import blog5 from "../../assets/images/blog5.jpg";
import blog7 from "../../assets/images/blog7.jpg";
import blog88 from "../../assets/images/blog88.jpg";
import blog9 from "../../assets/images/blog9.jpg";
import blog10 from "../../assets/images/blog10.jpg";
import blog11 from "../../assets/images/blog11.jpg";
import blog12 from "../../assets/images/blog12.jpg";
import blog13 from "../../assets/images/blog13.jpg";
import blog14 from "../../assets/images/blog14.jpg";

const Inside_blogs_hero = () => {

  const Insightsblogs = [
    { id: 1, image: blog1, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 2, image: blog2, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 3, image: blog33, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 4, image: blog4, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 5, image: blog5, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 6, image: blog5, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 7, image: blog7, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 8, image: blog88, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 9, image: blog9, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 10, image: blog10, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 11, image: blog11, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 12, image: blog12, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 13, image: blog13, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 14, image: blog14, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 15, image: blog14, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 16, image: blog9, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"}
  ];

  const InsightsblogsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Insightsblogs.length / InsightsblogsPerPage);

  const indexOfLastInsightsblog = currentPage * InsightsblogsPerPage;
  const indexOfFirstInsightsblog = indexOfLastInsightsblog - InsightsblogsPerPage;

  const currentInsightsblogs = Insightsblogs.slice(indexOfFirstInsightsblog, indexOfLastInsightsblog);

  return (

    <div className="all-Insightsblog-sections">

      

      <div className="InsightsInsightsblog-main-div">

        <div className="Insightsblog-scroll">

          {currentInsightsblogs.map((Insightsblog)=>(
            
            <div className="Insightsblog-card" key={Insightsblog.id}>

              <div className="Insightsblog-img">
                <img src={Insightsblog.image} alt="Insightsblog"/>
              </div>

              <div className="Insightsblog-content">

                <span className="Insightsblog-tag">{Insightsblogs.tag}</span>

                <p className="title-Insightsblog">{Insightsblog.title}</p>

                <div className="date-content">
                  <p className="Insightsblog-meta">
                    {Insightsblog.date} / <span className="Insightsblog-author">{Insightsblog.author}</span>
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Pagination */}

      <div className="pagination">

        <button onClick={()=>setCurrentPage(prev=>Math.max(prev-1,1))}>
        ◀
        </button>

        {[...Array(totalPages)].map((_,index)=>(
          
          <button
          key={index}
          className={currentPage===index+1?"active":""}
          onClick={()=>setCurrentPage(index+1)}
          >
          {index+1}
          </button>

        ))}

        <button onClick={()=>setCurrentPage(prev=>Math.min(prev+1,totalPages))}>
        ▶
        </button>

      </div>

    </div>

  );

};

export default Inside_blogs_hero;