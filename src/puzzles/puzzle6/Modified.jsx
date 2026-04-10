import { DiffZone } from '../../components/game/DiffZone'

export function Puzzle6Modified({ onFound, foundIds, hintingId }) {
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border-2 border-slate-200 p-4 flex flex-col">
          <h3 className="text-sm font-semibold text-slate-900">Basic</h3>
          <div className="mt-2 text-2xl font-bold text-slate-900">$9<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-1">
            <li className="flex items-center gap-2">✓ 5 projects</li>
            <li className="flex items-center gap-2">
              <DiffZone id={2} index={2} onFound={onFound} found={foundIds.includes(2)} hinting={hintingId === 2}>
                <span>✓ 5 GB Storage</span>
              </DiffZone>
            </li>
            <li className="flex items-center gap-2">
              <DiffZone id={5} index={5} onFound={onFound} found={foundIds.includes(5)} hinting={hintingId === 5}>
                <span>✗ Email Support</span>
              </DiffZone>
            </li>
          </ul>
          <button type="button" className="mt-4 w-full py-2 rounded-lg text-sm font-medium bg-slate-900 text-white border-2 border-slate-900">
            Get started
          </button>
        </div>
        <div className="rounded-xl border-2 border-slate-900 bg-slate-50 p-4 flex flex-col relative">
          <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-bold uppercase rounded z-10">
            <DiffZone id={3} index={3} onFound={onFound} found={foundIds.includes(3)} hinting={hintingId === 3}>
              <span>Best Value</span>
            </DiffZone>
          </span>
          <h3 className="text-sm font-semibold text-slate-900 mt-2">Pro</h3>
          <DiffZone id={1} index={1} onFound={onFound} found={foundIds.includes(1)} hinting={hintingId === 1}>
            <div className="mt-2 text-2xl font-bold text-slate-900">$39<span className="text-sm font-normal text-slate-500">/mo</span></div>
          </DiffZone>
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
          <DiffZone id={4} index={4} onFound={onFound} found={foundIds.includes(4)} hinting={hintingId === 4} className="w-full">
            <button type="button" className="mt-4 w-full py-2 rounded-lg text-sm font-medium bg-white text-slate-900 border-2 border-slate-900">
              Contact Us
            </button>
          </DiffZone>
        </div>
      </div>
    </div>
  )
}
