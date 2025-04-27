import './style.scss';
import {ReactNode} from "react";

function Popover   (props:{
    show: boolean,
    blankClickCallBack:()=>void,
    children?: ReactNode,
} )   {
    //variable to determine if popover is shown or not
    const {show, blankClickCallBack} = props;

    return show? (
        <>
         <div className="popover-mask" onClick={blankClickCallBack}></div>
         <div className="popover-content">popover-content</div>
        </>
    ) : null;
}

export default Popover;