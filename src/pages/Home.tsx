import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-bakery-50 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Artisan Bread Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bakery-50/50 to-bakery-50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="block text-bakery-600 font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in-up">Est. 2024</span>
          <h1 className="text-5xl md:text-7xl font-bold text-bakery-900 mb-8 leading-tight animate-fade-in-up delay-100">
            Artisan Baking <br />
            <span className="italic font-serif text-bakery-700">Reimagined</span>
          </h1>
          <p className="text-xl text-bakery-800/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            We believe in the magic of flour, water, and time. Experience the taste of traditional sourdough and handcrafted pastries, baked fresh every morning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link 
              to="/about" 
              className="px-8 py-4 bg-bakery-800 text-white rounded-full font-medium hover:bg-bakery-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover Our Story
            </Link>
            <button className="px-8 py-4 bg-white text-bakery-800 border-2 border-bakery-200 rounded-full font-medium hover:border-bakery-800 hover:bg-bakery-50 transition-all">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 p-6 rounded-2xl hover:bg-bakery-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-bakery-100 rounded-full flex items-center justify-center mx-auto text-3xl mb-6">
                🌾
              </div>
              <h3 className="text-xl font-bold text-bakery-900">Organic Ingredients</h3>
              <p className="text-bakery-600 leading-relaxed">
                We partner with local farmers to source the finest organic grains and seasonal fruits for our baking.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-2xl hover:bg-bakery-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-bakery-100 rounded-full flex items-center justify-center mx-auto text-3xl mb-6">
                🕰️
              </div>
              <h3 className="text-xl font-bold text-bakery-900">Slow Fermentation</h3>
              <p className="text-bakery-600 leading-relaxed">
                Our sourdough rests for 48 hours, developing complex flavors and superior texture that can't be rushed.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-2xl hover:bg-bakery-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-bakery-100 rounded-full flex items-center justify-center mx-auto text-3xl mb-6">
                🖐️
              </div>
              <h3 className="text-xl font-bold text-bakery-900">Handcrafted Daily</h3>
              <p className="text-bakery-600 leading-relaxed">
                Every loaf, croissant, and tart is shaped by hand by our passionate team of artisan bakers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-bakery-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bakery-900 mb-4">Morning Favorites</h2>
            <div className="w-24 h-1 bg-bakery-800 mx-auto opacity-20"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Croissant" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-bakery-900">Classic Croissant</h3>
                  <span className="text-bakery-800 font-semibold">£3.50</span>
                </div>
                <p className="text-bakery-600 mb-6">27 layers of pure butter and dough, baked to a golden crisp.</p>
                <button className="w-full py-3 border border-bakery-200 text-bakery-800 rounded-lg hover:bg-bakery-800 hover:text-white transition-colors font-medium">
                  Add to Order
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1638788449271-9bb9121c1bfc?auto=format&fit=crop&w=800&q=80" 
                  alt="Sourdough" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-bakery-900">Country Loaf</h3>
                  <span className="text-bakery-800 font-semibold">£6.50</span>
                </div>
                <p className="text-bakery-600 mb-6">Our signature sourdough with whole wheat and rye flour blend.</p>
                <button className="w-full py-3 border border-bakery-200 text-bakery-800 rounded-lg hover:bg-bakery-800 hover:text-white transition-colors font-medium">
                  Add to Order
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1654458804283-0346fb703651?auto=format&fit=crop&w=800&q=80" 
                  alt="Danishes" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-bakery-900">Seasonal Danish</h3>
                  <span className="text-bakery-800 font-semibold">£4.25</span>
                </div>
                <p className="text-bakery-600 mb-6">Flaky pastry topped with vanilla custard and fresh market berries.</p>
                <button className="w-full py-3 border border-bakery-200 text-bakery-800 rounded-lg hover:bg-bakery-800 hover:text-white transition-colors font-medium">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-96 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Baked with Love</h2>
            <p className="text-xl font-light max-w-2xl mx-auto">"There is no love sincerer than the love of food."</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-bakery-900 mb-16">What Our Neighbors Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-bakery-50 p-8 rounded-2xl relative">
              <div className="text-6xl text-bakery-200 absolute -top-4 -left-2 font-serif">"</div>
              <p className="text-bakery-700 italic mb-6 relative z-10">
                The sourdough here is simply the best in the city. The crust is perfectly crunchy and the inside is soft and tangy. I come here every weekend!
              </p>
              <div className="font-bold text-bakery-900">- Sarah Jenkins</div>
            </div>
            <div className="bg-bakery-50 p-8 rounded-2xl relative">
              <div className="text-6xl text-bakery-200 absolute -top-4 -left-2 font-serif">"</div>
              <p className="text-bakery-700 italic mb-6 relative z-10">
                I ordered the croissant box for my office meeting and everyone was blown away. Truly authentic French quality right here in our neighborhood.
              </p>
              <div className="font-bold text-bakery-900">- Michael Ross</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
