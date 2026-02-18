'use client';

import { Channel } from '@/types';
import Link from 'next/link';

interface ChannelCardProps {
  channel: Channel;
  completed: boolean;
}

export default function ChannelCard({ channel, completed }: ChannelCardProps) {
  return (
    <Link href={`/channel/${channel.id}`}>
      <div className={`border rounded-xl p-5 hover:shadow-md transition-all cursor-pointer ${
        completed ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200 hover:border-blue-300'
      }`}>
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-slate-800">{channel.name}</h3>
          {completed && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">已完成</span>
          )}
        </div>
        <p className="text-sm text-slate-600 mb-3 line-clamp-2">{channel.reason}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-500">难度</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`text-xs ${star <= channel.difficulty ? 'text-amber-400' : 'text-slate-200'}`}>
                  ★
                </span>
              ))}
            </div>
          </div>
          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
            {channel.expectedEffect}
          </span>
        </div>
      </div>
    </Link>
  );
}
