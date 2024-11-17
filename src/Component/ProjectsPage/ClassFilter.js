import { useState, useEffect,useRef } from "react";
import { motion } from "framer-motion";
import style from "../../Style/Filter.module.css";


export default function Filter({ handleFilterChange,reset,classFilter,data=[] }) {
  const initialColorMap = {};
  
  const classes = data;
  const [colorMap, setColorMap] = useState(initialColorMap);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
useEffect(()=>{
  if(reset){
    setSelectedFilters([])
  }
},[reset])

useEffect(()=>{
  if(classFilter!= undefined){
    setSelectedFilters(classFilter)
  }
},[])

// Function to generate a random color
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

useEffect(() => {
  // Ensure all subjects have a color, even if they are not predefined
  const updatedColorMap = { ...initialColorMap };
  classes.forEach((subject) => {
    if (!updatedColorMap[subject]) {
      updatedColorMap[subject] = generateRandomColor();
    }
  });
  setColorMap(updatedColorMap);
}, [classes]);

  const handleItemClick = (filterValue) => {
    handleFilterChange(filterValue, "Class");
    setSelectedFilters(
      (prev) =>
        prev.includes(filterValue)
          ? prev.filter((f) => f !== filterValue)
          : [...prev, filterValue] // If same filter exists, remove it from selected state
    );
  };

  // Close modal on pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={style.classContainer}
      >
        {classes.map((filterValue) => (
          <motion.div
            key={filterValue}
            className={`${style.filterBox} ${style.roleBox}`}
            style={{
              backgroundColor: selectedFilters.includes(filterValue)
                ? colorMap[filterValue]
                : "#7B9DD4",
              color: selectedFilters.includes(filterValue) ? "white" : "black",
            }}
            onClick={() => handleItemClick(filterValue)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {filterValue}
          </motion.div>
        ))}
      </div>
    </>
  );
}

/*
<>
      <motion.button
        className={style.filterToggle}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ backgroundColor: "#3498db" }}
        animate={{ backgroundColor: isOpen ? "#2980b9" : "#3498db" }}
        transition={{ duration: 0.3 }}
        style={{
          marginBottom: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "10px",
        }}
      >
        {isOpen ? "Hide Class Filter" : "Show Class Filter"}
      </motion.button>

      {isOpen && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Class Filter</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {classes.map((filterValue) => (
                    <motion.div
                      key={filterValue}
                      className={style.filterBox}
                      style={{
                        backgroundColor: selectedFilters.includes(filterValue)
                          ? colorMap[filterValue]
                          : "#7B9DD4",
                        cursor: "pointer",
                        margin: "5px",
                        borderRadius: "8px",
                        textAlign: "center",
                        fontSize: "18px",
                        padding: "10px 20px",
                      }}
                      onClick={() => handleItemClick(filterValue)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {filterValue}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpen && <div className="modal-backdrop fade show"></div>}
      </>
*/
