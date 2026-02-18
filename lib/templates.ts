import { Template } from '@/types';

export const templates: Template[] = [
  // ===== Cold Email (5) =====
  {
    id: 'cold-email-1',
    title: 'Direct Value Proposition',
    category: 'cold-email',
    content: `Hi {name},

I noticed {observed pain point}. We built {product name} to solve exactly this — {one-line value}.

Would you be open to a 15-min call this week? I'd love to show you how {specific outcome}.

Best,
{your name}`,
    variables: ['name', 'observed pain point', 'product name', 'one-line value', 'specific outcome', 'your name'],
  },
  {
    id: 'cold-email-2',
    title: 'Case Study Driven',
    category: 'cold-email',
    content: `Hi {name},

I helped {similar company} {specific result} using {product name}.

I think we could do the same for {their company}. Here's how:
- {benefit 1}
- {benefit 2}
- {benefit 3}

Can I share a quick demo? Takes 10 minutes.

{your name}`,
    variables: ['name', 'similar company', 'specific result', 'product name', 'their company', 'benefit 1', 'benefit 2', 'benefit 3', 'your name'],
  },
  {
    id: 'cold-email-3',
    title: 'Question-Led',
    category: 'cold-email',
    content: `Hi {name},

Quick question — are you currently struggling with {user pain point}?

If so, {product name} might be worth a look. We help {target user} {core value}, and it takes less than {time} to set up.

Happy to give you a free trial if you're interested.

{your name}`,
    variables: ['name', 'user pain point', 'product name', 'target user', 'core value', 'time', 'your name'],
  },
  {
    id: 'cold-email-4',
    title: 'Free Value First',
    category: 'cold-email',
    content: `Hi {name},

I put together a quick {free resource type} on {related topic} — thought it might be useful for {their company}.

{resource link}

BTW, we also built {product name} that helps {core value}. Would love your feedback if you have 5 minutes.

{your name}`,
    variables: ['name', 'free resource type', 'related topic', 'their company', 'resource link', 'product name', 'core value', 'your name'],
  },
  {
    id: 'cold-email-5',
    title: 'Founder to Founder',
    category: 'cold-email',
    content: `Hi {name},

Fellow founder here. I'm building {product name} — {one-line description}.

I noticed your team at {their company} might benefit from this because {reason}.

I'm offering our first 10 customers lifetime pricing. Would you be interested in being one of them?

{your name}
Founder, {product name}`,
    variables: ['name', 'product name', 'one-line description', 'their company', 'reason', 'your name'],
  },

  // ===== LinkedIn DM (5) =====
  {
    id: 'linkedin-1',
    title: 'Connection Request + Value',
    category: 'linkedin',
    content: `Hi {name}, I see you're working on {their field} at {company}. I'm building {product name} to help with {pain point} — would love to connect and share ideas!`,
    variables: ['name', 'their field', 'company', 'product name', 'pain point'],
  },
  {
    id: 'linkedin-2',
    title: 'Compliment + Question',
    category: 'linkedin',
    content: `Hi {name}, loved your recent post about {topic}! Quick question — how does your team currently handle {pain point}? We built something that might help.`,
    variables: ['name', 'topic', 'pain point'],
  },
  {
    id: 'linkedin-3',
    title: 'Shared Background',
    category: 'linkedin',
    content: `Hi {name}, noticed we're both in {shared field/group}. I'm working on {product name} — helps {target user} {core value}. Would love to get your perspective as someone in the space!`,
    variables: ['name', 'shared field/group', 'product name', 'target user', 'core value'],
  },
  {
    id: 'linkedin-4',
    title: 'Content Engagement Follow-up',
    category: 'linkedin',
    content: `Hi {name}, I commented on your post about {topic} earlier — great insights! I'm actually building a tool that addresses {related pain point}. Would you be open to a quick chat? I'd value your input.`,
    variables: ['name', 'topic', 'related pain point'],
  },
  {
    id: 'linkedin-5',
    title: 'Direct Demo Invite',
    category: 'linkedin',
    content: `Hi {name}, I built {product name} specifically for {target user} like you. It {core value} in just {time/steps}. Want me to send you a 2-min demo video? No strings attached.`,
    variables: ['name', 'product name', 'target user', 'core value', 'time/steps'],
  },

  // ===== Reddit/Community (5) =====
  {
    id: 'reddit-1',
    title: 'Share Experience + Mention Tool',
    category: 'reddit',
    content: `I've been dealing with {pain point} for a while too. What worked for me:

1. {tip 1}
2. {tip 2}
3. {tip 3}

I also recently started using {product name} which helped with {specific outcome}. Happy to share more details if anyone's interested.`,
    variables: ['pain point', 'tip 1', 'tip 2', 'tip 3', 'product name', 'specific outcome'],
  },
  {
    id: 'reddit-2',
    title: 'Feedback Request Post',
    category: 'reddit',
    content: `Hey r/{subreddit}, I'm building {product name} — {one-line description}.

The problem I'm solving: {pain point description}

Current features:
- {feature 1}
- {feature 2}
- {feature 3}

Would love honest feedback. What would make this useful for you?`,
    variables: ['subreddit', 'product name', 'one-line description', 'pain point description', 'feature 1', 'feature 2', 'feature 3'],
  },
  {
    id: 'reddit-3',
    title: 'Answer Question + Soft Plug',
    category: 'reddit',
    content: `Great question! Here's what I'd recommend:

{detailed answer}

If you want to automate this, {product name} does exactly that. Full disclosure — I'm the founder, but genuinely think it could help here.`,
    variables: ['detailed answer', 'product name'],
  },
  {
    id: 'reddit-4',
    title: 'Share Results/Data',
    category: 'reddit',
    content: `Sharing my results after {time period} of {related activity}:

Before: {before state}
After: {after state}

Key things that helped:
1. {method 1}
2. {method 2}
3. Using {product name} for {specific use}

AMA if you want more details!`,
    variables: ['time period', 'related activity', 'before state', 'after state', 'method 1', 'method 2', 'product name', 'specific use'],
  },
  {
    id: 'reddit-5',
    title: 'Community Poll/Validation',
    category: 'reddit',
    content: `Quick poll for {target user}:

How do you currently handle {pain point}?

A) Manual process
B) Use {competitor type}
C) Built internal tool
D) Just ignore it

I'm exploring building a solution for this. Your input would really help shape what I build!`,
    variables: ['target user', 'pain point', 'competitor type'],
  },

  // ===== Twitter/X (5) =====
  {
    id: 'twitter-1',
    title: 'Product Launch Tweet',
    category: 'twitter',
    content: `I just shipped {product name}

It helps {target user} {core value}.

The problem: {pain point}
The solution: {one-line solution}

Try it free -> {link}

RT appreciated`,
    variables: ['product name', 'target user', 'core value', 'pain point', 'one-line solution', 'link'],
  },
  {
    id: 'twitter-2',
    title: 'Build in Public Log',
    category: 'twitter',
    content: `Day {day number} of building {product name}:

Today I {today's achievement}.

Learning: {lesson learned}

Next up: {next step}

{relevant hashtags}`,
    variables: ['day number', 'product name', 'today\'s achievement', 'lesson learned', 'next step', 'relevant hashtags'],
  },
  {
    id: 'twitter-3',
    title: 'Pain Point Resonance Tweet',
    category: 'twitter',
    content: `{target user} spend {time/money} on {pain point activity} every {frequency}.

What if you could {ideal outcome} instead?

That's exactly what {product name} does.

{link}`,
    variables: ['target user', 'time/money', 'pain point activity', 'frequency', 'ideal outcome', 'product name', 'link'],
  },
  {
    id: 'twitter-4',
    title: 'Reply Engagement',
    category: 'twitter',
    content: `This is such a great point! We actually built {product name} to solve exactly this. {additional value/insight}. Would love to hear your thoughts!`,
    variables: ['product name', 'additional value/insight'],
  },
  {
    id: 'twitter-5',
    title: 'DM Follow-up Template',
    category: 'twitter',
    content: `Hey {name}! Saw your tweet about {topic} — totally relate.

I'm building {product name} to help with this. Early users are getting {specific outcome}.

Would you be up for trying it? Happy to give you free access + priority support.`,
    variables: ['name', 'topic', 'product name', 'specific outcome'],
  },
];

export const categoryLabels: Record<string, string> = {
  'cold-email': 'Cold Email',
  'linkedin': 'LinkedIn DM',
  'reddit': 'Reddit/Community',
  'twitter': 'Twitter/X',
};
