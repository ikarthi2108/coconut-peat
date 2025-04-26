import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  // Section animation
  const sectionAnimation = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });
  
  // Animation for left column (Contact Info)
  const leftColAnimation = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });
  
  // Animation for right column (Contact Form)
  const rightColAnimation = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });
  
  // Animation for the contact info items
  const contactItems = [
    useScrollAnimation({ threshold: 0.1, rootMargin: '0px', triggerOnce: true }),
    useScrollAnimation({ threshold: 0.1, rootMargin: '0px', triggerOnce: true }),
    useScrollAnimation({ threshold: 0.1, rootMargin: '0px', triggerOnce: true })
  ];
  
  // Animation for map
  const mapAnimation = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true
  });

  return (
    <section 
      id="contact" 
      ref={sectionAnimation.ref} 
      className={`bg-gray-50 dark:bg-gray-800 transition-opacity duration-700 ${
        sectionAnimation.isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="section">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            ref={leftColAnimation.ref}
            className={`transition-all duration-700 transform ${
              leftColAnimation.isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-secondary-light">Contact Information</h3>

            <div className="space-y-6">
              <div 
                ref={contactItems[0].ref}
                className={`flex items-start transition-all duration-500 ${
                  contactItems[0].isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="flex-shrink-0 bg-primary dark:bg-secondary p-3 rounded-full mr-4">
                  <FaPhone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-700 dark:text-gray-300">+91 9123456778</p>
                </div>
              </div>

              <div 
                ref={contactItems[1].ref}
                className={`flex items-start transition-all duration-500 ${
                  contactItems[1].isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="flex-shrink-0 bg-primary dark:bg-secondary p-3 rounded-full mr-4">
                  <FaEnvelope className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-700 dark:text-gray-300">info@cocopeat-gmail.com</p>
                </div>
              </div>

              <div 
                ref={contactItems[2].ref}
                className={`flex items-start transition-all duration-500 ${
                  contactItems[2].isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex-shrink-0 bg-primary dark:bg-secondary p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    123 Coconut Way<br />
                    Kolachal<br />
                    Kanyakumari
                  </p>
                </div>
              </div>
            </div>

            {/* Company Location Map Image */}
            <div 
              ref={mapAnimation.ref}
              className={`mt-8 h-64 overflow-hidden rounded-lg shadow-md transition-all duration-700 ${
                mapAnimation.isVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <img
                src="https://images.pexels.com/photos/7235797/pexels-photo-7235797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Company Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={rightColAnimation.ref}
            className={`transition-all duration-700 transform ${
              rightColAnimation.isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-secondary-light">Send Us a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary-light focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary-light focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary-light focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-secondary-light focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-full transition-transform duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;