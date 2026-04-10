export function Puzzle6Original() {
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border-2 border-slate-200 p-4 flex flex-col">
          <h3 className="text-sm font-semibold text-slate-900">Basic</h3>
          <div className="mt-2 text-2xl font-bold text-slate-900">$9<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-1">
            <li className="flex items-center gap-2">✓ 5 projects</li>
            <li className="flex items-center gap-2">✓ 10 GB Storage</li>
            <li className="flex items-center gap-2">✓ Email Support</li>
          </ul>
          <button type="button" className="mt-4 w-full py-2 rounded-lg text-sm font-medium bg-slate-900 text-white border-2 border-slate-900">
            Get started
          </button>
        </div>
        <div className="rounded-xl border-2 border-slate-900 bg-slate-50 p-4 flex flex-col relative">
          <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-bold uppercase rounded">
            Most Popular
          </span>
          <h3 className="text-sm font-semibold text-slate-900 mt-2">Pro</h3>
          <div className="mt-2 text-2xl font-bold text-slate-900">$29<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-1">
            <li className="flex items-center gap-2">✓ Unlimited projects</li>
            <li className="flex items-center gap-2">✓ 50 GB Storage</li>
            <li className="flex items-center gap-2">✓ Priority Support</li>
          </ul>
          <button type="button" className="mt-4 w-full py-2 rounded-lg text-sm font-medium bg-slate-900 text-white border-2 border-slate-900">
            Get started
          </button>
        </div>
        <div className="rounded-xl border-2 border-slate-200 p-4 flex flex-col">
          <h3 className="text-sm font-semibold text-slate-900">Enterprise</h3>
          <div className="mt-2 text-2xl font-bold text-slate-900">Custom</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-1">
            <li className="flex items-center gap-2">✓ Everything in Pro</li>
            <li className="flex items-center gap-2">✓ Dedicated support</li>
          </ul>
          <button type="button" className="mt-4 w-full py-2 rounded-lg text-sm font-medium bg-slate-900 text-white border-2 border-slate-900">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
