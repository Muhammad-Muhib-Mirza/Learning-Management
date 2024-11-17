import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';  // Using react-icons for the checkmark
import { Button } from "@chakra-ui/react";

const SuccessIcon = ({message}) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const iconVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="success-icon-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}
    >
        <h5>
            {message}
        </h5>
      <motion.div
        className="icon-circle"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <FiCheckCircle color="#4CAF50" size={50} />
      </motion.div>
      <Button mt={5} onClick={()=>window.location.href = '/'} >
        Go Back Home
      </Button>
    </motion.div>
  );
};

export default SuccessIcon;
