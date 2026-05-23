(function () {
  const routes = {
    "首页": "index.html",
    "知识库": "library.html",
    "知识图谱": "article.html#knowledge-graph",
    "标签": "tags.html",
    "归档": "library.html#archive",
    "更新": "index.html#recent-updates",
    "随机": "__random__",
    "回收站": "library.html#trash",
    "帮助": "tags.html#help",
    "隐私政策": "privacy.html",
    "使用手册": "manual.html",
    "开源协议": "license.html",
    "进入探索": "library.html",
  }

  const randomPages = ["index.html", "library.html", "article.html", "tags.html"]

  function textOf(el) {
    return (el.textContent || "").replace(/\s+/g, " ").trim()
  }

  function toast(message) {
    let box = document.querySelector("[data-toast]")
    if (!box) {
      box = document.createElement("div")
      box.dataset.toast = "true"
      box.className = "fixed left-1/2 top-6 z-[9999] -translate-x-1/2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-on-primary shadow-xl transition-all"
      document.body.appendChild(box)
    }
    box.textContent = message
    box.style.opacity = "1"
    clearTimeout(box._timer)
    box._timer = setTimeout(() => (box.style.opacity = "0"), 1800)
  }

  function wireLinks() {
    document.querySelectorAll('a[href="#"]').forEach((link) => {
      const label = textOf(link)
      const route = Object.entries(routes).find(([key]) => label.includes(key))?.[1]
      if (!route) return
      link.href = route === "__random__" ? randomPages[Math.floor(Math.random() * randomPages.length)] : route
    })
  }

  function wireSearch() {
    const inputs = [...document.querySelectorAll('input[type="search"], input[placeholder*="搜索"]')]
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase()
        const cards = [...document.querySelectorAll("article, .tag-cloud-item, .group, .paper-texture")]
        let count = 0
        cards.forEach((card) => {
          const matched = !query || textOf(card).toLowerCase().includes(query)
          card.style.display = matched ? "" : "none"
          if (matched) count += 1
        })
        if (query) toast(`找到 ${count} 个匹配项`)
      })
    })
  }

  function openNoteDialog() {
    const existing = document.querySelector("[data-note-dialog]")
    if (existing) {
      existing.showModal()
      return
    }
    const dialog = document.createElement("dialog")
    dialog.dataset.noteDialog = "true"
    dialog.className = "w-[min(560px,calc(100%-32px))] rounded-2xl border border-outline-variant bg-surface p-0 text-on-surface shadow-2xl backdrop:bg-black/30"
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-4 p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="font-headline-md text-headline-md text-primary">新建笔记</h2>
            <p class="mt-1 text-sm text-on-surface-variant">静态演示会把笔记保存到当前浏览器。</p>
          </div>
          <button class="rounded-full px-3 py-1 text-xl text-on-surface-variant" value="cancel">×</button>
        </div>
        <label class="text-sm font-bold text-on-surface-variant">标题<input name="title" class="mt-2 w-full rounded-xl border border-outline-variant bg-surface-container-low p-3 outline-none" required></label>
        <label class="text-sm font-bold text-on-surface-variant">内容<textarea name="body" class="mt-2 min-h-28 w-full rounded-xl border border-outline-variant bg-surface-container-low p-3 outline-none" required></textarea></label>
        <menu class="flex justify-end gap-3 p-0">
          <button class="rounded-xl border border-outline-variant px-4 py-2 text-on-surface-variant" value="cancel">取消</button>
          <button class="rounded-xl bg-primary px-4 py-2 font-bold text-on-primary" value="save">保存</button>
        </menu>
      </form>`
    dialog.addEventListener("close", () => {
      if (dialog.returnValue !== "save") return
      const data = new FormData(dialog.querySelector("form"))
      const notes = JSON.parse(localStorage.getItem("digitalGardenNotes") || "[]")
      notes.unshift({ title: data.get("title"), body: data.get("body"), date: new Date().toLocaleString() })
      localStorage.setItem("digitalGardenNotes", JSON.stringify(notes))
      toast("笔记已保存到浏览器")
    })
    document.body.appendChild(dialog)
    dialog.showModal()
  }

  function wireButtons() {
    document.querySelectorAll("button").forEach((button) => {
      const label = textOf(button)
      if (label.includes("新建笔记") || button.querySelector(".material-symbols-outlined")?.textContent.trim() === "add") {
        button.addEventListener("click", openNoteDialog)
      } else if (label.includes("随机")) {
        button.addEventListener("click", () => (location.href = randomPages[Math.floor(Math.random() * randomPages.length)]))
      }
    })

    document.querySelectorAll(".material-symbols-outlined").forEach((icon) => {
      const name = icon.textContent.trim()
      if (name === "settings") {
        icon.addEventListener("click", () => {
          document.documentElement.classList.toggle("dark")
          toast(document.documentElement.classList.contains("dark") ? "已切换深色模式" : "已切换浅色模式")
        })
      }
      if (name === "grid_view" || name === "view_module") {
        icon.closest("button, .icon-btn, span")?.addEventListener("click", () => toast("已保持卡片视图"))
      }
    })
  }

  function renderSavedNotes() {
    const notes = JSON.parse(localStorage.getItem("digitalGardenNotes") || "[]")
    if (!notes.length || !location.pathname.endsWith("library.html")) return
    const container = document.querySelector("main") || document.body
    const section = document.createElement("section")
    section.className = "mx-auto mt-8 max-w-4xl rounded-2xl border border-outline-variant bg-surface-container-low p-6"
    section.innerHTML = `<h2 class="font-headline-md text-headline-md text-primary">本地笔记</h2>` + notes.map(note => `
      <article class="mt-4 rounded-xl border border-outline-variant bg-surface p-4">
        <h3 class="font-bold">${note.title}</h3>
        <p class="mt-1 text-sm text-on-surface-variant">${note.date}</p>
        <p class="mt-2">${note.body}</p>
      </article>`).join("")
    container.appendChild(section)
  }

  document.addEventListener("DOMContentLoaded", () => {
    wireLinks()
    wireSearch()
    wireButtons()
    renderSavedNotes()
  })
})()
