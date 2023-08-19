const minusBtn = document.getElementById("minus-btn")
const plusBtn = document.getElementById("plus-btn")
const addItem = document.getElementById("add-item")
const addToCartBtn = document.getElementById("add-to-cart-btn")
const totalItems = document.getElementById("total-items")
const cart = document.getElementById("cart")
const myCartBtn = document.getElementById("my-cart-btn")
const emptyCart = document.getElementById("empty-cart")
const numberOfItems = document.getElementById("no-of-items")
const totalPrice = document.getElementById("total-price")
const deleteBtn = document.getElementById("delete-btn")
const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")
const navMenu = document.getElementById("nav-menu")
const bgBlur = document.getElementById("bg-blur")
const closeBtnWhite = document.querySelector(".close-btn-white")
const productImagesMobile = document.querySelectorAll(".product-img-mobile")
const productImages = document.querySelectorAll(".product-img")
const productImages2 = document.querySelectorAll(".product-img-2")
const thumbnails = document.querySelectorAll(".thumbnail")
const thumbnails2 = document.querySelectorAll(".thumbnail-2")
const previousBtns = document.querySelectorAll(".previous-btn")
const nextBtns = document.querySelectorAll(".next-btn")

minusBtn.addEventListener("click", () => {
  ;+addItem.textContent !== 0 ? addItem.textContent-- : null
})

plusBtn.addEventListener("click", () => {
  addItem.textContent++
})

addToCartBtn.addEventListener("click", () => {
  if (+addItem.textContent !== 0) {
    totalItems.textContent = addItem.textContent
    numberOfItems.textContent = addItem.textContent
    totalItems.classList.remove("hidden")

    totalPrice.textContent = `$${+addItem.textContent * 125}.00`
  } else {
    totalItems.classList.add("hidden")
    emptyCart.classList.remove("hidden")
    emptyCart.nextElementSibling.classList.add("hidden")
  }
})

myCartBtn.addEventListener("click", () => {
  cart.classList.toggle("hidden")

  if (!totalItems.classList.contains("hidden")) {
    emptyCart.classList.add("hidden")
    emptyCart.nextElementSibling.classList.remove("hidden")
  }
})

deleteBtn.addEventListener("click", () => {
  emptyCart.classList.remove("hidden")
  emptyCart.nextElementSibling.classList.add("hidden")
  totalItems.classList.add("hidden")
})

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hidden")
  closeBtn.classList.remove("hidden")
  navMenu.classList.remove("hidden")
})

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hidden")
  menuBtn.classList.remove("hidden")
  navMenu.classList.add("hidden")
  bgBlur.classList.add("hidden")
})

let currentIndex = 0

function showImage(index) {
  productImagesMobile.forEach((image, i) => {
    if (i === index) {
      image.classList.remove("hidden")
    } else {
      image.classList.add("hidden")
    }
  })
  productImages2.forEach((image, i) => {
    if (i === index) {
      image.classList.remove("hidden")
    } else {
      image.classList.add("hidden")
    }
  })
}

function selectThumbnail(index) {
  thumbnails2.forEach((thumbnail, i) => {
    if (i === index) {
      thumbnail.classList.add("selected")
    } else {
      thumbnail.classList.remove("selected")
    }
  })
}

function navigateToNextImage() {
  currentIndex = (currentIndex + 1) % productImagesMobile.length
  showImage(currentIndex)
  selectThumbnail(currentIndex)
}

function navigateToPreviousImage() {
  currentIndex =
    (currentIndex - 1 + productImagesMobile.length) % productImagesMobile.length
  showImage(currentIndex)
  selectThumbnail(currentIndex)
}

previousBtns.forEach((btn) => {
  btn.addEventListener("click", navigateToPreviousImage)
})
nextBtns.forEach((btn) => {
  btn.addEventListener("click", navigateToNextImage)
})

function showProductImage(index) {
  productImages.forEach((img) => {
    img.classList.add("hidden")
  })

  productImages[index].classList.remove("hidden")

  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("selected")
  })

  thumbnails[index].classList.add("selected")
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    showProductImage(index)
  })
})

function showProductImage2(index) {
  productImages2.forEach((img) => {
    img.classList.add("hidden")
  })

  productImages2[index].classList.remove("hidden")

  thumbnails2.forEach((thumbnail) => {
    thumbnail.classList.remove("selected")
  })

  thumbnails2[index].classList.add("selected")
}

thumbnails2.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    showProductImage(index)
    showProductImage2(index)
  })
})

closeBtnWhite.addEventListener("click", () => {
  bgBlur.classList.replace("grid", "hidden")
})

productImages.forEach((productImage) => {
  productImage.addEventListener("click", () => {
    bgBlur.classList.replace("hidden", "grid")
    thumbnails.forEach((thumbnail, index) => {
      if (thumbnail.classList.contains("selected")) {
        showImage(index)
        selectThumbnail(index)
        currentIndex = index
      }
    })
  })
})
