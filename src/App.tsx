import { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { PiInstagramLogoBold } from 'react-icons/pi'
import { MdOutlineLocalPhone, MdOutlineSupportAgent } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa6'
import { FaArrowLeft } from 'react-icons/fa6'
import { IoMenu } from 'react-icons/io5'
import logo from './assets/logo.png'
import vrman from './assets/vrman.png'
import './App.css'

const virtualCards = [
  {
    title: 'Alturas',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=900&q=80',
    description: 'Entrena trabajos en altura en un entorno inmersivo y seguro. Aprende a elegir y colocarte el EPP correcto. Revisar lainformación de seguridad y enfrentar situaciones de riesgo que ponen aprueba tu reacción. Practica el ascenso por escaleras fijas usando arnés y línea de vida, reduciendo al mínimo la posibilidad de accidentes. Capacitación realista, sin exposición al peligro.',
    video: 'https://www.youtube.com/embed/EP_EkHMSYBY',
  },
  {
    title: 'Espacios Confinados',
    image: 'https://images.unsplash.com/photo-1569156519699-a1b73fa3cb70?auto=format&fit=crop&w=900&q=80',
    description: 'Asume el rol de supervisor en un entorno virtual de espacios confinados. Aprende a identificar el EPP adecuado, preparar la zona de trabajo y revisar permisos y listas de verificación antes del ingreso. Controla el acceso del personal y reconoce los riesgos observando incidentes simulados como caídas o desmayos. Entrena procedimientos críticos sin poner a nadie en peligro.',
    video: 'https://www.youtube.com/embed/jq8PnfVDnBM',
  },
  {
    title: 'Eléctrico (LOTO)',
    image: 'https://images.unsplash.com/photo-1786372282128-a73d0b1ece98?auto=format&fit=crop&w=900&q=80',
    description: 'Entrena el procedimiento de bloqueo y etiquetado en una simulación inmersiva y segura. Aprende a revisar permisos y listas de verificación, colocarte el EPP adecuado y seguir paso a paso las etapas de planeación, preparación, desarrollo y conclusión. Enfrente eventos de riesgo que muestran las consecuencias de un error y asegura que ninguna fuente de energía sea liberada accidentalmente. Capacitación precisa para trabajos críticos.',
    video: 'https://www.youtube.com/embed/pFPoehTAijE',
  },
  {
    title: 'EPP',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80',
    description: 'Experiencia inmersiva de Realidad Virtual orientada a fortalecer el uso correcto y la selección adecuada de los Elementos de Protección Personal (EPP) según el peligro y la actividad a realizar. El participante interactúa con diferentes escenarios, identifica los riesgos y selecciona los elementos de protección apropiados, reforzando criterios de prevención, protección y uso seguro de manera práctica, interactiva y memorable.', 
    video: 'https://www.youtube.com/embed/EP_EkHMSYBY',
  },
  {
    title: 'Ergonomía en la Oficina',
    image: 'https://images.unsplash.com/photo-1768926968986-a88590ce5025?auto=format&fit=crop&w=900&q=80',
    description: 'Identifica y corrige riesgos ergonómicos en un entorno virtual de oficina. Interactúa con personajes y espacios para mejorarla postura, optimizar tu área de trabajo y ajustar la iluminación adecuada.Aprende buenas prácticas para prevenir molestias y promover hábitos saludables en el día a día. Una experiencia inmersiva que transforma tu forma de trabajar.',
    video: 'https://www.youtube.com/embed/yW51aAWBh3A',

  },
  {
    title: 'Manejo de Extintores',
    image: 'https://images.unsplash.com/photo-1716009441550-463ee99f80f7?auto=format&fit=crop&w=900&q=80',
    description: 'Entrena el uso de extintores en un entorno totalmente inmersivo, Aprende a identificar el tipo de incendio, seleccionar el extintor adecuado y aplicarlo paso a paso, desde retirar el seguro hasta extinguir el fuego de forma segura. Practica con extintores PQS, CO2, Clase D y Clase K, en situaciones realistas, recibe retroalimentación inmediata y mejora tus habilidades sin riesgos. Vive la experiencia, antes de enfrentarla en la vida real.',
    video: 'https://www.youtube.com/embed/FyQzbqj1HjQ',
  },
  {
    title: 'Seguridad Vial',
    image: 'https://images.unsplash.com/photo-1602951172321-fe0aa8865e6b?auto=format&fit=crop&w=900&q=80',
    description: 'Experiencia inmersiva de Realidad Virtual diseñada para fortalecer la cultura de seguridad vial mediante la vivencia de situaciones de riesgo en entornos simulados. El participante toma decisiones frente a factores como exceso de velocidad, distracciones, fatiga, condiciones de la vía y comportamiento seguro, permitiendo identificar consecuencias y reforzar hábitos de conducción y movilidad responsable de forma práctica, interactiva y memorable.',
    video: 'https://www.youtube.com/embed/EP_EkHMSYBY',
  },
]

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(3)
  const [activeNav, setActiveNav] = useState('servicios')

  const orderedCards = Array.from({ length: virtualCards.length }, (_, offset) => {
    const cardIndex = (selectedIndex + offset - 3 + virtualCards.length) % virtualCards.length
    return {
      ...virtualCards[cardIndex],
      originalIndex: cardIndex,
    }
  })

  return (

    <div className="page">

      <nav className="navbar">
        {/* Botón hamburguesa (Se visualizará solo en móviles mediante CSS) */}
        <button
          type="button"
          className="menu-toggle-btn"
          aria-expanded={menuOpen}
          aria-label="Abrir menú de navegación"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <IoMenu className="menu-icon" />
        </button>

        {/* Contenedor de links (Barra horizontal en Desktop, Menú desplegable en Móvil) */}
        {/* Contenedor de links */}
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a 
            href="#servicios" 
            className={activeNav === 'servicios' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              setActiveNav('servicios')
              document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
              setMenuOpen(false)
            }}
          >
            Nuestros Servicios
          </a>

          <a 
            href="#gestion" 
            className={activeNav === 'gestion' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              setActiveNav('gestion')
              document.getElementById('gestion')?.scrollIntoView({ behavior: 'smooth' })
              setMenuOpen(false)
            }}
          >
            Gestión Organizacional
          </a>

          <a 
            href="#auditorias" 
            className={activeNav === 'auditorias' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              setActiveNav('auditorias')
              document.getElementById('auditorias')?.scrollIntoView({ behavior: 'smooth' })
              setMenuOpen(false)
            }}
          >
            Auditorías
          </a>

          <a 
            href="#simulaciones" 
            className={activeNav === 'simulaciones' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              setActiveNav('simulaciones')
              document.getElementById('simulaciones')?.scrollIntoView({ behavior: 'smooth' })
              setMenuOpen(false)
            }}
          >
            Simulaciones VR
          </a>
        </div>
      </nav>

      <div className="hero">
        <div className="logo-neon-wrap">
          <span className="neon-stroke neon-stroke-logo-a" aria-hidden="true" />
          <span className="neon-stroke neon-stroke-logo-b" aria-hidden="true" />
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="hero-content">
          <div className="vr-neon-wrap">
            <span className="neon-stroke neon-stroke-vr-a" aria-hidden="true" />
            <span className="neon-stroke neon-stroke-vr-b" aria-hidden="true" />
            <span className="neon-stroke neon-stroke-vr-c" aria-hidden="true" />
            <img src={vrman} alt="Persona usando realidad virtual" className="vr-person" />
          </div>

          <div className="hero-text">
            <h1 className="slogan">
              Prevención que se vive, seguridad que se aprende.
            </h1>

            <p className="description">
              Empresa especializada en consultoría, asesoría y formación en materia de Seguridad y Salud en el Trabajo (SST), Seguridad Vial, Medio Ambiente y Calidad con experiencias inmersivas de realidad virtual.
            </p>
          </div>
        </div>
      </div>



      

      <div id="servicios" className="services">
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

      <div id="gestion" className="gestion-organizacional">
        <h2 className="gestion-organizacional-title">Gestión Organizacional</h2>
        <ul className="gestion-organizacional-list">
          <li>Estilos de vida y trabajo saludable</li>
          <li>Organizaciones felices - Intervención</li>
          <li>Clima organizacional</li>
          <li>Comunicación asertiva, efectiva y empática</li>
          <li>Liderazgo - Trabajo en equipo</li>
        </ul>
      </div>

      <div id="auditorias" className="glow-panel">
        <div className="glow-panel-inner">
          <h3 className="glow-panel-title">AUDITORÍAS DE CUMPLIMIENTOS</h3>
          <p className="glow-panel-subtitle">(ISO - SGSST - PESV)</p>
        </div>
      </div>

      <div id="simulaciones" className="virtual-reality">        <div className="virtual-reality-header">
          <h2 className="virtual-reality-title">SIMULACIONES INMERSIVAS CON REALIDAD VIRTUAL</h2>
          <p className="virtual-reality-subtitle">Entrenamiento de alto impacto para prevención y seguridad laboral</p>
        </div>

        <div className="virtual-reality-grid">
          <ul className="virtual-reality-track">
            {orderedCards.map((card, offset) => {
              const isCenter = offset === 3
              const isNear = Math.abs(offset - 3) === 1
              const isFar = Math.abs(offset - 3) >= 2

              const className = [
                'virtual-card',
                isCenter ? 'is-center' : '',
                isNear ? 'is-near' : '',
                isFar ? 'is-far' : '',
                card.title === 'EPP' ? 'epp-card' : '',
                card.title === 'Seguridad Vial' ? 'seguridad-vial-card' : '',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <li
                  key={`${card.title}-${offset}`}
                  className={className}
                  style={{ backgroundImage: `linear-gradient(135deg, rgba(255, 216, 97, 0.18), rgba(118, 83, 255, 0.42)), url('${card.image}')` }}
                  onClick={() => setSelectedIndex(card.originalIndex)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      setSelectedIndex(card.originalIndex)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={card.title}
                >
                  <span className="virtual-card-label">{card.title}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {virtualCards[selectedIndex].video && (
          <div className="virtual-video-container">

            <button
              type="button"
              className="video-arrow video-arrow-left"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + virtualCards.length) % virtualCards.length
                )
              }
              aria-label="Video anterior"
            >
              <FaArrowLeft />
            </button>

            <div className="virtual-video">
              <iframe
                src={virtualCards[selectedIndex].video}
                title={`Video de ${virtualCards[selectedIndex].title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <button
              type="button"
              className="video-arrow video-arrow-right"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex + 1) % virtualCards.length
                )
              }
              aria-label="Video siguiente"
            >
              <FaArrowRight />
            </button>

          </div>
        )}

          
        <div className="virtual-reality-info">
          <h3>{virtualCards[selectedIndex].title}</h3>
          <p>{virtualCards[selectedIndex].description}</p>
        </div>
      </div>

      <div className="floating-contact">
        {contactOpen && (
          <div className="floating-contact-menu" id="contact-menu">
            <a href="mailto:sigma.hseqconsulting@gmail.com" className="contact-item">
              <AiOutlineMail className="contact-item-icon" aria-hidden="true" />
              sigma.hseqconsulting@gmail.com
            </a>
            <a href="tel:+573128170205" className="contact-item">
              <MdOutlineLocalPhone className="contact-item-icon" aria-hidden="true" />
              +57 312 8170205
            </a>
            <a href="https://wa.me/573128170205" target="_blank" rel="noreferrer" className="contact-item">
              <FaWhatsapp className="contact-item-icon" aria-hidden="true" />
              WhatsApp
            </a>
            <a href="https://instagram.com/sigmahseq" target="_blank" rel="noreferrer" className="contact-item">
              <PiInstagramLogoBold className="contact-item-icon" aria-hidden="true" />
              @sigmahseq
            </a>
           
          </div>
        )}




        <button
          type="button"
          className="floating-contact-button"
          aria-expanded={contactOpen}
          aria-controls="contact-menu"
          onClick={() => setContactOpen((open) => !open)}
        >
          <span>Contáctanos</span>
          <MdOutlineSupportAgent className="contact-button-icon" aria-hidden="true" />
        </button>
      </div>

    </div>
  )
}

export default App