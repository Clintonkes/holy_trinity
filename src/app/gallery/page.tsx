'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const galleryItems = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f070ca21-1779382472171.png",
  alt: 'Modern hospital reception area with clean white interior and professional staff',
  caption: 'Reception & Admissions',
  span: 'lg:col-span-2'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fd17d7e6-1772074816371.png",
  alt: 'Doctor consulting with patient in well-lit examination room',
  caption: 'Consultation Rooms',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_13b7dca12-1767487539809.png",
  alt: 'State-of-the-art hospital laboratory with diagnostic equipment',
  caption: 'Laboratory Services',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_17b31f995-1766761681684.png",
  alt: 'Maternity ward with comfortable beds and newborn care facilities',
  caption: 'Maternity Ward',
  span: ''
},
{
  src: "https://images.unsplash.com/photo-1676552051349-b80140de1a8e",
  alt: 'Nurse providing attentive care to patient in hospital ward',
  caption: 'Patient Care',
  span: 'lg:col-span-2'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_12c8956e3-1771349277997.png",
  alt: 'Medical team of doctors and nurses in hospital corridor',
  caption: 'Our Medical Team',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa42366d-1772077450524.png",
  alt: 'Senior doctor reviewing patient file in office',
  caption: 'Specialist Consultations',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a2ff17c6-1767605770477.png",
  alt: 'Hospital pharmacy with well-stocked shelves and pharmacist',
  caption: 'In-House Pharmacy',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a1ce6cc3-1767652852855.png",
  alt: 'Operating theatre with modern surgical equipment and lighting',
  caption: 'Surgical Theatre',
  span: 'lg:col-span-2'
}];


export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0B1F3A] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0D7377] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Gallery</span>
            </div>
            <h1 className="font-display text-section-title text-[#F8FAFB] mb-4">
              Our Facilities<br />
              <span className="italic text-[#C9A84C]">& Environment</span>
            </h1>
            <p className="text-[rgba(248,250,251,0.7)] max-w-xl leading-relaxed">
              A look inside Holy Trinity Hospital & Maternity Complex — modern facilities, compassionate care, and a healing environment.
            </p>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="py-16 bg-[#F0F4F8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryItems?.map((item, idx) =>
              <div
                key={idx}
                className={`group relative rounded-2xl overflow-hidden bg-[#E4EDF5] ${item?.span}`}>
                
                  <div className={`${item?.span ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden`}>
                    <img
                    src={item?.src}
                    alt={item?.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white font-semibold text-sm">{item?.caption}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white text-sm font-medium">{item?.caption}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-3xl text-[#0B1F3A] font-semibold mb-4">
              Experience Our Care <span className="italic text-[#0D7377]">in Person</span>
            </h2>
            <p className="text-[#4A6080] leading-relaxed mb-8">
              We invite you to visit Holy Trinity Hospital & Maternity Complex. Our team is ready to welcome you and provide the highest standard of care.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/appointments" className="btn-primary">
                Book an Appointment
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}