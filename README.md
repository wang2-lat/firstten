# FirstTen - 找到你的前10个付费客户

帮助技术创始人系统性地找到前10个付费客户的 AI 工具。

## 快速开始

**前置要求：** Node.js 18+

```bash
# 1. 解压后进入目录
cd firstten

# 2. 安装依赖
npm install

# 3. 配置 API Key
cp .env.example .env.local
# 编辑 .env.local，填入你的 OpenAI API Key

# 4. 启动
npm run dev
```

打开浏览器访问 http://localhost:3000

## 功能

- **5问表单** — 输入产品信息，AI 自动生成获客策略
- **客户画像** — AI 分析目标客户特征、痛点、出没场所
- **10个渠道推荐** — 每个渠道含行动步骤、话术模板、成功案例
- **进度追踪** — 标记完成、记录联系/回复人数、计算回复率
- **20个话术模板** — 冷邮件、LinkedIn、Reddit、Twitter 分类模板，一键复制

## 隐私说明

- 所有用户数据（进度、结果）仅存储在浏览器 localStorage，不上传服务器
- 表单内容仅用于调用 AI 生成策略，不会被存储或用于其他用途
- API Key 仅存在于你本地的 `.env.local` 文件中
- 项目设置了安全响应头（CSP、X-Frame-Options 等）

## 技术栈

Next.js 16 + TypeScript + Tailwind CSS + OpenAI API
