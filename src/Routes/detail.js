import { useState,useEffect } from "react";
import Week from "../Component/DetailPage/Week";
import style from "../Style/Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function detail() {
  const [detail,setDetail] = useState();
  const param = useParams();
  useEffect(()=>{
    axios.post("https://localhost:44365/api/Project/GetProjectDetail",{Id:param.id}).then((result)=>{
      setDetail(result.data.dataObject[0])
      console.log(result.data.dataObject[0])
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
    {
      detail != undefined ? <>
      <div
        className={style.container}
      >
        <div className={style.imageContainer}>
          <img
            src={`${detail.projectImagesList[0].image }`}
            alt=""
            style={{ width: "20rem" }}
          />
          <div className={style.tagContainer} >
            <h6>Standards Target:</h6>
            <div style={{width:'60%',display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
            {
              
              detail.projectSubject == undefined ? null : detail.projectSubject.map((item)=>{
                return(
                  <span style={{padding:'0.2rem',backgroundColor:'#dad3d3',borderRadius:'6px',marginTop:'0.3rem'}}>
                    {
                      item.subject_name
                    }
                    </span>
                )
              })
            }
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "2rem",
          }}
        >
          <div>
            <h3>
              {
                detail.projectName.toUpperCase()
              }
            </h3>
            <hr />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "5.5rem", fontWeight: "bold" }}>
                Industry :
              </div>{" "}
              <div>{ 
  detail.projectIndustry.map((item, index) => {
    const isLastItem = index === detail.projectIndustry.length - 1;
    return (
      <span key={index}>
        {item.industry_name}
        {!isLastItem && <span>, </span>}
      </span>
    );
  })
}
</div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "5.5rem", fontWeight: "bold" }}>
                Grades :
              </div>{" "}
              <div> { 
  detail.projectGrades.map((item, index) => {
    const isLastItem = index === detail.projectGrades.length - 1;
    return (
      <span key={index}>
        {item.grade_name}
        {!isLastItem && <span>, </span>}
      </span>
    );
  })
}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "5.5rem", fontWeight: "bold" }}>
                Roles :
              </div>{" "}
              <div> { 
  detail.projectRole.map((item, index) => {
    const isLastItem = index === detail.projectRole.length - 1;
    return (
      <span key={index}>
        {item.role_name}
        {!isLastItem && <span>, </span>}
      </span>
    );
  })
}</div>
            </div>
            <hr />
          </div>
          <h3>Objectives</h3>
          <div className={style.headObjective}>
            {
              detail.projectDescription
            }
          </div>
          <hr />
        </div>
      </div>
      <Week data={detail.projectWeek} />
      </> : <div className={style.loader}>
    <div className={style.circle}></div>
    <div className={style.dots}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
    </div>
</div>
    }
      {
        console.log(detail)
      }
    </>
  );
}
