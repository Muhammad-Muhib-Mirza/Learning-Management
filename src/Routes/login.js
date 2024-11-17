import style from "../Style/SignIN.module.css";
import styleLoader from "../Style/loader.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [animateFlag, setAnimateFlag] = useState(false);
  const [placeHolder, setPlaceHolder] = useState({
    email: "Email",
    password: "Password",
  });
  const [input, setInput] = useState({
    email: false,
    password: false,
  });

  const [loader, setLoader] = useState(true);

  let x = 0;
  const email = /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoader(false);
    e.preventDefault();
    const obj = {
      EmailId: user.email,
      Password: user.password,
    };
    axios
      .post("https://localhost:44365/api/admin/login", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(result);
        if (result.data.message != "Login is successfull.") {
          toast.error("Please Enter Correct Credential");
          setLoader(true);
        } else {
          localStorage.setItem("isAssesed", result.data.dataObject.isAssesed);
          localStorage.setItem("UserId", result.data.dataObject.userId);
          setLoader(true);
          toast.success("LogIn Success");
          setTimeout(() => {
            location.href = "/";
          }, 1000);
        }
      });
  };
  const handleButton = () => {
    if (email.test(user.email) == false || user.password === "") {
      setAnimateFlag(false);
      if (animateFlag == false) {
        if (x % 2 == 0) {
          document.querySelector(".loginbtn").style.transform =
            "translateX(75px)";
          x++;
        } else {
          document.querySelector(".loginbtn").style.transform =
            "translateX(-75px)";
          x++;
        }
      } else {
        setAnimateFlag(true);
        document.querySelector(".loginbtn").style.transform = "translateX(0px)";
        document.querySelector(".loginbtn").style.background =
          "linear-gradient(to bottom right,#4b48ff,#00d5ff)";
        document.querySelector(".loginbtn").style.color = "whitesmoke";
      }
    } else {
      setAnimateFlag(true);
      document.querySelector(".loginbtn").style.transform = "translateX(0px)";
      document.querySelector(".loginbtn").style.background =
        "linear-gradient(to bottom right,#4b48ff,#00d5ff)";
      document.querySelector(".loginbtn").style.color = "whitesmoke";
    }
  };
  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.logo}>
            <FaUser style={{ width: "2rem", height: "2rem" }} />
          </div>
          <h1 className={style.heading}>Log In</h1>
          <div className={style.inptContainer}>
            <motion.div
              className={style.inputWrapper}
              initial={{
                borderColor: "#ccc",
              }}
              animate={
                input.email || user.email != ""
                  ? {
                      borderColor: "#4b48ff",
                    }
                  : {
                      borderColor: "#ccc",
                    }
              }
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <motion.span
                className={style.image}
                initial={{
                  bottom: "0.5rem",
                }}
                animate={
                  input.email || user.email != ""
                    ? {
                        bottom: "2rem",
                      }
                    : {
                        bottom: "1rem",
                      }
                }
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                <FaUser style={{ marginLeft: "0.2rem" }} />
              </motion.span>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className={style.input}
                placeholder={placeHolder.email}
                onClick={() => {
                  setPlaceHolder({ email: "", password: "Password" });
                  setInput({ email: true });
                }}
                onBlur={() => {
                  setPlaceHolder({ email: "Email", password: "Password" });
                  setInput({ email: false });
                }}
                required
              />
            </motion.div>
          </div>
          <div className={style.inptContainer}>
            <motion.div
              className={style.inputWrapper}
              initial={{
                borderColor: "#ccc",
              }}
              animate={
                input.password || user.password != ""
                  ? {
                      borderColor: "#4b48ff",
                    }
                  : {
                      borderColor: "#ccc",
                    }
              }
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <motion.span
                className={style.image}
                initial={{
                  bottom: "0.5rem",
                }}
                animate={
                  input.password || user.password != ""
                    ? {
                        bottom: "2rem",
                      }
                    : {
                        bottom: "1rem",
                      }
                }
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                <RiLockPasswordFill style={{ marginLeft: "0.1rem" }} />
              </motion.span>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className={style.input}
                onClick={() => {
                  setPlaceHolder({ email: "Email", password: "" });
                  setInput({ password: true });
                }}
                onBlur={() => {
                  setPlaceHolder({ email: "Email", password: "Password" });
                  setInput({ password: false });
                }}
                placeholder={placeHolder.password}
                minLength={6}
                required
              />
            </motion.div>
          </div>
          {loader ? (
            <button
              type="submit"
              onMouseEnter={handleButton}
              onClick={handleButton}
              className={`loginbtn ${style.btn}`}
            >
              Login
            </button>
          ) : (
            <div class={styleLoader.loader}>
              <div class={styleLoader.circle}></div>
            </div>
          )}
          <div className={style.sign}>
            Don't have an Account?
            <a href="/registeruser" className={style.link}>
              Register Now
            </a>
          </div>
        </form>
      </div>

      <ToastContainer />
    </>
  );
};

export default Signin;
