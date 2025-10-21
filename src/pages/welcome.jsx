/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Welcome({ onOpenInvitation }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const FloatingHearts = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: -50,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute"
          >
            <Heart className="w-6 h-6 text-rose-300/40 fill-rose-300/40" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-rose-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-pink-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl"
        >
          <div className="backdrop-blur-sm bg-white/50 p-6 sm:p-10 md:p-12 rounded-2xl border border-rose-100/50 shadow-xl space-y-6 sm:space-y-8">
            {/* Top Decorative Element */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-3"
            >
              <div className="h-px w-12 sm:w-16 bg-rose-200/50" />
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400 fill-rose-400" />
              <div className="h-px w-12 sm:w-16 bg-rose-200/50" />
            </motion.div>

            {/* Bismillah */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <p className="text-2xl font-serif text-rose-900/90 leading-relaxed">
                Bismillahirrahmanirrahim
              </p>
              <div className="h-px w-20 sm:w-24 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-rose-900/80 leading-relaxed">
                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
              </p>
            </motion.div>

            {/* Main Message */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto">
                Dengan memohon rahmat dan ridho Allah SWT,
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto">
                Mohon do&apos;a restu Bapak/Ibu/Saudara/i dalam
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto">
                rangka melangsungkan pernikahan putra-putri kami:
              </p>
            </motion.div>

            {/* Bottom Decorative Line */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-3 pt-4"
            >
              <div className="h-px w-12 sm:w-16 bg-rose-200/50" />
              <div className="w-2 h-2 rounded-full bg-rose-300" />
              <div className="h-px w-12 sm:w-16 bg-rose-200/50" />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-4 sm:pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenInvitation}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Buka Undangan
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
