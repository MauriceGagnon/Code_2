// ---back to top
let mybutton = document.getElementById("back_top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    const images = [
        { src: "/src/assets/images/portfolio/img_1.jpg", title: "Image 1" },
        { src: "/src/assets/images/portfolio/img_3.jpg", title: "Image 2" },
        { src: "/src/assets/images/portfolio/img_4.jpg", title: "Image 3" },
        { src: "/src/assets/images/portfolio/img_5.jpg", title: "Image 3" },
        { src: "/src/assets/images/portfolio/img_6.jpg", title: "Image 3" },
        { src: "/src/assets/images/portfolio/img_7.jpg", title: "Image 3" },
        { src: "/src/assets/images/portfolio/img_8.jpg", title: "Image 3" },
        { src: "/src/assets/images/portfolio/img_9.jpg", title: "Image 3" },
        { src: "/src/assets/images/portfolio/img_10.jpg", title: "Image 3" },
        // Ajoutez ici le chemin de vos images et leurs titres
    ];

    images.forEach((image) => {
        const item = document.createElement("div");
        item.classList.add("col-md-6", "gallery-item");
        item.innerHTML = `<a href="${image.src}" data-title="${image.title}"><img src="${image.src}" alt="${image.title}"></a>`;
        gallery.appendChild(item);
    });

    const lightbox = GLightbox({
        selector: "a",
        loop: true,
    });
});
