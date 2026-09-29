import { Link } from "react-router-dom";

import fotoHero from "../../assets/images/Hero/banner_01.jpg";
import fotoHeroMobile from "../../assets/images/Hero/banner_01_v.jpg";

function Hero() {
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
                            object-[50%_55%]

                            max-sm:object-[55%_55%]
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
                    min-h-[48px]
                    min-w-[155px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#DDF0FF]
                    bg-[#010307]/10
                    px-9
                    py-3
                    text-base
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#DDF0FF]
                    backdrop-blur-[2px]

                    opacity-0
                    translate-y-6
                    animate-[buttonAppear_1s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]

                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#DDF0FF]
                    hover:bg-[#DDF0FF]
                    hover:text-[#010307]
                    hover:shadow-[0_0_22px_rgba(68,87,202,0.55)]

                    sm:min-w-[170px]
                    sm:px-12
                    sm:py-4
                    sm:text-lg
                    sm:tracking-[0.25em]

                    md:absolute
                    md:left-1/2
                    md:-translate-x-1/2
                    md:bottom-[120px]
                "
                >
                Me ouça
                </Link>
            </div>
        </section>
    );
}

export default Hero;