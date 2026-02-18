import { UserProgress, GenerateResult, FormData } from '@/types';

const STORAGE_KEY = 'firstten_progress';

export function getProgress(): UserProgress | null {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function saveFormAndResult(formData: FormData, result: GenerateResult): void {
  const progress: UserProgress = {
    formData,
    result,
    completedChannels: [],
    channelStats: {},
    createdAt: new Date().toISOString(),
  };
  saveProgress(progress);
}

export function markChannelCompleted(channelId: string): void {
  const progress = getProgress();
  if (!progress) return;
  if (!progress.completedChannels.includes(channelId)) {
    progress.completedChannels.push(channelId);
  }
  saveProgress(progress);
}

export function updateChannelStats(channelId: string, contactCount: number, replyCount: number): void {
  const progress = getProgress();
  if (!progress) return;
  progress.channelStats[channelId] = { contactCount, replyCount };
  saveProgress(progress);
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
