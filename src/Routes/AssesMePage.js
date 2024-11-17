import { AnimatePresence } from "framer-motion";
import AssesMe from "../Component/SignUpPage/AssesMe";
import { useState } from "react";
import axios from "axios";
import FormSubmition from "../Component/FormSubmition";

export default function AssesMePage() {
  // Updated name here
  const [formData, setFormData] = useState({
    userExtrovert: "",
    userSensing: "",
    userThinking: "",
    userJudger: "",
    confirmPassword: "",
  });
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const [showAssesmentForm,setShowAssesmentForm] = useState(false);
  const handleSubmit = () => {
    if (
      formData.userSensing != "" &&
      formData.userExtrovert != "" &&
      formData.userThinking != "" &&
      formData.userJudger != ""
    ) {
      let second = formData.userSensing.startsWith("I") ? "N" : "S";
      let Code = `${formData.userExtrovert[0]}${second}${formData.userThinking[0]}${formData.userJudger[0]}`;
      const Obj = {
        UserId: localStorage.UserId,
        Code: Code,
      };
      axios
        .post("https://localhost:44365/api/admin/AddAssesment", Obj, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          if (result.data) {
            localStorage.setItem("isAssesed", true);
            setSuccessSubmit(true);
            setMessage("User Assesed Successfully");
          } else {
            localStorage.setItem("isAssesed", false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  

  return (
    <>
      <AnimatePresence>
    {
      !successSubmit && 
      <AssesMe
        setSuccessSubmit={setSuccessSubmit}
        setFormData={setFormData}
        setShowAssesmentForm={setShowAssesmentForm}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    }
    </AnimatePresence>
      
      <AnimatePresence>
        {successSubmit && <FormSubmition message={message} />}
      </AnimatePresence>
    </>
  );
}
