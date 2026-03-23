import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Cloud Cost <span className="gradient-text">Optimization</span> Simplified
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Reduce your cloud spending by up to 80% with intelligent cost optimization. Monitor, analyze, and optimize in real-time.
          </p>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="glass rounded-lg p-4 animate-fade-in-up stagger-2">
              <div className="text-3xl font-bold text-blue-400">$2.3M</div>
              <p className="text-gray-400 text-sm">Saved Annually</p>
            </div>
            <div className="glass rounded-lg p-4 animate-fade-in-up stagger-3">
              <div className="text-3xl font-bold text-purple-400">15k+</div>
              <p className="text-gray-400 text-sm">Cloud Resources</p>
            </div>
            <div className="glass rounded-lg p-4 animate-fade-in-up stagger-4">
              <div className="text-3xl font-bold text-pink-400">99.9%</div>
              <p className="text-gray-400 text-sm">Uptime SLA</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-5">
            <Link href="/contract">
              <button className="group bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  Start Optimization <span className="ml-2">→</span>
                </span>
              </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">CloudOptimize</span>?
            </h2>
            <p className="text-xl text-gray-600">Industry-leading tools for maximum cloud efficiency</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              { icon: "📊", title: "Real-time Analytics", desc: "Monitor cloud spending with live dashboards and instant alerts", delay: 1 },
              { icon: "🤖", title: "AI-Powered Insights", desc: "Machine learning detects waste patterns and recommends savings", delay: 2 },
              { icon: "💳", title: "Reserved Instance Optimizer", desc: "Automatically manage RIs and savings plans for maximum ROI", delay: 3 },
              { icon: "🔄", title: "Auto-scaling Rules", desc: "Dynamic resource allocation based on actual usage patterns", delay: 4 },
              { icon: "🛡️", title: "Compliance Ready", desc: "Enterprise security with audit logs and compliance reports", delay: 5 },
              { icon: "👥", title: "Team Collaboration", desc: "Share insights across departments with role-based access", delay: 6 },
            ].map((feature, idx) => (
              <div key={idx} className={`hover-lift p-8 border border-gray-200 rounded-2xl bg-linear-to-br from-white to-gray-50 animate-fade-in-up stagger-${feature.delay}`}>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section with Metrics */}
      <section className="py-24 px-4 bg-linear-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-16 text-center">Measurable Results</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "80%", label: "Average Cost Reduction", sub: "Within first 90 days" },
              { metric: "2.3x", label: "ROI Multiple", sub: "First year savings" },
              { metric: "4h", label: "Setup Time", sub: "Full deployment" },
              { metric: "100%", label: "Cloud Coverage", sub: "All major providers" },
            ].map((item, idx) => (
              <div key={idx} className={`text-center animate-fade-in-up stagger-${idx + 1}`}>
                <div className="text-6xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <p className="text-xl font-semibold mb-1">{item.label}</p>
                <p className="text-gray-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Seamless Integrations</h2>
          <p className="text-xl text-gray-600 mb-12">Connect with your cloud providers instantly</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["AWS", "Azure", "GCP", "OCI", "Kubernetes", "Terraform", "CloudFormation", "Datadog"].map((tool) => (
              <div key={tool} className="glass rounded-lg p-6 hover-lift">
                <p className="font-semibold text-gray-900">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Start Optimizing Today</h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of companies reducing cloud costs without sacrificing performance.
          </p>
          <Link href="/contract">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-lg text-lg font-bold hover-lift">
              Get Free Audit →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
