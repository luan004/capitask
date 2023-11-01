import SideBar from './Components/SideBar';
import SideBarItem from './Components/SideBarItem';

function App() {
    return (
        <SideBar
            header={
                <SideBarItem 
                    text="Header"
                />
            }
            children={
                <>
                    <SideBarItem 
                        text="Item 1"
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
                        text="Usuário"
                        image={true}
                        src={'https://placehold.it/128x128'}
                        alt={'Usuário'} 
                    />
                    <SideBarItem 
                        text="Configurações"
                    />
                </>
            }
        />
    );
}

export default App;