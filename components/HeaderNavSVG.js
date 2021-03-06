import { useSelector } from "react-redux";

const SVG = () => {
    const isNavClicked = useSelector(state => state.isNavClicked)
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27.5" height="15.278" viewBox="0 0 27.5 15.278">
            <style jsx>{`
        path{
            fill: ${isNavClicked ? "white" : ""};
        }
        `}</style>
            <path id="패스_28" data-name="패스 28" d="M3,18.167H30.5V15.111H3Zm0,6.111H30.5V21.222H3ZM3,12.056H30.5V9H3Z" transform="translate(-3 -9)" fill="#009d3e" />
        </svg>
    )
}

export default SVG;