import './error.css'
export default function ErrorMessage({children}) {
  return (
    <p className="error-message">{children}</p>
  )
}