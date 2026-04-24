import { useState } from "react";

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="accordion">
      {items.map((item, idx) => (
        <div key={idx} className="accordion-item">
          <button
            className="accordion-trigger"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "12px",
              background: "#f3f4f6",
              border: "none",
              cursor: "pointer",
            }}
          >
            {item.title}
          </button>
          {openIndex === idx && (
            <div
              className="accordion-content"
              style={{ padding: "12px", border: "1px solid #e5e7eb" }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  ); 
};
