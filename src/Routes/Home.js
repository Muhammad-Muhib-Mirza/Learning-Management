import ProjectCard from "../Component/ProjectsPage/ProjectCards";
import MidComponent from "../Component/HomePage/MidComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllCardData } from "../Slice";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .post("https://localhost:44365/api/Project/Project")
      .then((result) => {
        dispatch(setAllCardData(result.data.dataObject))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {/* <Lesson /> */}
      <MidComponent />
      <ProjectCard />
    </>
  );
}
