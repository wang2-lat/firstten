import openai from '@/lib/openai';
import { NextRequest, NextResponse } from 'next/server';

const MAX_INPUT_LENGTH = 500;

function sanitize(input: string): string {
  return input.slice(0, MAX_INPUT_LENGTH).trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const product = sanitize(body.product || '');
    const problem = sanitize(body.problem || '');
    const targetUser = sanitize(body.targetUser || '');
    const budget = sanitize(body.budget || '');
    const timePerDay = sanitize(body.timePerDay || '');

    if (!product || !problem || !targetUser || !budget || !timePerDay) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60_000);

    try {
      const completion = await openai.chat.completions.create(
        {
          model: 'gpt-4o-mini',
          response_format: { type: 'json_object' },
          messages: [
            {
              role: 'system',
              content: `你是一位资深的市场营销专家和用户研究员。根据用户提供的产品信息，生成一份详细的目标客户画像和10个精准获客渠道推荐。

请严格按照以下 JSON 格式输出：

{
  "profile": {
    "title": "客户画像的标题，例如：焦虑的职场新人",
    "demographics": "目标用户的人口统计学特征描述",
    "painPoints": ["痛点1", "痛点2", "痛点3"],
    "behaviors": ["行为特征1", "行为特征2", "行为特征3"],
    "whereToFind": ["可以找到他们的线上/线下场所1", "场所2", "场所3"],
    "budget": "他们愿意为解决问题支付的价格范围",
    "decisionFactors": ["购买决策因素1", "决策因素2", "决策因素3"]
  },
  "channels": [
    {
      "id": "channel-1",
      "name": "渠道名称",
      "reason": "推荐该渠道的理由",
      "difficulty": 3,
      "expectedEffect": "预期效果描述",
      "steps": ["具体行动步骤1", "具体行动步骤2", "具体行动步骤3"],
      "templates": ["消息模板/话术1", "消息模板/话术2"],
      "successCase": "该渠道的成功案例描述",
      "completed": false,
      "contactCount": 0,
      "replyCount": 0
    }
  ]
}

要求：
1. 生成恰好 10 个渠道（id 从 "channel-1" 到 "channel-10"）
2. difficulty 为 1-5 的整数，1 最简单，5 最难
3. 每个渠道的 steps 包含 3 个具体可执行的行动步骤
4. 每个渠道的 templates 包含 2 个可直接使用的消息模板/话术
5. successCase 要具体且有参考价值
6. 所有 completed 字段设为 false，contactCount 和 replyCount 设为 0
7. 渠道推荐要结合用户的预算和每日可用时间，优先推荐性价比高的渠道
8. 请用英文输出所有内容`,
            },
            {
              role: 'user',
              content: `请根据以下信息生成客户画像和获客渠道推荐：

产品/服务：${product}
解决的问题：${problem}
目标用户：${targetUser}
预算：${budget}
每天可投入时间：${timePerDay}`,
            },
          ],
        },
        {
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      const content = completion.choices[0]?.message?.content;
      if (!content) {
        return NextResponse.json(
          { error: 'AI did not return valid content, please retry' },
          { status: 500 }
        );
      }

      const data = JSON.parse(content);
      return NextResponse.json(data);
    } finally {
      clearTimeout(timeoutId);
    }
  } catch (error: unknown) {
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timed out, please retry' },
        { status: 504 }
      );
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'AI response format error, please retry' },
        { status: 500 }
      );
    }

    // Only log error type, never log user input
    console.error('[POST /api/generate] Error type:', error instanceof Error ? error.constructor.name : 'Unknown');

    return NextResponse.json(
      { error: 'Internal server error, please retry' },
      { status: 500 }
    );
  }
}
