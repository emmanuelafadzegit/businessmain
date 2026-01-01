import { useState } from "react";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "soaps", name: "Soaps" },
    { id: "detergents", name: "Detergents" },
    { id: "cleaners", name: "Cleaners" },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Bar Soap",
      category: "soaps",
      description: "Gentle cleansing with moisturizing formula",
      price: "From $2.50",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Liquid Hand Soap",
      category: "soaps",
      description: "Antibacterial protection with fresh scent",
      price: "From $4.00",
      color: "from-teal-400 to-teal-600",
    },
    {
      id: 3,
      name: "Laundry Detergent",
      category: "detergents",
      description: "Powerful stain removal, gentle on fabrics",
      price: "From $8.00",
      color: "from-green-400 to-green-600",
    },
    {
      id: 4,
      name: "Dish Washing Liquid",
      category: "detergents",
      description: "Cuts through grease, protects hands",
      price: "From $3.50",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 5,
      name: "Multi-Surface Cleaner",
      category: "cleaners",
      description: "All-purpose cleaning for every surface",
      price: "From $5.00",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 6,
      name: "Disinfectant Spray",
      category: "cleaners",
      description: "Kills 99.9% of germs and bacteria",
      price: "From $6.50",
      color: "from-red-400 to-red-600",
    },
    {
      id: 7,
      name: "Medicated Soap",
      category: "soaps",
      description: "Dermatologist recommended formula",
      price: "From $3.00",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      id: 8,
      name: "Fabric Softener",
      category: "detergents",
      description: "Long-lasting freshness for your clothes",
      price: "From $5.50",
      color: "from-pink-400 to-pink-600",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Cleaning
            <br />
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our range of high-quality soaps, detergents, and cleaning products
            designed to keep your home fresh and hygienic.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-accent border border-border"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="card-elevated overflow-hidden group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Product Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${product.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/30" />
                  </div>
                </div>
                {/* Bubbles decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20" />
                <div className="absolute bottom-8 left-4 w-6 h-6 rounded-full bg-white/15" />
                <div className="absolute top-12 left-8 w-4 h-4 rounded-full bg-white/10" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-bold">{product.price}</span>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-primary hover:text-secondary transition-colors"
                  >
                    Order →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? We offer custom bulk orders.
          </p>
          <a href="#contact" className="btn-hero-primary inline-flex">
            Contact for Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
