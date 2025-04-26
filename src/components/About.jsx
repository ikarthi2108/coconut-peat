import { FaLeaf, FaRecycle, FaGlobeAmericas } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const titleAnimation = useScrollAnimation();
  const imageAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();
  
  // Create animation refs for each feature card
  const featureCards = [
    {
      icon: <FaLeaf className="text-secondary mb-4 text-3xl" />,
      title: "Sustainable",
      text: "Made from recycled coconut husks, reducing agricultural waste."
    },
    {
      icon: <FaRecycle className="text-secondary mb-4 text-3xl" />,
      title: "Renewable",
      text: "100% natural and biodegradable, perfect for organic gardening."
    },
    {
      icon: <FaGlobeAmericas className="text-secondary mb-4 text-3xl" />,
      title: "Eco-Friendly",
      text: "Reduces environmental impact with lower carbon footprint."
    }
  ];
  
  const cardAnimations = featureCards.map(() => useScrollAnimation());

  return (
    <section id="about" className="bg-white dark:bg-gray-900">
      <div className="section">
        <h2 
          ref={titleAnimation.ref}
          className={`section-title transition-all duration-700 ${
            titleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          About Our Company
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div 
            ref={imageAnimation.ref}
            className={`md:w-1/2 transition-all duration-1000 ${
              imageAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="w-full h-64 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden">
              {/* Placeholder for about image */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400 text-lg font-medium">Company Image</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentAnimation.ref}
            className={`md:w-1/2 transition-all duration-1000 ${
              contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-secondary-light">Our Journey in Sustainable Agriculture</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Founded in 2010, our company has been at the forefront of promoting sustainable growing practices through our premium coconut peat products. What started as a small operation has grown into a trusted supplier for farms, nurseries, and gardening enthusiasts worldwide.
            </p>
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              Our commitment to quality, sustainability, and innovation has positioned us as industry leaders in coconut-based growing media. We take pride in our eco-friendly production process that transforms coconut husks—a waste product—into a valuable resource for plants.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureCards.map((card, index) => (
                <div 
                  key={index}
                  ref={cardAnimations[index].ref}
                  className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg transition-all duration-700 ${
                    cardAnimations[index].isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {card.icon}
                  <h4 className="font-bold mb-2">{card.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;