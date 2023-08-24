const btnEls = document.querySelectorAll('.accordion__question')


const openAccordion = (btn) => {
   
    const answareEls = btn.nextElementSibling;
		answareEls.classList.toggle("active");

		const arrowImgEl = btn.querySelector(".accordion__rotate__arrow");

}






btnEls.forEach(btn => btn.addEventListener('click', () => openAccordion(btn)))