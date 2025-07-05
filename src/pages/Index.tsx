
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    agreeContact: false
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Evidence-based approaches including cognitive-behavioral therapy and mindfulness techniques to help you manage anxiety, reduce stress, and develop effective coping strategies for daily challenges.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Relationship Counseling",
      description: "Support for individuals and couples to strengthen communication, resolve conflicts, and build deeper emotional connections. Whether working through relationship challenges or enhancing existing bonds.",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Trauma Recovery",
      description: "Compassionate, trauma-informed care using evidence-based approaches to help you process difficult experiences, heal from past wounds, and reclaim your sense of safety and empowerment.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "I am currently out-of-network with insurance providers, but I provide a detailed superbill that you can submit to your insurance company for potential reimbursement. Many clients find this arrangement provides more flexibility in treatment while still receiving some financial support from their insurance."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, I offer secure virtual sessions via Zoom for clients who prefer the convenience of meeting from home or are unable to meet in person. All virtual sessions are conducted through HIPAA-compliant platforms to ensure your privacy and confidentiality."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour advance notice for session cancellations or rescheduling. This policy allows me to offer the time slot to other clients who may need it. Cancellations with less than 24 hours notice may be subject to the full session fee."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif text-xl text-gray-800">Dr. Serena Blake, PsyD</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">Services</a>
              <a href="#faq" className="text-gray-600 hover:text-teal-600 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Psychological Care for<br />
            Change, Insight, and Well-Being
          </h1>
          <p className="text-lg sm:text-xl mb-12 font-light max-w-3xl mx-auto">
            Offering individual psychotherapy for adults via telehealth in California and most U.S. states through PSYPACT participation
          </p>
          <a 
            href="#contact"
            className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-8">About Dr. Serena Blake</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
                <p>
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive. Her approach integrates the latest research in psychology with deep respect for each client's unique journey and personal strengths.
                </p>
                <p>
                  Dr. Blake believes that therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. She helps individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Serena Blake"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-6">How I Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I offer comprehensive psychological services tailored to meet your unique needs and support your journey toward healing and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-teal-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Here are answers to some common questions about therapy and my practice.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800 text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="(555) 234-5678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  What brings you here? *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Time *
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                />
                <p className="text-sm text-gray-500 mt-1">Let us know when you're typically available for a call or consultation</p>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeContact"
                  name="agreeContact"
                  checked={formData.agreeContact}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="agreeContact" className="ml-3 block text-sm text-gray-700">
                  I agree to be contacted by Dr. Serena Blake regarding my inquiry. I understand that this form is not for emergencies or crisis situations. *
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Dr. Serena Blake, PsyD</h3>
              <p className="text-gray-300 leading-relaxed">
                Licensed Clinical Psychologist<br />
                8 years of experience, 500+ sessions
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Contact Information</h4>
              <div className="text-gray-300 space-y-2">
                <p>Phone: (323) 555-0192</p>
                <p>Email: serena@blakepsychology.com</p>
                <p>Address: 1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Office Hours</h4>
              <div className="text-gray-300 space-y-2">
                <p><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</p>
                <p><strong>Virtual (Zoom):</strong> Mon, Wed & Fri, 1 PM–5 PM</p>
                <div className="mt-4">
                  <p className="font-medium">Session Fees:</p>
                  <p>Individual: $200 | Couples: $240</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dr. Serena Blake. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
