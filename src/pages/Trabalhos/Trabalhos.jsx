import { useRef } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TrabalhoCard from "../../components/TrabalhoCard/TrabalhoCard";

import { eps, singles } from "../../datas/trabalhos";

function Trabalhos() {
    const epsRef = useRef(null);
    const singlesRef = useRef(null);

    function rolar(referencia, direcao) {
        const container = referencia.current;

        if (!container) {
            return;
        }

        const primeiroCard = container.querySelector("a");

        if (!primeiroCard) {
            return;
        }

        const larguraCard = primeiroCard.offsetWidth;
        const estilosContainer = window.getComputedStyle(container);
        const gap = Number.parseFloat(estilosContainer.columnGap) || 24;

        container.scrollBy({
            left:
                direcao === "direita"
                    ? larguraCard + gap
                    : -(larguraCard + gap),
            behavior: "smooth",
        });
    }

    function renderizarLinha(titulo, trabalhos, referencia) {
        return (
            <section style={{ marginBottom: "40px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <h2
                        style={{
                            flexShrink: 0,
                            margin: 0,
                            fontSize: "clamp(26px, 4vw, 32px)",
                            fontWeight: 400,
                            lineHeight: 1,
                        }}
                    >
                        {titulo}
                    </h2>

                    <div
                        style={{
                            flex: 1,
                            height: "1px",
                            backgroundColor: "#d1d5db",
                        }}
                    />
                </div>

                <div className="group/lista relative">
                    {/* Seta esquerda: mantém o comportamento original no desktop */}
                    <button
                        type="button"
                        onClick={() => rolar(referencia, "esquerda")}
                        aria-label={`Voltar na lista de ${titulo}`}
                        className="
                            absolute
                            left-2
                            top-[42%]
                            z-20
                            hidden
                            h-11
                            w-11
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-gray-200
                            bg-white/95
                            text-xl
                            text-black
                            opacity-0
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-110
                            hover:bg-black
                            hover:text-white
                            focus:opacity-100
                            active:scale-95
                            md:flex
                            md:group-hover/lista:opacity-100
                        "
                    >
                        <span aria-hidden="true">←</span>
                    </button>

                    <div
                        ref={referencia}
                        className="
                            flex
                            touch-pan-x
                            snap-x
                            snap-mandatory
                            gap-4
                            overflow-x-auto
                            overscroll-x-contain
                            scroll-smooth
                            pb-3
                            sm:gap-5
                            md:gap-6
                            [scrollbar-width:none]
                            [&::-webkit-scrollbar]:hidden
                        "
                    >
                        {trabalhos.map((trabalho) => (
                            <TrabalhoCard
                                key={trabalho.id}
                                imagem={trabalho.imagem}
                                titulo={trabalho.titulo}
                                artistas={trabalho.artistas}
                                data={trabalho.data}
                                spotify={trabalho.spotify}
                            />
                        ))}
                    </div>

                    {/* Seta direita: mantém o comportamento original no desktop */}
                    <button
                        type="button"
                        onClick={() => rolar(referencia, "direita")}
                        aria-label={`Avançar na lista de ${titulo}`}
                        className="
                            absolute
                            right-2
                            top-[42%]
                            z-20
                            hidden
                            h-11
                            w-11
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-gray-200
                            bg-white/95
                            text-xl
                            text-black
                            opacity-0
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-110
                            hover:bg-black
                            hover:text-white
                            focus:opacity-100
                            active:scale-95
                            md:flex
                            md:group-hover/lista:opacity-100
                        "
                    >
                        <span aria-hidden="true">→</span>
                    </button>
                </div>
            </section>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />

            <main
                className="flex-1"
                style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                }}
            >
                <div
                    style={{
                        width: "calc(100% - clamp(32px, 5vw, 80px))",
                        maxWidth: "1440px",
                        margin: "0 auto",
                        paddingTop: "48px",
                        paddingBottom: "16px",
                    }}
                >
                    {renderizarLinha("EPs", eps, epsRef)}

                    {renderizarLinha(
                        "Singles",
                        singles,
                        singlesRef
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Trabalhos;