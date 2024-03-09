import React from "react";
import "./FAQ.css";
import { useState } from "react";

function FAQ() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <><div className="title_faq" align="center">FAQs</div>
      <div className="wrapper">
        <div className="faq">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span className="sign">{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
const data = [
  {
    question: "what is HC?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam ut maiores ad rem voluptatum? Molestiae debitis eius ut molestias voluptatum ducimus quam maxime repellendus fugiat? Quo aliquam rem nam?",
  },
  {
    question: "what is HC?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam ut maiores ad rem voluptatum? Molestiae debitis eius ut molestias voluptatum ducimus quam maxime repellendus fugiat? Quo aliquam rem nam?",
  },
  {
    question: "what is HC?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam ut maiores ad rem voluptatum? Molestiae debitis eius ut molestias voluptatum ducimus quam maxime repellendus fugiat? Quo aliquam rem nam?",
  },
  {
    question: "what is HC?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam ut maiores ad rem voluptatum? Molestiae debitis eius ut molestias voluptatum ducimus quam maxime repellendus fugiat? Quo aliquam rem nam?",
  },
  {
    question: "what is HC?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam ut maiores ad rem voluptatum? Molestiae debitis eius ut molestias voluptatum ducimus quam maxime repellendus fugiat? Quo aliquam rem nam?",
  },
  {
    question: "what is HC?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam ut maiores ad rem voluptatum? Molestiae debitis eius ut molestias voluptatum ducimus quam maxime repellendus fugiat? Quo aliquam rem nam?",
  },
];
export default FAQ;
