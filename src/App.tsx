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

      <div className="services">
        <h2 className="services-title">Nuestros Servicios</h2>
        <ul className="services-list">
          <li>Documentación, implementación y administración del Sistema de Gestión de Seguridad y Salud en el Trabajo (SST)</li>
          <li>Documentación e implementación del PESV</li>
          <li>Capacitaciones presenciales e inmersivas (realidad virtual) enfocada a SST</li>
          <li>Gestión de tareas críticas: Alturas, confinados, eléctricos e izaje de cargas</li>
          <li>Implementación de Planes de Prevención, Preparación y Respuesta ante Emergencias (PPPRE)</li>
          <li>Elaboración del plan de Emergencias, Contingencias y Ayuda Mutua</li>
          <li>Asesoría en la conformación, formación y entrenamiento de grupos de apoyo de emergencias</li>
          <li>Investigación de accidentes de trabajo leves, graves y/o fatales</li>        
          <li>Plan de gestión Ambiental</li>
        </ul>
      </div>

    </div>
  )
}

export default App