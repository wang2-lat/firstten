// 客户画像
export interface CustomerProfile {
  title: string;
  demographics: string;
  painPoints: string[];
  behaviors: string[];
  whereToFind: string[];
  budget: string;
  decisionFactors: string[];
}

// 渠道推荐
export interface Channel {
  id: string;
  name: string;
  reason: string;
  difficulty: number; // 1-5
  expectedEffect: string;
  steps: string[];
  templates: string[];
  successCase: string;
  completed: boolean;
  contactCount: number;
  replyCount: number;
}

// AI生成结果
export interface GenerateResult {
  profile: CustomerProfile;
  channels: Channel[];
}

// 表单数据
export interface FormData {
  product: string;
  problem: string;
  targetUser: string;
  budget: string;
  timePerDay: string;
}

// 话术模板
export interface Template {
  id: string;
  title: string;
  category: 'cold-email' | 'linkedin' | 'reddit' | 'twitter';
  content: string;
  variables: string[];
}

// 用户进度
export interface UserProgress {
  formData: FormData | null;
  result: GenerateResult | null;
  completedChannels: string[];
  channelStats: Record<string, { contactCount: number; replyCount: number }>;
  createdAt: string;
}
