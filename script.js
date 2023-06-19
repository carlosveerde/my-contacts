function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-cropped.png")
    img.setAttribute("alt", "Carlos de braços cruzados")
  } else {
    img.setAttribute("src", "./assets/avatar-dark-cropped.png")
    img.setAttribute("alt", "Carlos de braços cruzados com óculos escuros")
  }
}
