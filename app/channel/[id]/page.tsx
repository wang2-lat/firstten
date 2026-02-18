'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import CopyButton from '@/components/CopyButton';
import { getProgress, markChannelCompleted, updateChannelStats } from '@/lib/storage';
import type { Channel, UserProgress } from '@/types';

export default function ChannelDetailPage() {
  const params = useParams();
  const channelId = params.id as string;

  const [channel, setChannel] = useState<Channel | null>(null);
  const [completed, setCompleted] = useState(false);
  const [contactCount, setContactCount] = useState(0);
  const [replyCount, setReplyCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const progress: UserProgress | null = getProgress();
    if (!progress || !progress.result) {
      setNotFound(true);
      setIsLoaded(true);
      return;
    }

    const found = progress.result.channels.find((ch) => ch.id === channelId);
    if (!found) {
      setNotFound(true);
      setIsLoaded(true);
      return;
    }

    setChannel(found);
    setCompleted(progress.completedChannels.includes(channelId));

    const stats = progress.channelStats[channelId];
    if (stats) {
      setContactCount(stats.contactCount);
      setReplyCount(stats.replyCount);
    }

    setIsLoaded(true);
  }, [channelId]);

  const handleStatsChange = useCallback(
    (newContact: number, newReply: number) => {
      updateChannelStats(channelId, newContact, newReply);
    },
    [channelId],
  );

  function onContactChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = Math.max(0, parseInt(e.target.value, 10) || 0);
    setContactCount(value);
    handleStatsChange(value, replyCount);
  }

  function onReplyChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = Math.max(0, parseInt(e.target.value, 10) || 0);
    setReplyCount(value);
    handleStatsChange(contactCount, value);
  }

  function handleMarkCompleted(): void {
    markChannelCompleted(channelId);
    setCompleted(true);
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-slate-400 text-sm">加载中...</div>
      </div>
    );
  }

  if (notFound || !channel) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">未找到渠道</h2>
          <p className="text-slate-500 mb-6">该渠道不存在，或尚未生成数据</p>
          <Link
            href="/results"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            返回结果页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link
        href="/results"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-blue-600 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        返回结果
      </Link>

      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{channel.name}</h1>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-slate-500">难度</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`text-base ${star <= channel.difficulty ? 'text-amber-400' : 'text-slate-200'}`}>
                  ★
                </span>
              ))}
            </div>
          </div>
          <span className="text-sm text-blue-700 bg-blue-50 px-3 py-1 rounded-full font-medium">
            {channel.expectedEffect}
          </span>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">推荐理由</h2>
        <p className="text-slate-600 leading-relaxed">{channel.reason}</p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">行动步骤</h2>
        <ol className="space-y-3">
          {channel.steps.map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-semibold">
                {idx + 1}
              </span>
              <span className="text-slate-700 pt-0.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">话术模板</h2>
        <div className="space-y-4">
          {channel.templates.map((template, idx) => (
            <div key={idx} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed flex-1">
                  {template}
                </p>
                <CopyButton text={template} className="flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">成功案例</h2>
        <p className="text-slate-600 leading-relaxed">{channel.successCase}</p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">进度追踪</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contactCount" className="block text-sm font-medium text-slate-700 mb-1.5">
              已联系人数
            </label>
            <input
              id="contactCount"
              type="number"
              min={0}
              value={contactCount}
              onChange={onContactChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="replyCount" className="block text-sm font-medium text-slate-700 mb-1.5">
              已回复人数
            </label>
            <input
              id="replyCount"
              type="number"
              min={0}
              value={replyCount}
              onChange={onReplyChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>
        </div>
        {contactCount > 0 && (
          <p className="mt-4 text-sm text-slate-500">
            回复率：
            <span className="font-semibold text-slate-700">
              {((replyCount / contactCount) * 100).toFixed(1)}%
            </span>
          </p>
        )}
      </section>

      <div className="flex justify-center pb-4">
        {completed ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-6 py-3 text-sm font-semibold text-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            已完成
          </span>
        ) : (
          <button
            onClick={handleMarkCompleted}
            className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:bg-blue-800"
          >
            标记为已完成
          </button>
        )}
      </div>
    </div>
  );
}
