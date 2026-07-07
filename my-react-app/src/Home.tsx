import './App.css?v=1.1'
import Header from "./components/Header.tsx"
import Nav from "./components/Nav.tsx"
import Highlights from "./components/Highlights.tsx"
import Benefits from "./components/Benefits.tsx"
import Footer from "./components/Footer.tsx"

function Home() {
    return (
        <div className="home">
            <Header />
            <Nav />
            <Highlights />
            <Benefits />
            <Footer />
        </div>
    )
}

export default Home

