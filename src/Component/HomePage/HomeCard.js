import { useState } from "react";
import { motion } from "framer-motion";

export default function HomeCard() {
  let data = [
    {
      title: "Browser Industry Projects for Kids",
    },
    {
      title: "Browse Projects to Prepare Future AI Roles",
    },
    {
      title: "Browse Projects to Understand Curriculum Topics",
    },
    {
      title: "Browse Projects By Grades",
    },
    {
      title: "Browse All Projects",
    },
  ];
  const [cardData, setCardData] = useState(data);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "2rem",alignItems:'center',justifyContent:'center' }}>
      {cardData.map((item) => {
        return (
          <motion.a href={`/type/${item.title}`}
            className="card"
            style={{
              width: "23rem",
              backgroundColor: "#D9EAF8",
              marginLeft: "2.5rem",
              marginTop: "2rem",
              height: "15rem",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "1px 1px 1px rgba(0,0,0,0.2)"
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
              rotate:-1
            }}
            transition={{
              type:"spring",
              duration:'0.5s'
            }}
          >
            <div className="card-body" style={{ padding: "0" }}>
              <h5
                style={{
                  textAlign: "center",
                  height: "3rem",
                  paddingTop: "0.5rem",
                  fontSize: "1.5rem",
                  backgroundColor: "#B8D7F0",
                }}
              >
              </h5>
              <div style={{textAlign:'center',fontSize:'1.3rem',fontWeight:'700',width:'85%',margin:'auto',paddingTop:'2rem'}}>
              {item.title}
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}

/*
let data = [
    {
      title: "Hands On Learning",
      content:
        "Opportunities to engage directly with concepts and ideas, project based learning like math’s activities and science experiments or participating in group discussions explore childrens  interests while applying what they have learned.",
    },
    {
      title: "Interactive Experiences",
      content:
        "Explore child’s curiosity and motivation to learn with Interest based activities such as role playing, art creation, or outdoor explorations. By participating in interactive experiences, kids can enhance their learning through direct involvement in the world around them.",
    },
    {
      title: "Creative projects",
      content:
        "Opportunities for kids to express their ideas and creativities. Creative projects to develop their skills in planning , organization and collaboration while bringing their ideas to life.",
    },
    {
      title: "Collaborative Learning",
      content:
        "Teamwork and cooperation allowing children to work together on assigned projects and activities, fostering critical thinking, potential discussions and problem solving. students learn to share ideas and enhance their understandings leading to build sense of community for future enviornment where teamwork and collaboration are vital to success.",
    },
    {
      title: "Why It Matters",
      content:
        "Project based learning, Interactive activities, and Incorporating engagement task into education is crucial for kids motivation and interest for learning. These approaches helps students to prepare for real world challenges by bridging the gap between theoretical knowledge and practical application ultimately leading to increase love for learning.",
    },
  ];
*/

/*
{cardData.map((item) => {
        return (
          <motion.a href={`/type/${item.title}`}
            className="card"
            style={{
              width: "23rem",
              backgroundColor: "#D9EAF8",
              marginLeft: "2.5rem",
              marginTop: "2rem",
              height: "20rem",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "1px 1px 1px rgba(0,0,0,0.2)"
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
              rotate:-2
            }}
            transition={{
              type:"spring",
              duration:'0.5s'
            }}
          >
            <div className="card-body" style={{ padding: "0" }}>
              <h5
                className="card-title"
                style={{
                  textAlign: "center",
                  height: "3rem",
                  paddingTop: "0.5rem",
                  fontSize: "1.5rem",
                  backgroundColor: "#B8D7F0",
                }}
              >
                {item.title}
              </h5>
              <p
                className="card-text"
                style={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  paddingTop: "0.5rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                }}
              >
                {item.content}
              </p>
            </div>
          </motion.a>
        );
      })}
*/