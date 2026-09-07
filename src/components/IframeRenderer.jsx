import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const SCALE = 0.9;

const IFRAME_STYLES = `
  body { margin: 0; font-size: 14px; font-family: system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
  img { max-width: 100%; }
  [hidden] { display: none !important; }
`;

const SRCDOC = `<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>${IFRAME_STYLES}</style></head><body><div id="root"></div></body></html>`;

export default function IframeRenderer({ children }) {
  const iframeRef = useRef(null);
  const [mountNode, setMountNode] = useState(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    function onLoad() {
      const root = iframe.contentDocument?.getElementById("root");
      if (root) setMountNode(root);
    }

    iframe.addEventListener("load", onLoad);
    return () => iframe.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <iframe
        ref={iframeRef}
        srcDoc={SRCDOC}
        style={{
          border: "none",
          display: "block",
          width: `${100 / SCALE}%`,
          height: `${100 / SCALE}vh`,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
        title="Prototype"
      />
      {mountNode && createPortal(children, mountNode)}
    </>
  );
}
