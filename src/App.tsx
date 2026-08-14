import logo from './assets/logo.png'
import './App.css'


function App() {
  return (
    <div className="page">

      <div className="hero">

        <img src={logo} alt="Logo" className="logo" />

        <h1 className="slogan">
          Prevención que se vive, seguridad que se aprende.
        </h1>

        <p className="description">
          Empresa especializada en consultoría, asesoría y formación en materia de Seguridad y Salud en el Trabajo (SST), Seguridad Vial, Medio Ambiente y Calidad con experiencias inmersivas de realidad virtual.
        </p>
        
      </div>
      
    </div>
  )
}

export default App