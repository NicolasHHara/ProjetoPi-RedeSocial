function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="footer_brand">
                    <div className="footer_brand-row">
                        <img src="/icons/leaf.svg" alt="" className="footer_logo" />
                        <span className="footer_brand-name">ConnectNGO</span>
                    </div>
                    <p className="footer_tagline">
                        Conectando doações a famílias e comércios locais, com transparência
                        em cada real.
                    </p>
                </div>

                <nav aria-label="Links do rodapé" className="footer_nav">
                    <h3 className="footer_heading">Navegação</h3>
                    <ul>
                        <li><button>Doe</button></li>
                        <li><button>Sobre Nós</button></li>
                        <li><button>Depoimentos</button></li>
                        <li><button>Créditos</button></li>
                    </ul>
                </nav>

                <div className="footer_contact">
                    <h3 className="footer_heading">Contato</h3>
                    <ul>
                        <li>
                            <a href="mailto:contato@connectngo.org">contato@connectngo.org</a>
                        </li>
                        <li>
                            <a href="tel:+5500000000000">+55 (00) 00000-0000</a>
                        </li>
                    </ul>
                </div>

                <div className="footer_social">
                    <h3 className="footer_heading">Redes sociais</h3>
                    <div className="footer_social-icons">
                        <a href="#" aria-label="Instagram do ConnectNGO">
                            <img src="/icons/instagram.svg" alt="" />
                        </a>
                        <a href="#" aria-label="Facebook do ConnectNGO">
                            <img src="/icons/facebook.svg" alt="" />
                        </a>
                        <a href="#" aria-label="LinkedIn do ConnectNGO">
                            <img src="/icons/linkedin.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <p>© {new Date().getFullYear()} ConnectNGO. Todos os direitos reservados.</p>
                <div className="footer_legal">
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos de Uso</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer