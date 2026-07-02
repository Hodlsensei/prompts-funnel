const categories = [
  {
    path: "01-code-review/",
    count: "5 prompts",
    desc: "General, security, performance, PR summary, style consistency.",
  },
  {
    path: "02-debugging/",
    count: "5 prompts",
    desc: "Stack traces, intermittent bugs, legacy code, rubber-duck flow.",
  },
  {
    path: "03-refactoring/",
    count: "4 prompts",
    desc: "Readability passes, pattern extraction, safe incremental plans.",
  },
  {
    path: "04-testing/",
    count: "4 prompts",
    desc: "Unit tests, edge-case finder, test review, integration scaffolds.",
  },
  {
    path: "05-documentation/",
    count: "3 prompts",
    desc: "Function docs, README generation, architecture decision records.",
  },
  {
    path: "06-architecture/",
    count: "4 prompts",
    desc: "Design review, scaling plans, stack tradeoffs, API design.",
  },
  {
    path: "07-git-pr-workflow/",
    count: "3 prompts",
    desc: "Commit messages, PR descriptions, changelog entries.",
  },
];

export default function Categories() {
  return (
    <section className="section" id="categories">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">whats-inside.md</p>
          <h2>Organized the way your repo is.</h2>
        </div>

        <div className="tree">
          {categories.map((c) => (
            <div className="tree-row" key={c.path}>
              <div className="tree-row-inner">
                <div className="tree-row-top">
                  <span className="tree-name">
                    <span className="tree-path">./</span>
                    {c.path}
                  </span>
                  <span className="tree-count">{c.count}</span>
                </div>
                <p className="tree-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
