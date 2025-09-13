    const eyeLinks = {
        eye1: "passGenerator/passgenerator.html",
        eye2: "quote/quote.html",
        eye3: "calculator/calculator.html",
        eye4: "zenstrike/index.html",
        eye5: "https://papyr.netlify.app/",
        eye6: "https://stake-cloned.netlify.app/",
        eye7: "https://server-7qpg.onrender.com/",
        eye8: "harkiratclone/index.html",
        eye9: "whiteport/index.html",
        eye10: "valoport/index.html",
        eye11: "threed/index.html",
        eye12: "randomjs/index.html"
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