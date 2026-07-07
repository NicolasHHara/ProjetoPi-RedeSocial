import { useEffect, useRef, useState } from "react"

const slides = [
    { id: 1, text: "Feira da Vila Nova: 42 famílias abastecidas essa semana." },
    { id: 2, text: "Mercadinho Dona Rosa: mais de 800 kg entregues este mês." },
    { id: 3, text: "Campanha Inverno Solidário: faltam 120 cestas para a meta." },
]

const AUTOPLAY_INTERVAL_MS = 6000

function Highlights() {
    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const liveRegionRef = useRef<HTMLDivElement | null>(null)

    function goTo(index: number) {
        const total = slides.length
        setCurrent(((index % total) + total) % total)
    }

    // Autoplay: pausa no hover/foco e respeita quem prefere menos animação.
    useEffect(() => {
        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches

        if (prefersReducedMotion || isPaused) {
            return undefined
        }

        const timer = window.setInterval(() => {
            setCurrent((value) => (value + 1) % slides.length)
        }, AUTOPLAY_INTERVAL_MS)

        return () => window.clearInterval(timer)
    }, [isPaused])

    // Anuncia a troca de slide para quem usa leitor de tela.
    useEffect(() => {
        if (liveRegionRef.current) {
            liveRegionRef.current.textContent = `Destaque ${current + 1} de ${slides.length}: ${slides[current]!.text}`
        }
    }, [current])

    return (
        <section className="highlights" aria-label="Destaques da semana">
            <h2 className="highlights_title">
                <span>Destaques da semana</span>
            </h2>

            <div
                className="highlights_carousel"
                role="region"
                aria-roledescription="carrossel"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
            >
                <button
                    type="button"
                    className="highlights_arrow highlights_arrow-prev"
                    onClick={() => goTo(current - 1)}
                    aria-label="Destaque anterior"
                >
                    ‹
                </button>

                <div className="highlights_viewport">
                    <div
                        className="highlights_track"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={
                                    "highlights_card" +
                                    (index === current ? " highlights_card-active" : "")
                                }
                                aria-hidden={index !== current}
                            >
                                <p>{slide.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="highlights_arrow highlights_arrow-next"
                    onClick={() => goTo(current + 1)}
                    aria-label="Próximo destaque"
                >
                    ›
                </button>
            </div>

            <div className="highlights_dots" role="tablist" aria-label="Selecionar destaque">
                {slides.map((slide, index) => (
                    <button
                        type="button"
                        key={slide.id}
                        role="tab"
                        className={
                            "highlights_dot" +
                            (index === current ? " highlights_dot-active" : "")
                        }
                        onClick={() => goTo(index)}
                        aria-label={`Ir para o destaque ${index + 1}`}
                        aria-selected={index === current}
                    />
                ))}
            </div>

            <div
                className="highlights_visually-hidden"
                role="status"
                aria-live="polite"
                ref={liveRegionRef}
            />
        </section>
    )
}

export default Highlights