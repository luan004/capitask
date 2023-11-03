import Button from "../Components/Button";
import SideBar from "../Components/SideBar";

function ListsSideBar() {
    return (
        <SideBar
        header={
            <Button 
                classes="Tab"
                text="Header"
            />
        }
        children={
            <>
                <Button 
                    classes="Tab"
                    text="Button"
                />
            </>
        }
        footered={true}
        footer={
            <div className="Item">
            <img className='Image' src="https://placehold.it/50x50" alt="Usuário" />
            <span className="Text">
                Usuário
            </span>
        </div>
        }
    />
    );
}

export default ListsSideBar;