import styled from "styled-components";

const WinnerTableWrap = styled.div`
  margin-bottom: 1.4rem;
  &:last-child {
    margin: 0;
  }
`;

const WinnerTableTitle = styled.div`
  width: 5rem;
  padding: calc(0.725rem - 1px) 0;

  font-size: 0.9rem;
  font-weight: 600;
`;

const TableWrap = styled.div`
  overflow-x: auto;
  white-space: nowrap;
`;

export default function WinnerTable({ data }) {
  return (
    <WinnerTableWrap className="test">
      {data.div ? (
        <WinnerTableTitle className="test--title">
          Div {data.div}
        </WinnerTableTitle>
      ) : (
        ""
      )}
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th css={{ width: "1rem" }}>순위</th>
              <th css={{ width: "4rem" }}>솔브 수</th>
              <th css={{ width: "15rem" }}>팀명</th>
              <th css={{ width: "8rem" }}>구성원</th>
              <th css={{ width: "6rem" }}>소속</th>
            </tr>
          </thead>
          <tbody>
            {data.winner.map((data) => {
              return (
                <tr key={"winner-" + data["team"]}>
                  <td>{data["prize"]}</td>
                  <td>{data["solved"]}</td>
                  <td>{data["team"]}</td>
                  <td>{data["member"]}</td>
                  <td>{data["school"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableWrap>
    </WinnerTableWrap>
  );
}
