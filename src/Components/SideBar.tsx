import '../Style/SideBar.scss';

function SideBar(props: any) {
    return (
        <div className="SideBar">
            {props.header}
            <div className="ScrollableBox">
                {props.children}
            </div>
            <div className={props.footered ? 'Footer' : ''}>
                <div className='ScrollableBox'>
                {props.footer}
                </div>
            </div>
        </div>
    );
}

export default SideBar;