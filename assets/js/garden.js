const notes = [
  { title: "域适应学习索引", type: "深度学习", tag: "域适应", date: "2026-05-23", text: "整理源域、目标域、分布差异、对齐策略与实验记录。" },
  { title: "PyTorch 实验复现清单", type: "工程实践", tag: "PyTorch", date: "2026-05-23", text: "记录随机种子、数据版本、checkpoint、指标和日志路径。" },
  { title: "论文精读模板", type: "论文精读", tag: "论文", date: "2026-05-23", text: "从研究问题、方法结构、实验设计、结论和可引用内容展开。" },
  { title: "调试经验收集", type: "工程实践", tag: "调试", date: "2026-05-23", text: "把报错、定位过程、根因和最终修复沉淀成可复用经验。" },
  { title: "读书笔记格式", type: "读书笔记", tag: "阅读", date: "2026-05-23", text: "记录核心观点、触发的想法、可复用表达和相关链接。" },
  { title: "随笔与阶段总结", type: "随笔", tag: "复盘", date: "2026-05-23", text: "保存阶段性思考，不要求完美，但要保留上下文。" }
]

function renderNotes(list = notes) {
  const root = document.querySelector("[data-notes]")
  if (!root) return
  root.innerHTML = list.length ? list.map(note => `
    <article class="note" data-type="${note.type}">
      <div class="note-head"><h3>${note.title}</h3><span class="meta">${note.date}</span></div>
      <p>${note.text}</p>
      <span class="chip">${note.type}</span> <span class="chip">${note.tag}</span>
    </article>
  `).join("") : `<div class="empty">没有匹配的笔记。</div>`
}

function setupLibrary() {
  const search = document.querySelector("[data-search]")
  const filters = [...document.querySelectorAll("[data-filter]")]
  if (!search) return
  function apply() {
    const active = document.querySelector("[data-filter].active")?.dataset.filter || "全部"
    const q = search.value.trim().toLowerCase()
    renderNotes(notes.filter(note => (active === "全部" || note.type === active) && [note.title, note.type, note.tag, note.text].join(" ").toLowerCase().includes(q)))
  }
  search.addEventListener("input", apply)
  filters.forEach(btn => btn.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"))
    btn.classList.add("active")
    apply()
  }))
  apply()
}

function setupRandom() {
  const root = document.querySelector("[data-random]")
  if (!root) return
  function pick() {
    const note = notes[Math.floor(Math.random() * notes.length)]
    root.innerHTML = `<article class="card"><p class="meta">${note.type} / ${note.tag}</p><h2>${note.title}</h2><p>${note.text}</p></article>`
  }
  document.querySelector("[data-random-button]")?.addEventListener("click", pick)
  pick()
}

renderNotes(notes.slice(0, 3))
setupLibrary()
setupRandom()
