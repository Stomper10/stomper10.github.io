document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    let header = document.querySelector("header");

    if (header) {
        let featuredImage = body.getAttribute("data-featured-image") || "/images/cover.jpg";
        
        // 🚀 CSS 변수로 저장해서 다크 모드에서도 유지되도록 함
        document.documentElement.style.setProperty("--header-bg", `url('${featuredImage}')`);
        header.style.backgroundImage = `url('${featuredImage}')`;
        header.style.backgroundSize = "cover";
        header.style.backgroundPosition = "center";
        header.style.backgroundRepeat = "no-repeat";
    }
});
