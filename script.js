const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/nike.png",
            },
            {
                code: "darkblue",
                img: "./img/nike2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/nike0.png",
            },
            {
                code: "green",
                img: "./img/nike2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "black",
                img: "./img/nike.png",
            },
            {
                code: "white",
                img: "./img/nike2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "Black",
                img: "./img/nike0.png",
            },
            {
                code: "lightgray",
                img: "./img/nike2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 199,
        colors: [
            {
                code: "gray",
                img: "./img/nike.png",
            },
            {
                code: "black",
                img: "./img/nike2.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentproductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen Product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentproductTitle.textContent = choosenProduct.title;
        currentproductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img

        //assing new color
        currentproductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentproductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")


productButton.addEventListener("click", () => {
    payment.style.display = "flex"
})
close.addEventListener("click", () => {
    payment.style.display = "none"
})