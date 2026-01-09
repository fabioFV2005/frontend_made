import { useState } from "react"
import { crearCotizacion } from "../../../services/cotizacionService"
import Modal from "../../shared/Home/Noti"
import "./CotizacionForm.css"

export default function CotizacionForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    size: "",
    plans: null,
    disponibility: "",
    description: ""
  })

  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    setForm({
      ...form,
      plans: e.target.files[0]
    })
  }

  const showModal = (type, title, message) => {
    setModalState({
      isOpen: true,
      type,
      title,
      message
    })
  }

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await crearCotizacion(form)
      showModal(
        "success",
        "¡Cotización enviada!",
        "Hemos recibido tu solicitud correctamente. Te contactaremos en un plazo de 24-48 horas hábiles."
      )
      //limpiar el form
      setForm({
        name: "",
        phone: "",
        size: "",
        plans: null,
        disponibility: "",
        description: ""
      })

    } catch (err) {
      // muestra error
      showModal(
        "error",
        "Error al enviar",
        err.message || "No pudimos procesar tu solicitud. Por favor, intenta nuevamente o contáctanos directamente."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        title={modalState.title}
        message={modalState.message}
      />
      <section className="cotizacion-section">
      <div className="cotizacion">
        <h1>Solicita tu cotización</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              name="size"
              placeholder="Tamaño en m²"
              value={form.size}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="plans" className="file-label">
              Subir planos o imágenes
            </label>
            <input
              type="file"
              id="plans"
              name="plans"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="disponibility" className="date-label">
              Fecha estimada de inicio
            </label>
            <input
              type="date"
              id="disponibility"
              name="disponibility"
              value={form.disponibility}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="description"
              placeholder="Describe tu proyecto en detalle..."
              value={form.description}
              onChange={handleChange}
              rows="5"
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar cotización"}
          </button>
        </form>
      </div>
      </section>
    </>
  )
}