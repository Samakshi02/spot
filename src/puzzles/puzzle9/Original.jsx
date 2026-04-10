export function Puzzle9Original() {
  const Toggle = ({ on }) => (
    <div className={`w-9 h-5 rounded-full relative transition-colors ${on ? 'bg-indigo-500' : 'bg-slate-300'}`}>
      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${on ? 'left-[18px]' : 'left-0.5'}`} />
    </div>
  )

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible max-w-md mx-auto p-5 space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-lg">⚙</div>
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Settings</h2>
          <p className="text-[10px] text-slate-400">Manage your preferences</p>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="space-y-3">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Notifications</h3>
        <div className="flex items-center justify-between py-1">
          <div>
            <div className="text-xs font-medium text-slate-700">Push Notifications</div>
            <div className="text-[10px] text-slate-400">Receive alerts on your device</div>
          </div>
          <Toggle on={true} />
        </div>
        <div className="flex items-center justify-between py-1">
          <div>
            <div className="text-xs font-medium text-slate-700">Email Digest</div>
            <div className="text-[10px] text-slate-400">Weekly summary of activity</div>
          </div>
          <Toggle on={false} />
        </div>
        <div className="flex items-center justify-between py-1">
          <div>
            <div className="text-xs font-medium text-slate-700">SMS Alerts</div>
            <div className="text-[10px] text-slate-400">Critical updates via text</div>
          </div>
          <Toggle on={true} />
        </div>
      </div>

      <div className="border-t border-slate-100" />

      {/* Appearance Section */}
      <div className="space-y-3">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Appearance</h3>
        <div className="flex items-center justify-between py-1">
          <div className="text-xs font-medium text-slate-700">Theme</div>
          <div className="flex gap-1.5">
            <div className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-900 text-white">Light</div>
            <div className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-100 text-slate-500">Dark</div>
            <div className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-100 text-slate-500">System</div>
          </div>
        </div>
        <div className="flex items-center justify-between py-1">
          <div className="text-xs font-medium text-slate-700">Language</div>
          <div className="px-3 py-1 rounded-md border border-slate-200 text-[10px] text-slate-600 flex items-center gap-1">
            English (US) <span className="text-slate-400">▾</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100" />

      {/* Privacy Section */}
      <div className="space-y-3">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Privacy</h3>
        <div className="flex items-center justify-between py-1">
          <div>
            <div className="text-xs font-medium text-slate-700">Profile Visibility</div>
            <div className="text-[10px] text-slate-400">Who can see your profile</div>
          </div>
          <div className="px-3 py-1 rounded-md border border-slate-200 text-[10px] text-slate-600 flex items-center gap-1">
            Everyone <span className="text-slate-400">▾</span>
          </div>
        </div>
        <div className="flex items-center justify-between py-1">
          <div>
            <div className="text-xs font-medium text-slate-700">Two-Factor Auth</div>
            <div className="text-[10px] text-slate-400">Extra layer of security</div>
          </div>
          <Toggle on={true} />
        </div>
      </div>
    </div>
  )
}
