import { useEffect, useRef } from "react";
import styled from "styled-components";
const TextBubble = ({ className, text, triggerRef }) => {
  const divRef = useRef(null);

  useEffect(() => {
    triggerRef?.current?.addEventListener("mouseover", () => {
      const balloon = divRef.current;
      const button = triggerRef.current;
      const buttonBoundary = button.getBoundingClientRect();

      balloon.style.top =
        window.scrollY + buttonBoundary.top - buttonBoundary.height - 10 + "px";
      balloon.style.left = buttonBoundary.left + "px";
      balloon.classList.remove("vhide");
    });

    triggerRef?.current?.addEventListener("mouseout", () => {
      const balloon = divRef.current;
      balloon.classList.add("vhide");
    });

    document.body.addEventListener("click", ({ target }) => {
      if (target === triggerRef?.current) return;
      const balloon = divRef.current;
      balloon?.classList.add("vhide");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Div className={className + "text-bubble vhide"} ref={divRef}>
      {text}
    </Div>
  );
};
const Div = styled.div`
  position: absolute;
  background: #555353;
  color: white;
  border-radius: 0.4em;
  padding: 0.2rem 2rem;
  font-size: 16px;

  z-index: 100;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-top-color: #555353;
    border-bottom: 0;
    margin-left: -7px;
    margin-bottom: -7px;
  }
`;
export default TextBubble;
