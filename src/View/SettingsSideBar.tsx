import SideBar from "../Components/SideBar";
import SideBarItem from "../Components/SideBarItem";

function ListsSideBar() {
    return (
        <SideBar
        header={
            <h1>
                Configurações
            </h1>
        }
        children={
            <>
                <SideBarItem 
                    text="Conta"
                />
                <SideBarItem 
                    text="Item 2"
                />
                <SideBarItem 
                    text="Item 3"
                />
            </>
        }
        footered={true}
        footer={
            <>
                <SideBarItem 
                    text="Voltar"
                />
            </>
        }
    />
    );
}

export default ListsSideBar;