import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const departments = [
  {
    name: 'Maternity & Obstetrics',
    description: 'Our maternity unit provides comprehensive care for expectant mothers from the first trimester through delivery and postnatal recovery. We offer antenatal clinics, skilled birth attendance, caesarean section facilities, and postnatal care in a warm, supportive environment.',
    services: ['Antenatal Clinics', 'Normal Delivery', 'Caesarean Section', 'Postnatal Care', 'Family Planning'],
    icon: 'HeartIcon',
    color: '#E8F5F5',
    accent: '#0D7377',
  },
  {
    name: 'General Medicine',
    description: 'Our general medicine department handles a broad spectrum of medical conditions. Experienced physicians conduct thorough assessments, order appropriate investigations, and develop personalised treatment plans for each patient.',
    services: ['Outpatient Consultations', 'Chronic Disease Management', 'Hypertension Care', 'Diabetes Management', 'Infectious Disease'],
    icon: 'ClipboardDocumentListIcon',
    color: '#EEF2F8',
    accent: '#0B1F3A',
  },
  {
    name: 'Paediatrics',
    description: 'Dedicated to the health and wellbeing of children from birth through adolescence. Our paediatricians provide routine check-ups, immunisations, and treatment for childhood illnesses in a child-friendly environment.',
    services: ['Newborn Care', 'Childhood Immunisation', 'Growth Monitoring', 'Paediatric Consultations', 'Nutritional Counselling'],
    icon: 'UserGroupIcon',
    color: '#FDF6E8',
    accent: '#C9A84C',
  },
  {
    name: 'Surgery',
    description: 'Our surgical department is equipped with modern operating theatres and staffed by experienced surgeons. We perform a range of general and specialist surgical procedures with a focus on patient safety and optimal outcomes.',
    services: ['General Surgery', 'Hernia Repair', 'Appendectomy', 'Wound Management', 'Minor Procedures'],
    icon: 'BeakerIcon',
    color: '#F0F4F8',
    accent: '#0B1F3A',
  },
  {
    name: 'Laboratory Services',
    description: 'Our fully equipped laboratory provides accurate diagnostic testing with rapid turnaround times. We handle a comprehensive range of tests to support clinical decision-making across all departments.',
    services: ['Full Blood Count', 'Urinalysis', 'Blood Chemistry', 'Microbiology', 'Pregnancy Tests'],
    icon: 'MagnifyingGlassIcon',
    color: '#E8F5F5',
    accent: '#0D7377',
  },
  {
    name: 'Pharmacy',
    description: 'Our in-house pharmacy is fully stocked with essential and specialist medications. Our qualified pharmacists provide professional dispensing services and medication counselling to all patients.',
    services: ['Prescription Dispensing', 'Medication Counselling', 'Drug Availability', 'Chronic Medication Supply', 'OTC Medications'],
    icon: 'ShieldCheckIcon',
    color: '#FDF6E8',
    accent: '#C9A84C',
  },
];

export default function DepartmentsPage() {
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Departments</span>
            </div>
            <h1 className="font-display text-section-title text-[#F8FAFB] mb-4">
              Our Medical<br />
              <span className="italic text-[#C9A84C]">Departments</span>
            </h1>
            <p className="text-[rgba(248,250,251,0.7)] max-w-xl leading-relaxed">
              Specialist care across every major medical discipline — delivered by experienced professionals in a modern, well-equipped facility.
            </p>
          </div>
        </section>

        {/* Departments list */}
        <section className="py-20 bg-[#F0F4F8] bg-medical-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="space-y-8">
              {departments?.map((dept, idx) => (
                <div
                  key={dept?.name}
                  className={`bg-white rounded-2xl border border-[#C8D8E8] overflow-hidden grid md:grid-cols-5 ${
                    idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon panel */}
                  <div
                    className="md:col-span-1 flex items-center justify-center p-10"
                    style={{ backgroundColor: dept?.color }}
                  >
                    <div className="text-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: dept?.accent + '20' }}
                      >
                        <Icon name={dept?.icon as any} size={32} style={{ color: dept?.accent }} />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: dept?.accent }}>
                        Dept. {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-4 p-8">
                    <h2 className="font-display text-2xl text-[#0B1F3A] font-semibold mb-3">{dept?.name}</h2>
                    <p className="text-[#4A6080] leading-relaxed mb-5">{dept?.description}</p>
                    <div className="mb-5">
                      <div className="text-xs font-semibold uppercase tracking-widest text-[#0D7377] mb-3">Services Offered</div>
                      <div className="flex flex-wrap gap-2">
                        {dept?.services?.map(s => (
                          <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#F0F4F8] text-[#0B1F3A] border border-[#C8D8E8]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link href="/appointments" className="btn-primary text-sm py-2.5 px-5">
                      <Icon name="CalendarDaysIcon" size={15} />
                      Book for this Department
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
