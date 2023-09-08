import classNames from "classnames";
import { forwardRef } from "react";
import styled from "styled-components";

const sinchonColor = "#009D3E";

const ContestWrap = styled(
  forwardRef(({ className, children }, ref) => {
    return (
      <div className={classNames("contest-wrap slide-up", className)} ref={ref}>
        {children}
      </div>
    );
  }),
)`
  position: relative;

  width: 1043px;
  height: auto;
  border: 3px solid ${sinchonColor};

  margin: 0 auto 6rem auto;
  padding: 3.6rem 4.4rem 4.4rem 4.4rem;

  @media (max-width: 500px) {
    margin: 0 auto 2rem auto;
  }
`;

export default ContestWrap;
