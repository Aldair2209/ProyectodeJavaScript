document.addEventListener("DOMContentLoaded", function() {
    const btngo= document.querySelector(".btn_go");
    const carImg = document.querySelector(".car_img");
    

    btngo.addEventListener("mouseover", () => {
        carImg.classList.add("active");

    });

    btngo.addEventListener("mouseout", () => {
        carImg.classList.remove("active");
    });
});                                                        