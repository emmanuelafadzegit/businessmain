import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    address: "",
    message: "",
  });

  const products = [
    "Premium Bar Soap",
    "Liquid Hand Soap",
    "Laundry Detergent",
    "Dish Washing Liquid",
    "Multi-Surface Cleaner",
    "Disinfectant Spray",
    "Medicated Soap",
    "Fabric Softener",
    "Custom Order",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello Felinum Limited!

*New Order Request*

Name: ${formData.name}
Phone: ${formData.phone}
Product: ${formData.product}
Quantity: ${formData.quantity}
Delivery Address: ${formData.address}
${formData.message ? `Additional Notes: ${formData.message}` : ""}`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Order Request Sent!",
      description: "We'll get back to you shortly via WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      product: "",
      quantity: "",
      address: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Order?
              <br />
              <span className="text-gradient">Contact Us Today</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Fill out the form and we'll reach out via WhatsApp to confirm your order 
              and arrange delivery. For urgent inquiries, contact us directly.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Phone</div>
                  <div className="font-semibold text-foreground">+1 (234) 567-890</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Email</div>
                  <div className="font-semibold text-foreground">info@felinum.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Address</div>
                  <div className="font-semibold text-foreground">123 Industrial Area, City</div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="card-elevated p-8 md:p-10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Place an Order</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder="+1 234 567 890"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Product *
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  >
                    <option value="">Select Product</option>
                    {products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    placeholder="e.g., 10 pieces"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder="Your delivery address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                  placeholder="Any special requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-hero-primary justify-center"
              >
                <Send className="w-5 h-5" />
                Send Order via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
