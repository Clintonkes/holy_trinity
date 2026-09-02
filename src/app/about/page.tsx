import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';
import Link from 'next/link';

const values = [
{
  icon: 'ShieldCheckIcon',
  title: 'Reliability',
  description:
  'When we say we\'ll be there, we\'re there. Consistent scheduling and dependable service you can count on every season.'
},
{
  icon: 'StarIcon',
  title: 'Quality',
  description:
  'We don\'t cut corners, literally. Every edge, every stripe, every bed is finished to the highest standard before we leave.'
},
{
  icon: 'HeartIcon',
  title: 'Community',
  description:
  'Conesville is our home. We take pride in keeping our neighbors\' properties looking their best and supporting the community we live in.'
}];


const team = [
{
  name: 'Tyler Stelken',
  role: 'Owner & Lead Operator',
  image: "https://images.unsplash.com/photo-1717547183717-fec611c3de13",
  alt: 'Tyler Stelken, owner of Stel LLC lawncare, smiling outdoors in work attire',
  bio: 'Born and raised in the Conesville area, Tyler started Stel LLC with a simple goal: give every customer the same care he\'d want for his own yard. With years of hands-on experience, he personally oversees every job.'
},
{
  name: 'Marcus Webb',
  role: 'Senior Crew Member',
  image: "https://images.unsplash.com/photo-1659623203890-37b2e0be9070",
  alt: 'Marcus Webb, senior crew member at Stel LLC, standing in front of a green lawn',
  bio: 'Marcus brings precision and attention to detail to every property. Specializing in edging, trimming, and landscape cleanup, he\'s a cornerstone of the Stel LLC team.'
}];


const serviceAreas = [
'Conesville, IA',
'Wapello, IA',
'Columbus Junction, IA',
'Grandview, IA',
'Oakville, IA',
'Letts, IA'];


export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-subtle opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                Our Story
              </span>
              <h1 className="font-display font-bold text-section-title text-primary-foreground mb-6">
                About Stel LLC
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed">
                A local lawncare company built on hard work, honest pricing, and a genuine love for the craft, right here in Conesville, Iowa.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                  How It Started
                </span>
                <h2 className="font-display font-bold text-section-title text-foreground mb-6">
                  Rooted in<br />Conesville
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Stel LLC was founded with a straightforward mission: deliver professional-grade lawncare to homeowners and businesses in Conesville, Iowa and the surrounding communities, at a fair price, with no excuses.
                  </p>
                  <p>
                    What started as a one-person operation with a truck and a mower has grown into a trusted local service that hundreds of customers rely on every season. We know this land, we know this climate, and we know what it takes to keep Iowa lawns looking their best through hot summers, wet springs, and crisp fall seasons.
                  </p>
                  <p>
                    Every property we service gets the same attention we'd give our own. That's not a slogan, it's how we operate, every single day.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/services" className="btn-primary">
                    Our Services
                    <AppIcon name="ArrowRightIcon" size={16} />
                  </Link>
                  <Link href="/quote" className="btn-outline">
                    Get a Quote
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_105241732-1787871620368.png"
                    alt="Stel LLC crew member operating a professional lawn mower on a residential property in Iowa"
                    width={900}
                    height={700}
                    className="w-full h-auto object-cover" />
                  
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                  <p className="font-display font-bold text-4xl">5+</p>
                  <p className="text-sm text-primary-foreground/80 mt-1">Years Serving<br />Conesville</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                What We Stand For
              </span>
              <h2 className="font-display font-bold text-section-title text-foreground">
                Our Values
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) =>
              <div
                key={value.title}
                className="bg-card rounded-3xl p-8 border border-border service-card-hover">
                
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <AppIcon name={value.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                The People Behind the Work
              </span>
              <h2 className="font-display font-bold text-section-title text-foreground">
                Meet the Team
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {team.map((member) =>
              <div
                key={member.name}
                className="bg-card rounded-3xl overflow-hidden border border-border service-card-hover">
                
                  <div className="relative h-64 overflow-hidden">
                    <AppImage
                    src={member.image}
                    alt={member.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-top" />
                  
                  </div>
                  <div className="p-7">
                    <h3 className="font-display font-bold text-xl text-foreground">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm mt-1 mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                  Where We Work
                </span>
                <h2 className="font-display font-bold text-section-title text-primary-foreground mb-6">
                  Service Area
                </h2>
                <p className="text-primary-foreground/70 leading-relaxed mb-8">
                  Based in Conesville, Iowa, we proudly serve homeowners and businesses throughout Louisa County and neighboring communities. Not sure if we cover your area? Give us a call, we're always happy to discuss.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {serviceAreas.map((area) =>
                  <div key={area} className="flex items-center gap-2.5">
                      <AppIcon name="MapPinIcon" size={16} className="text-accent flex-shrink-0" />
                      <span className="text-primary-foreground/80 text-sm font-medium">{area}</span>
                    </div>
                  )}
                </div>
                <a href="tel:+15632728491" className="btn-primary">
                  <AppIcon name="PhoneIcon" size={16} />
                  Call +1 563 272 8491
                </a>
              </div>
              <div className="bg-card/10 rounded-3xl p-8 border border-white/10">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <AppIcon name="MapPinIcon" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold">Address</p>
                      <p className="text-primary-foreground/60 text-sm mt-0.5">113 N Todds Ferry RD<br />Conesville, IA 52739</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <AppIcon name="PhoneIcon" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold">Phone</p>
                      <a href="tel:+15632728491" className="text-primary-foreground/60 text-sm mt-0.5 hover:text-accent transition-colors">
                        +1 563 272 8491
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <AppIcon name="EnvelopeIcon" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold">Email</p>
                      <a href="mailto:stelllc1@proton.me" className="text-primary-foreground/60 text-sm mt-0.5 hover:text-accent transition-colors">
                        stelllc1@proton.me
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <AppIcon name="ClockIcon" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold">Hours</p>
                      <p className="text-primary-foreground/60 text-sm mt-0.5">
                        Mon to Fri: 7am to 6pm<br />
                        Sat: 8am to 4pm<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}