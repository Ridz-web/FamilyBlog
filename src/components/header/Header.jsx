import React from "react";
import "./Header.css";
import Family1 from "../../assets/Header/holidayFamily1.jpg";

const Header = () => {
  return (
    <>
      <div className='HeaderContainer min-h-[100dvh] grid grid-cols-2'>
        <div className='imageContainer w-full h-full'>
          <img src={Family1} alt='Family1' />
        </div>
        <div className='textContainer'>
          <h1 className='text-2xl md:text-4xl font-bold'>
            Holiday Family Blog
          </h1>
          <p className='text-sm md:text-base'>
            Dari pegunungan sejuk hingga pantai tropis, inilah kisah perjalanan
            kami sebagai keluarga yang mencintai petualangan.
          </p>
        </div>
        <div className='paperContainer text-center bg-amber-200'>
          <h1 className='text-2xl font-bold'>Note</h1>
          <p className='text-[13px] '>
            Liburan bersama keluarga bukan hanya soal ke mana kita pergi, tapi
            bagaimana kita merasakan setiap momen bersama. Lewat blog ini, aku
            ingin menyimpan semua kenangan kecil itu agar tak hilang ditelan
            waktu
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
