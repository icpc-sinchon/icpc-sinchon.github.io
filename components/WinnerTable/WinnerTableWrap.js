import WinnerTable from "./WinnerTable";

const WinnerTableWrap = ({ data }) => {
  return data.map((elem, idx) => {
    return <WinnerTable key={"winnertable-" + idx} data={elem} />;
  });
};

export default WinnerTableWrap;
