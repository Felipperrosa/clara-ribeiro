function SectionTitle({ titulo, centralizado = false }) {
    return (
        <div className="flex items-center gap-5">
            <h1
                className={`
                    shrink-0
                    text-3xl
                    font-normal
                    text-black
                    md:text-4xl
                    ${centralizado ? "mx-auto" : ""}
                `}
            >
                {titulo}
            </h1>

            {!centralizado && (
                <div className="h-px flex-1 bg-gray-300" />
            )}
        </div>
    );
}

export default SectionTitle;