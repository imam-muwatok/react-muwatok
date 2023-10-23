import React from 'react'
import heroImage from '../assets/img/me.jpeg'
// src/assets/img/me.jpeg
const HomePage = () => {
  return (
    <>
      <section id="home" className="mt-20 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="">Halo Semua 👋, saya <span className="title">Muhammad Imam Muwatok</span></h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Web Developer & <span className="text-dark dark:text-slate-600">Content Creator</span></h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">Selamat datang di era Digitalisasi. <span className="text-dark font-bold dark:text-slate-600">Industri 4.0.!</span></p>

              <a id="contact" href="https://wa.me/6285156209761" target="_blank" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
            </div>

            <div className="w-full  px-4 lg:w-1/2 "> 
              <div className="relative -mt-20 lg:mt-9 lg:right-0">
                <img className="rounded-full animate-goyang w-60 mx-auto" src={'.'+heroImage} alt="Muhammad Imam Muwatok" />
                <span className="absolute bottom-0 -z-20 left-1/2 -translate-x-1/2">
                  <svg width="250" height="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4E54C8" d="M63.5,-18.2C70.9,2.1,57.7,31.6,35.5,47.4C13.2,63.2,-17.9,65.4,-39.5,50.6C-61.1,35.8,-73.1,4.1,-65,-17.4C-56.8,-38.8,-28.4,-50,-0.2,-49.9C28.1,-49.8,56.1,-38.6,63.5,-18.2Z" transform="translate(100 100) scale(1.4)"  />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default HomePage