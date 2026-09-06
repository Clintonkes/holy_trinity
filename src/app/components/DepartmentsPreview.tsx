import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const departments = [
  {
    name: 'Maternity & Obstetrics',
    description: 'Comprehensive prenatal, delivery, and postnatal care for mothers and newborns in a safe, supportive environment.',
    icon: 'HeartIcon',
    color: '#E8F5F5',
    accent: '#0D7377',
  },
  {
    name: 'General Medicine',
    description: 'Diagnosis and treatment of a wide range of medical conditions by experienced physicians.',
    icon: 'ClipboardDocumentListIcon',
    color: '#EEF2F8',
    accent: '#0B1F3A',
  },
  {
    name: 'Paediatrics',
    description: 'Dedicated child health services from newborn care through adolescence, with specialist paediatricians.',
    icon: 'UserGroupIcon',
    color: '#FDF6E8',
    accent: '#C9A84C',
  },
  {
    name: 'Surgery',
    description: 'General and specialized surgical procedures performed in our modern, fully-equipped operating theatres.',
    icon: 'BeakerIcon',
    color: '#F0F4F8',
    accent: '#0B1F3A',
  },
  {
    name: 'Laboratory Services',
    description: 'Accurate diagnostic testing with rapid turnaround times using state-of-the-art laboratory equipment.',
    icon: 'MagnifyingGlassIcon',
    color: '#E8F5F5',
    accent: '#0D7377',
  },
  {
    name: 'Pharmacy',
    description: 'Fully stocked in-house pharmacy providing prescribed medications and professional pharmaceutical advice.',
    icon: 'ShieldCheckIcon',
    color: '#FDF6E8',
    accent: '#C9A84C',
  },
];

export default function DepartmentsPreview() {
  return (
    <section className="py-24 bg-[#F0F4F8] bg-medical-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-line"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0D7377]">Our Departments</span>
            </div>
            <h2 className="font-display text-section-title text-[#0B1F3A]">
              Specialist Care<br />
              <span className="italic text-[#0D7377]">Across Every Discipline</span>
            </h2>
          </div>
          <Link href="/departments" className="btn-outline self-start md:self-auto flex-shrink-0">
            View All Departments
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Bento grid — varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments?.map((dept, idx) => (
            <div
              key={dept?.name}
              className={`dept-card-hover rounded-2xl p-7 border border-[#C8D8E8] bg-white ${
                idx === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: dept?.color }}
              >
                <Icon name={dept?.icon as any} size={22} style={{ color: dept?.accent }} />
              </div>
              <h3 className="font-semibold text-[#0B1F3A] text-lg mb-2.5">{dept?.name}</h3>
              <p className="text-sm text-[#4A6080] leading-relaxed">{dept?.description}</p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold" style={{ color: dept?.accent }}>
                Learn more
                <Icon name="ArrowRightIcon" size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
