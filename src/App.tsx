import './App.css'

function App() {
  return (
    <div className="wrapper">
      <aside className="linke_Spalte">
        <h2>Persönliche Daten</h2>
        <table>
          <tr>
            <td>Name:</td>
            <td>Can Talas</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>talascan@gmail.com</td>
          </tr>
          <tr>
            <td>Telefon:</td>
            <td>+49 179 4107700</td>
          </tr>
          <tr>
            <td>Adresse:</td>
            <td>Urbanstraße 48 D <br /> 10967 Berlin </td>
          </tr>
        </table>
      </aside>
      <main>
        <h1>Lebenslauf</h1>
      </main>
    </div>
  )
}

export default App
