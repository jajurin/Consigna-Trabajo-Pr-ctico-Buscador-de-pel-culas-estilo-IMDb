import './ErrorMessage.css'
function ErrorMessage({ mensjae, setBusqueda }) {
  return (
    <div className="errorMessage">
      {mensjae}

     <button className="volver"
        onClick={() => setBusqueda("")}
      >
        HOME
      </button>
    </div>
  )
}

export default ErrorMessage