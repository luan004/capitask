import '../Style/SideBar.scss';

function SideBar(props: any) {
    return (
        <div className="SideBar">
            {props.header}
            <div className="ScrollableBox">
                {props.children}
            </div>
            <div className={props.footered ? 'Footer' : ''}>
                {props.footer}
            </div>
        </div>
    );
}

export default SideBar;