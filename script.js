    const eyeLinks = {
        eye1: "passGenerator/passgenerator.html",
        eye2: "quote/quote.html",
        eye3: "calculator/calculator.html",
        eye4: "Input/input.html",
        eye5: "https://papyr.netlify.app/",
        eye6: "https://stake-cloned.netlify.app/",
        eye7: "Input/input.html"
    };

    Object.entries(eyeLinks).forEach(([id, url]) => {
        const icon = document.getElementById(id);
        if (icon) {
            icon.style.cursor = "pointer";
            icon.addEventListener("click", () => {
                window.open(url, "_blank");
            });
        }
    });