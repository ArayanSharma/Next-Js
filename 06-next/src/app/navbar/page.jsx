import Navbar from "@/app/components/Navbar";

export default function NavbarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Navbar Demo</h1>
          <p className="text-gray-600 mb-6">
            A responsive, optimized navbar with mobile hamburger menu. Try resizing your browser to see the mobile menu!
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="font-semibold text-left mb-3">Features:</h2>
            <ul className="text-left space-y-2 text-sm text-gray-700">
              <li>✅ Sticky navigation at top</li>
              <li>✅ Mobile-responsive hamburger menu</li>
              <li>✅ Smooth transitions and animations</li>
              <li>✅ Lightweight and fast-loading</li>
              <li>✅ CTA button for conversions</li>
              <li>✅ Logo linking to home</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}