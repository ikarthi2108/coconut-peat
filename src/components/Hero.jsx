import { FaArrowRight } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  // For the hero section, we want animations to start right away
  // so we set a lower threshold for earlier detection
  const titleAnimation = useScrollAnimation({ threshold: 0.01 });
  const descAnimation = useScrollAnimation({ threshold: 0.01 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.01 });
  const imageAnimation = useScrollAnimation({ threshold: 0.01 });

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 pb-32"
    >
      <div className="section flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 
            ref={titleAnimation.ref}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary dark:text-secondary-light transition-all duration-1000 ${
              titleAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            Premium Coconut Peat for Superior Plant Growth
          </h1>
          <p 
            ref={descAnimation.ref}
            className={`text-lg mb-8 text-gray-700 dark:text-gray-300 transition-all duration-1000 delay-200 ${
              descAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Eco-friendly, sustainable growing medium that enhances root development and improves soil quality for all your gardening needs.
          </p>
          <div 
            ref={ctaAnimation.ref}
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-400 ${
              ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              href="#products"
              className="btn btn-primary flex items-center gap-2"
            >
              Our Products <FaArrowRight />
            </a>
            <a
              href="#contact"
              className="btn border border-primary text-primary dark:border-secondary-light dark:text-secondary-light hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div 
          ref={imageAnimation.ref}
          className={`md:w-1/2 flex justify-center transition-all duration-1000 ${
            imageAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="w-full max-w-lg h-80 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/27282429/pexels-photo-27282429/free-photo-of-a-pile-of-brown-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Coconut Peat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Wave Shape Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-white dark:fill-gray-900"
        >
          <path d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,218.7C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;