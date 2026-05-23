const domains = {
  github: { name: "GitHub 搭建", sub: "主页、Pages、Actions、仓库组织", tone: "blue" },
  thesis: { name: "毕业论文", sub: "定稿、降重、模板、章节结构", tone: "purple" },
  wind: { name: "风电故障诊断", sub: "故障数据、实验、模型验证", tone: "green" },
  data: { name: "数据实验", sub: "清洗、匹配、记录、复现", tone: "amber" },
  literature: { name: "文献检索", sub: "搜索、筛选、引用、PDF", tone: "rose" },
  automation: { name: "自动化脚本", sub: "批处理、工具链、重复任务", tone: "slate" }
};

const seedItems = [
  {
    id: "github-pages-route",
    title: "GitHub Pages 访问路径",
    domain: "github",
    type: "note",
    priority: 98,
    updated: "2026-05-23",
    tags: ["Pages", "仓库", "路径"],
    summary: "个人主页仓库和项目 Pages 的访问路径不同，仓库名会影响最终 URL。",
    points: ["用户站点通常使用 username.github.io 仓库", "项目页通常带仓库路径", "部署前确认 Pages Source 和分支"]
  },
  {
    id: "github-actions-pages",
    title: "Actions 自动部署 Pages",
    domain: "github",
    type: "tool",
    priority: 92,
    updated: "2026-05-23",
    tags: ["Actions", "部署", "Pages"],
    summary: "使用 GitHub Actions 发布静态站点，避免手动构建和路径混乱。",
    points: ["配置 pages: write 和 id-token: write", "上传根目录作为 artifact", "在 Settings Pages 中选择 GitHub Actions"]
  },
  {
    id: "thesis-final-workflow",
    title: "毕业论文定稿工作流",
    domain: "thesis",
    type: "project",
    priority: 96,
    updated: "2026-05-23",
    tags: ["论文", "定稿", "Word"],
    summary: "从真实项目材料出发，整理章节、图表、实验说明和最终 Word 交付。",
    points: ["先对齐学校模板", "章节内容必须回到真实代码和实验", "最终渲染检查版式"]
  },
  {
    id: "thesis-aigc-rewrite",
    title: "AIGC/查重口吻优化",
    domain: "thesis",
    type: "note",
    priority: 88,
    updated: "2026-05-23",
    tags: ["降重", "表达", "论文"],
    summary: "论文表达要降低模板腔和机械连接词，保留技术事实但改写叙述方式。",
    points: ["避免空泛定义堆叠", "加入项目上下文", "用实验观察支撑结论"]
  },
  {
    id: "wind-fault-project",
    title: "风电故障诊断项目材料",
    domain: "wind",
    type: "project",
    priority: 100,
    updated: "2026-05-23",
    tags: ["风电", "故障诊断", "毕业设计"],
    summary: "围绕风电设备故障诊断项目整理模型、数据、实验和论文材料。",
    points: ["记录数据来源和故障类型", "保存模型训练和验证结果", "把实验表格和图对应到论文章节"]
  },
  {
    id: "gearbox-prefault-match",
    title: "齿轮箱预故障数据匹配",
    domain: "wind",
    type: "note",
    priority: 91,
    updated: "2026-05-23",
    tags: ["齿轮箱", "数据匹配", "预故障"],
    summary: "针对齿轮箱预故障数据，保留匹配脚本、输入输出和验证记录。",
    points: ["记录原始数据目录", "保存匹配规则", "检查输出样本和异常项"]
  },
  {
    id: "excel-quality-form",
    title: "Excel 不合格审理单读取",
    domain: "data",
    type: "tool",
    priority: 84,
    updated: "2026-05-23",
    tags: ["Excel", "COM", "数据读取"],
    summary: "使用 Excel COM 读取复杂工作表时，优先读取显示文本和 UsedRange。",
    points: ["保留工作表名", "限制预览行列", "退出 Excel 并释放 COM 对象"]
  },
  {
    id: "experiment-record",
    title: "实验记录最小字段",
    domain: "data",
    type: "note",
    priority: 82,
    updated: "2026-05-23",
    tags: ["实验", "复现", "记录"],
    summary: "每次实验至少记录数据、参数、模型、指标、输出文件和结论。",
    points: ["指标和图表要能回溯", "checkpoint 命名要含任务和 seed", "保留失败实验原因"]
  },
  {
    id: "paper-search-flow",
    title: "文献检索与筛选流程",
    domain: "literature",
    type: "resource",
    priority: 87,
    updated: "2026-05-23",
    tags: ["文献", "检索", "筛选"],
    summary: "先定义关键词和检索式，再做开放获取判断、元数据记录和引用整理。",
    points: ["记录 DOI 或 arXiv ID", "优先官方和开放获取来源", "保留筛选理由"]
  },
  {
    id: "paper-reading-card",
    title: "论文阅读卡片",
    domain: "literature",
    type: "note",
    priority: 79,
    updated: "2026-05-23",
    tags: ["论文", "阅读", "卡片"],
    summary: "一篇论文整理成研究问题、方法、实验、结论、可引用内容和疑问。",
    points: ["不要只摘摘要", "标出和自己项目的关系", "把可引用句改写成自己的表达"]
  },
  {
    id: "powershell-safe-cleanup",
    title: "PowerShell 安全清理规则",
    domain: "automation",
    type: "tool",
    priority: 90,
    updated: "2026-05-23",
    tags: ["PowerShell", "安全", "清理"],
    summary: "删除或移动文件前先解析绝对路径，并确认目标仍在工作区内。",
    points: ["不要跨 shell 组合删除命令", "使用 LiteralPath", "递归删除前检查路径前缀"]
  },
  {
    id: "knowledge-site-rebuild",
    title: "个人知识主页重构",
    domain: "automation",
    type: "project",
    priority: 86,
    updated: "2026-05-23",
    tags: ["主页", "知识库", "静态站点"],
    summary: "把主页简化为入口，把知识库页做成真正可搜索、筛选、收藏和新增的工作台。",
    points: ["主页只放核心 CTA", "知识库承载复杂功能", "数据结构独立于展示样式"]
  }
];

