import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const values = [
{ title: 'Compassion', body: 'We treat every patient with empathy, dignity, and respect — because behind every case is a person who matters.' },
{ title: 'Excellence', body: 'We hold ourselves to the highest clinical standards, continuously improving our skills, facilities, and processes.' },
{ title: 'Integrity', body: 'Honest communication, transparent billing, and ethical practice are non-negotiable at Holy Trinity Hospital.' },
{ title: 'Community', body: 'We are deeply rooted in Abakaliki and Ebonyi State — our success is measured by the health of our community.' }];


const milestones = [
{ year: 'Founded', event: 'Holy Trinity Hospital & Maternity Complex established in Abakaliki, Ebonyi State.' },
{ year: 'Growth', event: 'Expanded maternity wing and added specialist paediatric and surgical departments.' },
{ year: 'Accreditation', event: 'Received full NMA accreditation, affirming our commitment to national healthcare standards.' },
{ year: 'Today', event: 'Serving over 15,000 patients annually with a team of 30+ medical professionals.' }];


export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-[#0B1F3A] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0D7377] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">About Us</span>
            </div>
            <h1 className="font-display text-section-title text-[#F8FAFB] mb-5">
              Our Story &<br />
              <span className="italic text-[#C9A84C]">Our Mission</span>
            </h1>
            <p className="text-[rgba(248,250,251,0.7)] max-w-xl leading-relaxed">
              Holy Trinity Hospital & Maternity Complex has been a cornerstone of healthcare in Abakaliki, Ebonyi State — built on faith, driven by excellence, and guided by compassion.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#F0F4F8] rounded-2xl p-8 border border-[#C8D8E8]">
                <div className="w-12 h-12 rounded-xl bg-[#0D7377] flex items-center justify-center mb-5">
                  <Icon name="EyeIcon" size={22} className="text-white" />
                </div>
                <h3 className="font-display text-2xl text-[#0B1F3A] font-semibold mb-3">Our Vision</h3>
                <p className="text-[#4A6080] leading-relaxed">
                  To be the leading healthcare institution in Ebonyi State — a centre of medical excellence that sets the standard for patient care, clinical outcomes, and community health in South-East Nigeria.
                </p>
              </div>
              <div className="bg-[#0D7377] rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                  <Icon name="HeartIcon" size={22} className="text-white" />
                </div>
                <h3 className="font-display text-2xl text-white font-semibold mb-3">Our Mission</h3>
                <p className="text-[rgba(255,255,255,0.8)] leading-relaxed">
                  To deliver accessible, compassionate, and world-class medical care to every patient — regardless of background — while fostering a culture of continuous learning and professional excellence among our staff.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-8">
                <span className="gold-line"></span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0D7377]">Our Core Values</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {values?.map((val, idx) =>
                <div key={val?.title} className="bg-[#F0F4F8] rounded-xl p-6 border border-[#C8D8E8]">
                    <div className="text-3xl font-bold text-[#C9A84C] font-display mb-3">
                      {String(idx + 1)?.padStart(2, '0')}
                    </div>
                    <h4 className="font-semibold text-[#0B1F3A] mb-2">{val?.title}</h4>
                    <p className="text-sm text-[#4A6080] leading-relaxed">{val?.body}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Medical Director */}
        <section className="py-20 bg-[#F0F4F8] bg-medical-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-10">
              <span className="gold-line"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0D7377]">Leadership</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#E4EDF5]">
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_105b7b2e3-1773018269462.png"
                    alt="Dr. Onuorah Chester J.E., Medical Director, standing in hospital corridor in white coat"
                    className="w-full h-full object-cover object-top" />
                  
                </div>
              </div>
              <div>
                <h2 className="font-display text-4xl text-[#0B1F3A] font-semibold mb-2">
                  Dr. Onuorah Chester J.E.
                </h2>
                <div className="text-[#0D7377] font-semibold mb-1">Medical Director</div>
                <div className="text-sm text-[#4A6080] mb-6 font-medium">MBBS, MNMA, MAGPMP, KSM, JP</div>
                <p className="text-[#4A6080] leading-relaxed mb-5">
                  Dr. Onuorah Chester J.E. is a highly distinguished medical professional with extensive experience in hospital administration and clinical practice. As Medical Director of Holy Trinity Hospital & Maternity Complex, he provides visionary leadership that has transformed the institution into one of Ebonyi State's most trusted healthcare providers.
                </p>
                <p className="text-[#4A6080] leading-relaxed mb-8">
                  His qualifications — MBBS, MNMA, MAGPMP, KSM, JP — reflect a career dedicated not only to medicine but to management excellence, community service, and professional distinction. Under his leadership, the hospital has achieved significant milestones in patient care quality and facility development.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/team" className="btn-primary">
                    Meet the Full Team
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                  <Link href="/appointments" className="btn-outline">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="gold-line"></span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0D7377]">Our Journey</span>
                <span className="gold-line"></span>
              </div>
              <h2 className="font-display text-section-title text-[#0B1F3A]">
                Milestones of <span className="italic text-[#0D7377]">Excellence</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-[#C8D8E8]" />
              <div className="space-y-8">
                {milestones?.map((m, idx) =>
                <div key={idx} className="flex gap-8 items-start">
                    <div className="w-16 h-16 rounded-full bg-[#0D7377] flex items-center justify-center flex-shrink-0 z-10 border-4 border-white shadow-md">
                      <span className="text-white font-bold text-xs text-center leading-tight px-1">{m?.year}</span>
                    </div>
                    <div className="bg-[#F0F4F8] rounded-xl p-5 border border-[#C8D8E8] flex-1 mt-2">
                      <p className="text-[#4A6080] leading-relaxed">{m?.event}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}