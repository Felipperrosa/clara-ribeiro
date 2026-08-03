import { Link } from "react-router-dom";

import fotoEsquerda from "../../assets/images/Hero/clara-hero-1.png";
import fotoDireita from "../../assets/images/Hero/clara-hero-2.png";

function Hero() {
    return (
        <section
            className="
                relative
                h-[calc(100svh-88px-105px)]
                min-h-[500px]
                overflow-hidden
                sm:min-h-[540px]
                md:h-[calc(100vh-88px-105px)]
                md:min-h-[560px]
            "
        >
            {/* Imagens */}
            <div className="flex h-full">
                <div
                    className="
                        relative
                        z-10
                        h-full
                        w-[calc(50%+2px)]
                        overflow-hidden
                        sm:w-1/2
                    "
                >
                    <img
                        src={fotoEsquerda}
                        alt="Clara Ribeiro"
                        className="
                            h-full
                            w-full
                            object-cover
                            object-[38%_top]
                            sm:object-top
                        "
                    />
                </div>

                <div
                    className="
                        relative
                        -ml-[2px]
                        h-full
                        w-[calc(50%+2px)]
                        overflow-hidden
                        sm:ml-0
                        sm:w-1/2
                    "
                >
                    <img
                        src={fotoDireita}
                        alt="Clara Ribeiro"
                        className="
                            h-full
                            w-full
                            object-cover
                            object-[62%_top]
                            sm:object-top
                        "
                    />
                </div>
            </div>

            {/* Suaviza levemente a divisão no celular */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-1/2
                    w-[3px]
                    -translate-x-1/2
                    bg-black/5
                    backdrop-blur-[1px]
                    sm:hidden
                "
            />

            {/* Escurecimento leve para melhorar a leitura */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/10
                    sm:bg-transparent
                "
            />

            {/* Conteúdo central */}
            <div
                className="
                    absolute
                    inset-0
                    z-20
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-5
                    text-center
                "
            >
                <h1
                    className="
                        text-4xl
                        font-black
                        uppercase
                        tracking-tight
                        text-red-600
                        drop-shadow-lg
                        sm:text-5xl
                        md:text-7xl
                    "
                >
                    Desabafos
                </h1>

                <Link
                    to="/trabalhos"
                    style={{ marginTop: "24px" }}
                    className="
                        inline-flex
                        min-h-[48px]
                        min-w-[155px]
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-white
                        bg-black/10
                        px-9
                        py-3
                        text-base
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white
                        backdrop-blur-[2px]
                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:bg-white
                        hover:text-black
                        hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]

                        sm:min-w-[170px]
                        sm:px-12
                        sm:py-4
                        sm:text-lg
                        sm:tracking-[0.25em]
                    "
                >
                    Me ouça
                </Link>
            </div>
        </section>
    );
}

export default Hero;