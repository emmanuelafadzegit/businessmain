import { Shield, Leaf, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "Every product undergoes rigorous quality testing to ensure excellence.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Committed to sustainable practices and environmentally safe ingredients.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your satisfaction drives everything we do, from formulation to delivery.",
    },
    {
      icon: Award,
      title: "Trusted Brand",
      description: "Years of experience delivering reliable cleaning solutions.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Cleanliness
              <br />
              <span className="text-gradient">Since Day One</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Felinum Limited was founded with a simple mission: to provide families and 
              businesses with premium-quality cleaning products that are both effective 
              and affordable. We believe everyone deserves access to products that keep 
              their spaces spotlessly clean and hygienically safe.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our commitment to quality starts with carefully sourced ingredients and 
              extends through our manufacturing process. Every bar of soap, every bottle 
              of detergent is crafted with care and tested to meet our exacting standards.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-accent/50 border border-border">
                <h3 className="font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To deliver exceptional hygiene solutions that protect and nurture families.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-accent/50 border border-border">
                <h3 className="font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm">
                  To be the most trusted name in household cleaning products across the region.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-elevated p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
