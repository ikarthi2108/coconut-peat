import { FaWater, FaSeedling, FaHome, FaBug, FaThermometerHalf, FaRegLightbulb } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Benefits = () => {
  const titleAnimation = useScrollAnimation();
  
  const benefits = [
    {
      icon: <FaWater className="text-4xl text-secondary" />,
      title: "Excellent Water Retention",
      description: "Holds up to 8-10 times its weight in water, reducing watering frequency and conserving resources."
    },
    {
      icon: <FaSeedling className="text-4xl text-secondary" />,
      title: "Enhanced Root Development",
      description: "Provides ideal aeration and drainage properties that promote stronger, healthier root systems."
    },
    {
      icon: <FaHome className="text-4xl text-secondary" />,
      title: "Lightweight",
      description: "Easy to handle and transport, making it perfect for rooftop gardens, balconies, and indoor use."
    },
    {
      icon: <FaBug className="text-4xl text-secondary" />,
      title: "Pest Resistant",
      description: "Naturally resistant to many common garden pests and diseases, reducing the need for chemical treatments."
    },
    {
      icon: <FaThermometerHalf className="text-4xl text-secondary" />,
      title: "Temperature Regulation",
      description: "Helps maintain consistent soil temperature, protecting plant roots from extreme heat and cold."
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-secondary" />,
      title: "Environmentally Friendly",
      description: "100% organic and biodegradable, making it a sustainable alternative to peat moss and synthetic media."
    }
  ];

  // Create animation refs for each benefit card
  const benefitAnimations = benefits.map(() => useScrollAnimation());

  return (
    <section id="benefits" className="bg-white dark:bg-gray-900">
      <div className="section">
        <h2 
          ref={titleAnimation.ref}
          className={`section-title transition-all duration-700 ${
            titleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Benefits of Coconut Peat
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              ref={benefitAnimations[index].ref}
              className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-secondary transition-all duration-500 hover:shadow-md ${
                benefitAnimations[index].isVisible 
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className={`mb-4 transform transition-all duration-700 ${
                benefitAnimations[index].isVisible ? 'scale-100' : 'scale-0'
              }`} style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary dark:text-secondary-light">{benefit.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;