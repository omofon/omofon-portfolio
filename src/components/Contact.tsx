import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Testimonial */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="text-6xl text-gray-300 dark:text-gray-600">"</div>
            <div>
              <img
                src="/src/assets/omofon.jpg"
                alt="Omofon Udoh"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <p className="text-gray-600 dark:text-gray-400 italic max-w-md mx-auto leading-relaxed mb-4">
                Just say hi. I'm always open to discuss your project and take it
                to the next level
              </p>
              <p className="font-semibold text-foreground">OMOFON UDOH</p>
            </div>
            <div className="text-6xl text-gray-300 dark:text-gray-600">"</div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Let us call you!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              At first you need to enter required field
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about desired project"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
