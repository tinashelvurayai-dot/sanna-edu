import { Fragment } from "react";

/** Renders **bold** inline segments within a line of text. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-blue-900 font-semibold">{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Minimal markdown-ish renderer for course module content. */
export function CourseContentBody({ content }: { content: string }) {
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];

  const flush = (key: string) => {
    if (list.length) {
      blocks.push(
        <ul key={key} className="list-disc pl-6 space-y-1 my-3 text-blue-700">
          {list.map((li, i) => <li key={i}>{renderInline(li)}</li>)}
        </ul>,
      );
      list = [];
    }
  };

  lines.forEach((raw, idx) => {
    const line = raw.trim();
    if (!line) { flush(`ul-${idx}`); return; }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      list.push(line.slice(2));
      return;
    }
    flush(`ul-${idx}`);
    const heading = line.match(/^\*\*(.+)\*\*:?$/);
    if (heading) {
      blocks.push(<h4 key={idx} className="text-lg font-bold text-blue-900 mt-5 mb-2">{heading[1]}</h4>);
    } else {
      blocks.push(<p key={idx} className="text-blue-700 leading-relaxed my-2">{renderInline(line)}</p>);
    }
  });
  flush("ul-final");

  return <div>{blocks}</div>;
}