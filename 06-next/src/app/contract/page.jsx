"use client";
import { useRouter } from "next/navigation";
import { contactAction } from "./contact.action";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("message", formData.message);

      const result = await contactAction(formDataObj);

      if (result.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto w-full z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-6xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">
                Let's Optimize Your Cloud
              </h1>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in-up stagger-1">
                Get in touch with our cloud optimization experts. We'll analyze your infrastructure and create a custom savings plan.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 animate-fade-in-up stagger-2">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Free Cloud Audit</h3>
                    <p className="text-gray-400 text-sm">No commitment required. Get insights in 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-gray-400 text-sm">AWS, Azure, and GCP certified specialists.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">30-60% Savings</h3>
                    <p className="text-gray-400 text-sm">Average cost reduction within 90 days.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="glass rounded-2xl p-8 shadow-2xl border border-white/20 animate-fade-in-up stagger-3">
              {success ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4 text-white text-4xl">✓</div>
                  <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
                  <p className="text-gray-300 mb-6">We've received your message and will contact you within 24 hours.</p>
                  <div className="animate-pulse">
                    <p className="text-sm text-gray-400">Redirecting...</p>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-white mb-2">Get Started Today</h2>
                  <p className="text-gray-400 mb-8">Fill out the form below and our team will reach out to you.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Business Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Company & Cloud Info</label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your cloud infrastructure (AWS, Azure, GCP, etc.) and current monthly spend"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Free Audit Request →
                        </>
                      )}
                    </button>

                    {/* Privacy Notice */}
                    <p className="text-xs text-gray-400 text-center">
                      We respect your privacy. Your information will only be used to schedule your free audit.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">What Happens Next?</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "You Submit",
                desc: "Fill out the form with your cloud details",
                icon: "📝",
              },
              {
                step: "2",
                title: "We Analyze",
                desc: "Our team reviews your infrastructure (24h)",
                icon: "🔍",
              },
              {
                step: "3",
                title: "Recommendations",
                desc: "Receive custom optimization strategies",
                icon: "💡",
              },
              {
                step: "4",
                title: "Start Saving",
                desc: "Implement changes and reduce costs",
                icon: "💰",
              },
            ].map((item, idx) => (
              <div key={idx} className="hover-lift text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Common Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How long does the audit take?",
                a: "Our team typically completes audits within 24 hours. Complex environments may take up to 48 hours.",
              },
              {
                q: "Is the audit really free?",
                a: "Yes! The initial cloud audit and recommendations are completely free. No credit card required.",
              },
              {
                q: "What cloud providers do you support?",
                a: "We support AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud, and Kubernetes environments.",
              },
              {
                q: "Do you guarantee savings?",
                a: "We guarantee to identify optimization opportunities. Most clients see 30-60% cost reductions within 90 days.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="hover-lift bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Other Ways to Reach Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📧",
                title: "Email",
                detail: "hello@cloudoptimize.com",
                desc: "Reply within 2 hours",
              },
              {
                icon: "📞",
                title: "Phone",
                detail: "+1 (555) 123-4567",
                desc: "Sales: Mon-Fri, 9am-6pm EST",
              },
              {
                icon: "💬",
                title: "Live Chat",
                detail: "Chat with our team",
                desc: "Available 24/7 on website",
              },
            ].map((contact, idx) => (
              <div key={idx} className="hover-lift bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
                <div className="text-5xl mb-4">{contact.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{contact.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{contact.detail}</p>
                <p className="text-gray-600 text-sm">{contact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
