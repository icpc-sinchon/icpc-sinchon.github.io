import styled from "styled-components";

const TableWrap = styled.div`
  overflow-x: auto;
  white-space: nowrap;
`;

export default function ManagementTeamTable({ data }) {
  return (
    <TableWrap>
      <table>
        <thead>
          <tr>
            <th css={{ width: "6rem" }}>직책</th>
            <th css={{ width: "6rem" }}>이름</th>
            <th css={{ width: "6rem" }}>학교</th>
          </tr>
        </thead>
        <tbody>
          {data[0].president?.map((member) => (
            <tr key={"team-president-" + member.name}>
              <td>회장</td>
              <td>{member.name}</td>
              <td>{member.school ? member.school : "-"}</td>
            </tr>
          ))}
          {data[0].member?.map((member) => (
            <tr key={"team-member-" + member.name}>
              <td>운영진</td>
              <td>{member.name}</td>
              <td>{member.school ? member.school : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrap>
  );
}
