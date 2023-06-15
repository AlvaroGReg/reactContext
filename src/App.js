import { useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { Approuter } from './routing/Approuter';

function App() {

	const [usuario, setUsuario] = useState({
		nombre: "Alvaro",
		apellido: "Gracia"
	})

	const curso = {
		id:1,
		titulo: "Master en Typescript",
		contenido: "Muchas horas de contenido..."
	}

  return (
    <div className="App">
      <header className="App-header">

        <PruebaContext.Provider value={{usuario, setUsuario}}>
          <Approuter />
        </PruebaContext.Provider>
      </header>
    </div>
  );
}

export default App;