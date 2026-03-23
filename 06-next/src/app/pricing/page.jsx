import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Transparent, <span className="gradient-text">Simple</span> Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Choose the plan that fits your cloud infrastructure. Scale anytime, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex rounded-lg border border-gray-300 p-1 bg-gray-100">
            <button className="px-6 py-2 rounded-md bg-white text-gray-900 font-semibold shadow-sm">
              Monthly Billing
            </button>
            <button className="px-6 py-2 rounded-md text-gray-700 font-semibold">
              Annual Billing <span className="text-green-600 text-sm font-bold">(Save 20%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Starter Plan */}
            <div className="hover-lift bg-white rounded-2xl p-8 shadow-md border border-gray-200 animate-fade-in-up stagger-1">
              <h3 className="text-3xl font-bold mb-2 text-gray-900">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small projects</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  Up to $100K monthly cloud spend
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  Real-time cost dashboards
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  Basic recommendations
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  Email support
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  Single AWS/Azure account
                </li>
              </ul>

              <Link href="/contract">
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Professional Plan - Featured */}
            <div className="hover-lift bg-linear-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl border-2 border-blue-400 transform md:scale-105 animate-fade-in-up stagger-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold text-sm">MOST POPULAR</span>
              </div>

              <h3 className="text-3xl font-bold mb-2">Professional</h3>
              <p className="text-blue-100 mb-6">For growing cloud operations</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$299</span>
                <span className="text-blue-100">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 text-blue-600 flex items-center justify-center text-sm mr-3 font-bold">✓</span>
                  Up to $500K monthly cloud spend
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 text-blue-600 flex items-center justify-center text-sm mr-3 font-bold">✓</span>
                  Advanced AI recommendations
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 text-blue-600 flex items-center justify-center text-sm mr-3 font-bold">✓</span>
                  RI & Savings Plan optimizer
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 text-blue-600 flex items-center justify-center text-sm mr-3 font-bold">✓</span>
                  Priority email & chat support
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 text-blue-600 flex items-center justify-center text-sm mr-3 font-bold">✓</span>
                  Up to 3 cloud accounts
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 text-blue-600 flex items-center justify-center text-sm mr-3 font-bold">✓</span>
                  Monthly performance reports
                </li>
              </ul>

              <Link href="/contract">
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  Start Free Trial
                </button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="hover-lift bg-white rounded-2xl p-8 shadow-md border border-gray-200 animate-fade-in-up stagger-3">
              <h3 className="text-3xl font-bold mb-2 text-gray-900">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large-scale operations</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  Unlimited cloud spend
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  All advanced features
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  Dedicated account manager
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  24/7 phone & email support
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  Unlimited accounts
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm mr-3">✓</span>
                  Custom integrations
                </li>
              </ul>

              <Link href="/contract">
                <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>

          {/* ROI Section */}
          <div className="bg-linear-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-12 text-center">Simple ROI Calculation</h2>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$500K</div>
                <p className="text-gray-300">Annual Cloud Spend</p>
              </div>
              <div className="flex items-center justify-center text-3xl">→</div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">35%</div>
                <p className="text-gray-300">Average Savings</p>
              </div>
              <div className="flex items-center justify-center text-3xl">→</div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">$175K</div>
                <p className="text-gray-300">Annual Savings</p>
              </div>
            </div>
            <p className="text-center text-gray-300 mt-8">
              Our Professional plan costs $3,588/year but delivers $175K+ in annual savings = 48x ROI
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-8">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes! You can upgrade or downgrade your plan anytime. Changes take effect on your next billing cycle.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, we offer a 14-day free trial for the Professional plan. No credit card required.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, wire transfers, and ACH payments.",
              },
              {
                q: "Do you offer annual discounts?",
                a: "Yes! Annual plans come with a 20% discount compared to monthly billing.",
              },
              {
                q: "Is there a setup fee?",
                a: "No setup fees. You only pay the monthly subscription price. Onboarding is always free.",
              },
              {
                q: "What about data privacy?",
                a: "All data is encrypted at rest and in transit. We comply with SOC 2, HIPAA, and GDPR.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to Optimize Your Cloud Costs?</h2>
          <p className="text-xl mb-10 opacity-90">
            Start your free trial today. No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contract">
              <button className="bg-white text-purple-600 px-10 py-4 rounded-lg text-lg font-bold hover-lift">
                Start Free Trial →
              </button>
            </Link>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-purple-600 transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
