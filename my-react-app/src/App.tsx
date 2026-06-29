import './App.css?v=1.1'
import Footer from './components/Footer.jsx'
import Header from './components/Header.tsx'
import Nav from './components/Nav.tsx'


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <div>
        <h1>--- Destaque da Semana ---</h1>
        <button></button>
        <img src="" alt="" />
        <button></button>
      </div>
      <div>
        <h2>--- Vantagens de Doar ---</h2>
        <div>teste1</div>
        <div>teste2</div>
        <div>teste3</div>
        <button>Faça uma Doação</button>
      </div>
      <Footer />
    </div>
  )
}

export default App