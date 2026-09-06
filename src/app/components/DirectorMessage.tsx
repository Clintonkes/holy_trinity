import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function DirectorMessage() {
  return (
    <section className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0D7377] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A84C] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Director photo */}
          <div className="lg:col-span-2">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-[#142d52]">
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1ce067357-1772115209359.png"
                  alt="Dr. Onuorah Chester J.E., Medical Director of Holy Trinity Hospital, in professional attire"
                  className="w-full h-full object-cover object-top" />
                
              </div>
              {/* Name card overlay */}
              <div className="absolute -bottom-5 -right-5 bg-[#0D7377] rounded-xl p-5 shadow-2xl max-w-[220px]">
                <div className="text-[#F8FAFB] font-semibold text-sm leading-tight mb-1">
                  Dr. Onuorah Chester J.E.
                </div>
                <div className="text-[#C9A84C] text-xs font-medium">Medical Director</div>
                <div className="text-[rgba(248,250,251,0.6)] text-[10px] mt-1">MBBS, MNMA, MAGPMP, KSM, JP</div>
              </div>
            </div>
          </div>

          {/* Message content */}
          <div className="lg:col-span-3 lg:pl-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                From the Medical Director
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl text-[#F8FAFB] mb-6 leading-tight italic">
              "Our commitment is to every patient who walks through our doors."
            </h2>

            <p className="text-[rgba(248,250,251,0.7)] leading-relaxed mb-5">
              At Holy Trinity Hospital & Maternity Complex, we believe that quality healthcare is a right, not a privilege. Since our founding, we have worked tirelessly to build a medical institution that the people of Abakaliki and Ebonyi State can be proud of.
            </p>
            <p className="text-[rgba(248,250,251,0.7)] leading-relaxed mb-8">
              Our team of dedicated professionals brings not only clinical expertise but genuine compassion to every patient interaction. We continue to invest in modern equipment, staff training, and facility improvements to ensure we remain at the forefront of healthcare delivery in our region.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/team" className="btn-gold">
                Meet Our Team
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <Link href="/about" className="btn-outline-white">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}