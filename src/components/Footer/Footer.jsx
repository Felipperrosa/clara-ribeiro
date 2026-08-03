import {
    FaInstagram,
    FaSpotify,
    FaYoutube,
} from "react-icons/fa";

function Footer() {
    return (
        <footer
            className="
                flex
                min-h-[105px]
                w-full
                flex-col
                items-center
                justify-center
                bg-black
                px-5
                py-5
                text-white
                sm:px-8
            "
        >
            <div
                className="
                    flex
                    items-center
                    justify-center
                    gap-7
                    sm:gap-8
                "
            >
                <a
                    href="https://open.spotify.com/intl-pt/artist/0PiQOK3GdjNdhHVxYc7SiG"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ouvir Clara Ribeiro no Spotify"
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300
                        hover:bg-white/10
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white
                    "
                >
                    <FaSpotify
                        className="
                            text-2xl
                            transition-all
                            duration-300
                            hover:scale-125
                            hover:text-green-500
                        "
                    />
                </a>

                <a
                    href="https://www.instagram.com/euclararibeiro___/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Acessar o Instagram de Clara Ribeiro"
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300
                        hover:bg-white/10
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white
                    "
                >
                    <FaInstagram
                        className="
                            text-2xl
                            transition-all
                            duration-300
                            hover:scale-125
                            hover:text-pink-500
                        "
                    />
                </a>

                <a
                    href="https://www.youtube.com/channel/UC3N8eatTtUkNX1lO7vkbS2Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Acessar o canal de Clara Ribeiro no YouTube"
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300
                        hover:bg-white/10
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white
                    "
                >
                    <FaYoutube
                        className="
                            text-2xl
                            transition-all
                            duration-300
                            hover:scale-125
                            hover:text-red-600
                        "
                    />
                </a>
            </div>

            <p
                className="
                    mt-3
                    max-w-full
                    text-center
                    text-[10px]
                    leading-relaxed
                    text-gray-400
                    sm:text-[11px]
                "
            >
                © 2026 — Todos os direitos reservados. Clararibeiro.com.br
            </p>
        </footer>
    );
}

export default Footer;