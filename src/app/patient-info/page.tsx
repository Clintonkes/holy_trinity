import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const sections = [
  {
    title: 'Registering as a Patient',
    icon: 'UserPlusIcon',
    content: [
      'New patients should arrive at the reception desk with a valid ID (National ID, Driver\'s Licence, or Voter\'s Card).',
      'You will be required to complete a patient registration form with your personal and medical history details.',
      'A patient file will be created and assigned a unique patient number for all future visits.',
      'Please bring any previous medical records, test results, or referral letters from other healthcare providers.',
    ],
  },
  {
    title: 'Outpatient Services',
    icon: 'ClipboardDocumentListIcon',
    content: [
      'Outpatient consultations are available Monday to Friday (8:00 AM – 6:00 PM) and Saturday (9:00 AM – 2:00 PM).',
      'Walk-in patients are seen on a first-come, first-served basis. Appointments are prioritised.',
      'After consultation, patients may be referred for laboratory tests, imaging, or specialist review.',
      'Prescription medications are available from our in-house pharmacy.',
    ],
  },
  {
    title: 'Inpatient Admission',
    icon: 'BuildingOffice2Icon',
    content: [
      'Admission may be recommended by your attending physician following consultation.',
      'A deposit may be required at the time of admission. Please speak with our billing team for details.',
      'Visiting hours are 10:00 AM – 12:00 PM and 4:00 PM – 6:00 PM daily.',
      'Each patient is assigned a dedicated nurse and attending physician for the duration of their stay.',
    ],
  },
  {
    title: 'Maternity Services',
    icon: 'HeartIcon',
    content: [
      'Expectant mothers are encouraged to register for antenatal care as early as possible in their pregnancy.',
      'Antenatal clinics are held on specific days — please call us to confirm the schedule.',
      'Our maternity ward is equipped for normal deliveries and caesarean sections.',
      'Postnatal care and family planning services are available after delivery.',
    ],
  },
  {
    title: 'Laboratory & Diagnostics',
    icon: 'MagnifyingGlassIcon',
    content: [
      'Laboratory tests can be requested by your doctor or, for some tests, on a self-referral basis.',
      'Most routine test results are available within 24 hours.',
      'Fasting may be required for certain blood tests — your doctor will advise you.',
      'Results are communicated directly to your attending physician and discussed with you at your follow-up.',
    ],
  },
  {
    title: 'Billing & Payments',
    icon: 'CreditCardIcon',
    content: [
      'We accept cash payments at our billing desk.',
      'Itemised bills are provided for all services rendered.',
      'For inpatient admissions, a deposit is required upfront. The balance is settled upon discharge.',
      'For billing enquiries, please contact our accounts department during business hours.',
    ],
  },
];

export default function PatientInfoPage() {
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
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Patient Information</span>
            </div>
            <h1 className="font-display text-section-title text-[#F8FAFB] mb-4">
              Everything You Need<br />
              <span className="italic text-[#C9A84C]">to Know</span>
            </h1>
            <p className="text-[rgba(248,250,251,0.7)] max-w-xl leading-relaxed">
              Your guide to accessing care at Holy Trinity Hospital & Maternity Complex — from registration to discharge.
            </p>
          </div>
        </section>

        {/* Quick actions */}
        <div className="bg-[#0D7377] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/appointments" className="btn-gold text-sm py-2.5 px-5">
                <Icon name="CalendarDaysIcon" size={15} />
                Book Appointment
              </Link>
              <a href="tel:08032763199" className="btn-outline-white text-sm py-2.5 px-5">
                <Icon name="PhoneIcon" size={15} />
                Call 08032763199
              </a>
              <Link href="/contact" className="btn-outline-white text-sm py-2.5 px-5">
                <Icon name="EnvelopeIcon" size={15} />
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Info sections */}
        <section className="py-20 bg-[#F0F4F8] bg-medical-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {sections?.map((section) => (
                <div key={section?.title} className="bg-white rounded-2xl p-7 border border-[#C8D8E8]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#E4EDF5] flex items-center justify-center flex-shrink-0">
                      <Icon name={section?.icon as any} size={20} className="text-[#0D7377]" />
                    </div>
                    <h2 className="font-semibold text-[#0B1F3A] text-lg">{section?.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section?.content?.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-[#4A6080] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D7377] flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Emergency notice */}
            <div className="mt-8 bg-[#0B1F3A] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="ExclamationTriangleIcon" size={24} className="text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#F8FAFB] mb-1">Medical Emergency?</h3>
                  <p className="text-[rgba(248,250,251,0.65)] text-sm">Do not wait — call us immediately. Our emergency team is available 24 hours a day, 7 days a week.</p>
                </div>
              </div>
              <a href="tel:08032763199" className="btn-gold flex-shrink-0">
                <Icon name="PhoneIcon" size={16} />
                Call Now: 08032763199
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
