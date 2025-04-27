import './style.scss';

function Popover   (props:{
    show: boolean,
    blankClickCallBack:()=>void;
} )   {
    //variable to determine if popover is shown or not
    const {show, blankClickCallBack} = props;

    return show? (
        <div className="popover" onClick={blankClickCallBack}>

        </div>
    ) : null;
}

export default Popover;