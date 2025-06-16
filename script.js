    const eyeLinks = {
        eye1: "passGenerator/passgenerator.html",
        eye2: "quote/quote.html",
        eye3: "calculator/calculator.html"
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