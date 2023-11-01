import '../Style/SideBarItem.scss';

function SideBarItem(props: any) {
    return (
        <div className="Item">
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