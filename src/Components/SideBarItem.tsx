import '../Style/SideBarItem.scss';

function SideBarItem(props: any) {
    return (
        <div className="Item">
            <span className="Text">
                {props.text}
            </span>
        </div>
    );
}

export default SideBarItem;