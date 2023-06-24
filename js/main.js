//PANELES DE PERSONAJES
document.querySelectorAll(".personaje").forEach((e) => {
	const personaje = e.classList[1]
	e.addEventListener("mouseenter", () => {
		document.querySelector(`.media.${personaje}`).style = `background:url("/imagenes/gifs/${personaje}.gif");background-size:cover;`
	})
	e.addEventListener("mouseleave", () => {
		document.querySelector(`.media.${personaje}`).style = `background:none;`
	})
})

// //GALERIA

// // Siguiente imagen
// const nextButton = document.querySelector(".siguiente")
// nextButton.addEventListener("click", () => {
// 	const img = document.querySelector(".galeriaimg")
// 	if (!nextButton.classList.contains('disabled')){
// 		let picNumber = +img.classList[1]
// 		if (img.classList[1] == 1){
// 			document.querySelector(".anterior").classList.remove('disabled')
// 		}
// 		picNumber = picNumber + 1
// 		if (picNumber == 32){
// 			nextButton.classList.add('disabled')
// 		}
// 		img.src = `/imagenes/galeria/${picNumber.toString()}.jpg`
// 		img.setAttribute("class", `galeriaimg ${picNumber.toString()}`)
// 	}
// })

// // Anterior imagen
// const prevButton = document.querySelector(".anterior")
// prevButton.addEventListener("click", () => {
// 	const img = document.querySelector(".galeriaimg")
// 	if (!prevButton.classList.contains('disabled')){
// 		let picNumber = +img.classList[1]
// 		if(picNumber == 32){
// 			nextButton.classList.remove('disabled')
// 		}
// 		picNumber = picNumber - 1
// 		if (picNumber == 1){
// 			prevButton.classList.add('disabled')
// 		}
// 		img.src = `/imagenes/galeria/${picNumber.toString()}.jpg`
// 		img.setAttribute("class", `galeriaimg ${picNumber.toString()}`)
// 	}
// })