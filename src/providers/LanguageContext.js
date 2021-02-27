import React, { createContext, useState, useMemo, useContext, useCallback } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("francais")

    const languageFiles = {
        "english": require("../languages/en-US.json"),
        "francais": require("../languages/fr-FR.json")
    }

    const GetLanguageFile = useCallback(() => languageFiles[language], [language, languageFiles])

    const value = useMemo(() => ({ language, setLanguage, GetLanguageFile }), [language, setLanguage, GetLanguageFile]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)