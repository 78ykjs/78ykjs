# 沈国栋的知识库

这是一个基于 Quartz v4 的个人知识库仓库。

## 工作流

```text
Obsidian / Markdown
  -> content/
  -> Quartz v4
  -> GitHub Actions
  -> GitHub Pages
```

## 目录

- `content/`：知识库正文，直接用 Markdown 编写。
- `quartz.config.ts`：Quartz 站点配置。
- `quartz.layout.ts`：Quartz 页面布局配置。
- `.github/workflows/pages.yml`：自动部署到 GitHub Pages。

## 内容结构

```text
content/
├── index.md
├── 深度学习/
│   ├── 域适应/
│   ├── 无源域适应/
│   └── 注意力机制/
├── 工程实践/
│   ├── PyTorch技巧/
│   └── 调试经验/
├── 读书笔记/
├── 论文精读/
└── 随笔/
```

## 发布

推送到 `main` 后，GitHub Actions 会自动拉取 Quartz v4、构建 `content/`，并发布到 GitHub Pages。
