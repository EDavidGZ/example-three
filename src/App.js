import './App.css';
import Nav from './componentes/Nav'
import Header from './componentes/Header';
import TercerComponente from './componentes/TercerComponente';
import Estado from './componentes/Estado';
import Ejercicio from './componentes/Ejercicio';
import PruebaEfect from './componentes/PruebaEfect';
import Hola from './three/Hola';
import { Canvas } from '@react-three/fiber'
import { Model } from './modelos/Model'
import { Suspense } from 'react';
import { OrbitControls} from '@react-three/drei'

function App() {
  const fecha = new Date();
  const year = fecha.getFullYear();



  const ficha_medica = {
    altura: "160cm",
    grupo: "O+",
    alergias: 'Ninguna'

  }
  return (
    <>
    <h1>hola</h1>
      <div style={{ width: '100%', height: '70vh'}}>
        <Canvas camera={{ zoom: 9, position: [20, 60, 2] }}>
          <ambientLight intensity={1} />
          <pointLight position={[35, 35, 0]} intensity={0.4}/>
          <pointLight position={[-35, 35, 0]} intensity={0.4}/>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>

      {/* <Hola /> */}

      {/* <PruebaEfect /> */}

      {/* <Ejercicio  year={year}  />

<Estado />


<h1>React first app</h1>

<TercerComponente
nombre='Efren'
apellidos="Garza"
ficha={ficha_medica}

/>
< Nav />
<Header /> */}
    </>
  );
}

export default App;
