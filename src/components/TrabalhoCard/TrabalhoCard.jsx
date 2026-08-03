function TrabalhoCard({
    imagem,
    titulo,
    artistas,
    data,
    spotify,
}) {
    return (
        <a
            href={spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ouvir ${titulo} no Spotify`}
            className="
                group
                block
                w-[175px]
                shrink-0
                snap-start
                cursor-pointer
                rounded-xl
                p-2
                transition-all
                duration-500
                ease-out

                hover:-translate-y-1
                hover:bg-gray-100
                hover:shadow-lg

                sm:w-[210px]
                sm:rounded-2xl
                sm:p-3

                md:w-[240px]
                md:hover:-translate-y-2
                md:hover:shadow-xl
            "
        >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                    src={imagem}
                    alt={`Capa de ${titulo}`}
                    loading="lazy"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-105
                    "
                />
            </div>

            <div className="pt-3">
                <h3
                    className="
                        text-sm
                        font-bold
                        leading-snug
                        text-black
                        sm:text-base
                    "
                >
                    {titulo}
                </h3>

                <p
                    className="
                        mt-1
                        text-xs
                        leading-snug
                        text-gray-700
                        sm:text-sm
                    "
                >
                    {artistas}
                </p>

                <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
                    Lançado em {data}
                </p>
            </div>
        </a>
    );
}

export default TrabalhoCard;