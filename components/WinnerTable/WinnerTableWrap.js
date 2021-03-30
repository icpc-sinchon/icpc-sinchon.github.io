import WinnerTable from './WinnerTable'

const WinnerTableWrap = ({ data }) => {
    return (
        data.map(elem => {
            return <WinnerTable data={elem} />
        })
    )
}

export default WinnerTableWrap