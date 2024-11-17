import { useState } from "react";
import { motion } from "framer-motion";
import style from "../../Style/Week.module.css";

export default function Week({ data }) {
  const [activeIndex, setActiveIndex] = useState(null); // Track the currently active div
  const [expandedSubIndices, setExpandedSubIndices] = useState({});
  const toggleExpand = (weekIndex) => {
    setActiveIndex((prevIndex) => (prevIndex === weekIndex ? null : weekIndex)); // Allow only one week to be active at a time
    setExpandedSubIndices({}); // Collapse all sub-divs when switching between weeks
  };

  const toggleSubExpand = (weekIndex, subIndex) => {
    setExpandedSubIndices((prevState) => ({
      ...prevState,
      [weekIndex]: {
        ...prevState[weekIndex],
        [subIndex]: !prevState[weekIndex]?.[subIndex],
      },
    }));
  };
  return (
    <>
      <div className={style.container}>
        <h3
          style={{
            paddingTop: 10,
            paddingBottom: 20,
            textAlign: "center",
            color: "#2C3E50",
          }}
        >
          Weekly Plans
        </h3>
        {data.map((weekItem, weekIndex) => (
          <div
            key={weekItem.id}
            style={{ display: "flex", height: "12.5rem", marginBottom: 20 }}
          >
            <button
              onClick={() => toggleExpand(weekIndex)}
              className={style.weekBtn}
              style={{
                backgroundColor: "#3498DB",
                color: "#FFF",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2980B9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3498DB")}
            >
              {weekItem.step_caption == "" || weekItem.step_caption == null ? (
                <> Week </>
              ) : (
                weekItem.step_caption
              )}
              {weekIndex + 1} ▶
            </button>
            <motion.div
              // initial={{ opacity: 0, display: "none" }}
              // animate={{
              //   display: activeIndex === weekIndex ? "flex" : "none",
              //   opacity: activeIndex === weekIndex ? 1 : 0,
              // }}
              // transition={{
              //   duration: activeIndex === weekIndex ? 0.2 : 0.2,
              //   ease: "easeInOut",
              // }}
              layout
              className={style.subContainer}
              style={{
                marginLeft: "10px",
                background: "#ECF0F1",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div key={weekItem.id} style={{ marginBottom: 20, width: "32%" }}>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#F39C12",
                    color: "#FFF",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#E67E22")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#F39C12")
                  }
                >
                  Week Plan
                </button>
                <motion.div
                  layout
                  style={{
                    overflow: "hidden",
                    padding: "15px",
                    backgroundColor: "#FFF",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    height: "87%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      width: "95%",
                      margin: "auto",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    {weekItem.lesson_plan}
                  </p>
                </motion.div>
              </div>
              <div key={weekItem.id} style={{ marginBottom: 20, width: "32%" }}>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#F39C12",
                    color: "#FFF",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#E67E22")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#F39C12")
                  }
                >
                  Week Objective
                </button>
                <motion.div
                  layout
                  style={{
                    overflow: "hidden",
                    padding: "15px",
                    backgroundColor: "#FFF",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    height: "87%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      width: "95%",
                      margin: "auto",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    {weekItem.objectives}
                  </p>
                </motion.div>
              </div>
              <div key={weekItem.id} style={{ marginBottom: 20, width: "32%" }}>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#F39C12",
                    color: "#FFF",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#E67E22")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#F39C12")
                  }
                >
                  Week Activities
                </button>
                <motion.div
                  layout
                  style={{
                    overflow: "hidden",
                    padding: "15px",
                    backgroundColor: "#FFF",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    height: "87%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      width: "95%",
                      margin: "auto",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    {weekItem.activities}
                  </p>
                  <button
                    style={{
                      width: "100%",
                      padding: "5px",
                      //color: "#FFF",
                      border: "none",
                      borderRadius: "5px",
                      fontSize: "13px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Week Tools
                  </button>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      width: "95%",
                      margin: "auto",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    {weekItem.projectTools.map((item) => {
                      return <span>{item.toolName}</span>;
                    })}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className={style.mobileContainer}>
        <h3
          style={{
            paddingTop: 10,
            paddingBottom: 20,
            textAlign: "center",
            color: "#2C3E50",
          }}
        >
          Weekly Plans
        </h3>
        {data.map((weekItem, weekIndex) => (
          <div key={weekItem.id} className={style.weekContainer}>
            <button
              onClick={() => toggleExpand(weekIndex)}
              className={style.weekBtn}
              style={{
                backgroundColor: "#3498DB",
                color: "#FFF",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2980B9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3498DB")}
            >
              {weekItem.step_caption == "" || weekItem.step_caption == null ? (
                <>
                  {" "}
                  Week {weekIndex + 1} {activeIndex === weekIndex ? "▲" : "▼"}
                </>
              ) : (
                weekItem.step_caption
              )}
            </button>
            <motion.div
              initial={{ opacity: 0, display: "none" }}
              animate={{
                display: activeIndex === weekIndex ? "flex" : "none",
                opacity: activeIndex === weekIndex ? 1 : 0,
              }}
              transition={{
                duration: activeIndex === weekIndex ? 0.2 : 0.2,
                ease: "easeInOut",
              }}
              layout
              className={style.subContainer}
              style={{
                marginLeft: "10px",
                background: "#ECF0F1",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div key={weekItem.id} className={style.cardBody}>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#F39C12",
                    color: "#FFF",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#E67E22")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#F39C12")
                  }
                >
                  Week Plan
                </button>
                <motion.div
                  layout
                  style={{
                    overflow: "hidden",
                    padding: "15px",
                    backgroundColor: "#FFF",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    height: "87%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      width: "95%",
                      margin: "auto",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    {weekItem.lesson_plan}
                  </p>
                </motion.div>
              </div>
              <div key={weekItem.id} className={style.cardBody}>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#F39C12",
                    color: "#FFF",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#E67E22")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#F39C12")
                  }
                >
                  Week Objective
                </button>
                <motion.div
                  layout
                  style={{
                    overflow: "hidden",
                    padding: "15px",
                    backgroundColor: "#FFF",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    height: "87%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      width: "95%",
                      margin: "auto",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    {weekItem.objectives}
                  </p>
                </motion.div>
              </div>
              <div key={weekItem.id} className={style.cardBody}>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#F39C12",
                    color: "#FFF",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#E67E22")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#F39C12")
                  }
                >
                  Week Activities
                </button>
                <motion.div
                  layout
                  style={{
                    overflow: "hidden",
                    padding: "15px",
                    backgroundColor: "#FFF",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    height: "87%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      width: "95%",
                      margin: "auto",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    {weekItem.activities}
                  </p>
                  <button
                    style={{
                      width: "100%",
                      padding: "5px",
                      //backgroundColor: "#F39C12",
                      //color: "#FFF",
                      border: "none",
                      borderRadius: "5px",
                      fontSize: "13px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    Week Tools
                  </button>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      width: "95%",
                      margin: "auto",
                      textAlign: "justify",
                      lineHeight: "1.5",
                    }}
                  >
                    {weekItem.projectTools.map((item) => {
                      return <span>{item.toolName}</span>;
                    })}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}
