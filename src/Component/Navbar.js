import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../Style/Navbar.module.css";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Use navigate instead of window.location for routing

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  const handleSearch = () => {
    navigate(`/type/${searchQuery}`)
  };
  
  
  return (
    <nav
      className="navbar"
      style={{ padding: 0, backgroundColor: "#0072CE", height: "auto" }}
    >
      <div className={`container-fluid ${style.navContainer}`} >
        <a
          className="navbar-brand"
          style={{ color: "white", fontWeight: "bold" }}
          href="/"
        >
          <img src="/Logos/Navbarlogo.png" alt="" />
        </a>
        <form className={`d-flex ${style.searchForm}`} role="search">
          <span
            className={`input-group-text ${style.searchIcon}`}
            id="basic-addon1"
            style={{
              boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
              border: "none",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              zIndex: "1000",
              backgroundColor: "#0069AB",
              color: "white",
            }}
          >
            <i className={`bi bi-search `} onClick={handleSearch}></i>
          </span>
          <input
            className={`form-control me-2 navsearch ${style.navSearch}`}
            type="search"
            placeholder="Search Lesson Library"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          {
            localStorage.UserId != undefined && localStorage.UserId != "" ? <>
            {
              localStorage.isAssesed ? <>
              <button
            className={`btn btn-outline-success ${style.formBtn} ${style.btnproject}`}
            style={{
              backgroundColor: "#E67500",
              color: "whitesmoke",
              marginRight: "0.5rem",
            }}
            onClick={(e)=>{
              e.preventDefault()
              window.location.href = "/assesme"
            }}
          >
            Personalized Project
          </button>
              </> : <>
              <button
            className={`btn btn-outline-success ${style.formBtn}`}
            style={{
              backgroundColor: "#E67500",
              color: "whitesmoke",
              marginRight: "0.5rem",
            }}
            onClick={(e)=>{
              e.preventDefault()
              window.location.href = "/assesme"
            }}
          >
            Asses Me
          </button>
              </>
            }
            </> : <>
            <button
            className={`btn btn-outline-success ${style.formBtn}`}
            style={{
              backgroundColor: "#E67500",
              color: "whitesmoke",
              marginRight: "0.5rem",
            }}
            onClick={(e)=>{
              e.preventDefault()
              window.location.href = "/signup"
            }}
          >
            Sign Up
          </button>
          <button
            className="btn btn-outline-success"
            style={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              border: "none",
            }}
            onClick={(e)=>{
              e.preventDefault()
              window.location.href = "/login"
            }}
          >
            Login
          </button>
            </>
          }
        </form>
      </div>
    </nav>
  );
}