const typeNames = { note: "笔记", project: "项目", resource: "资源", tool: "工具" };
const state = {
  domain: "all",
  type: "all",
  query: "",
  sort: "priority",
  favorites: new Set(JSON.parse(localStorage.getItem("kb:favorites") || "[]")),
  custom: JSON.parse(localStorage.getItem("kb:custom") || "[]")
};

const allItems = () => [...seedItems, ...state.custom];
const saveFavorites = () => localStorage.setItem("kb:favorites", JSON.stringify([...state.favorites]));
const saveCustom = () => localStorage.setItem("kb:custom", JSON.stringify(state.custom));

function matches(item) {
  const text = [item.title, item.summary, item.domain, item.type, ...item.tags, ...item.points].join(" ").toLowerCase();
  const domainMatch = state.domain === "all" || item.domain === state.domain || (state.domain === "favorites" && state.favorites.has(item.id));
  const typeMatch = state.type === "all" || item.type === state.type;
  const queryMatch = !state.query || text.includes(state.query.toLowerCase());
  return domainMatch && typeMatch && queryMatch;
}

function sorted(items) {
  return [...items].sort((a, b) => {
    if (state.sort === "title") return a.title.localeCompare(b.title, "zh-CN");
    if (state.sort === "updated") return b.updated.localeCompare(a.updated);
    return b.priority - a.priority;
  });
}

function renderDomains() {
  const grid = document.querySelector("#domainGrid");
  grid.innerHTML = Object.entries(domains).map(([key, domain]) => {
    const count = allItems().filter(item => item.domain === key).length;
    return `<button class="domain-card ${domain.tone} ${state.domain === key ? "active" : ""}" type="button" data-domain="${key}">
      <strong>${domain.name}</strong>
      <span>${domain.sub}</span>
      <b>${count}</b>
    </button>`;
  }).join("");
}

