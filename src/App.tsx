import SideBar from './Components/SideBar';
import SideBarItem from './Components/SideBarItem';

function App() {
    return (
        <SideBar
        header={
            <SideBarItem 
                children={<h1>Header</h1>}
            />
        }
        children={
            <>
                <SideBarItem 
                    children={<h1>Item 1</h1>}
                />
                <SideBarItem 
                    children={<h1>Item 2</h1>}
                />
                <SideBarItem 
                    children={<h1>Item 3</h1>}
                />
            </>
        }
        footer={
            <SideBarItem 
                children={<h1>Footer</h1>}
            />
        }
    />
      );
}

export default App;