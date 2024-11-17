import React, { useState } from "react";
import style from "../Style/SignUp.module.css";
import { AnimatePresence } from "framer-motion";
import FormSubmition from "../Component/FormSubmition";
import AssesMe from "../Component/SignUpPage/AssesMe";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpForm() {
  // Define state for the form fields
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    mobileNumber: "",
    countryCode: "+1",
    userSensing: "",
    userThinking: "",
    userJudger: "",
    confirmPassword: "",
  });
  const [showForm, setShowForm] = useState(true);
  const [showAssesmentform, setShowAssesmentForm] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [errors, setErrors] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    mobileNumber: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  // Handle change for text and select inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateInput = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Full name validation
    if (!formData.userName) newErrors.userName = "Full Name is required.";

    // Email validation
    if (
      !formData.userEmail ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.userEmail)
    ) {
      newErrors.userEmail = "Valid Email is required.";
    }

    // Mobile number validation
    if (
      !formData.mobileNumber ||
      formData.mobileNumber.length < 10 ||
      formData.mobileNumber.length > 15
    ) {
      newErrors.mobileNumber = "Phone number must be between 10 and 15 digits.";
    }

    // Password validation
    if (!formData.userPassword)
    {
      newErrors.userPassword = "Password is required.";
    }else if(formData.userPassword.length < 6){
      newErrors.confirmPassword = "Password length must be contain 6 or more character";
    }

    if (
      formData.userPassword != formData.confirmPassword ||
      formData.confirmPassword == ""
    ){
      newErrors.confirmPassword = "Password does not match";
    }

    setErrors(newErrors);

    // If there are no errors, proceed
    if (Object.keys(newErrors).length === 0) {
      // Submit the form or call the next step
      showAssesment();
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    const Obj = {
      UserName: formData.userName,
      EmailId: formData.userEmail,
      Password: formData.userPassword,
      PhoneNumber: "" + formData.countryCode + "" + formData.mobileNumber,
    };

    axios
      .post("https://localhost:44365/api/admin/AddUser", Obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        if (result.data.message == "New user created.") {
          localStorage.setItem("UserId", result.data.dataObject.userId);
          setMessage("User added successfully")
          if(formData.userSensing != "" && formData.userExtrovert != "" && formData.userThinking != "" && formData.userJudger != ""){
    let second = formData.userSensing.startsWith("I") ? "N" : "S"
    let Code = `${formData.userExtrovert[0]}${second}${formData.userThinking[0]}${formData.userJudger[0]}`;
    const Obj = {
      UserId : result.data.dataObject.userId,
      Code : Code
    }
    axios.post("https://localhost:44365/api/admin/AddAssesment",Obj,{
      headers:{
        'Content-Type':'application/json'
      }
    }).then((result)=>{
      if(result.data){
        localStorage.setItem("isAssesed",true)
      }else{
        localStorage.setItem("isAssesed",false)
      }
    }).catch((err)=>{
      console.log(err)
    })
    }
          toast.success("User Added");
        } else {
          toast.error("Something Went Wrong");
        }
        console.log(result);
      });
  };

  const showAssesment = () => {
    setShowForm(false);
    setShowAssesmentForm(true);
  };
  return (
    <>
      <AnimatePresence>
        {showForm && (
          <form className={style.formContainer} onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                Sign In
              </h3>

              {/* Full Name Field */}
              <div className="mb-3">
                <label htmlFor="exampleInputText1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputText1"
                  placeholder="Enter Full Name"
                  aria-describedby="emailHelp"
                  value={formData.userName}
                  name="userName"
                  onChange={handleInputChange}
                  required
                />
                {errors.userName && (
                  <span style={{ color: "red" }}>Full Name is required.</span>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Email"
                  aria-describedby="emailHelp"
                  value={formData.userEmail}
                  name="userEmail"
                  onChange={handleInputChange}
                  required
                />
                {errors.userEmail && (
                  <span style={{ color: "red" }}>Valid Email is required.</span>
                )}
              </div>

              {/* Phone Number Field */}
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Enter Phone Number
                </label>
                <div className="input-group">
                  <select
                    id="countryCode"
                    aria-describedby="countryCodeHelp"
                    value={formData.countryCode}
                    name="countryCode"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="+1">+1 (USA)</option>
                    <option value="+92">+92 (PK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+44">+44 (UK)</option>
                  </select>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileNumber"
                    aria-describedby="mobileNumberHelp"
                    value={formData.mobileNumber}
                    name="mobileNumber"
                    onChange={(e) => {
                      const regex = /^[0-9\b]+$/;
                      if (e.target.value === "" || regex.test(e.target.value)) {
                        handleInputChange(e);
                      }
                    }}
                    pattern="[0-9]*"
                    maxLength="15"
                    required
                  />
                </div>
                {errors.mobileNumber && (
                  <span style={{ color: "red" }}>
                    Phone number must be between 10 and 15 digits.
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={formData.userPassword}
                  name="userPassword"
                  onChange={handleInputChange}
                  required
                />
                {errors.userPassword && (
                  <span style={{ color: "red" }}>Password is required.</span>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                  id="exampleInputPassword2"
                  value={formData.confirmPassword}
                  name="confirmPassword"
                  onChange={handleInputChange}
                  required
                />
                {errors.confirmPassword && (
                  <span style={{ color: "red" }}>Password does not match.</span>
                )}
              </div>

              <button onClick={validateInput} className="btn btn-primary">
                Next
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showAssesmentform && (
          <AssesMe
            handleSubmit={handleSubmit}
            setSuccessSubmit={setSuccessSubmit}
            setFormData={setFormData}
            setShowAssesmentForm={setShowAssesmentForm}
            formData={formData}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>{successSubmit && <FormSubmition message={message} />}</AnimatePresence>
      <ToastContainer />
    </>
  );
}

export default SignUpForm;
