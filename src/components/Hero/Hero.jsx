import { Link } from "react-router-dom";

import fotoHero from "../../assets/images/Hero/banner_01.jpg";
import fotoHeroMobile from "../../assets/images/Hero/banner_01_v.jpg";
import { useLanguage } from "../../hooks/useLanguage";

function Hero() {
    const { t } = useLanguage();
    return (
        <section
            className="
                relative
                h-[calc(100vh-210px)]
                min-h-[500px]
                overflow-hidden
            "
        >
            {/* IMAGEM */}
            <div className="absolute inset-0 h-full w-full overflow-hidden">
                <picture>
                    <source
                        media="(max-width: 639px)"
                        srcSet={fotoHeroMobile}
                    />

                    <img
                        src={fotoHero}
                        alt="Clara Ribeiro"
                        className="
                            h-full
                            w-full
                            scale-[1.03]
                            object-cover
                            object-center
                        "
                    />
                </picture>
            </div>

            {/* CONTEÚDO */}
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
                <Link
                    to="/trabalhos"
                    className="
                        inline-flex
                        min-h-[56px]
                        min-w-[180px]
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#DDF0FF]
                        bg-[#010307]/10
                        px-10
                        py-4
                        text-lg
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#DDF0FF]
                        backdrop-blur-[2px]

                        opacity-0
                        translate-y-6
                        animate-[buttonAppear_1s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]

                        /* AJUSTE MOBILE: Move um pouco para a direita (12px) */
                        translate-x-1

                        transition-all
                        duration-300

                        /* Mantém o sutil pulo para cima no hover, preservando o deslocamento para a direita */
                        hover:-translate-y-1
                        hover:translate-x-3
                        md:hover:-translate-y-1
                        
                        hover:border-[#DDF0FF]
                        hover:bg-[#DDF0FF]
                        hover:text-[#010307]
                        hover:shadow-[0_0_22px_rgba(68,87,202,0.55)]

                        sm:min-w-[210px]
                        sm:px-14
                        sm:py-5
                        sm:text-xl
                        sm:tracking-[0.25em]

                        md:absolute
                        md:left-1/2
                        md:bottom-[120px]
                        /* AJUSTE DESKTOP: Centraliza o botão (-50%) e adiciona o deslocamento para a direita (+12px) */
                        md:-translate-x-[calc(50%-12px)]
                        /* Reseta o hover do mobile para não conflitar com a centralização do desktop */
                        md:hover:-translate-x-[calc(50%-12px)]
                    "
                >
                    {t("hero.botao")}
                </Link>
            </div>
        </section>
    );
}

export default Hero;