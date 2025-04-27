import './style.scss';

function Popover   (props:{
    show: boolean;
} )   {
    //variable to determine if popover is shown or not
    const {show} = props;

    return show? (
        <div className="popover">

        </div>
    ) : null;
}

export default Popover;