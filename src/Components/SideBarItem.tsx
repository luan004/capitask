import '../Style/SideBarItem.css';

function SideBarItem(props: any) {
    return (
        <div className="Item" onClick={props.onClick}>
            {!props.image ? null : 
                <img className='Image' src={props.src} alt={props.alt} />
            }
            <span className="Text">
                {props.text}
            </span>
        </div>
    );
}

export default SideBarItem;