function Header() {
    return (
        <header className="header">
            <button aria-label="Abrir menu">
                <img src="" alt="" />
            </button>
            <h1 className="header_title">ConnectNGO</h1>
            <nav aria-label="Navegação principal">
                <ul>
                    <li>
                        <button>
                            <span>Doe</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>Sobre Nós</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>Depoimentos</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>Créditos</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <button aria-label="Buscar no site">
                <img src="" alt="" />
            </button>
            <button aria-label="Ver meus créditos de doação">
                <img src="" alt="" />
            </button>
        </header>
    )
}

export default Header