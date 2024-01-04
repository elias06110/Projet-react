import arrow from "../../images/Arrow-down.png";
import { useState } from "react";

export default function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
          <img
            className={toggle ? "arrow arrow_up" : "arrow arrow_down"}
            src={arrow}
            alt="show content"
          />
        </h3>
        <div
          className={toggle ? "collapse_content" : "collapse_content_hidden"}
        >
          {Array.isArray(content) ? (
            <ul className="collapse_content">
              {" "}
              {content.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}{" "}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </>
  );
}
