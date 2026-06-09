
import './App.css'

function App() {
  return (
    <>
      <h1>Lebenslauf</h1>

      <div className='body'>
        <div className="linke_Spalte">
          <h2>Persönliche Daten</h2>
          <div className="felder">
            <p>Name:</p>
            <p>Email:</p>
            <p>Telefon:</p>
            <p>Adresse:</p>
          </div>
          <div className="werte">
            <p>Can Talas</p>
            <p>talascan@gmail.com</p>
            <p>+49 179 4107700</p>
            <p>Urbanstraße 48 D <br/> 10967 Berlin </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
