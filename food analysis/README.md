# 饮食分析助手

一个基于 Next.js 开发的饮食分析网页应用。

## 功能特点

- 性别选择
- 身高体重输入
- 饮食记录
- 分析建议生成

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Styled Components

## 开发环境要求

- Node.js 18+ 
- npm 或 yarn

## 安装步骤

1. 克隆项目
```bash
git clone [your-repository-url]
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 运行开发服务器
```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器访问 http://localhost:3000

## 部署

本项目可以直接部署到 Vercel 平台：

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. 选择仓库并点击部署

## 项目结构

```
.
├── public/                 # 静态资源
├── src/
│   ├── app/               # Next.js 应用页面
│   ├── components/        # React 组件
│   └── styles/            # 样式文件
├── package.json           # 项目依赖配置
├── tsconfig.json          # TypeScript 配置
└── next.config.js         # Next.js 配置
```

## 开发指南

- 使用 `npm run dev` 启动开发服务器
- 使用 `npm run build` 构建生产版本
- 使用 `npm run start` 启动生产服务器

## 许可证

MIT
