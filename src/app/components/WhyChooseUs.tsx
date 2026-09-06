import React from 'react';

const reasons = [
{
  title: 'Accredited Medical Facility',
  body: 'Fully registered and accredited by the Nigerian Medical Association, meeting all national standards for patient safety and clinical excellence.',
  stat: 'NMA Accredited'
},
{
  title: 'Experienced Specialists',
  body: 'Our team of over 30 medical professionals brings decades of combined experience across all major medical disciplines.',
  stat: '30+ Specialists'
},
{
  title: 'Modern Equipment',
  body: 'Equipped with contemporary diagnostic and treatment technology to ensure accurate diagnoses and effective treatment outcomes.',
  stat: 'Latest Technology'
},
{
  title: 'Patient-Centred Approach',
  body: 'Every patient receives individualised care plans, transparent communication, and compassionate support throughout their healthcare journey.',
  stat: '15,000+ Served'
}];


export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 bg-[#E4EDF5]">
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_16e8db769-1772087882096.png"
                    alt="Doctor consulting with patient in examination room"
                    className="w-full h-full object-cover" />
                  
                </div>
                <div className="rounded-2xl overflow-hidden h-32 bg-[#E4EDF5]">
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_10ddf65b4-1772151561170.png"
                    alt="Modern hospital laboratory equipment"
                    className="w-full h-full object-cover" />
                  
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-32 bg-[#E4EDF5]">
                  <img
                    src="https://images.unsplash.com/photo-1676046178490-4e3968092c5f"
                    alt="Nurse providing care to patient in hospital ward"
                    className="w-full h-full object-cover" />
                  
                </div>
                <div className="rounded-2xl overflow-hidden h-48 bg-[#E4EDF5]">
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_17b31f995-1766761681684.png"
                    alt="Maternity ward with newborn baby care"
                    className="w-full h-full object-cover" />
                  
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0D7377] text-white rounded-2xl px-6 py-4 shadow-xl text-center min-w-[180px]">
              <div className="text-2xl font-bold font-display">20+</div>
              <div className="text-xs text-[rgba(248,250,251,0.8)] mt-0.5">Years Serving Ebonyi State</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:pl-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-line"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0D7377]">Why Choose Us</span>
            </div>
            <h2 className="font-display text-section-title text-[#0B1F3A] mb-6">
              Healthcare You Can<br />
              <span className="italic text-[#0D7377]">Trust & Rely On</span>
            </h2>
            <p className="text-[#4A6080] leading-relaxed mb-10">
              At Holy Trinity Hospital & Maternity Complex, we combine medical expertise with genuine compassion. Our commitment to excellence means every patient receives the highest standard of care, from first consultation to full recovery.
            </p>

            <div className="space-y-5">
              {reasons?.map((reason, idx) =>
              <div key={reason?.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E4EDF5] flex items-center justify-center flex-shrink-0 font-bold text-[#0D7377] text-sm">
                    {String(idx + 1)?.padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1F3A] mb-1">{reason?.title}</h4>
                    <p className="text-sm text-[#4A6080] leading-relaxed">{reason?.body}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}