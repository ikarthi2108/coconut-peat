import { FaStar } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "அருண் குமார்",
      role: "தொழில்முறை தோட்டக்காரர்",
      content: "இரண்டாண்டுகளாக நான் என் வாடிக்கையாளர்களின் தோட்டங்களில் கோகோபீட் தயாரிப்புகளைப் பயன்படுத்தி வருகிறேன். தாவரங்கள் சிறப்பாக வளர்கின்றன, தண்ணீர் தேவையற்ற அளவு குறைகிறது, மேலும் ஆரோக்கியமான வளர்ச்சி காணப்படுகிறது. இது இப்போது எனது நம்பகமான வளர்ப்பு மீடியமாக இருக்கிறது.",
      rating: 5,
    },
    {
      id: 2,
      name: "முரளி தரன்",
      role: "ஹைட்ரோபொனிக் பண்ணையாளர்",
      content: "கோகோபீட் கிரோ பேக்குகளுக்கு மாறியதிலிருந்து எங்களது ஹைட்ரோபொனிக் விவசாயத்தில் 30% உற்பத்தி அதிகரித்துள்ளது. தயாரிப்பின் ஒருமித்த தன்மை மற்றும் சிறந்த வாடிக்கையாளர் சேவை எங்களை மீண்டும் மீண்டும் வாங்க வைக்கிறது.",
      rating: 5,
    },
    {
      id: 3,
      name: "கவிதா ரமேஷ்",
      role: "வீட்டு தோட்டக்காரர்",
      content: "தோட்டம் அமைப்பதில் புதியவராக இருப்பதால், எளிதாக பயன்படுத்தக்கூடிய மற்றும் பிழை திருத்தக்கூடிய ஒன்றை தேடியேன். கோகோபீட் பூந்தொட்டி கலவையை பயன்படுத்தியதிலிருந்து என் குடுவை தோட்டம் மிகவும் எளிதாக மாறியுள்ளது - குறைந்த முயற்சியிலேயே என் தாவரங்கள் சிறப்பாக வளர்கின்றன!",
      rating: 4,
    },
  ];
  
  // Section animation
  const sectionAnimation = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  return (
    <section 
      id="testimonials" 
      ref={sectionAnimation.ref}
      className={`bg-white dark:bg-gray-900 transition-opacity duration-700 ${
        sectionAnimation.isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="section">
        <h2 className="section-title">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            // Individual testimonial card animation
            const { ref, isVisible } = useScrollAnimation({
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px',
              triggerOnce: true
            });
            
            return (
              <div 
                key={testimonial.id} 
                ref={ref}
                className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm relative transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 right-0 -mt-4 mr-4 bg-white dark:bg-gray-700 rounded-full shadow-md p-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="italic text-gray-700 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full mr-4">
                    {/* Placeholder for avatar */}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-secondary-light">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;