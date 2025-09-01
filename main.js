import './style.css'
import './styles.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header id="header" class="sticky top-0 z-50 bg-white shadow-sm transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Company Title -->
          <div class="company-title text-2xl font-bold text-navy">
            🏠 Best Caregiving
          </div>
          
          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link text-gray-700 hover:text-navy transition-colors">Home</a>
            <a href="#services" class="nav-link text-gray-700 hover:text-navy transition-colors">Services</a>
            <a href="#about" class="nav-link text-gray-700 hover:text-navy transition-colors">About</a>
            <a href="#contact" class="nav-link text-gray-700 hover:text-navy transition-colors">Contact</a>
          </nav>
          
          <!-- Contact Button -->
          <div class="hidden md:block">
            <a href="tel:(310) 613-2162" class="bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Call (310) 613-2162
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-navy mb-6 fade-in">
            Compassionate Senior Care Services
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto fade-in">
            Professional, licensed, and insured caregiving services throughout Los Angeles. 
            We provide companion care, personal care, and medical assistance with excellence and dedication.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <a href="tel:(310) 613-2162" class="bg-gold text-navy px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors">
              Call Now: (310) 613-2162
            </a>
            <a href="#services" class="border-2 border-navy text-navy px-8 py-3 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-navy mb-4">Our Care Services</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive senior care services tailored to meet individual needs with compassion and professionalism.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="service-card bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div class="text-gold text-4xl mb-4">👥</div>
            <h3 class="text-xl font-semibold text-navy mb-3">Companion Care</h3>
            <p class="text-gray-600">Non-medical assistance including cooking, cleaning, medication reminders, transportation, and warm companionship.</p>
          </div>
          
          <div class="service-card bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div class="text-gold text-4xl mb-4">🛁</div>
            <h3 class="text-xl font-semibold text-navy mb-3">Personal Care</h3>
            <p class="text-gray-600">Assistance with daily living activities including bathing, dressing, grooming, and mobility support.</p>
          </div>
          
          <div class="service-card bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div class="text-gold text-4xl mb-4">🏥</div>
            <h3 class="text-xl font-semibold text-navy mb-3">Medical Care</h3>
            <p class="text-gray-600">Professional medical assistance including injections, IV therapy, medication administration, and specialized care.</p>
          </div>
          
          <div class="service-card bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div class="text-gold text-4xl mb-4">⏰</div>
            <h3 class="text-xl font-semibold text-navy mb-3">Respite Care</h3>
            <p class="text-gray-600">Temporary relief for family caregivers who need a break. Our caregivers step in to provide the same level of care, allowing family members to rest, run errands, or take time for themselves while knowing their loved one is in capable hands.</p>
            <p class="text-sm text-gray-500 italic mt-2">*Caregiving is provided, not professional care because we are not skilled nursing servicing.</p>
          </div>
          
          <div class="service-card bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div class="text-gold text-4xl mb-4">🌙</div>
            <h3 class="text-xl font-semibold text-navy mb-3">24/7 Care</h3>
            <p class="text-gray-600">Round-the-clock care services with live-in caregivers or rotating shift coverage for continuous support.</p>
          </div>
          
          <div class="service-card bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div class="text-gold text-4xl mb-4">🧠</div>
            <h3 class="text-xl font-semibold text-navy mb-3">Specialized Care</h3>
            <p class="text-gray-600">Expert care for dementia, Alzheimer's, Parkinson's, stroke recovery, and other specialized conditions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-softgray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
        </div>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-semibold text-navy mb-6">Get in Touch</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="text-gold text-2xl mr-4">📞</div>
                <div>
                  <p class="font-semibold text-navy">Phone</p>
                  <a href="tel:(310) 613-2162" class="text-gray-600 hover:text-gold">(310) 613-2162</a>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="text-gold text-2xl mr-4">✉️</div>
                <div>
                  <p class="font-semibold text-navy">Email</p>
                  <a href="mailto:info@atopnotchcaregiving.com" class="text-gray-600 hover:text-gold">info@atopnotchcaregiving.com</a>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="text-gold text-2xl mr-4">📍</div>
                <div>
                  <p class="font-semibold text-navy">Address</p>
                  <p class="text-gray-600">2221 Baleria Drive<br>San Pedro, CA 90732</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="text-gold text-2xl mr-4">🕒</div>
                <div>
                  <p class="font-semibold text-navy">Hours</p>
                  <p class="text-gray-600">Mon-Sat: 8AM-6PM<br>24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold text-navy mb-6">Service Areas</h3>
            <div class="grid grid-cols-2 gap-3 text-gray-600">
              <div>• South Bay</div>
              <div>• San Fernando Valley</div>
              <div>• Inland Empire</div>
              <div>• Rancho Palos Verdes</div>
              <div>• Manhattan Beach</div>
              <div>• Pacific Palisades</div>
              <div>• Beverly Hills</div>
              <div>• San Pedro</div>
            </div>
            
            <div class="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h4 class="font-semibold text-navy mb-2">Why Choose Us?</h4>
              <ul class="text-gray-600 space-y-1">
                <li>✓ 4.9/5 Star Rating</li>
                <li>✓ Licensed & Insured</li>
                <li>✓ 24/7 Emergency Service</li>
                <li>✓ Experienced Caregivers</li>
                <li>✓ Compassionate Care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-navy text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="company-title text-2xl font-bold mb-4">
            🏠 Best Caregiving
          </div>
          <p class="text-gray-300 mb-4">
            Senior Care Services • Licensed & Insured • Serving Los Angeles
          </p>
          <p class="text-gray-400 text-sm">
            © 2024 Best Caregiving. All rights reserved.
          </p>
          <p class="text-gray-300 text-sm mt-2 italic">
            Caregiving is afforded in excellence and utmost care.
          </p>
        </div>
      </div>
    </footer>
  </div>
`