import React, { useRef } from "react";
import "./Blog.css";
import { motion, useInView } from "framer-motion";

const posts = [
  {
    title: "Liburan Keluarga di Pegunungan",
    description: "Udara sejuk dan pemandangan indah yang menenangkan hati.",
    image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg",
    size: "landscape-wide",
  },
  {
    title: "Petualangan di Pantai",
    description: "Ombak yang menyapa dan pasir yang menghangatkan kaki.",
    image:
      "https://media.istockphoto.com/id/2111340577/photo/a-family-run-hand-in-hand-down-a-tropical-paradise-beach-during-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=wvNra0Y4yB3OwYmfxtzjsXHLuPU3ShVMqML8CaTgaWg=",
    size: "landscape",
  },
  {
    type: "icon",
    icon: "🌴",
    size: "small",
  },
  {
    title: "Camping Seru Bersama Anak",
    description:
      "Tidur dalam tenda dan menyanyikan lagu di sekitar api unggun.",
    image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg",
    size: "portrait",
  },
  {
    type: "icon",
    icon: "🏕️",
    size: "small",
  },
  {
    title: "Bersepeda di Pedesaan",
    description: "Menjelajahi jalan kecil bersama keluarga tercinta.",
    image:
      "https://images.unsplash.com/photo-1727281624707-695f2cea7b28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlcnNlcGVkYSUyMGRpJTIwcGVkZXNhYW58ZW58MHx8MHx8fDA%3D",
    size: "landscape",
  },
  {
    title: "Menginap di Villa Tropis",
    description:
      "Villa dengan kolam renang pribadi dan pemandangan hutan tropis.",
    image: "https://images.pexels.com/photos/210557/pexels-photo-210557.jpeg",
    size: "portrait",
  },
  {
    title: "Makan Malam Outdoor",
    description: "Suasana hangat dan makanan lezat di bawah cahaya bintang.",
    image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
    size: "portrait",
  },
  {
    title: "Kebun Raya Family Time",
    description: "Belajar tentang flora sambil berpiknik.",
    image:
      "https://images.unsplash.com/photo-1712914814029-51a4e8eac5c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VidW4lMjByYXlhfGVufDB8fDB8fHww",
    size: "portrait",
  },
  {
    title: "Liburan ke Kota Tua",
    description: "Menjelajahi bangunan bersejarah dan kuliner tempo dulu.",
    image:
      "https://media.istockphoto.com/id/1295286606/photo/a-weekend-getaway.webp?a=1&b=1&s=612x612&w=0&k=20&c=i_rAq4bxTMXZ9uIWlHizXGSxGGxqfgSJluVhbko97MA=",
    size: "landscape-wide",
  },
];

function Blog() {
  return (
    <section className='bento-wrapper'>
      <h1 className='bento-title'>Blog Liburan Keluarga</h1>
      <p className='blog-note'>
        Catatan perjalanan yang penuh keceriaan, tawa, dan kebersamaan bersama
        keluarga tercinta.
      </p>
      <div className='bento-grid'>
        {posts.map((post, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          const motionProps = {
            ref,
            initial: { opacity: 0, scale: 0.8, y: 40 },
            animate: isInView ? { opacity: 1, scale: 1, y: 0 } : {},
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.05,
              type: "spring",
              stiffness: 100,
              damping: 15,
            },
          };

          if (post.type === "icon") {
            return (
              <motion.div
                {...motionProps}
                key={index}
                className={`icon-card ${post.size}`}>
                <span style={{ fontSize: 48 }}>{post.icon}</span>
              </motion.div>
            );
          }

          return (
            <motion.div
              {...motionProps}
              key={index}
              className={`bento-card ${post.size}`}>
              <img src={post.image} alt={post.title} className='bento-image' />
              <div className='bento-overlay'>
                <h2 className='bento-heading'>{post.title}</h2>
                <p className='bento-desc'>{post.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;
