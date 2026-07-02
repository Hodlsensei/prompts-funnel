const faqs = [
  {
    q: "Which AI tools do these prompts work with?",
    a: "Any chat-based model — Claude, ChatGPT, Cursor, Copilot Chat. They're plain text templates, not tool-specific plugins.",
  },
  {
    q: "Do I need to be an experienced developer to use these?",
    a: "They're written for people already working in a codebase — junior to senior. If you don't know what a stack trace is yet, this pack will make more sense in a few months.",
  },
  {
    q: "What format do I get?",
    a: "A PDF for the Core Pack. The Pro Bundle adds a Notion database version so you can search and copy prompts without scrolling a document.",
  },
  {
    q: "Is this a subscription?",
    a: "No — one-time payment, yours to keep. Pro Bundle buyers get free access to future prompt additions in the categories they already own.",
  },
  {
    q: "Refunds?",
    a: "If the pack isn't useful within 14 days, email us and we'll refund it — no forms, no guilt trip.",
  },
];

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">faq</p>
          <h2>Questions, answered plainly.</h2>
        </div>

        <div className="faq">
          {faqs.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
