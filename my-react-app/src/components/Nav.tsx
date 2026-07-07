function Nav() {
    return (
        <section className="nav" aria-label="Chamada principal">
            <div className="nav_overlay" />

            <div className="nav_content">
                <h2 className="nav_title">
                    Sua doação alimenta famílias e fortalece o comércio local.
                </h2>

                <p className="nav_subtitle">
                    Cada real vira comida fresca comprada localmente, com total transparência.
                </p>

                <button type="button" className="nav_cta">
                    <span>Compre Créditos</span>
                    <img src="/icons/arrow-right.svg" alt="" className="nav_cta-icon" />
                </button>
            </div>
        </section>
    )
}

export default Nav