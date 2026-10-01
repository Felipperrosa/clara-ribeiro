import { useState } from "react";

import { NavLink } from "react-router-dom";

import { useLanguage } from "../../hooks/useLanguage";

import brFlag from "../../assets/flags/br.svg";
import usFlag from "../../assets/flags/us.svg";
import esFlag from "../../assets/flags/es.svg";

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const { language, changeLanguage, t } = useLanguage();

    const linkClass = ({ isActive }) => `
        relative
        pb-2
        text-[#DDF0FF]
        uppercase
        tracking-[2px]
        text-xs
        font-medium
        transition-colors
        duration-300
        hover:text-[#3D3D9D]
        after:absolute
        after:left-1/2
        after:-bottom-[6px]
        after:h-[2px]
        after:w-full
        after:-translate-x-1/2
        after:origin-center
        after:scale-x-0
        after:bg-[#4457CA]
        after:transition-transform
        after:duration-300
        hover:after:scale-x-100
        ${isActive ? "after:scale-x-100" : ""}
    `;

    function fecharMenu() {
        setMenuAberto(false);
    }

    function selecionarIdioma(idioma) {
        changeLanguage(idioma);
        fecharMenu();
    }

    function teclaIdioma(event, idioma) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selecionarIdioma(idioma);
        }
    }

    const flagClass = `
        select-none
        cursor-pointer
        transition-transform
        duration-200
        hover:scale-110
    `;

    const flagImageClass = `
        pointer-events-none
        select-none
        rounded-sm
        object-cover
    `;

    return (
        <header className="relative z-50 bg-[#0E111D] text-[#DDF0FF] shadow-md">
            <nav className="relative flex h-[105px] items-center justify-between bg-[#0E111D]">

                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={fecharMenu}
                    style={{
                        marginLeft: "clamp(20px, 4vw, 48px)",
                    }}
                    className="
                        text-2xl
                        font-light
                        tracking-wide
                        text-[#DDF0FF]
                        transition-colors
                        duration-300
                        hover:text-[#3c096c]
                        sm:text-3xl
                    "
                >
                    Clara Ribeiro
                </NavLink>

                {/* Menu desktop */}
                <ul
                    className="
                        absolute
                        left-1/2
                        hidden
                        -translate-x-1/2
                        items-center
                        gap-8
                        md:flex
                        lg:gap-10
                    "
                >
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={linkClass}
                        >
                            {t("nav.inicio")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/trabalhos"
                            className={linkClass}
                        >
                            {t("nav.trabalhos")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/sobre"
                            className={linkClass}
                        >
                            {t("nav.sobre")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contato"
                            className={linkClass}
                        >
                            {t("nav.contato")}
                        </NavLink>
                    </li>
                </ul>

                {/* Idiomas desktop */}
                <div
                    className="
                        absolute
                        hidden
                        items-center
                        gap-4
                        md:flex
                    "
                    style={{
                        right: "clamp(80px, 8vw, 120px)",
                    }}
                >
                    {language !== "pt" && (
                        <div
                            onClick={() => selecionarIdioma("pt")}
                            onKeyDown={(event) =>
                                teclaIdioma(event, "pt")
                            }
                            role="button"
                            tabIndex={0}
                            aria-label="Português"
                            title="Português"
                            className={flagClass}
                        >
                            <img
                                src={brFlag}
                                alt="Português"
                                draggable="false"
                                className={`
                                    ${flagImageClass}
                                    h-5
                                    w-7
                                `}
                            />
                        </div>
                    )}

                    {language !== "en" && (
                        <div
                            onClick={() => selecionarIdioma("en")}
                            onKeyDown={(event) =>
                                teclaIdioma(event, "en")
                            }
                            role="button"
                            tabIndex={0}
                            aria-label="English"
                            title="English"
                            className={flagClass}
                        >
                            <img
                                src={usFlag}
                                alt="English"
                                draggable="false"
                                className={`
                                    ${flagImageClass}
                                    h-5
                                    w-7
                                `}
                            />
                        </div>
                    )}

                    {language !== "es" && (
                        <div
                            onClick={() => selecionarIdioma("es")}
                            onKeyDown={(event) =>
                                teclaIdioma(event, "es")
                            }
                            role="button"
                            tabIndex={0}
                            aria-label="Español"
                            title="Español"
                            className={flagClass}
                        >
                            <img
                                src={esFlag}
                                alt="Español"
                                draggable="false"
                                className={`
                                    ${flagImageClass}
                                    h-5
                                    w-7
                                `}
                            />
                        </div>
                    )}
                </div>

                {/* Botão mobile */}
                <button
                    type="button"
                    onClick={() =>
                        setMenuAberto((estado) => !estado)
                    }
                    aria-label={
                        menuAberto
                            ? "Fechar menu de navegação"
                            : "Abrir menu de navegação"
                    }
                    aria-expanded={menuAberto}
                    style={{
                        marginRight: "clamp(20px, 4vw, 48px)",
                    }}
                    className="
                        flex
                        h-11
                        w-11
                        flex-col
                        items-center
                        justify-center
                        gap-[6px]
                        rounded-md
                        transition-colors
                        duration-300
                        hover:bg-[#161526]
                        md:hidden
                    "
                >
                    <span
                        className={`
                            block
                            h-[2px]
                            w-6
                            bg-[#DDF0FF]
                            transition-transform
                            duration-300
                            ${
                                menuAberto
                                    ? "translate-y-[8px] rotate-45"
                                    : ""
                            }
                        `}
                    />

                    <span
                        className={`
                            block
                            h-[2px]
                            w-6
                            bg-[#DDF0FF]
                            transition-opacity
                            duration-300
                            ${
                                menuAberto
                                    ? "opacity-0"
                                    : "opacity-100"
                            }
                        `}
                    />

                    <span
                        className={`
                            block
                            h-[2px]
                            w-6
                            bg-[#DDF0FF]
                            transition-transform
                            duration-300
                            ${
                                menuAberto
                                    ? "-translate-y-[8px] -rotate-45"
                                    : ""
                            }
                        `}
                    />
                </button>
            </nav>

            {/* Menu mobile */}
            <div
                className={`
                    absolute
                    left-0
                    top-full
                    w-full
                    overflow-hidden
                    border-t
                    border-[#2A2841]
                    bg-[#010307]
                    shadow-xl
                    transition-all
                    duration-300
                    md:hidden
                    ${
                        menuAberto
                            ? "visible max-h-[650px] opacity-100"
                            : "invisible max-h-0 opacity-0"
                    }
                `}
            >
                <ul
                    style={{
                        paddingTop: "40px",
                        paddingBottom: "100px",
                    }}
                    className="
                        flex
                        flex-col
                        items-center
                        gap-8
                        px-6
                    "
                >
                    <li>
                        <NavLink
                            to="/"
                            end
                            onClick={fecharMenu}
                            className={linkClass}
                        >
                            {t("nav.inicio")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/trabalhos"
                            onClick={fecharMenu}
                            className={linkClass}
                        >
                            {t("nav.trabalhos")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/sobre"
                            onClick={fecharMenu}
                            className={linkClass}
                        >
                            {t("nav.sobre")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contato"
                            onClick={fecharMenu}
                            className={linkClass}
                        >
                            {t("nav.contato")}
                        </NavLink>
                    </li>

                    {/* Idiomas mobile */}
                    <li className="pt-4">
                        <div className="flex items-center gap-5">

                            {language !== "pt" && (
                                <div
                                    onClick={() =>
                                        selecionarIdioma("pt")
                                    }
                                    onKeyDown={(event) =>
                                        teclaIdioma(event, "pt")
                                    }
                                    role="button"
                                    tabIndex={0}
                                    aria-label="Português"
                                    title="Português"
                                    className={flagClass}
                                >
                                    <img
                                        src={brFlag}
                                        alt="Português"
                                        draggable="false"
                                        className={`
                                            ${flagImageClass}
                                            h-6
                                            w-9
                                        `}
                                    />
                                </div>
                            )}

                            {language !== "en" && (
                                <div
                                    onClick={() =>
                                        selecionarIdioma("en")
                                    }
                                    onKeyDown={(event) =>
                                        teclaIdioma(event, "en")
                                    }
                                    role="button"
                                    tabIndex={0}
                                    aria-label="English"
                                    title="English"
                                    className={flagClass}
                                >
                                    <img
                                        src={usFlag}
                                        alt="English"
                                        draggable="false"
                                        className={`
                                            ${flagImageClass}
                                            h-6
                                            w-9
                                        `}
                                    />
                                </div>
                            )}

                            {language !== "es" && (
                                <div
                                    onClick={() =>
                                        selecionarIdioma("es")
                                    }
                                    onKeyDown={(event) =>
                                        teclaIdioma(event, "es")
                                    }
                                    role="button"
                                    tabIndex={0}
                                    aria-label="Español"
                                    title="Español"
                                    className={flagClass}
                                >
                                    <img
                                        src={esFlag}
                                        alt="Español"
                                        draggable="false"
                                        className={`
                                            ${flagImageClass}
                                            h-6
                                            w-9
                                        `}
                                    />
                                </div>
                            )}

                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
