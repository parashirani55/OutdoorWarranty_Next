// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function PageLoader() {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShow(false), 2000); // visible for 2s
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="flex flex-col items-center"
//           >
//             <Image
//               src="/assets/outdoowarranty-logo.svg"
//               alt="Outdoor Warranty"
//               width={120}
//               height={120}
//               className="object-contain mb-4"
//               priority
//             />

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="text-[#045C1C] text-lg font-semibold tracking-wide"
//             >
//               Loading your adventure...
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="mt-6 w-14 h-14 border-4 border-[#59d24f] border-t-transparent rounded-full"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
