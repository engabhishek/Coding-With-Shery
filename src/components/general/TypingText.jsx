import React, { useEffect, useState } from "react";

const lines = [
  { text: "We Only teach", className: "text-white" },
  { text: "what we are really", className: "text-red-300" },
  { text: "really good at..", className: "text-white" },
];

const TypingText = ({ start }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [typedLines, setTypedLines] = useState([]);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (!start || hasTyped) return;

    if (currentLine >= lines.length) {
      setHasTyped(true); 
      return;
    }

    if (currentText.length < lines[currentLine].text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(
          lines[currentLine].text.slice(0, currentText.length + 1)
        );
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedLines((prev) => [
          ...prev,
          { text: currentText, className: lines[currentLine].className },
        ]);
        setCurrentText("");
        setCurrentLine((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLine, start, hasTyped]);

  return (
    <div className="text-center font-mono text-2xl sm:text-4xl md:text-5xl lg:text-9xl py-4 leading-snug">
      {typedLines.map((line, idx) => (
        <div key={idx} className={line.className}>
          {line.text}
        </div>
      ))}
      {currentLine < lines.length && !hasTyped && (
        <div className={lines[currentLine].className}>
          {currentText}
          <span className="animate-blink">|</span>
        </div>
      )}
    </div>
  );
};

export default TypingText;
