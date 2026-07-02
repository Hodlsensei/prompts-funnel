const rows = [
  {
    del: "Generic prompts that give you generic code",
    add: "Prompts scoped to the exact task: review, debug, refactor, test",
  },
  {
    del: "Re-explaining context every single time",
    add: "Templates with placeholders you fill in once and reuse",
  },
  {
    del: "\"10x your coding\" packs written by non-developers",
    add: "Written from real PR reviews, real stack traces, real refactors",
  },
];

export default function PainPoints() {
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">the diff</p>
          <h2>Most prompt packs read like they&apos;ve never shipped code.</h2>
        </div>

        <div className="pain-list">
          {rows.map((row) => (
            <div className="pain-row" key={row.del}>
              <span className="pain-marker del">-</span>
              <span className="pain-text-del">{row.del}</span>
              <span className="pain-marker add">+</span>
              <span className="pain-text-add">{row.add}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
