/* eslint-disable react/prop-types */
import { Calendar, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";

export default function Hero() {
  const [guestName, setGuestName] = useState("");
  const [vw, setVw] = useState(360);
  const [vh, setVh] = useState(640);

  const heroImage = config?.assets?.heroImage || "/images/wedding-couple.jpg";
  const couplePortrait =
    config?.assets?.couplePortrait || "/images/couple-portrait.png";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("to");
    console.log("guestParam:", guestParam);
    if (guestParam) {
      try {
        // const decodedName = safeBase64.decode(guestParam);
        setGuestName(guestParam);
      } catch (error) {
        console.error("Error decoding guest name:", error);
        setGuestName("");
      }
    }
  }, []);

  // aman untuk SSR: baru baca window saat client
  useEffect(() => {
    const update = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) return {};
      return {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
      return () => clearInterval(timer);
    }, [targetDate]);

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {Object.keys(timeLeft).map((interval) => (
          <motion.div
            key={interval}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100"
          >
            <span className="text-xl sm:text-2xl font-bold text-rose-600">
              {timeLeft[interval]}
            </span>
            <span className="text-xs text-gray-500 capitalize">{interval}</span>
          </motion.div>
        ))}
      </div>
    );
  };

  const FloatingHearts = () => {
    // pre-generate posisi biar konsisten & aman SSR
    const seeds = useMemo(
      () =>
        Array.from({ length: 8 }, () => ({
          x: Math.random(),
          delay: Math.random() * 0.8,
          size: 8 + Math.floor(Math.random() * 2),
          colorIdx: Math.floor(Math.random() * 3),
        })),
      []
    );

    const colorClass = (idx) =>
      idx === 0
        ? "text-rose-400"
        : idx === 1
          ? "text-pink-400"
          : "text-red-400";

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {seeds.map((s, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: s.x * vw,
              y: vh,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              x: s.x * vw,
              y: -100,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8 + s.delay,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Heart
              className={`w-${s.size} h-${s.size} ${colorClass(s.colorIdx)}`}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center relative overflow-hidden"
      >
        {/* --- Background foto pasangan + overlay halus --- */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pasangan pengantin"
            className="w-full h-full object-cover opacity-20 md:opacity-25"
            loading="eager"
            decoding="async"
          />
          {/* Overlay gradasi supaya teks tetap kebaca */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mx-auto"
          >
            <span className="px-4 py-1 text-sm bg-rose-50 text-rose-600 rounded-full border border-rose-200">
              Catat Tanggal Penting Ini
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 font-light italic text-base sm:text-lg"
            >
              Insyaallah kami yang akan menikah
            </motion.p>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-3xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600"
            >
              {config.data.groomName} <br /> & <br /> {config.data.brideName}
            </motion.h2>
          </div>

          {/* --- Potret pasangan bulat di atas kartu --- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative mx-auto -mb-3"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full ring-4 ring-white shadow-lg overflow-hidden">
              <img
                src={couplePortrait}
                alt="Potret calon pengantin"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* dekorasi cahaya */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -inset-4 blur-2xl bg-rose-200/30 rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-white/50 backdrop-blur-md rounded-2xl" />

            <div className="relative px-4 sm:px-8 py-8 sm:py-10 rounded-2xl border border-rose-100/50 bg-white/60">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
                <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
              </div>

              <div className="space-y-6 text-center">
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4 text-rose-400" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {formatEventDate(config.data.date, "full")}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Clock className="w-4 h-4 text-rose-400" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {config.data.time}
                    </span>
                  </motion.div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 sm:w-12 bg-rose-200/50" />
                  <div className="w-2 h-2 rounded-full bg-rose-200" />
                  <div className="h-px w-8 sm:w-12 bg-rose-200/50" />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="space-y-2"
                >
                  <p className="text-gray-500 font-serif italic text-sm">
                    Kepada Yth.
                  </p>
                  <p className="text-gray-600 font-medium text-sm">
                    Bapak/Ibu/Saudara/i
                  </p>
                  <p className="text-rose-500 font-semibold text-lg capitalize">
                    {guestName ? guestName : "Tamu"}
                  </p>
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px">
                <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
              </div>
            </div>

            <div className="absolute -top-2 -right-2 w-16 sm:w-24 h-16 sm:h-24 bg-rose-100/20 rounded-full blur-xl" />
            <div className="absolute -bottom-2 -left-2 w-16 sm:w-24 h-16 sm:h-24 bg-rose-100/20 rounded-full blur-xl" />
          </motion.div>

          <CountdownTimer targetDate={config.data.date} />

          <div className="pt-6 relative">
            <FloatingHearts />
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart
                className="w-10 sm:w-12 h-10 sm:h-12 text-rose-500 mx-auto"
                fill="currentColor"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
