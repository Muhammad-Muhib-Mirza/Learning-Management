import { motion } from "framer-motion";
import style from "../../Style/SignUp.module.css";
import style2 from "../../Style/AssesMe.module.css";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function AssesMe({
  setFormData,
  formData,
  setShowAssesmentForm,
  setSuccessSubmit,
  handleSubmit
}) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${style.radioContainer}`}
      style={{
        padding: "2rem",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {location.pathname.includes("signup") && (
        <div
          className={style.skipBtn}
          onClick={() => {
            setShowAssesmentForm(false);
            setSuccessSubmit(true);
            handleSubmit();
          }}
        >
          Skip
        </div>
      )}

      <h4 style={{ borderBottom: "1px solid black", paddingBottom: "0.5rem" }}>
        Select Your Personality Type
      </h4>
      <div
        style={{
          marginBottom: "1.5rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid black",
          marginTop: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          I'm
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className={`form-check ${style.choiceContainer}`}>
            <input
              className={`form-check-input ${style2.radioBtn}`}
              type="radio"
              name="personalityType"
              id="extrovert"
              onClick={() => {
                setFormData({
                  ...formData,
                  ["userExtrovert"]: "Extrovert",
                });
                document.querySelector("#introvert").style.borderColor =
                  "#fd8a8a";
                document.querySelector("#extrovert").style.borderColor =
                  "#EFF1F3";
              }}
            />
            <label
              className="form-check-label"
              htmlFor="extrovert"
              style={{ fontSize: "1.1rem" }}
            >
              Extrovert
            </label>
            <span>
              <img
                src="/RadioImages/Extra.jpg"
                alt="Extrovert"
                className={`${style.personPic} ${style2.image}`}
              />
            </span>
          </div>
          <div className={`form-check ${style.choiceContainer}`}>
            <input
              className={`form-check-input ${style2.radioBtn}`}
              type="radio"
              name="personalityType"
              id="introvert"
              style={{ borderColor: "#fd8a8a" }}
              onClick={() => {
                setFormData({
                  ...formData,
                  ["userExtrovert"]: "Introvert",
                });
                document.querySelector("#introvert").style.borderColor =
                  "#EFF1F3";
                document.querySelector("#extrovert").style.borderColor =
                  "#fd8a8a";
              }}
            />
            <label
              className="form-check-label"
              htmlFor="introvert"
              style={{ fontSize: "1.1rem" }}
            >
              Introvert
            </label>
            <span>
              <img
                src="/RadioImages/In.jpg"
                alt="Introvert"
                className={style2.image}
              />
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          marginBottom: "1.5rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid black",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          I'm
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className={`form-check ${style.choiceContainer}`}>
            <input
              className={`form-check-input ${style2.radioBtn}`}
              type="radio"
              name="sensingType"
              id="sensing"
              style={{ borderColor: "#fd8a8a" }}
              onClick={() => {
                setFormData({
                  ...formData,
                  ["userSensing"]: "Sensing",
                });
                document.querySelector("#intuition").style.borderColor =
                  "#fd8a8a";
                document.querySelector("#sensing").style.borderColor =
                  "#EFF1F3";
              }}
            />
            <label
              className="form-check-label"
              htmlFor="sensing"
              style={{ fontSize: "1.1rem" }}
            >
              Sensing
            </label>
            <span>
              <img
                src="/RadioImages/Se.png"
                alt="Sensing"
                className={style2.image}
              />
            </span>
          </div>
          <div className={`form-check ${style.choiceContainer}`}>
            <input
              className={`form-check-input ${style2.radioBtn}`}
              type="radio"
              name="sensingType"
              id="intuition"
              style={{ borderColor: "#fd8a8a" }}
              onClick={() => {
                setFormData({
                  ...formData,
                  ["userSensing"]: "Intuition",
                });
                document.querySelector("#sensing").style.borderColor =
                  "#fd8a8a";
                document.querySelector("#intuition").style.borderColor =
                  "#EFF1F3";
              }}
            />
            <label
              className="form-check-label"
              htmlFor="intuition"
              style={{ fontSize: "1.1rem" }}
            >
              Intuition
            </label>
            <span>
              <img
                src="/RadioImages/iNt.png"
                alt="Intuition"
                className={style2.image}
              />
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          marginBottom: "1.5rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid black",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          I'm
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className={`form-check ${style.choiceContainer}`}>
            <input
              className={`form-check-input ${style2.radioBtn}`}
              type="radio"
              name="thinkType"
              id="thinker"
              style={{ borderColor: "#fd8a8a" }}
              onClick={() => {
                setFormData({
                  ...formData,
                  ["userThinking"]: "Thinker",
                });
                document.querySelector("#feeler").style.borderColor = "#fd8a8a";
                document.querySelector("#thinker").style.borderColor =
                  "#EFF1F3";
              }}
            />
            <label
              className="form-check-label"
              htmlFor="thinker"
              style={{ fontSize: "1.1rem" }}
            >
              Thinker
            </label>
            <span>
              <img
                src="/RadioImages/Think.jpg"
                alt="Sensing"
                className={style2.image}
              />
            </span>
          </div>
          <div className={`form-check ${style.choiceContainer}`}>
            <input
              className={`form-check-input ${style2.radioBtn}`}
              type="radio"
              name="thinkType"
              id="feeler"
              style={{ borderColor: "#fd8a8a" }}
              onClick={() => {
                setFormData({
                  ...formData,
                  ["userThinking"]: "Feeler",
                });
                document.querySelector("#thinker").style.borderColor =
                  "#fd8a8a";
                document.querySelector("#feeler").style.borderColor = "#EFF1F3";
              }}
            />
            <label
              className="form-check-label"
              htmlFor="feeler"
              style={{ fontSize: "1.1rem" }}
            >
              Feeler
            </label>
            <span>
              <img
                src="/RadioImages/Feel.jpg"
                alt="Intuition"
                className={style2.image}
              />
            </span>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          I'm
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className={`form-check ${style.choiceContainer}`}>
            <input
              className={`form-check-input ${style2.radioBtn}`}
              type="radio"
              name="judgeType"
              id="Judger"
              style={{ borderColor: "#fd8a8a" }}
              onClick={() => {
                setFormData({
                  ...formData,
                  ["userJudger"]: "Judger",
                });
                document.querySelector("#Perceiver").style.borderColor =
                  "#fd8a8a";
                document.querySelector("#Judger").style.borderColor = "#EFF1F3";
              }}
            />
            <label
              className="form-check-label"
              htmlFor="Judger"
              style={{ fontSize: "1.1rem" }}
            >
              Judger
            </label>
            <span>
              <img
                src="/RadioImages/Think.jpg"
                alt="Sensing"
                className={style2.image}
              />
            </span>
          </div>
          <div className={`form-check ${style.choiceContainer}`}>
            <input
              className={`form-check-input ${style2.radioBtn}`}
              type="radio"
              name="judgeType"
              id="Perceiver"
              style={{ borderColor: "#fd8a8a" }}
              onClick={() => {
                setFormData({
                  ...formData,
                  ["userJudger"]: "Perceiver",
                });
                document.querySelector("#Judger").style.borderColor = "#fd8a8a";
                document.querySelector("#Perceiver").style.borderColor =
                  "#EFF1F3";
              }}
            />
            <label
              className="form-check-label"
              htmlFor="Perceiver"
              style={{ fontSize: "1.1rem" }}
            >
              Perceiver
            </label>
            <span>
              <img
                src="/RadioImages/Per.jpg"
                alt="Intuition"
                className={style2.image}
              />
            </span>
          </div>
        </div>
      </div>

      <Button
        isLoading={loading}
        loadingText="Submitting"
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setShowAssesmentForm(false);
          setSuccessSubmit(true);
          setLoading(true);
          handleSubmit();
        }}
        style={{
          padding: "0.8rem 2rem",
          fontSize: "1.1rem",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          transition: "background-color 0.3s ease",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Submit
      </Button>
    </motion.div>
  );
}
