document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    let header = document.querySelector("header");
    let featuredImage = body.dataset.featuredImage || "/images/cover.jpg";  // 기본값 설정

    if (header) {
        header.style.backgroundImage = `url('${featuredImage}')`;
        header.style.backgroundSize = "cover";
        header.style.backgroundPosition = "center";
        header.style.backgroundRepeat = "no-repeat";
    }
});
