import React, { createContext, useState, useMemo, useContext, useCallback } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("fr")

    const languages = {
        "en": {
            flag: "US",
            file: require("../languages/en-US.json")
        },
        "fr": {
            flag: "FR",
            file: require("../languages/fr-FR.json")
        }
    }

    const GetFlags = useCallback(() => Object.keys(languages).map(key => {
        return (
            {
                flag: languages[key].flag,
                language: key
            }
        )
    }), [languages])
    const GetLanguageFlag = useCallback(() => languages[language].flag, [language, languages])
    const GetLanguageFile = useCallback(() => languages[language].file, [language, languages])

    const value = useMemo(() => ({ language, setLanguage, GetLanguageFile, GetLanguageFlag, GetFlags }), [language, setLanguage, GetLanguageFile, GetLanguageFlag, GetFlags]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)