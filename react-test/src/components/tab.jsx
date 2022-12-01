const { useState } = require("react")

const tab = (label) => {
    const [language, setLanguage] = useState({label});

    function click () {
        setLanguage({label});
    }

    return (
        <h2 onClick={click}>{label}</h2>
    )
}