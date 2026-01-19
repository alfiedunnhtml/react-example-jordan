import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-bakery-900 mb-6">Our Story</h1>
          <p className="text-xl text-bakery-600 leading-relaxed">
            From a tiny home kitchen to your favorite neighborhood spot, here is how Jordan's Bakery came to be.
          </p>
        </div>
      </div>

      {/* Story Section 1 */}
      <section className="mb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-bakery-200 rounded-2xl transform -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1612884610549-ce221d92514a?auto=format&fit=crop&w=1000&q=80" 
                alt="Bakers at work" 
                className="relative rounded-xl shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-bakery-900">The Beginning</h2>
              <div className="w-16 h-1 bg-bakery-800"></div>
              <p className="text-bakery-700 leading-relaxed">
                It all started in 2024 with a sourdough starter named "Bubbles" and a dream. Jordan, a former software engineer, found solace in the slow, rhythmic process of bread making during the weekends.
              </p>
              <p className="text-bakery-700 leading-relaxed">
                What began as a hobby quickly turned into an obsession. Friends and neighbors started asking for loaves, and soon, the demand outgrew the capacity of a standard home oven.
              </p>
              <p className="text-bakery-700 leading-relaxed">
                With a leap of faith and the support of the community, we opened our doors to share the joy of real bread with everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2 */}
      <section className="bg-bakery-50 py-24 mb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
             <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-bakery-900">Our Philosophy</h2>
              <div className="w-16 h-1 bg-bakery-800"></div>
              <p className="text-bakery-700 leading-relaxed">
                We believe in transparency and quality. We know exactly where our flour comes from (local millers), where our butter is churned, and who grows our berries.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-bakery-200 flex items-center justify-center text-bakery-800 font-bold">1</span>
                  <span className="text-bakery-800 font-medium">No artificial preservatives, ever.</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-bakery-200 flex items-center justify-center text-bakery-800 font-bold">2</span>
                  <span className="text-bakery-800 font-medium">100% Organic flour from local farms.</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-bakery-200 flex items-center justify-center text-bakery-800 font-bold">3</span>
                  <span className="text-bakery-800 font-medium">Baking in small batches for freshness.</span>
                </li>
              </ul>
            </div>
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-bakery-200 rounded-2xl transform rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Flour texture" 
                className="relative rounded-xl shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team/Info Grid */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-bakery-100 shadow-sm text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-bakery-900 mb-2">Visit Us</h3>
            <p className="text-bakery-600">
              42 High Street<br />
              London, SW1A 1AA
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-bakery-100 shadow-sm text-center">
            <div className="text-4xl mb-4">🕒</div>
            <h3 className="text-xl font-bold text-bakery-900 mb-2">Opening Hours</h3>
            <p className="text-bakery-600">
              Mon - Fri: 8am - 5pm<br />
              Sat - Sun: 9am - 4pm
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-bakery-100 shadow-sm text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-bakery-900 mb-2">Contact</h3>
            <p className="text-bakery-600">
              +44 20 7123 4567<br />
              hello@jordansbakery.co.uk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
