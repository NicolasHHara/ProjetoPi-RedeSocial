import { useState } from "react"

const benefits = [
    {
        id: 1,
        question: "Como minha doação é usada?",
        answer: "Ela vira crédito para compras em feiras e comércios locais parceiros.",
    },
    {
        id: 2,
        question: "Posso acompanhar o impacto?",
        answer: "Sim, você recebe relatórios com total transparência sobre cada real doado.",
    },
    {
        id: 3,
        question: "Quem recebe os créditos?",
        answer: "Famílias em situação de vulnerabilidade, indicadas por ONGs parceiras.",
    },
]

function Benefits() {
    const [flippedId, setFlippedId] = useState<number | null>(null)

    function toggleFlip(id: number) {
        setFlippedId((current) => (current === id ? null : id))
    }

    return (
        <section className="benefits" aria-label="Vantagens de doar">
            <h2 className="benefits_title">
                <span>Vantagens de doar</span>
            </h2>

            <div className="benefits_cards">
                {benefits.map((benefit) => {
                    const isFlipped = flippedId === benefit.id
                    return (
                        <button
                            type="button"
                            key={benefit.id}
                            className="benefits_card"
                            onClick={() => toggleFlip(benefit.id)}
                            aria-pressed={isFlipped}
                            aria-label={
                                isFlipped
                                    ? `Resposta: ${benefit.answer}`
                                    : `Pergunta: ${benefit.question}. Toque para ver a resposta`
                            }
                        >
                            <div
                                className={
                                    "benefits_card-inner" +
                                    (isFlipped ? " benefits_card-inner-flipped" : "")
                                }
                            >
                                <div className="benefits_card-face benefits_card-front">
                                    <p>{benefit.question}</p>
                                </div>
                                <div className="benefits_card-face benefits_card-back">
                                    <p>{benefit.answer}</p>
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>

            <button type="button" className="benefits_cta">Faça uma boa ação agora</button>
        </section>
    )
}

export default Benefits