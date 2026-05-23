const domains = {
  notes: { name: "知识笔记", sub: "概念、问题、方法、经验", tone: "blue" },
  projects: { name: "项目资料", sub: "需求、过程、结果、复盘", tone: "green" },
  reading: { name: "阅读摘录", sub: "书籍、文章、论文、资料", tone: "purple" },
  tools: { name: "工具方法", sub: "流程、模板、脚本、技巧", tone: "amber" },
  archive: { name: "归档材料", sub: "旧资料、参考、待整理内容", tone: "slate" }
};

const seedItems = [];

const typeNames = { note: "笔记", project: "项目", resource: "资源", tool: "工具" };

if (localStorage.getItem("kb:schema") !== "empty-v2") {
  localStorage.removeItem("kb:custom");
  localStorage.removeItem("kb:favorites");
  localStorage.setItem("kb:schema", "empty-v2");
}

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
document.querySelector("#clearButton").addEventListener("click", () => {
  state.custom = [];
  state.favorites.clear();
  localStorage.removeItem("kb:custom");
  localStorage.removeItem("kb:favorites");
  localStorage.setItem("kb:schema", "empty-v2");
  state.domain = "all";
  state.type = "all";
  state.query = "";
  document.querySelector("#searchInput").value = "";
  document.querySelectorAll("[data-domain]").forEach(button => button.classList.toggle("active", button.dataset.domain === "all"));
  document.querySelectorAll("[data-type]").forEach(button => button.classList.toggle("active", button.dataset.type === "all"));
  render();
});
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
