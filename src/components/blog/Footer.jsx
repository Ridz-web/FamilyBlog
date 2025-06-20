// File: Footer.jsx
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-gray-100 py-8 mt-10 border-t border-gray-200'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-center md:text-left'>
          <h2 className='text-lg font-semibold text-gray-800'>Ridz Blog</h2>
          <p className='text-sm text-gray-500 mt-1'>
            Menulis tentang perjalanan, teknologi, dan kehidupan keluarga.
          </p>
        </div>

        <div className='flex space-x-4 text-gray-600'>
          <a
            href='https://github.com/Ridz-Web'
            target='_blank'
            rel='noopener noreferrer'>
            <FaGithub size={20} className='hover:text-gray-900 transition' />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaInstagram size={20} className='hover:text-pink-500 transition' />
          </a>
          <a
            href='https://www.linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaLinkedin size={20} className='hover:text-blue-600 transition' />
          </a>
        </div>
      </div>

      <div className='mt-6 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} Ridz Blog. Dibuat dengan{" "}
        <FaHeart className='inline text-red-500' /> oleh Ridz.
      </div>
    </footer>
  );
}

export default Footer;
