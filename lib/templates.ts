import { Template } from '@/types';

export const templates: Template[] = [
  // ===== 冷邮件 (5个) =====
  {
    id: 'cold-email-1',
    title: '直接价值主张',
    category: 'cold-email',
    content: `Hi {姓名},

I noticed {观察到的痛点}. We built {产品名} to solve exactly this — {一句话价值}.

Would you be open to a 15-min call this week? I'd love to show you how {具体效果}.

Best,
{你的名字}`,
    variables: ['姓名', '观察到的痛点', '产品名', '一句话价值', '具体效果', '你的名字'],
  },
  {
    id: 'cold-email-2',
    title: '案例驱动',
    category: 'cold-email',
    content: `Hi {姓名},

I helped {类似公司} {具体成果} using {产品名}.

I think we could do the same for {对方公司}. Here's how:
- {好处1}
- {好处2}
- {好处3}

Can I share a quick demo? Takes 10 minutes.

{你的名字}`,
    variables: ['姓名', '类似公司', '具体成果', '产品名', '对方公司', '好处1', '好处2', '好处3', '你的名字'],
  },
  {
    id: 'cold-email-3',
    title: '问题引导',
    category: 'cold-email',
    content: `Hi {姓名},

Quick question — are you currently struggling with {用户痛点}?

If so, {产品名} might be worth a look. We help {目标用户} {核心价值}, and it takes less than {时间} to set up.

Happy to give you a free trial if you're interested.

{你的名字}`,
    variables: ['姓名', '用户痛点', '产品名', '目标用户', '核心价值', '时间', '你的名字'],
  },
  {
    id: 'cold-email-4',
    title: '免费价值先行',
    category: 'cold-email',
    content: `Hi {姓名},

I put together a quick {免费资源类型} on {相关话题} — thought it might be useful for {对方公司}.

{资源链接}

BTW, we also built {产品名} that helps {核心价值}. Would love your feedback if you have 5 minutes.

{你的名字}`,
    variables: ['姓名', '免费资源类型', '相关话题', '对方公司', '资源链接', '产品名', '核心价值', '你的名字'],
  },
  {
    id: 'cold-email-5',
    title: '创始人对创始人',
    category: 'cold-email',
    content: `Hi {姓名},

Fellow founder here 👋 I'm building {产品名} — {一句话描述}.

I noticed your team at {对方公司} might benefit from this because {原因}.

I'm offering our first 10 customers lifetime pricing. Would you be interested in being one of them?

{你的名字}
Founder, {产品名}`,
    variables: ['姓名', '产品名', '一句话描述', '对方公司', '原因', '你的名字'],
  },

  // ===== LinkedIn私信 (5个) =====
  {
    id: 'linkedin-1',
    title: '连接请求+价值',
    category: 'linkedin',
    content: `Hi {姓名}, I see you're working on {他们的领域} at {公司}. I'm building {产品名} to help with {痛点} — would love to connect and share ideas!`,
    variables: ['姓名', '他们的领域', '公司', '产品名', '痛点'],
  },
  {
    id: 'linkedin-2',
    title: '赞美+提问',
    category: 'linkedin',
    content: `Hi {姓名}, loved your recent post about {话题}! Quick question — how does your team currently handle {痛点}? We built something that might help.`,
    variables: ['姓名', '话题', '痛点'],
  },
  {
    id: 'linkedin-3',
    title: '共同背景',
    category: 'linkedin',
    content: `Hi {姓名}, noticed we're both in {共同领域/群组}. I'm working on {产品名} — helps {目标用户} {核心价值}. Would love to get your perspective as someone in the space!`,
    variables: ['姓名', '共同领域/群组', '产品名', '目标用户', '核心价值'],
  },
  {
    id: 'linkedin-4',
    title: '内容互动跟进',
    category: 'linkedin',
    content: `Hi {姓名}, I commented on your post about {话题} earlier — great insights! I'm actually building a tool that addresses {相关痛点}. Would you be open to a quick chat? I'd value your input.`,
    variables: ['姓名', '话题', '相关痛点'],
  },
  {
    id: 'linkedin-5',
    title: '直接演示邀请',
    category: 'linkedin',
    content: `Hi {姓名}, I built {产品名} specifically for {目标用户} like you. It {核心价值} in just {时间/步骤}. Want me to send you a 2-min demo video? No strings attached.`,
    variables: ['姓名', '产品名', '目标用户', '核心价值', '时间/步骤'],
  },

  // ===== Reddit/社区 (5个) =====
  {
    id: 'reddit-1',
    title: '分享经验+提及工具',
    category: 'reddit',
    content: `I've been dealing with {痛点} for a while too. What worked for me:

1. {建议1}
2. {建议2}
3. {建议3}

I also recently started using {产品名} which helped with {具体效果}. Happy to share more details if anyone's interested.`,
    variables: ['痛点', '建议1', '建议2', '建议3', '产品名', '具体效果'],
  },
  {
    id: 'reddit-2',
    title: '征求反馈帖',
    category: 'reddit',
    content: `Hey r/{subreddit}, I'm building {产品名} — {一句话描述}.

The problem I'm solving: {痛点描述}

Current features:
- {功能1}
- {功能2}
- {功能3}

Would love honest feedback. What would make this useful for you?`,
    variables: ['subreddit', '产品名', '一句话描述', '痛点描述', '功能1', '功能2', '功能3'],
  },
  {
    id: 'reddit-3',
    title: '回答问题+软推荐',
    category: 'reddit',
    content: `Great question! Here's what I'd recommend:

{详细回答}

If you want to automate this, {产品名} does exactly that. Full disclosure — I'm the founder, but genuinely think it could help here.`,
    variables: ['详细回答', '产品名'],
  },
  {
    id: 'reddit-4',
    title: '分享成果/数据',
    category: 'reddit',
    content: `Sharing my results after {时间段} of {相关活动}:

Before: {之前的状态}
After: {之后的状态}

Key things that helped:
1. {方法1}
2. {方法2}
3. Using {产品名} for {具体用途}

AMA if you want more details!`,
    variables: ['时间段', '相关活动', '之前的状态', '之后的状态', '方法1', '方法2', '产品名', '具体用途'],
  },
  {
    id: 'reddit-5',
    title: '社区投票/验证',
    category: 'reddit',
    content: `Quick poll for {目标用户}:

How do you currently handle {痛点}?

A) Manual process
B) Use {竞品类型}
C) Built internal tool
D) Just ignore it 😅

I'm exploring building a solution for this. Your input would really help shape what I build!`,
    variables: ['目标用户', '痛点', '竞品类型'],
  },

  // ===== Twitter/X (5个) =====
  {
    id: 'twitter-1',
    title: '产品发布推文',
    category: 'twitter',
    content: `I just shipped {产品名} 🚀

It helps {目标用户} {核心价值}.

The problem: {痛点}
The solution: {一句话方案}

Try it free → {链接}

RT appreciated 🙏`,
    variables: ['产品名', '目标用户', '核心价值', '痛点', '一句话方案', '链接'],
  },
  {
    id: 'twitter-2',
    title: '构建公开日志',
    category: 'twitter',
    content: `Day {天数} of building {产品名}:

Today I {今日成果}.

Learning: {经验教训}

Next up: {下一步计划}

{相关标签}`,
    variables: ['天数', '产品名', '今日成果', '经验教训', '下一步计划', '相关标签'],
  },
  {
    id: 'twitter-3',
    title: '痛点共鸣推文',
    category: 'twitter',
    content: `{目标用户} spend {时间/金钱} on {痛点活动} every {频率}.

What if you could {理想效果} instead?

That's exactly what {产品名} does.

{链接}`,
    variables: ['目标用户', '时间/金钱', '痛点活动', '频率', '理想效果', '产品名', '链接'],
  },
  {
    id: 'twitter-4',
    title: '回复互动',
    category: 'twitter',
    content: `This is such a great point! We actually built {产品名} to solve exactly this. {补充价值/见解}. Would love to hear your thoughts!`,
    variables: ['产品名', '补充价值/见解'],
  },
  {
    id: 'twitter-5',
    title: 'DM跟进模板',
    category: 'twitter',
    content: `Hey {姓名}! Saw your tweet about {话题} — totally relate.

I'm building {产品名} to help with this. Early users are getting {具体效果}.

Would you be up for trying it? Happy to give you free access + priority support.`,
    variables: ['姓名', '话题', '产品名', '具体效果'],
  },
];

export const categoryLabels: Record<string, string> = {
  'cold-email': '冷邮件',
  'linkedin': 'LinkedIn 私信',
  'reddit': 'Reddit/社区',
  'twitter': 'Twitter/X',
};
