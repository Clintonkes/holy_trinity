import React from 'react';

const stats = [
  { value: '20+', label: 'Years of Service', icon: '🏥' },
  { value: '15,000+', label: 'Patients Treated', icon: '❤️' },
  { value: '30+', label: 'Medical Specialists', icon: '👨‍⚕️' },
  { value: '24/7', label: 'Emergency Care', icon: '🚑' },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0D7377] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat) => (
            <div key={stat?.label} className="text-center">
              <div className="text-2xl mb-1">{stat?.icon}</div>
              <div className="text-3xl font-bold text-[#F8FAFB] font-display mb-1">{stat?.value}</div>
              <div className="text-sm text-[rgba(248,250,251,0.75)] font-medium">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
