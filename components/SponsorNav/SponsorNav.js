import styled from "styled-components";

const SponsorNav = ({ onSponsorNavClick, currentSponsorIdx }) => {
  const sponsorOptions = ["기업 후원", "개인 후원"];

  return (
    <SponsorNavWrap>
      {sponsorOptions.map((option, idx) => {
        return (
          <SponsorNavElem
            key={option}
            onClick={() => onSponsorNavClick(idx)}
            className={idx === currentSponsorIdx ? "selected" : ""}
          >
            {option}
          </SponsorNavElem>
        );
      })}
    </SponsorNavWrap>
  );
};

const SponsorNavWrap = styled.div`
  padding: 1rem 2rem 0;
  display: flex;

  white-space: nowrap;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 500px) {
    padding: 1rem 0 0rem 0;
  }
`;

const SponsorNavElem = styled.div`
  height: 2rem;
  line-height: 2rem;

  padding: 0 1rem;
  margin-left: 2.3rem;
  border-radius: 1rem;

  font-family: "KeepCalmMed";
  font-weight: 500;
  color: #c8c8c8;
  font-size: 0.85rem;
  cursor: pointer;

  &:first-child {
    margin-left: 3.2rem;
  }

  @media (max-width: 500px) {
    &:first-child {
      margin-left: 1.2rem;
    }
    margin-left: 0.5rem;
  }

  &.selected {
    background-color: #009d3e;
    color: white;
  }
`;

export default SponsorNav;
