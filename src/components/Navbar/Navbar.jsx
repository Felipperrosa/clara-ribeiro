import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const linkClass = ({ isActive }) => `
        relative
        pb-2
        text-white
        uppercase
        tracking-[2px]
        text-xs
        font-medium
        transition-colors
        duration-300
        hover:text-red-500

        after:absolute
        after:left-1/2
        after:-bottom-[6px]
        after:h-[2px]
        after:w-full
        after:-translate-x-1/2
        after:origin-center
        after:scale-x-0
        after:bg-red-500
        after:transition-transform
        after:duration-300

        hover:after:scale-x-100

        ${isActive ? "after:scale-x-100" : ""}
    `;

    function fecharMenu() {
        setMenuAberto(false);
    }

    return (
        <header className="relative z-50 bg-black text-white shadow-md">
            <nav className="relative flex h-[105px] items-center justify-between bg-black">
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
                        text-white
                        transition-colors
                        duration-300
                        hover:text-red-500
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
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/trabalhos"
                            className={linkClass}
                        >
                            Trabalhos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/sobre"
                            className={linkClass}
                        >
                            Sobre
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contato"
                            className={linkClass}
                        >
                            Contato
                        </NavLink>
                    </li>
                </ul>

                {/* Botão mobile */}
                <button
                    type="button"
                    onClick={() => setMenuAberto((estado) => !estado)}
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
                        hover:bg-white/10
                        md:hidden
                    "
                >
                    <span
                        className={`
                            block
                            h-[2px]
                            w-6
                            bg-white
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
                            bg-white
                            transition-opacity
                            duration-300
                            ${menuAberto ? "opacity-0" : "opacity-100"}
                        `}
                    />

                    <span
                        className={`
                            block
                            h-[2px]
                            w-6
                            bg-white
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
                    border-white/10
                    bg-black
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
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/trabalhos"
                            onClick={fecharMenu}
                            className={linkClass}
                        >
                            Trabalhos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/sobre"
                            onClick={fecharMenu}
                            className={linkClass}
                        >
                            Sobre
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contato"
                            onClick={fecharMenu}
                            className={linkClass}
                        >
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;