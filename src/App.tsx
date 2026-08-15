import { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { PiInstagramLogoBold } from 'react-icons/pi'
import { MdOutlineLocalPhone, MdOutlineSupportAgent } from 'react-icons/md'
import logo from './assets/logo.png'
import './App.css'

const virtualCards = [
  {
    title: 'Alturas',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Espacios Confinados',
    image: 'https://images.unsplash.com/photo-1569156519699-a1b73fa3cb70?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Eléctrico (LOTO)',
    image: 'https://images.unsplash.com/photo-1786372282128-a73d0b1ece98?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'EPP',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Ergonomía',
    image: 'https://images.unsplash.com/photo-1768926968986-a88590ce5025?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Manejo de Extintores',
    image: 'https://images.unsplash.com/photo-1716009441550-463ee99f80f7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Seguridad Vial',
    image: 'https://images.unsplash.com/photo-1602951172321-fe0aa8865e6b?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(3)

  const orderedCards = Array.from({ length: virtualCards.length }, (_, offset) => {
    const cardIndex = (selectedIndex + offset - 3 + virtualCards.length) % virtualCards.length
    return {
      ...virtualCards[cardIndex],
      originalIndex: cardIndex,
    }
  })

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

      <div className="gestion-organizacional">
        <h2 className="gestion-organizacional-title">Gestión Organizacional</h2>
        <ul className="gestion-organizacional-list">
          <li>Estilos de vida y trabajo saludable</li>
          <li>Organizaciones felices - Intervención</li>
          <li>Clima organizacional</li>
          <li>Comunicación asertiva, efectiva y empática</li>
          <li>Liderazgo - Trabajo en equipo</li>
        </ul>
      </div>

      <div className="glow-panel">
        <div className="glow-panel-inner">
          <h3 className="glow-panel-title">AUDITORÍAS DE CUMPLIMIENTOS</h3>
          <p className="glow-panel-subtitle">(ISO - SGSST - PESV)</p>
        </div>
      </div>

      <div className="virtual-reality">
        <div className="virtual-reality-header">
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
              +57 312 817 02 05
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