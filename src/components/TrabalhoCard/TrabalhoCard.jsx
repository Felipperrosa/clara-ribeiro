import { useLanguage } from "../../hooks/useLanguage";

function TrabalhoCard({
    imagem,
    titulo,
    artistas,
    data,
    spotify,
}) {
    const { t } = useLanguage();

    return (
        <a
            href={spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("trabalhos.ouvirNoSpotify")} ${titulo}`}
            className="
                group
                block
                w-[175px]
                shrink-0
                snap-start
                cursor-pointer
                rounded-lg
                p-2

                transition-all
                duration-500
                ease-out

                hover:-translate-y-1.5

                sm:w-[210px]
                sm:p-3

                md:w-[240px]
            "
        >
            {/* CAPA DA MÚSICA/ALBUM */}
            <div
                className="
                    relative
                    aspect-square
                    overflow-hidden
                    rounded-lg
                    bg-[#161526]
                    shadow-md

                    transition-all
                    duration-500
                    ease-out

                    group-hover:ring-2
                    group-hover:ring-[#DDF0FF]/80

                    group-hover:shadow-[0_0_25px_rgba(68,87,202,0.65)]
                "
            >
                <img
                    src={imagem}
                    alt={`${t("trabalhos.capaDe")} ${titulo}`}
                    loading="lazy"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-all
                        duration-500
                        ease-out
                        group-hover:scale-105
                        group-hover:brightness-110
                    "
                />

                {/* OVERLAY DE GLOW */}
                <div 
                    className="
                        pointer-events-none
                        absolute 
                        inset-0 
                        bg-gradient-to-t 
                        from-[#4457CA]/20 
                        to-transparent 
                        opacity-0 
                        transition-opacity 
                        duration-500 
                        group-hover:opacity-100
                    "
                />
            </div>

            {/* INFORMAÇÕES (TEXTOS) */}
            <div className="pt-3">
                <h3
                    className="
                        text-sm
                        font-bold
                        leading-snug
                        text-[#DDF0FF]
                        drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
                        transition-colors
                        duration-300
                        group-hover:text-white
                        sm:text-base
                    "
                >
                    {titulo}
                </h3>

                <p
                    className="
                        mt-1
                        text-xs
                        font-medium
                        leading-snug
                        text-[#C1C9DC]
                        drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
                        transition-colors
                        duration-300
                        group-hover:text-white
                        sm:text-sm
                    "
                >
                    {artistas}
                </p>

                <p
                    className="
                        mt-1
                        text-[11px]
                        font-medium
                        text-[#AEB7CC]
                        drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
                        transition-colors
                        duration-300
                        group-hover:text-[#DDF0FF]
                        sm:text-xs
                    "
                >
                    {t("trabalhos.lancadoEm")} {data}
                </p>
            </div>
        </a>
    );
}

export default TrabalhoCard;