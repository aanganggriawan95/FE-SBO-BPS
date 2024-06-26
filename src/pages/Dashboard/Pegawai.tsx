import React, { useEffect, useState } from 'react';

import DefaultLayout from '../../layout/DefaultLayout';

const Pegawai: React.FC = () => {
  const smallImageUrl = '/img/smallGedung.jpg';
  const largeImageUrl = '/img/gedung2.png';

  const [imageUrl, setImageUrl] = useState(
    window.innerWidth < 768 ? smallImageUrl : largeImageUrl,
  );

  const updateImageUrl = () => {
    if (window.innerWidth < 768) {
      setImageUrl(smallImageUrl);
    } else {
      setImageUrl(largeImageUrl);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateImageUrl);
    return () => {
      window.removeEventListener('resize', updateImageUrl);
    };
  }, []);
  return (
    <DefaultLayout>
      <div>
        <div className="h-[300px] md:h-[498px]  relative">
          <img
            src={imageUrl}
            alt=""
            className="absolute z-[-1] w-full h-[300px] md:h-[498px] -rotate-1 scale-105"
          />
          <section className=" h-full ">
            <div className="relative z-[-1]  flex items-center h-full">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-center mb-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-none text-white">
                  Selamat Datang di Portal
                </h1>
                <h1 className="text-center mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-6xl">
                  Penilaian Kinerja Pegawai
                </h1>
                <p className="text-center italic text-white mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">
                  Perilaku kerja, Leadership, People, dan Sistem Budaya
                  Organisasi
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full bg-[#E9781A] border h-5"></div>
      {/*  */}
      <div className=" md:h-screen flex flex-col md:flex-row items-center justify-center gap-4 bg-white px-4 py-10">
        <div className="w-full  h-90 md:h-80 md:w-50 bg-white border  border-[#E9781A] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              className="rounded-t-lg h-75 md:h-67 w-full"
              src="/icon/terbaik.png"
              alt=""
            />
          </a>
          <div className="p-1 flex flex-col items-center justify-center text-sm font-bold text-black">
            <span>Iis irmawati, A.Md</span>
            <span>Pegawai Teladan Triwulan 1</span>
          </div>
        </div>
        <div className="w-full h-90 md:h-80 md:w-50 bg-white border  border-[#E9781A] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
          <a href="#">
            <img
              className="rounded-t-lg h-75 md:h-67 w-full"
              src="/icon/rahasia.png"
              alt=""
            />
          </a>
          <div className="p-1 flex flex-col items-center justify-center text-sm font-bold text-black">
            <span>Iis irmawati, A.Md</span>
            <span>Pegawai Teladan Triwulan 1</span>
          </div>
        </div>
        <div className="w-full md:h-80 md:w-50 bg-white border  border-[#E9781A] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              className="rounded-t-lg h-75 md:h-67 w-full"
              src="/icon/rahasia.png"
              alt=""
            />
          </a>
          <div className="p-1 flex flex-col items-center justify-center text-sm font-bold text-black">
            <span>Iis irmawati, A.Md</span>
            <span>Pegawai Teladan Triwulan 1</span>
          </div>
        </div>
        <div className="w-full h-90 md:h-80 md:w-50 bg-white border  border-[#E9781A] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              className="rounded-t-lg h-75 md:h-67 w-full"
              src="/icon/rahasia.png"
              alt=""
            />
          </a>
          <div className="p-1 flex flex-col items-center justify-center text-sm font-bold text-black">
            <span>Iis irmawati, A.Md</span>
            <span>Pegawai Teladan Triwulan 1</span>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126626.42103811342!2d107.99626824335937!3d-7.345401199999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5420d3c70f79%3A0x5c401c7e1b85986f!2sBPS%20Kabupaten%20Tasikmalaya!5e0!3m2!1sid!2sid!4v1719385012376!5m2!1sid!2sid"
          className="w-full h-96 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </DefaultLayout>
  );
};

export default Pegawai;
