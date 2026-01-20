import { motion } from "framer-motion";
import { BsFillPersonFill } from "react-icons/bs";
import { MdBloodtype } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";

const AdminStatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {/* Card 1 */}
      <motion.div
        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <BsFillPersonFill className="text-4xl text-red-600 mb-4" />
        <h3 className="text-xl font-semibold">1000+ Users</h3>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <MdBloodtype className="text-4xl text-red-600 mb-4" />
        <h3 className="text-xl font-semibold">500+ Blood Requests</h3>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaAmbulance className="text-4xl text-red-600 mb-4" />
        <h3 className="text-xl font-semibold">20+ Ambulances</h3>
      </motion.div>
    </div>
  );
};

export default AdminStatsCards;
