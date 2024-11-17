import React, { useEffect, useState } from "react";
import style from '../../Style/FilterContainer.module.css'
import Filter from "./ClassFilter";
import SubjectFilter from "./SubjectFilter";
import IndustryFilter from "./IndustryFilter";
import RoleFilter from "./RoleFilter";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Select,
  Input,
} from "@chakra-ui/react";
import axios from "axios";

const FilterModal = ({ handleFilterChange, handleClearFilter,classFilter,subjectFilter,roleFilter,industryFilter }) => {
  const { isOpen, onOpen, onClose } = useDisclosure() // From Chakra Ui
  const [classDiv, setClassDiv] = useState(false);
  const [subjectDiv, setSubjectDiv] = useState(false);
  const [roleDiv, setRoleDiv] = useState(false);
  const [industryDiv, setIndustryDiv] = useState(false);
  const [reset,setReset] = useState(false);
  const [grades,setGrades] = useState([]);
  const [roles,setRoles] = useState([]);
  const [industry,setIndustry] = useState([]);
  const [subjects,setSubjects] = useState([]);

  useEffect(()=>{
    axios.get("https://localhost:44365/api/Project/GetFilter").then((result)=>{
      const data = result.data;
      setRoles(data.dataObject.lstRoleFilter)
      setSubjects(data.dataObject.lstSubjectFilter)
      setIndustry(data.dataObject.lstIndustryFilter)
      setGrades(data.dataObject.lstGradeFilter)
    })
  },[])

  const clearAllFilter = () => {
    setReset(true)
    handleClearFilter();
    setTimeout(() => {
      setReset(false)
    }, 1000);
  };

  const animateVariant = {
    hidden: { display: "none", opacity: 0 },
    visible: { display: "flex", opacity: 1 },
  };
  return (
    <>
    <Box
      p={6}
      maxW="md"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      className={style.box}
    >
      <Flex direction="column" mb={6}>
        <Button
          colorScheme="red"
          variant="outline"
          size="sm"
          onClick={clearAllFilter}
        >
          Reset
        </Button>
      </Flex>

      <Flex direction="column" gap={4}>
        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem", cursor: "pointer", userSelect: "none" }}
          size="lg"
          mb={1}
          color="teal.500"
          onClick={() => setClassDiv(!classDiv)}
        >
          Search By Class{" "}
          <span style={{ fontSize: "1.1rem" }}>{classDiv ? "▲" : "▼"}</span>
        </Text>
        <motion.div
          variants={animateVariant}
          initial="hidden"
          animate={classDiv ? "visible" : "hidden"}
          transition={{
            duration: classDiv ? 0.4 : 0.2,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          <Filter handleFilterChange={handleFilterChange} reset={reset} data={grades} />
        </motion.div>

        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem", cursor: "pointer", userSelect: "none" }}
          size="lg"
          mb={1}
          color="teal.500"
          onClick={() => setSubjectDiv(!subjectDiv)}
        >
          Search By Subject{" "}
          <span style={{ fontSize: "1.1rem" }}>{subjectDiv ? "▲" : "▼"}</span>
        </Text>
        <motion.div
          variants={animateVariant}
          initial="hidden"
          animate={subjectDiv ? "visible" : "hidden"}
          transition={{
            duration: subjectDiv ? 0.4 : 0.2,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          <SubjectFilter handleFilterChange={handleFilterChange} reset={reset} data={subjects} />
        </motion.div>

        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem", cursor: "pointer", userSelect: "none" }}
          size="lg"
          mb={1}
          color="teal.500"
          onClick={() => setIndustryDiv(!industryDiv)}
        >
          Search By Industry{" "}
          <span style={{ fontSize: "1.1rem" }}>{industryDiv ? "▲" : "▼"}</span>
        </Text>
        <motion.div
          variants={animateVariant}
          initial="hidden"
          animate={industryDiv ? "visible" : "hidden"}
          transition={{
            duration: industryDiv ? 0.4 : 0.2,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          <IndustryFilter handleFilterChange={handleFilterChange} reset={reset} data={industry} />
        </motion.div>

        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem", cursor: "pointer", userSelect: "none" }}
          size="lg"
          mb={1}
          color="teal.500"
          onClick={() => {
            setRoleDiv(!roleDiv);
          }}
        >
          Search By Role{" "}
          <span style={{ fontSize: "1.1rem" }}>{roleDiv ? "▲" : "▼"}</span>
        </Text>
        <motion.div
          variants={animateVariant}
          initial="hidden"
          animate={roleDiv ? "visible" : "hidden"}
          transition={{
            duration: roleDiv ? 0.4 : 0.2,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          <RoleFilter handleFilterChange={handleFilterChange} reset={reset} data={roles} />
        </motion.div>
      </Flex>
    </Box>
    <div className={style.mobileContainer}>
    <Button onClick={onOpen}>Apply Search Filter</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
    <ModalCloseButton />
    <ModalBody>
    <Box
      p={6}
      maxW="md"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      mt={50}
    >
      <Flex direction="column" mb={6}>
        <Button
          colorScheme="red"
          variant="outline"
          size="sm"
          onClick={clearAllFilter}
        >
          Reset
        </Button>
      </Flex>

      <Flex direction="column" gap={4}>
        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem", cursor: "pointer", userSelect: "none" }}
          size="lg"
          mb={1}
          color="teal.500"
          onClick={() => setClassDiv(!classDiv)}
        >
          Search By Class{" "}
          <span style={{ fontSize: "1.1rem" }}>{classDiv ? "▲" : "▼"}</span>
        </Text>
        <motion.div
          variants={animateVariant}
          initial="hidden"
          animate={classDiv ? "visible" : "hidden"}
          transition={{
            duration: classDiv ? 0.4 : 0.2,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          <Filter handleFilterChange={handleFilterChange} reset={reset} classFilter={classFilter} data={grades} />
        </motion.div>

        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem", cursor: "pointer", userSelect: "none" }}
          size="lg"
          mb={1}
          color="teal.500"
          onClick={() => setSubjectDiv(!subjectDiv)}
        >
          Search By Subject{" "}
          <span style={{ fontSize: "1.1rem" }}>{subjectDiv ? "▲" : "▼"}</span>
        </Text>
        <motion.div
          variants={animateVariant}
          initial="hidden"
          animate={subjectDiv ? "visible" : "hidden"}
          transition={{
            duration: subjectDiv ? 0.4 : 0.2,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          <SubjectFilter handleFilterChange={handleFilterChange} reset={reset} subjectFilter={subjectFilter} data={subjects} />
        </motion.div>

        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem", cursor: "pointer", userSelect: "none" }}
          size="lg"
          mb={1}
          color="teal.500"
          onClick={() => setIndustryDiv(!industryDiv)}
        >
          Search By Industry{" "}
          <span style={{ fontSize: "1.1rem" }}>{industryDiv ? "▲" : "▼"}</span>
        </Text>
        <motion.div
          variants={animateVariant}
          initial="hidden"
          animate={industryDiv ? "visible" : "hidden"}
          transition={{
            duration: industryDiv ? 0.4 : 0.2,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          <IndustryFilter handleFilterChange={handleFilterChange} reset={reset} industryFilter={industryFilter} data={industry} />
        </motion.div>

        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem", cursor: "pointer", userSelect: "none" }}
          size="lg"
          mb={1}
          color="teal.500"
          onClick={() => {
            setRoleDiv(!roleDiv);
          }}
        >
          Search By Role{" "}
          <span style={{ fontSize: "1.1rem" }}>{roleDiv ? "▲" : "▼"}</span>
        </Text>
        <motion.div
          variants={animateVariant}
          initial="hidden"
          animate={roleDiv ? "visible" : "hidden"}
          transition={{
            duration: roleDiv ? 0.4 : 0.2,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          <RoleFilter handleFilterChange={handleFilterChange} reset={reset} roleFilter={roleFilter} data={roles} />
        </motion.div>
      </Flex>
    </Box>
    </ModalBody>
    <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
    </ModalContent>
    </Modal>
    </div>
    </>
  );
};

export default FilterModal;
