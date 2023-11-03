import Button from "../Components/Button";
import SideBar from "../Components/SideBar";
import '../Style/Image.css';

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
                    <Button 
                        classes="Tab"
                        text="Button"
                    />
                    <Button 
                        classes="Tab"
                        text="Button"
                    />
                </>
            }
            footered={true}
            footer={
                <div className="Button Tab">
                    <img className='Image Icon' width={"32px"} src="https://placehold.it/50x50" alt="Usuário" />
                    <span>
                        Usuário
                    </span>
                </div>
            }
        />
    );
}

export default ListsSideBar;