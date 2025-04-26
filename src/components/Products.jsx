import { FaShoppingCart } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Products = () => {
  const titleAnimation = useScrollAnimation();
  
  const products = [
    {
      id: 1,
      name: "Premium Coco Peat Block",
      description:
        "Compressed 5kg block that expands to 70L when hydrated. Perfect for general gardening and potting.",
      features: [
        "Low EC/PPM",
        "Excellent water retention",
        "Promotes healthy root growth",
      ],
      price: "$24.99",
      image:
        "https://images.pexels.com/photos/6157082/pexels-photo-6157082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Coco Peat Grow Bags",
      description:
        "Ready-to-use grow bags for vegetables and flowering plants. Great for limited spaces.",
      features: [
        "Pre-hydrated",
        "Contains beneficial microbes",
        "Drainage holes included",
      ],
      price: "$18.99",
      image:
        "https://images.pexels.com/photos/5608058/pexels-photo-5608058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Coco Peat Potting Mix",
      description:
        "Blended coco peat with organic nutrients, perfect for container plants and seedlings.",
      features: ["Ready-to-use", "Enriched with organic matter", "pH balanced"],
      price: "$12.99",
      image:
        "https://images.pexels.com/photos/8394655/pexels-photo-8394655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Fine Coco Peat",
      description:
        "Fine texture coco peat ideal for seed starting and propagation with excellent moisture retention.",
      features: ["Super fine texture", "Sterile medium", "Promotes germination"],
      price: "$15.99",
      image:
        "https://images.pexels.com/photos/4618548/pexels-photo-4618548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  // Create a product animation ref for each product
  const productAnimations = products.map(() => useScrollAnimation());

  return (
    <section id="products" className="bg-gray-50 dark:bg-gray-800">
      <div className="section">
        <h2 
          ref={titleAnimation.ref}
          className={`section-title transition-all duration-700 ${
            titleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Our Premium Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={productAnimations[index].ref}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                productAnimations[index].isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-primary dark:text-secondary-light">
                  {product.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {product.description}
                </p>

                <ul className="mb-4">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1"
                    >
                      <span className="mr-2 text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>

                {/* <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-primary dark:text-secondary-light">
                    {product.price}
                  </span>
                  <button className="btn btn-secondary text-sm px-4 py-2 flex items-center gap-2">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;