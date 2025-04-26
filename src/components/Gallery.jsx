import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Gallery = () => {
  const imageUrls = [
    "https://images.pexels.com/photos/691152/pexels-photo-691152.jpeg",
    "https://images.pexels.com/photos/60713/coconut-coconut-tree-plant-60713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7299930/pexels-photo-7299930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1189507/pexels-photo-1189507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1108115/pexels-photo-1108115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  
  const galleryItems = imageUrls.map((url, i) => ({
    id: i + 1,
    title: `Gallery Image ${i + 1}`,
    category: ['Plants', 'Production', 'Products', 'Farm'][i % 4],
    image: url
  }));

  // Filter functionality
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];
  
  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        {/* Add dark mode text color class */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Product Gallery</h2>
        {/* Add dark mode text color class */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our collection of premium products and materials
        </p>
        
        {/* Filter buttons with dark mode support */}
        {/* <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                activeFilter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => {
          // Apply different animation settings to each item
          const { ref, isVisible } = useScrollAnimation({
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
            triggerOnce: true
          });

          return (
            <div
              key={item.id}
              ref={ref}
              className={`overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
              {/* Add dark mode support for card background */}
              <div className="p-6 bg-white dark:bg-gray-800">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.category}</span>
                  {/* Add dark mode text color class */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;