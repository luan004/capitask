import { useState } from 'react';
import '../Style/SideBar.scss';

function SideBar(props: any) {

    let [closed, setClosed] = useState(false);

    return (
        <div className={`SideBar ` + (closed ? 'Closed' : '')}>
            <div className="ScrollableBox">
            {props.header}
            </div>
            <div className="ScrollableBox">
                {props.children}
            </div>
            <div className={props.footered ? 'Footer' : ''}>
                <div className='ScrollableBox'>
                {props.footer}
                </div>
            </div>
            <button className={`HideButton ` + (closed ? 'Closed' : '')} onClick={() => setClosed(!closed)}>
                V
            </button>
        </div>
    );
}

export default SideBar;