import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Homeowner",
      content: "Felinum's laundry detergent has been a game-changer for our family. Clothes come out fresh and clean every time. Highly recommend!",
      rating: 5,
    },
    {
      name: "James K.",
      role: "Restaurant Owner",
      content: "We've been using Felinum's dish soap for our restaurant for over a year. The quality is consistent and the pricing is unbeatable.",
      rating: 5,
    },
    {
      name: "Mary O.",
      role: "Hotel Manager",
      content: "The bulk ordering option has saved us so much. Fast delivery and excellent customer service. Felinum is our go-to supplier.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Customers
            <br />
            <span className="text-gradient">Say About Us</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated p-8 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-secondary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
