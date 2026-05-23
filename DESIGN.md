---
name: 温润笔记 (Warmth & Wisdom)
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#55433e'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#88726d'
  outline-variant: '#dbc1ba'
  surface-tint: '#974730'
  primary: '#94442e'
  on-primary: '#ffffff'
  primary-container: '#b35c44'
  on-primary-container: '#fffcff'
  inverse-primary: '#ffb5a1'
  secondary: '#506354'
  on-secondary: '#ffffff'
  secondary-container: '#d0e5d2'
  on-secondary-container: '#546758'
  tertiary: '#884e14'
  on-tertiary: '#ffffff'
  tertiary-container: '#a5662b'
  on-tertiary-container: '#fffcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a1'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#79301b'
  secondary-fixed: '#d3e8d5'
  secondary-fixed-dim: '#b7ccb9'
  on-secondary-fixed: '#0e1f13'
  on-secondary-fixed-variant: '#394b3d'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77b'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3900'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-lg:
    fontFamily: Noto Serif SC
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif SC
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 44px
  headline-md:
    fontFamily: Noto Serif SC
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Noto Sans SC
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Noto Sans SC
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-md:
    fontFamily: Noto Sans SC
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Noto Serif SC
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 38px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max-width: 900px
  sidebar-width: 280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## 品牌与风格 (Brand & Style)

本设计系统致力于营造一种“数字花园”或“私人书斋”的氛围。它针对个人知识库场景，旨在通过模拟纸张的触感与温暖的色调，缓解长时间阅读与思考带来的视觉疲劳。

**风格定义：有机极简主义 (Organic Minimalism)**
设计结合了极简主义的克制与触感美学。整体界面通过大量的留白（或称“留暖”）来突出内容，避免生硬的纯白，转而采用具有呼吸感的米色与奶油色调。视觉语言柔和、宁静且具有人文气息，鼓励用户进行深度的记录与回顾。

## 色彩 (Colors)

色彩灵感源自陶土、森林与陈年纸张。

- **背景色 (Background):** 使用温润的暖白 (#F9F7F2)，模拟高质感书写纸的底色。
- **主色 (Primary - 陶土色):** 用于关键行动点、链接与强调。
- **辅助色 (Secondary - 森林绿):** 用于分类标签、成功状态或次要互动元素。
- **点缀色 (Tertiary - 琥珀色):** 用于警告、高亮或标记。
- **中性色 (Neutral - 深炭褐):** 用于文字主体，相比纯黑更具温度，阅读体验更柔和。

## 字体排版 (Typography)

字体排版遵循“排版即设计”的原则，确保长文本的可读性。

- **标题层级:** 采用 **Noto Serif SC (思源宋体)**，体现学术性与人文质感。较大的字号配合略紧的字距，使标题更具凝聚力。
- **正文层级:** 采用 **Noto Sans SC (思源黑体)**，确保在不同分辨率下的清晰度。正文行高设定为 1.6 倍以上，增加阅读时的舒适感。
- **标注与标签:** 增加字间距并使用中等字重，以便在小字号下依然清晰易辨。

## 布局与间距 (Layout & Spacing)

采用以内容为核心的混合布局。

- **内容区域:** 采用固定宽度 (900px) 的居中容器，优化阅读视线路径。
- **侧边栏:** 采用流体布局，负责导航与元数据展示，通过物理感明显的细线或色块进行区分。
- **响应式规则:**
    - **桌面端:** 保持宽裕的边距 (40px) 与双侧边栏结构。
    - **平板端:** 隐藏非必要侧边栏，边距缩小至 24px。
    - **移动端:** 采用单栏布局，边距为 16px，内容充满屏幕宽度以最大化阅读空间。

## 层级与深度 (Elevation & Depth)

本设计系统不追求强烈的阴影或悬浮感，而是通过色彩的微差来表达物理层级。

- **层级表达:** 采用“叠纸”逻辑。底层背景最淡，顶层容器（如弹窗、卡片）颜色稍深或带有极淡的暖褐色投影 (#2D2926, 5% 透明度)。
- **边界感:** 使用低对比度的描边 (1px, 颜色比背景略深) 来区分界面板块，而不是依赖重阴影，保持整体视觉的平整与轻盈。
- **模糊效果:** 涉及覆盖层时，使用轻微的背景模糊，配合暖色半透明遮罩，模拟磨砂玻璃在暖光下的质感。

## 形状 (Shapes)

形状语言偏向内敛与精致。

- **圆角设定:** 默认采用 **Soft (0.25rem)**。这种微小的圆角能中和直角的硬朗，使界面更具亲和力，同时不失严谨。
- **按钮与标签:** `rounded-lg` (0.5rem) 用于交互性较强的元素，使其在视觉上更容易被识别为“可点击”。
- **修饰元素:** 极少数装饰性图像或头像可使用圆形，但整体系统严禁使用过于夸张的大圆角。

## 组件 (Components)

所有组件均需符合“纸质书写”的直觉。

- **按钮 (Buttons):** 主按钮使用陶土色填充，白字；次要按钮使用森林绿描边，背景透明。交互状态下（Hover）颜色加深，按下（Active）略微缩小。
- **卡片 (Cards):** 弱化边框，使用比主背景稍深的色块 (#F0EDE4) 承载内容。卡片间距保持在 16px 以上，确保呼吸感。
- **输入框 (Inputs):** 采用下划线风格或带有浅色底色的填充风格，避免全框包围，模拟在纸上横线书写的体验。
- **列表 (Lists):** 使用森林绿作为点缀符 (Bullets)，列表项之间保持宽裕的垂直间距。
- **标签 (Chips):** 使用淡琥珀色背景与深褐文字，圆角稍大，模拟手工贴纸或索引标签的视觉效果。
- **引用块 (Blockquotes):** 在左侧放置 4px 宽的陶土色竖线，背景色微调，字体切换为思源宋体斜体（若支持）。