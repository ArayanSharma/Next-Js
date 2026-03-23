import Link from "next/link";

export default function SolutionsPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Cloud Cost <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Enterprise-grade optimization tools for every stage of your cloud journey
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Our Solutions</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Solution 1 */}
            <div className="hover-lift border-2 border-gray-200 rounded-2xl p-8 bg-linear-to-br from-blue-50 to-white">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Real-time Cost Monitoring</h3>
              <p className="text-gray-600 mb-6">Track every dollar spent across your cloud infrastructure. Real-time dashboards with custom alerts keep you in control 24/7.</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Live cost updates</li>
                <li>✓ Custom alert thresholds</li>
                <li>✓ Multi-account dashboards</li>
                <li>✓ Export reports in any format</li>
              </ul>
            </div>

            {/* Solution 2 */}
            <div className="hover-lift border-2 border-gray-200 rounded-2xl p-8 bg-linear-to-br from-purple-50 to-white">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">AI-Powered Recommendations</h3>
              <p className="text-gray-600 mb-6">Machine learning algorithms analyze your usage patterns and deliver actionable insights with estimated savings.</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ ML-based anomaly detection</li>
                <li>✓ Predictive cost forecasting</li>
                <li>✓ Intelligent rightsizing</li>
                <li>✓ Waste identification</li>
              </ul>
            </div>

            {/* Solution 3 */}
            <div className="hover-lift border-2 border-gray-200 rounded-2xl p-8 bg-linear-to-br from-pink-50 to-white">
              <div className="text-6xl mb-4">💳</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Reserved Instance Optimizer</h3>
              <p className="text-gray-600 mb-6">Automate RI purchasing and management. Maximize savings with commitment-based discounts across all regions.</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Automatic RI recommendations</li>
                <li>✓ Savings plan optimization</li>
                <li>✓ Commitment tracking</li>
                <li>✓ Unused instance detection</li>
              </ul>
            </div>

            {/* Solution 4 */}
            <div className="hover-lift border-2 border-gray-200 rounded-2xl p-8 bg-linear-to-br from-green-50 to-white">
              <div className="text-6xl mb-4">🔄</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Auto-scaling Management</h3>
              <p className="text-gray-600 mb-6">Intelligent resource allocation that scales based on actual demand, not guesses. Reduce idle resources by 60%.</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Demand-based scaling</li>
                <li>✓ Multi-region orchestration</li>
                <li>✓ Spot instance integration</li>
                <li>✓ Cost-aware algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Use Cases</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Startups",
                desc: "Control costs during growth phase and optimize spending before scale",
                icon: "🚀",
              },
              {
                title: "Enterprises",
                desc: "Multi-account optimization across complex cloud infrastructure",
                icon: "🏢",
              },
              {
                title: "MSPs",
                desc: "Manage customer cloud costs and increase profitability",
                icon: "🤝",
              },
              {
                title: "Financial Services",
                desc: "Compliance-ready optimization with audit trails and governance",
                icon: "💰",
              },
              {
                title: "Healthcare",
                desc: "HIPAA-compliant cost optimization with data residency control",
                icon: "🏥",
              },
              {
                title: "E-commerce",
                desc: "Seasonal demand management with predictive auto-scaling",
                icon: "🛍️",
              },
            ].map((usecase, idx) => (
              <div key={idx} className="hover-lift bg-white rounded-xl p-8 border border-gray-200">
                <div className="text-5xl mb-4">{usecase.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{usecase.title}</h3>
                <p className="text-gray-600">{usecase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">Calculate Your Savings</h2>
          
          <div className="glass rounded-2xl p-12 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Monthly Cloud Spend</label>
                <div className="text-3xl font-bold text-purple-600">$50,000</div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Average Savings</label>
                <div className="text-3xl font-bold text-green-600">30-50%</div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Monthly Savings</label>
                <div className="text-3xl font-bold text-blue-600">$15,000 - $25,000</div>
              </div>
            </div>
            <p className="text-center text-gray-600">
              For companies spending $50K/month on cloud, our solutions typically deliver $180K-$300K in annual savings
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-4 bg-linear-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">Success Story</h2>
          
          <div className="glass rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">TechCorp - Fortune 500 Cloud Buyer</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">$2.3M</div>
                <p className="text-gray-300">Saved Annually</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">42%</div>
                <p className="text-gray-300">Cost Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">6 months</div>
                <p className="text-gray-300">Time to ROI</p>
              </div>
            </div>
            <p className="text-gray-300">
              After implementing CloudOptimize, TechCorp reduced their multi-cloud spending by 42% while improving performance and compliance. They achieved ROI in just 6 months and now save $2.3M annually.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to Optimize?</h2>
          <p className="text-xl mb-10 opacity-90">
            Get a free cloud cost audit and see your exact savings potential
          </p>
          <Link href="/contract">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-lg text-lg font-bold hover-lift">
              Schedule Free Audit →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}