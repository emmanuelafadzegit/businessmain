import { CheckCircle, Truck, DollarSign, Package, Clock, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Trusted Quality",
      description: "Every product meets rigorous quality standards for effectiveness and safety.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Premium quality at competitive prices that fit every budget.",
    },
    {
      icon: Package,
      title: "Bulk & Retail",
      description: "Whether you need a single item or wholesale quantities, we've got you covered.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable and prompt delivery right to your doorstep.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Consistent stock availability so you never run out of essentials.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated support team ready to assist with any questions or concerns.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Felinum
            <br />
            <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're not just another supplier. We're your partner in maintaining 
            cleanliness and hygiene with products you can truly rely on.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-elevated p-8 h-full border border-transparent hover:border-secondary/20 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 hero-gradient rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5000+</div>
              <div className="text-white/70">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-white/70">Product Range</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
