import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import claraSobre from "../../assets/images/Sobre/clara-sobre.jpg";

function Sobre() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1 bg-white text-black">
                <div
                    style={{
                        width: "calc(100% - clamp(32px, 5vw, 80px))",
                        maxWidth: "1440px",
                        margin: "0 auto",
                        paddingTop: "28px",
                        paddingBottom: "40px",
                    }}
                >
                    <SectionTitle titulo="Sobre mim" />

                    <section
                        style={{
                            marginTop: "clamp(32px, 5vw, 48px)",
                        }}
                        className="
                            flex
                            flex-col
                            items-center
                            gap-8

                            md:flex-row
                            md:items-center
                            md:gap-12

                            lg:gap-16
                        "
                    >
                        {/* Foto */}
                        <div
                            className="
                                group
                                w-full
                                max-w-[240px]
                                shrink-0
                                overflow-hidden
                                rounded-xl
                                shadow-md

                                sm:max-w-[260px]
                                md:max-w-[280px]
                            "
                        >
                            <img
                                src={claraSobre}
                                alt="Clara Ribeiro"
                                className="
                                    aspect-[4/5]
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    ease-out
                                    group-hover:scale-105
                                "
                            />
                        </div>

                        {/* Biografia */}
                        <div className="w-full max-w-3xl">
                            <p
                                className="
                                    text-sm
                                    leading-7
                                    text-gray-700

                                    sm:text-base
                                    md:text-[15px]
                                "
                            >
                                Aos 29 anos, Clara Ribeiro é oriunda da Zona
                                Norte do Rio de Janeiro e traz consigo uma
                                identidade musical singular e ancestral. Desde a
                                infância, ela revelou uma alma artística inata,
                                cujas influências abrangem diversos gêneros, como
                                samba, MPB, R&B, música africana, música indígena
                                e ritmos harmônicos com elementos da música
                                eletrônica popular.
                            </p>

                            <p
                                className="
                                    mt-5
                                    text-sm
                                    leading-7
                                    text-gray-700

                                    sm:text-base
                                    md:text-[15px]
                                "
                            >
                                Inspirada por sua ancestralidade e por sua
                                vivência, Clara desenvolve uma sonoridade que
                                mistura sensibilidade, força e experimentação.
                                Sua arte transforma experiências pessoais,
                                afetivas e sociais em composições marcadas por
                                identidade, liberdade e expressão.
                            </p>

                            <p
                                className="
                                    mt-5
                                    text-sm
                                    leading-7
                                    text-gray-700

                                    sm:text-base
                                    md:text-[15px]
                                "
                            >
                                Em seus trabalhos, busca criar conexões com o
                                público por meio de letras sinceras, arranjos
                                autorais e uma presença artística que valoriza
                                suas raízes e a diversidade da música brasileira.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Sobre;