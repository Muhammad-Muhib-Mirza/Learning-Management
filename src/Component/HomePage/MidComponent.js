import { useState } from "react";
import style from "../../Style/RoundImages.module.css";
import { motion } from "framer-motion";

export default function MidComponent() {
  const data = [
    {
      image: "/RoundImages/option1.jpeg",
      title: "Career Counseling",
      desc: "AI-driven career counseling aligns students' strengths.",
    },
    {
      image: "/RoundImages/option2.jpeg",
      title: "Personalized Learning Paths",
      desc: "Personalized AI learning paths adapt to students strengths and pace.",
    },
    {
      image: "/RoundImages/option3.jpeg",
      title: "Preparing for Future AI Roles",
      desc: "Our Curriculum prepares students for exciting AI opportunities.",
    },
    {
      image: "/RoundImages/option4.jpeg",
      title: "Real-Life Learning Projects",
      desc: "Hands-on projects bridge gap between theory.",
    },
    {
      image: "/RoundImages/option5.jpeg",
      title: "Solve Industry Problems",
      desc: "Developing career readiness through industry driven projects.",
    }
  ];

  return (
    <div className={style.container}>
      {data.map((item, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={style.textContainer}
          >
            <img src={`${item.image}`} alt="" className={style.images} />
            <h6 className={style.title}>{item.title}</h6>
            <p className={style.desc}>{item.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}