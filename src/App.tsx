import Button from './Components/Button';
import Input from './Components/Input';

function App() {
    return (
        <>
            <Button
                classes="Primary"
                text="Botão"
            />
            <Input
                classes=""
                type="text"
                placeholder="Digite aqui"
                onChange={() => {}}
                value=""
            />
        </>
    );
}

export default App;