'use client';

interface ProgressBarProps {
  completedChannels: number;
  totalChannels: number;
  totalContacts: number;
  totalReplies: number;
}

export default function ProgressBar({ completedChannels, totalChannels, totalContacts, totalReplies }: ProgressBarProps) {
  const percentage = totalChannels > 0 ? Math.round((completedChannels / totalChannels) * 100) : 0;
  const replyRate = totalContacts > 0 ? Math.round((totalReplies / totalContacts) * 100) : 0;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-6 text-sm">
          <div>
            <span className="text-slate-500">Channels Tried</span>
            <span className="ml-2 font-semibold text-blue-700">{completedChannels}/{totalChannels}</span>
          </div>
          <div>
            <span className="text-slate-500">Contacts</span>
            <span className="ml-2 font-semibold text-blue-700">{totalContacts}</span>
          </div>
          <div>
            <span className="text-slate-500">Reply Rate</span>
            <span className="ml-2 font-semibold text-blue-700">{replyRate}%</span>
          </div>
        </div>
        <span className="text-xs text-slate-400">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
