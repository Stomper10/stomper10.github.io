document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Dark mode script loaded and running!");

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const languageToggle = document.querySelectorAll(".i18nlist a"); // 언어 변경 버튼들
    const body = document.body;
    const html = document.documentElement;

    // 🔥 페이지가 로드될 때 즉시 `dark-mode` 적용
    if (localStorage.getItem("dark-mode") === "enabled") {
        html.classList.add("dark-mode");
        body.classList.add("dark-mode");
    }

    function applyDarkMode() {
        html.classList.add("dark-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        darkModeToggle.textContent = "☀️";
        console.log("🌙 Dark mode activated");
    }

    function removeDarkMode() {
        html.classList.remove("dark-mode");
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        darkModeToggle.textContent = "🌙";
        console.log("☀️ Light mode activated");
    }

    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            removeDarkMode();
        } else {
            applyDarkMode();
        }
    });

    // 🔥 언어 변경 시 `dark-mode` 유지
    languageToggle.forEach((btn) => {
        btn.addEventListener("click", function () {
            console.log("🌎 Language button clicked, keeping dark mode state.");
            if (localStorage.getItem("dark-mode") === "enabled") {
                html.classList.add("dark-mode");
                body.classList.add("dark-mode");
            }
        });
    });

    // 🔥 페이지 이동 후에도 다크 모드 유지
    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible" && localStorage.getItem("dark-mode") === "enabled") {
            html.classList.add("dark-mode");
            body.classList.add("dark-mode");
        }
    });
});
