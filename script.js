function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adiciona a imagem light
    img.setAttribute("src", "./assets/avatar-cora.png")
    img.setAttribute("alt", "Cora na praça")
  } else {
    //set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-cora.jpg")
    img.setAttribute("alt", "Fotografia Cora na sala")
  }
}