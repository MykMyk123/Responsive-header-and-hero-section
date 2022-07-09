const features = document.querySelector("[data-features]")
const longMenu = document.querySelector("[data-long-menu]")
const company = document.querySelector("[data-company]")
const shortMenu = document.querySelector("[data-short-menu]")
const menuCLick = document.querySelector("#menu-click")
const menuClickSecond = document.querySelector("#menu-click-second")
const arrowDown = document.querySelector("#active-svg-left")
const arrowUp = document.querySelector("#non-active-svg-left")
const arrowDownRight = document.querySelector("#active-svg-right")
const arrowUpRight = document.querySelector("#non-active-svg-right")


const navMobile = document.querySelector("#nav-mobile")
const navOpacity = document.querySelector("#nav-opacity")
const hamburger = document.querySelector("#hamburger")
const xButton = document.querySelector("#x-button")
const featuresMobile = document.querySelector("[data-features-mobile]")
const companyMobile = document.querySelector("[data-company-mobile]") 
const menuClickMobile = document.querySelector("[data-long-menu-mobile]")
const menuClickSecondMobile = document.querySelector("[data-short-menu-mobile]") 


features.addEventListener("mouseover", ()=> {
    longMenu.classList.add("active")
    arrowDown.classList.add("hide")
    arrowUp.classList.remove("hide")
    menuCLick.addEventListener("mouseleave", () => {
        longMenu.classList.remove("active")
        arrowDown.classList.remove("hide")
        arrowUp.classList.add("hide")
    })
})

company.addEventListener("mouseover", ()=> {
    shortMenu.classList.add("active")
    arrowDownRight.classList.add("hide")
    arrowUpRight.classList.remove("hide")
    menuClickSecond.addEventListener("mouseleave", () => {
        shortMenu.classList.remove("active")
        arrowDownRight.classList.remove("hide")
        arrowUpRight.classList.add("hide")
    })
})

hamburger.addEventListener("click", ()=> {
    navMobile.style.display = "flex"
    navOpacity.style.display = "flex"
    console.log("click")
})

xButton.addEventListener("click", ()=> {
    navMobile.style.display = "none"
    navOpacity.style.display = "none"
    console.log("click")
})

featuresMobile.addEventListener("click", ()=> {
    menuClickMobile.classList.toggle("second-menu-left-mobile")
})

companyMobile.addEventListener("click", ()=> {
    menuClickSecondMobile.classList.toggle("second-menu-right-mobile")
})