import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      CONTACT
    </motion.div>
  );
};

export default Contact;
