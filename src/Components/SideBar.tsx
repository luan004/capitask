import '../Style/SideBar.scss';

function SideBar(props: any) {
    return (
        <div className="SideBar">
            {props.header}
            <div className="ScrollableBox">
                {props.children}
            </div>
            {props.footer}
        </div>
    );
}

export default SideBar;