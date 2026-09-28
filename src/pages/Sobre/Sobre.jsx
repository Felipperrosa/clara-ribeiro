import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import claraSobre from "../../assets/images/Sobre/clara_sobre_2.jpg";
import claraSobreFundo from "../../assets/images/Sobre/clara-sobre-fundo.jpg";

function Sobre() {
    return (
        <div className="flex min-h-screen flex-col bg-[#010307]">
            

            <main
                className="
                    relative
                    flex-1
                    overflow-hidden
                "
            >
                {/* FOTO DE FUNDO */}
                <img
                    src={claraSobreFundo}
                    alt=""
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        h-full
                        w-full
                        scale-[1.03]
                        object-cover
                        object-[50%_39%]
                    "
                />

                {/* CAMADA ESCURA */}
                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[#010307]/15
                    "
                />

                {/* GRADIENTE */}
                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                    "
                    style={{
                        background: `
                            radial-gradient(
                                circle at 50% 28%,
                                rgba(68, 87, 202, 0.02) 0%,
                                rgba(1, 3, 7, 0.03) 45%,
                                rgba(1, 3, 7, 0.08) 100%
                            )
                        `,
                    }}
                />

                {/* CONTEÚDO */}
                <div
                    className="relative z-10"
                    style={{
                        width:
                            "calc(100% - clamp(32px, 5vw, 80px))",

                        maxWidth: "1440px",

                        marginLeft:
                            "clamp(16px, 2vw, 32px)",

                        marginRight: "auto",

                        paddingTop: "48px",

                        paddingBottom: "48px",
                    }}
                >
                    {/* TÍTULO */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            marginBottom: "40px",
                        }}
                    >
                        <h1
                            className="shrink-0 text-[#DDF0FF]"
                            style={{
                                margin: 0,
                                fontSize:
                                    "clamp(26px, 4vw, 32px)",
                                fontWeight: 400,
                                lineHeight: 1,
                            }}
                        >
                            Sobre mim
                        </h1>

                        <div
                            style={{
                                flex: 1,
                                height: "1px",
                                backgroundColor:
                                    "rgba(221, 240, 255, 0.35)",
                            }}
                        />
                    </div>

                    {/* CONTEÚDO PRINCIPAL */}
                    <section
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
                        {/* FOTO DA BIOGRAFIA */}
                        <div
                            className="
                                group
                                w-full
                                max-w-[170px]
                                shrink-0
                                overflow-hidden
                                rounded-xl

                                shadow-[0_12px_30px_rgba(1,3,7,0.25)]

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

                        {/* BIOGRAFIA */}
                        <div className="w-full max-w-3xl">
                            <p
                                className="
                                    text-sm
                                    font-medium
                                    leading-7

                                   text-[#DDF0FF]

                                    sm:text-base

                                    md:text-[15px]
                                    md:text-[#DDF0FF]
                                "
                            >
                                Clara Ribeiro é cantora e compositora brasileira, com sonoridades que nascem do encontro entre referências da MPB, samba, reggae, R&B, neo soul e sonoridades afrodiaspóricas, com a liberdade criativa da música eletrônica.
                            </p>

                            <p
                                className="
                                    mt-5
                                    text-sm
                                    font-medium
                                    leading-7

                                   text-[#DDF0FF]

                                    sm:text-base

                                    md:text-[15px]
                                    md:text-[#DDF0FF]
                                "
                            >
                                Dona de uma escrita íntima e performances intensas, Clara Ribeiro transforma experiências de afeto, desejo e ancestralidade através de um eu lírico irreverente, transitando entre diferentes atmosferas de beats e composição, sem se prender a uma única linguagem. Ao longo de sua trajetória, Clara Ribeiro já colaborou com nomes como Chediak, Maui, Africanoise, Kbrum, ANTCONSTANTINO, Lettié, Maskotte, Ciana, entre outros artistas e produtores da cena independente. Essas parcerias atravessam momentos plurais de sua discografia, e impulsionam a revelação de uma artista autêntica, interessada em explorar novas sonoridades baseada em identidade forte e coesa, nítida em todas as suas respectivas obras.
                            </p>

                            <p
                                className="
                                    mt-5
                                    text-sm
                                    font-medium
                                    leading-7

                                    text-[#DDF0FF]

                                    sm:text-base

                                    md:text-[15px]
                                    md:text-[#DDF0FF]
                                "
                            >
                                Lançou seu primeiro EP em 2025, “Amor Para Além do Atlântico Sul", que acumula mais de 80 mil streams no Spotify. Depois, Clara Ribeirou revelou o EP “Desabafos”, realizado em parceria com Chediak, que já ultrapassou 100 mil streams. Atualmente, Clara apresenta “Outras Ondas, Mesmas Cores”, mixtape que aprofunda sua pesquisa na música eletrônica a partir do House, City Pop, UK Garage e Grime. A obra consolida uma artista em constante movimento e cada vez mais consciente da própria arte.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            
        </div>
    );
}

export default Sobre;