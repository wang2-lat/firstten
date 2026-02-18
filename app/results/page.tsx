'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar';
import ChannelCard from '@/components/ChannelCard';
import CustomerProfile from '@/components/CustomerProfile';
import { getProgress, clearProgress } from '@/lib/storage';
import type { UserProgress } from '@/types';

export default function ResultsPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const data = getProgress();
    setProgress(data);
    setIsLoaded(true);
  }, []);

  function handleReset(): void {
    clearProgress();
    router.push('/');
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-slate-400 text-sm">Loading...</div>
      </div>
    );
  }

  if (!progress || !progress.result) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            No Data Yet
          </h2>
          <p className="text-slate-500 mb-6">
            Please fill out the form first to generate your customer acquisition strategy.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Go to Form
          </Link>
        </div>
      </div>
    );
  }

  const { profile, channels } = progress.result;

  const totalContacts = Object.values(progress.channelStats).reduce(
    (sum, stat) => sum + stat.contactCount,
    0,
  );
  const totalReplies = Object.values(progress.channelStats).reduce(
    (sum, stat) => sum + stat.replyCount,
    0,
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Acquisition Strategy</h1>
        <button
          onClick={handleReset}
          className="rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 hover:border-red-300"
        >
          Start Over
        </button>
      </div>

      <ProgressBar
        completedChannels={progress.completedChannels.length}
        totalChannels={channels.length}
        totalContacts={totalContacts}
        totalReplies={totalReplies}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <CustomerProfile profile={profile} />
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-slate-800 mb-4">
            Recommended Channels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {channels.map((channel) => (
              <ChannelCard
                key={channel.id}
                channel={channel}
                completed={progress.completedChannels.includes(channel.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
