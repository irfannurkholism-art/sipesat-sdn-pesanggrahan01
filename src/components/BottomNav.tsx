import React from 'react';
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
  MessageCircle,
} from 'lucide-react';

export type MainTab = 'home' | 'learn' | 'progress' | 'settings';

interface BottomNavProps {
  activeTab: MainTab;
  onSelectTab: (tab: MainTab) => void;
  onOpenChat: () => void;
}

const NAV_ITEMS: { id: MainTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'home', label: 'Beranda', icon: Home },
  { id: 'learn', label: 'Belajar', icon: BookOpen },
  { id: 'progress', label: 'Progres', icon: BarChart3 },
  { id: 'settings', label: 'Atur', icon: Settings },
];

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenChat,
}) => {
  return (
    <div className="pointer-events-none fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="pointer-events-auto flex items-center justify-between gap-2.5">
        {/* Floating Pill Tab Bar */}
        <nav
          aria-label="Navigasi utama"
          className="flex flex-1 items-center justify-between rounded-full bg-white/95 dark:bg-slate-900/95 p-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.10)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.45)] ring-1 ring-slate-200/80 dark:ring-slate-800 backdrop-blur-md"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-full transition-all duration-150 active:scale-90 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] ${
                  isActive
                    ? 'bg-[#EBF3FF] dark:bg-[#0066FF]/20 px-3.5 text-[#0066FF] dark:text-sky-400 font-semibold'
                    : 'w-11 text-slate-500 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="h-[20px] w-[20px] shrink-0" />
                {isActive && (
                  <span className="text-xs leading-none tracking-tight">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Prominent Circular Tanya Pipo Chat Trigger */}
        <button
          type="button"
          onClick={onOpenChat}
          aria-label="Buka Tanya Pipo"
          title="Tanya Pipo"
          className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#1F2937] dark:bg-[#0066FF] text-white shadow-[0_10px_24px_rgba(15,23,42,0.25)] dark:shadow-[0_10px_24px_rgba(0,102,255,0.35)] transition-all duration-150 hover:scale-[1.03] active:scale-90 active:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
};
