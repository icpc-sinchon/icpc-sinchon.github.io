import { css } from "styled-components";
import ItemWrap from "./ItemWrap";

const ArchiveWrap_ = css`
  display: flex;
  padding: 0;
  overflow-x: auto;
  white-space: nowrap;

  @media (max-width: 766px) {
  }
`;
const ArchiveWrap = ({ href, children, className }) => {
  return (
    <ItemWrap className={className} href={href} css={ArchiveWrap_}>
      {children}
    </ItemWrap>
  );
};

export default ArchiveWrap;