function renderStats(items) {
  document.querySelector("#totalCount").textContent = allItems().length;
  document.querySelector("#domainCount").textContent = Object.keys(domains).length;
  document.querySelector("#favoriteCount").textContent = state.favorites.size;
  document.querySelector("#customCount").textContent = state.custom.length;
  document.querySelector("#resultTitle").textContent = state.domain === "all"
    ? `全部知识（${items.length}）`
    : state.domain === "favorites"
      ? `我的收藏（${items.length}）`
      : `${domains[state.domain].name}（${items.length}）`;
}

function renderItems() {
  const items = sorted(allItems().filter(matches));
  renderStats(items);
  const grid = document.querySelector("#knowledgeGrid");
  if (!items.length) {
    grid.innerHTML = `<div class="empty-state">没有匹配条目，可以换个关键词或新增一条知识。</div>`;
    return;
  }
  grid.innerHTML = items.map(item => `<article class="knowledge-card">
    <header>
      <div>
        <span class="type-pill">${typeNames[item.type]}</span>
        <h3>${item.title}</h3>
      </div>
      <button class="favorite-button ${state.favorites.has(item.id) ? "active" : ""}" type="button" data-favorite="${item.id}" aria-label="收藏">★</button>
    </header>
    <p>${item.summary}</p>
    <div class="tag-row">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
    <footer>
      <span>${domains[item.domain].name}</span>
      <button type="button" data-detail="${item.id}">查看详情</button>
    </footer>
  </article>`).join("");
}

function openDetail(id) {
  const item = allItems().find(entry => entry.id === id);
  if (!item) return;
  document.querySelector("#detailContent").innerHTML = `<p class="detail-meta">${domains[item.domain].name} · ${typeNames[item.type]} · ${item.updated}</p>
    <h2>${item.title}</h2>
    <p>${item.summary}</p>
    <h3>关键点</h3>
    <ul>${item.points.map(point => `<li>${point}</li>`).join("")}</ul>
    <h3>标签</h3>
    <div class="tag-row">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>`;
  document.querySelector("#detailDialog").showModal();
}

function render() {
  renderDomains();
  renderItems();
}

document.addEventListener("click", event => {
  const domainButton = event.target.closest("[data-domain]");
  if (domainButton) {
    state.domain = domainButton.dataset.domain;
    document.querySelectorAll("[data-domain]").forEach(button => button.classList.toggle("active", button.dataset.domain === state.domain));
    render();
  }
  const typeButton = event.target.closest("[data-type]");
  if (typeButton) {
    state.type = typeButton.dataset.type;
    document.querySelectorAll("[data-type]").forEach(button => button.classList.toggle("active", button.dataset.type === state.type));
    render();
  }
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
    saveFavorites();
    render();
  }
  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) openDetail(detailButton.dataset.detail);
});

document.querySelector("#searchInput").addEventListener("input", event => {
  state.query = event.target.value.trim();
  renderItems();
});

document.querySelector("#sortSelect").addEventListener("change", event => {
  state.sort = event.target.value;
  renderItems();
});

document.querySelector("#closeDetailButton").addEventListener("click", () => document.querySelector("#detailDialog").close());
document.querySelector("#openAddButton").addEventListener("click", () => document.querySelector("#addDialog").showModal());
document.querySelector("#closeAddButton").addEventListener("click", () => document.querySelector("#addDialog").close());
document.querySelector("#exportButton").addEventListener("click", () => {
  const data = JSON.stringify(allItems(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = Object.assign(document.createElement("a"), { href: url, download: "78ykjs-knowledge.json" });
  link.click();
  URL.revokeObjectURL(url);
});

document.querySelector("#addForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const item = {
    id: `custom-${Date.now()}`,
    title: form.get("title").trim(),
    domain: form.get("domain"),
    type: form.get("type"),
    priority: 50,
    updated: new Date().toISOString().slice(0, 10),
    tags: form.get("tags").split(/[,，]/).map(tag => tag.trim()).filter(Boolean),
    summary: form.get("summary").trim(),
    points: form.get("points").split(/\n/).map(point => point.trim()).filter(Boolean)
  };
  state.custom.push(item);
  saveCustom();
  event.currentTarget.reset();
  document.querySelector("#addDialog").close();
  render();
});

render();
