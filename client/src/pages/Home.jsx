import { motion } from "framer-motion";
import Donation from "../assets/Donation.svg";
import { Link } from "react-router-dom";
import { BsDropletHalf } from "react-icons/bs";
import { MdOutlineBloodtype } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {  
  const testimonials = [
    {
      name: " Dr. Aryan Singh",
      quote: "Red-Flow saved my father's life. The request system is fast and reliable!",
    },
    {
      name: "Dr. Aaditya Kumar",
      quote: "I donated through Red-Flow and felt truly fulfilled. Great platform!",
    },
    {
      name: "Dr. Prakhar Patel",
      quote: "This system makes hospital coordination and blood management much easier.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-10">
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-4">
            Donate Blood, <span className="text-gray-700">Save Lives</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Join <span className="font-semibold text-red-500">Red-Flow</span> and be a hero. Help people in need, request blood, and connect with nearby blood banks.
          </p>
          <div className="flex gap-4">
            <Link
              to="/donate"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl shadow font-semibold transition"
            >
              Donate Now
            </Link>
            <Link
              to="/request"
              className="border border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-6 py-3 rounded-xl shadow font-semibold transition"
            >
              Request Blood
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={Donation}
            alt="Donate Blood"
            className="w-full max-w-md mx-auto animate-pulse"
          />
        </motion.div>
      </section>

      {/* Video Intro Section */}
      <section className="relative w-full bg-black">
        <video
          className="w-full h-[300px] md:h-[500px] object-cover brightness-75"
          src="/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h2
            className="text-2xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            One Drop Can Save a Life 💉
          </motion.h2>
          <p className="mt-4 text-lg max-w-xl">
            Discover how Red-Flow is transforming blood donation and emergency response across the country.
          </p>
          <Link
            to="/about"
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl shadow-xl border bg-red-50"
          >
            <BsDropletHalf className="text-red-600 text-4xl mb-2 mx-auto animate-bounce" />
            <h3 className="text-3xl font-bold text-red-600">
              <CountUp end={1200} duration={2} />+
            </h3>
            <p className="text-gray-600 text-lg">Active Donors</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl shadow-xl border bg-red-50"
          >
            <MdOutlineBloodtype className="text-red-600 text-4xl mb-2 mx-auto animate-pulse" />
            <h3 className="text-3xl font-bold text-red-600">
              <CountUp end={4500} duration={2.5} />+
            </h3>
            <p className="text-gray-600 text-lg">Requests Served</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl shadow-xl border bg-red-50"
          >
            <FaHandsHelping className="text-red-600 text-4xl mb-2 mx-auto animate-wiggle" />
            <h3 className="text-3xl font-bold text-red-600">
              <CountUp end={200} duration={2} />+
            </h3>
            <p className="text-gray-600 text-lg">Ambulance Partners</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-red-100 text-center">
        <h2 className="text-3xl font-bold mb-10 text-red-600">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto px-4">
          <Slider {...sliderSettings}>
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg italic text-gray-700 mb-4">“{t.quote}”</p>
                <h4 className="text-xl font-bold text-red-600">{t.name}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Motivational CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-red-600 text-white px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be the reason someone smiles today ❤️
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Whether you're donating blood or requesting it, Red-Flow is here to connect hearts and save lives every single day.
        </p>
        <Link
          to="/register"
          className="bg-white text-red-600 hover:bg-red-100 font-semibold px-8 py-3 rounded-full shadow-md transition"
        >
          Join Us Now
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
