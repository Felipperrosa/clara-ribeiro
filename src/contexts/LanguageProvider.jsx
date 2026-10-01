import { useState } from "react";

import { LanguageContext } from "./LanguageContext";

import pt from "../translations/pt";
import en from "../translations/en";
import es from "../translations/es";

const translations = {
    pt,
    en,
    es,
};

const IDIOMA_PADRAO = "pt";

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(IDIOMA_PADRAO);

    function changeLanguage(novoIdioma) {
        if (!translations[novoIdioma]) {
            return;
        }

        setLanguage(novoIdioma);
    }

    function t(key) {
        return (
            key
                .split(".")
                .reduce(
                    (object, property) =>
                        object?.[property],
                    translations[language]
                ) ?? key
        );
    }

    return (
        <LanguageContext.Provider
            value={{ language, changeLanguage, t }}
        >
            {children}
        </LanguageContext.Provider>
    );
}