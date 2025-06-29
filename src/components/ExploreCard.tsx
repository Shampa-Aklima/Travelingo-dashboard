"use client"

export default function ExploreCard() {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-emerald-500 text-xl">🏃‍♂️</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">
          Let's Explore
          <br />
          the beauty
        </h3>
        <p className="text-sm opacity-80 mb-6">Get special offers & news</p>

        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
          Join Now
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
    </div>
  )
}
