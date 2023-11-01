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
                <SideBarItem 
                    text="Footer"
                />
            }
        />
    );
}

export default App;