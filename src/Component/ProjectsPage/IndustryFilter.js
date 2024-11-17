import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "../../Style/Filter.module.css";
import { useParams } from "react-router-dom";

export default function IndustryFilter({
  handleFilterChange,
  reset,
  industryFilter,
  data,
}) {
  const subjects = data;
  const { typeName } = useParams();

  // Static color map for predefined subjects
  const initialColorMap = {};

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [colorMap, setColorMap] = useState(initialColorMap);

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
    subjects.forEach((subject) => {
      if (!updatedColorMap[subject]) {
        updatedColorMap[subject] = generateRandomColor();
      }
    });
    setColorMap(updatedColorMap);
  }, [subjects]);

  useEffect(() => {
    if (reset) {
      setSelectedFilters([]);
    }
  }, [reset]);

  useEffect(() => {
    if (industryFilter !== undefined) {
      setSelectedFilters(industryFilter);
    }
  }, []);

  useEffect(() => {
    if (typeName && subjects.includes(typeName)) {
      setSelectedFilters([typeName]);
      handleFilterChange(typeName, "Industry");
    }

    const handleSearchQueryEvent = (event) => {
      if (subjects.includes(event.detail)) {
        setSelectedFilters([event.detail]);
        handleFilterChange(event.detail, "Industry");
      }
    };

    window.addEventListener("searchQueryEvent", handleSearchQueryEvent);

    return () => {
      window.removeEventListener("searchQueryEvent", handleSearchQueryEvent);
    };
  }, []);

  const handleItemClick = (filterValue) => {
    handleFilterChange(filterValue, "Industry");
    setSelectedFilters((prev) =>
      prev.includes(filterValue)
        ? prev.filter((f) => f !== filterValue)
        : [...prev, filterValue]
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

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={style.subjectContainer}>
      {subjects.map((subject) => (
        <motion.div
          key={subject}
          className={`${style.filterBox} ${style.roleBox}`}
          style={{
            backgroundColor: selectedFilters.includes(subject)
              ? colorMap[subject]
              : "#7B9DD4",
            color: selectedFilters.includes(subject) ? "white" : "black",
          }}
          onClick={() => handleItemClick(subject)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {subject}
        </motion.div>
      ))}
    </div>
  );
}
