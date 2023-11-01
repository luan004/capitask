function SideBarItem(props: any) {
    return (
        <div>
            <h4>
                {props.children}
            </h4>
        </div>
    );
}

export default SideBarItem;