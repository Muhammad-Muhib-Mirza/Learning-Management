import { useState, useEffect } from "react";
import style from "../../Style/Cards.module.css";
import FilterContainer from "./FilterContainer";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ProjectCards() {
  const param = useParams();
  const searchValue = param.typeName;
  const location = useLocation();
  const [allData, setAllData] = useState();
  const [cardData, setCardData] = useState();
  const [subjectfilter, setSubjectFilter] = useState([]);
  const [industryFilter, setIndustryFilter] = useState([]);
  const [roleFilter, setRoleFilter] = useState([]);
  const [classFilter, setClassFilter] = useState([]);
  const data = useSelector((state)=>{
    return state.data
  })
  useEffect(()=>{
    if(searchValue == undefined){
      setAllData(data[0]);
      setCardData(data[0]);
    }else{
      const filteredData = data[0].filter(item => 
           item.projectGrades.some(detail => detail.grade_name.includes(searchValue))  || item.projectRole.some(detail => detail.role_name.includes(searchValue)) || item.projectSubject.some(detail => detail.subject_name.includes(searchValue)) || item.projectIndustry.some(detail =>detail.industry_name?.includes(searchValue))
      );
      setAllData(filteredData);
      setCardData(filteredData);
      
    }
    
    
  },[data])
  // useEffect(() => {
  //   axios
  //     .post("https://localhost:44365/api/Project/Project")
  //     .then((result) => {
        
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // if (
  //   searchValue != undefined &&
  //   !searchValue.includes("browse") &&
  //   searchValue != ""
  // ) {
  //   data = data.filter((item) => {
  //     return (
  //       item.class.includes(searchValue) ||
  //       item.industry.includes(searchValue) ||
  //       item.role.includes(searchValue) ||
  //       item.subject.includes(searchValue)
  //     );
  //   });
  // }
  const handleFilterChange = (filterValue, filterFrom) => {
    if (filterFrom == "Class") {
      setClassFilter((prevFilters) => {
        // Manage all the filter conditions
        const updatedFilters = prevFilters.includes(filterValue)
          ? prevFilters.filter((filter) => filter !== filterValue) // Remove filter if already selected
          : [...prevFilters, filterValue]; // Add filter if not already selected
        let filteredData = applyFilter(updatedFilters, filterFrom);
        setCardData(filteredData);

        return updatedFilters; // Return the updated filters
      });
    } else if (filterFrom == "Subject") {
      // To match the filter value with the value in state
      filterValue =
        filterValue === "Science"
          ? "Sci"
          : filterValue === "Social Studies"
          ? "S.S"
          : filterValue;
      setSubjectFilter((prevFilters) => {
        // Manage all the filter conditions
        const updatedFilters = prevFilters.includes(filterValue)
          ? prevFilters.filter((filter) => filter !== filterValue) // Remove filter if already selected
          : [...prevFilters, filterValue]; // Add filter if not already selected

        // Variables for class, subject, industry, and role filters
        let filteredData = applyFilter(updatedFilters, filterFrom);

        // Set the filtered data to cardData state
        setCardData(filteredData);

        return updatedFilters; // Return the updated filters
      });
    } else if (filterFrom == "Industry") {
      setIndustryFilter((prevFilters) => {
        // Manage all the filter conditions
        const updatedFilters = prevFilters.includes(filterValue)
          ? prevFilters.filter((filter) => filter !== filterValue) // Remove filter if already selected
          : [...prevFilters, filterValue]; // Add filter if not already selected

        // Variables for class, subject, industry, and role filters
        let filteredData = applyFilter(updatedFilters, filterFrom);
        // Set the filtered data to cardData state
        setCardData(filteredData);

        return updatedFilters; // Return the updated filters
      });
    } else {
      setRoleFilter((prevFilters) => {
        // Manage all the filter conditions
        const updatedFilters = prevFilters.includes(filterValue)
          ? prevFilters.filter((filter) => filter !== filterValue) // Remove filter if already selected
          : [...prevFilters, filterValue]; // Add filter if not already selected

        // Variables for class, subject, industry, and role filters
        let filteredData = applyFilter(updatedFilters, filterFrom);
        // Set the filtered data to cardData state
        setCardData(filteredData);

        return updatedFilters; // Return the updated filters
      });
    }
  };
  const applyFilter = (updatedFilter, filterFrom) => {
    let filteredData = allData;
    if (filterFrom == "Class") {
      if (updatedFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          updatedFilter.some((filter) =>
            item.projectGrades.some((detail) => detail.grade_name == filter)
          )
        );
      }
      if (subjectfilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          subjectfilter.some((filter) =>
            item.projectSubject.some((detail) => detail.subject_name == filter)
          )
        );
      }
      if (industryFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          industryFilter.some((filter) =>
            item.projectIndustry.some(
              (detail) => detail.industry_name == filter
            )
          )
        );
      }
      if (roleFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          roleFilter.some((filter) =>
            item.projectRole.some((detail) => detail.role_name == filter)
          )
        );
      }
      return filteredData;
    } else if (filterFrom == "Subject") {
      if (updatedFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          updatedFilter.some((filter) =>
            item.projectSubject.some((detail) => detail.subject_name == filter)
          )
        );
      }
      if (classFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          classFilter.some((filter) =>
            item.projectGrades.some((detail) => detail.grade_name == filter)
          )
        );
      }
      if (industryFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          industryFilter.some((filter) =>
            item.projectIndustry.some(
              (detail) => detail.industry_name == filter
            )
          )
        );
      }
      if (roleFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          roleFilter.some((filter) =>
            item.projectRole.some((detail) => detail.role_name == filter)
          )
        );
      }
      return filteredData;
    } else if (filterFrom == "Industry") {
      if (updatedFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          updatedFilter.some((filter) =>
            item.projectIndustry.some(
              (detail) => detail.industry_name == filter
            )
          )
        );
      }
      if (subjectfilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          subjectfilter.some((filter) =>
            item.projectSubject.some((detail) => detail.subject_name == filter)
          )
        );
      }
      if (classFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          classFilter.some((filter) =>
            item.projectGrades.some((detail) => detail.grade_name == filter)
          )
        );
      }
      if (roleFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          roleFilter.some((filter) =>
            item.projectRole.some((detail) => detail.role_name == filter)
          )
        );
      }
      return filteredData;
    } else {
      if (updatedFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          updatedFilter.some((filter) =>
            item.projectRole.some((detail) => detail.role_name == filter)
          )
        );
      }
      if (subjectfilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          subjectfilter.some((filter) =>
            item.projectSubject.some((detail) => detail.subject_name == filter)
          )
        );
      }
      if (classFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          classFilter.some((filter) =>
            item.projectGrades.some((detail) => detail.grade_name == filter)
          )
        );
      }
      if (industryFilter.length > 0) {
        filteredData = filteredData.filter((item) =>
          industryFilter.some((filter) =>
            item.projectIndustry.some(
              (detail) => detail.industry_name == filter
            )
          )
        );
      }
      return filteredData;
    }
  };

  const handleClearFilter = () => {
    setClassFilter([]);
    setIndustryFilter([]);
    setSubjectFilter([]);
    setRoleFilter([]);
    setCardData(allData);
  };
  return (
    <>
      {allData ? (
        <div className={style.container}>
          <div className={style.filterContainer}>
            <FilterContainer
              handleFilterChange={handleFilterChange}
              handleClearFilter={handleClearFilter}
              classFilter={classFilter}
              roleFilter={roleFilter}
              subjectFilter={subjectfilter}
              industryFilter={industryFilter}
            />
          </div>

          <div className={style.projectContainer}>
            {cardData != undefined ? ( // Show Cards Only If there is any data
              cardData.map((item) => {
                let image =
                  item.projectImagesList != undefined
                    ? item.projectImagesList[0].image
                    : "";
                let i = 0;
                return (
                  <a
                    href={`/detail/${item.projectId}`}
                    className="card mb-3"
                    style={{
                      height: "17rem",
                      marginLeft: "1.5rem",
                      width: "240px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={`${image}`}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "14rem" }}
                    />
                    <div
                      className="card-body"
                      style={{ paddingLeft: "0.3rem", paddingRight: "0.3rem" }}
                    >
                      <p className="card-text">
                        <span>
                          {item.projectGrades == undefined
                            ? ""
                            : item.projectGrades.map((classes, index) => {
                                i++;
                                return (
                                  <span
                                    className={`${style.subject} ${
                                      i == 1
                                        ? style.one
                                        : i == 2
                                        ? style.two
                                        : i == 3
                                        ? style.three
                                        : i == 4
                                        ? style.four
                                        : style.five
                                    }`}
                                  >
                                    {classes.grade_name}
                                  </span>
                                );
                              })}
                        </span>
                        <span className={style.subjectContainer}>
                          {item.projectSubject == undefined
                            ? ""
                            : item.projectSubject.map((subjects) => {
                                return (
                                  <span
                                    className={`${style.subject} ${
                                      subjects == "Math"
                                        ? style.math
                                        : subjects == "Sci"
                                        ? style.sci
                                        : subjects == "Eli"
                                        ? style.eli
                                        : style.ss
                                    }`}
                                  >
                                    {subjects.subject_name}
                                  </span>
                                );
                              })}
                        </span>
                      </p>
                    </div>
                  </a>
                );
              })
            ) : (
              <div
                style={{
                  height: "53vh",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                No Data Found
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={style.loader}>
          <div className={style.circle}></div>
        </div>
      )}
    </>
  );
}
