export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-emerald-900 mb-4">
          📬 Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Reach out with questions, ideas, or just to say hello. We're happy to hear from you!
        </p>
        
        <div className="bg-emerald-50 rounded-xl p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">Email</h3>
              <a href="mailto:support@babysafari.ug" className="text-emerald-600 hover:underline">
                support@babysafari.ug
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">Phone</h3>
              <a href="tel:+256712345678" className="text-emerald-600 hover:underline">
                +256 712 345678
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">Address</h3>
              <p className="text-gray-600">Kampala, Uganda</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}