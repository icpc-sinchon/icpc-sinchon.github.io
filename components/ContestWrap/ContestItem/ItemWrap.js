import styled from "styled-components";

const ItemWrap = styled(({ children, className, style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
})`
  padding-bottom: 1rem;
`;

export default ItemWrap;
