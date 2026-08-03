import { useState } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const instagramUrl = "https://www.instagram.com/diogoqueiroz__/";
const instagramNome = "@diogoqueiroz__";
const emailContato = "contato.clararibeiro@gmail.com";

const formularioInicial = {
    nome: "",
    email: "",
    mensagem: "",
};

function Contato() {
    const [formulario, setFormulario] = useState(formularioInicial);
    const [erros, setErros] = useState({});

    function validarCampo(campo, valor) {
        const valorLimpo = valor.trim();

        if (campo === "nome") {
            if (!valorLimpo) {
                return "Informe seu nome.";
            }

            if (valorLimpo.length < 3) {
                return "O nome precisa ter pelo menos 3 caracteres.";
            }

            if (valorLimpo.length > 60) {
                return "O nome pode ter no máximo 60 caracteres.";
            }

            const nomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;

            if (!nomeValido.test(valorLimpo)) {
                return "O nome não pode conter números ou caracteres especiais.";
            }
        }

        if (campo === "email") {
            if (!valorLimpo) {
                return "Informe seu e-mail.";
            }

            if (valorLimpo.length > 120) {
                return "O e-mail pode ter no máximo 120 caracteres.";
            }

            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

            if (!emailValido.test(valorLimpo)) {
                return "Informe um endereço de e-mail válido.";
            }
        }

        if (campo === "mensagem") {
            if (!valorLimpo) {
                return "Escreva uma mensagem.";
            }

            if (valorLimpo.length < 10) {
                return "A mensagem precisa ter pelo menos 10 caracteres.";
            }

            if (valorLimpo.length > 1000) {
                return "A mensagem pode ter no máximo 1.000 caracteres.";
            }
        }

        return "";
    }

    function validarFormulario() {
        const novosErros = {
            nome: validarCampo("nome", formulario.nome),
            email: validarCampo("email", formulario.email),
            mensagem: validarCampo("mensagem", formulario.mensagem),
        };

        Object.keys(novosErros).forEach((campo) => {
            if (!novosErros[campo]) {
                delete novosErros[campo];
            }
        });

        setErros(novosErros);

        return Object.keys(novosErros).length === 0;
    }

    function alterarCampo(event) {
        const { name, value } = event.target;

        setFormulario((estadoAnterior) => ({
            ...estadoAnterior,
            [name]: value,
        }));

        if (erros[name]) {
            setErros((errosAnteriores) => ({
                ...errosAnteriores,
                [name]: "",
            }));
        }
    }

    function validarAoSairDoCampo(event) {
        const { name, value } = event.target;
        const erro = validarCampo(name, value);

        setErros((errosAnteriores) => ({
            ...errosAnteriores,
            [name]: erro,
        }));
    }

    function enviarMensagem(event) {
        event.preventDefault();

        const formularioValido = validarFormulario();

        if (!formularioValido) {
            return;
        }

        const nome = formulario.nome.trim();
        const email = formulario.email.trim();
        const mensagem = formulario.mensagem.trim();

        const assunto = encodeURIComponent(
            `Contato pelo site — ${nome}`
        );

        const corpo = encodeURIComponent(
            `Nome: ${nome}\n` +
            `E-mail: ${email}\n\n` +
            `Mensagem:\n${mensagem}`
        );

        window.location.href =
            `mailto:${emailContato}?subject=${assunto}&body=${corpo}`;
    }

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
                        paddingBottom: "48px",
                    }}
                >
                    <SectionTitle titulo="Contato" />

                    <section
                        style={{
                            marginTop: "clamp(36px, 5vw, 48px)",
                            maxWidth: "900px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        className="
                            grid
                            w-full
                            grid-cols-1
                            gap-8
                            sm:gap-10
                            lg:grid-cols-[290px_450px]
                            lg:justify-center
                            lg:gap-[90px]
                        "
                    >
                        <aside
                            style={{
                                padding: "clamp(20px, 4vw, 32px)",
                            }}
                            className="
                                w-full
                                min-w-0
                                self-start
                                rounded-lg
                                border
                                border-[#e5e1da]
                                bg-white
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-md
                            "
                        >
                            <h2
                                style={{
                                    marginBottom: "30px",
                                }}
                                className="text-base font-bold"
                            >
                                Dados de contato
                            </h2>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "24px",
                                }}
                            >
                                <a
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        paddingBottom: "24px",
                                    }}
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                        border-b
                                        border-gray-200
                                        transition-colors
                                        duration-300
                                        hover:text-red-600
                                    "
                                >
                                    <span
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-md
                                            bg-gray-100
                                            text-xl
                                        "
                                    >
                                        <FaInstagram />
                                    </span>

                                    <span className="min-w-0">
                                        <span className="block text-[10px] uppercase text-gray-500">
                                            Instagram
                                        </span>

                                        <span className="mt-1 block break-words text-xs font-medium">
                                            {instagramNome}
                                        </span>
                                    </span>
                                </a>

                                <a
                                    href={`mailto:${emailContato}`}
                                    style={{
                                        paddingBottom: "24px",
                                    }}
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                        border-b
                                        border-gray-200
                                        transition-colors
                                        duration-300
                                        hover:text-red-600
                                    "
                                >
                                    <span
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-md
                                            bg-gray-100
                                            text-lg
                                        "
                                    >
                                        <FaEnvelope />
                                    </span>

                                    <span className="min-w-0">
                                        <span className="block text-[10px] uppercase text-gray-500">
                                            E-mail
                                        </span>

                                        <span className="mt-1 block break-all text-xs font-medium underline">
                                            {emailContato}
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </aside>

                        <form
                            onSubmit={enviarMensagem}
                            noValidate
                            style={{
                                padding: "clamp(20px, 4vw, 32px)",
                            }}
                            className="
                                w-full
                                min-w-0
                                rounded-lg
                                border
                                border-[#e5e1da]
                                bg-white
                            "
                        >
                            <h2
                                style={{
                                    marginBottom: "30px",
                                }}
                                className="text-base font-bold"
                            >
                                Envie uma mensagem
                            </h2>

                            <div
                                style={{
                                    display: "grid",
                                    gap: "22px",
                                }}
                            >
                                <div>
                                    <label
                                        htmlFor="nome"
                                        style={{
                                            display: "block",
                                            marginBottom: "10px",
                                        }}
                                        className="text-xs font-medium"
                                    >
                                        Nome
                                    </label>

                                    <input
                                        id="nome"
                                        name="nome"
                                        type="text"
                                        value={formulario.nome}
                                        onChange={alterarCampo}
                                        onBlur={validarAoSairDoCampo}
                                        maxLength={60}
                                        autoComplete="name"
                                        aria-invalid={Boolean(erros.nome)}
                                        aria-describedby={
                                            erros.nome
                                                ? "erro-nome"
                                                : undefined
                                        }
                                        style={{
                                            paddingLeft: "16px",
                                            paddingRight: "16px",
                                        }}
                                        className={`
                                            h-10
                                            w-full
                                            rounded-md
                                            border
                                            text-sm
                                            outline-none
                                            transition-all
                                            duration-300
                                            focus:ring-2
                                            ${
                                                erros.nome
                                                    ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100"
                                                    : "border-[#e5e1da] bg-[#faf9f6] focus:border-red-500 focus:bg-white focus:ring-red-100"
                                            }
                                        `}
                                    />

                                    {erros.nome && (
                                        <p
                                            id="erro-nome"
                                            style={{ marginTop: "6px" }}
                                            className="text-xs text-red-600"
                                        >
                                            {erros.nome}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        style={{
                                            display: "block",
                                            marginBottom: "10px",
                                        }}
                                        className="text-xs font-medium"
                                    >
                                        E-mail
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formulario.email}
                                        onChange={alterarCampo}
                                        onBlur={validarAoSairDoCampo}
                                        maxLength={120}
                                        autoComplete="email"
                                        aria-invalid={Boolean(erros.email)}
                                        aria-describedby={
                                            erros.email
                                                ? "erro-email"
                                                : undefined
                                        }
                                        style={{
                                            paddingLeft: "16px",
                                            paddingRight: "16px",
                                        }}
                                        className={`
                                            h-10
                                            w-full
                                            rounded-md
                                            border
                                            text-sm
                                            outline-none
                                            transition-all
                                            duration-300
                                            focus:ring-2
                                            ${
                                                erros.email
                                                    ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100"
                                                    : "border-[#e5e1da] bg-[#faf9f6] focus:border-red-500 focus:bg-white focus:ring-red-100"
                                            }
                                        `}
                                    />

                                    {erros.email && (
                                        <p
                                            id="erro-email"
                                            style={{ marginTop: "6px" }}
                                            className="text-xs text-red-600"
                                        >
                                            {erros.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <label
                                            htmlFor="mensagem"
                                            className="text-xs font-medium"
                                        >
                                            Mensagem
                                        </label>

                                        <span className="text-[10px] text-gray-500">
                                            {formulario.mensagem.length}/1000
                                        </span>
                                    </div>

                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        value={formulario.mensagem}
                                        onChange={alterarCampo}
                                        onBlur={validarAoSairDoCampo}
                                        maxLength={1000}
                                        rows={6}
                                        aria-invalid={Boolean(erros.mensagem)}
                                        aria-describedby={
                                            erros.mensagem
                                                ? "erro-mensagem"
                                                : undefined
                                        }
                                        style={{
                                            padding: "14px 16px",
                                        }}
                                        className={`
                                            w-full
                                            resize-y
                                            rounded-md
                                            border
                                            text-sm
                                            outline-none
                                            transition-all
                                            duration-300
                                            focus:ring-2
                                            ${
                                                erros.mensagem
                                                    ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100"
                                                    : "border-[#e5e1da] bg-[#faf9f6] focus:border-red-500 focus:bg-white focus:ring-red-100"
                                            }
                                        `}
                                    />

                                    {erros.mensagem && (
                                        <p
                                            id="erro-mensagem"
                                            style={{ marginTop: "6px" }}
                                            className="text-xs text-red-600"
                                        >
                                            {erros.mensagem}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        marginTop: "6px",
                                        padding: "14px 24px",
                                    }}
                                    className="
                                        w-full
                                        rounded-lg
                                        bg-black
                                        text-sm
                                        font-bold
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:bg-red-600
                                        hover:shadow-lg
                                        active:translate-y-0
                                        active:scale-[0.98]
                                    "
                                >
                                    Enviar mensagem
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Contato;