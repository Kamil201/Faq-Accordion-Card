const btnEls = document.querySelectorAll('.accordion__question')


const openAccordion = (btn) => {
   
    const answareEls = btn.nextElementSibling;
		answareEls.classList.toggle("active");

		const arrowImgEl = btn.querySelector(".accordion__rotate__arrow");

        
		if (answareEls.classList.contains("active")) {
			answareEls.style.height = `${answareEls.scrollHeight}px`;
			arrowImgEl.classList.add("rotate");
		} else {
			answareEls.style.height = "0px";
			arrowImgEl.classList.remove("rotate");
		}

}






btnEls.forEach(btn => btn.addEventListener('click', () => openAccordion(btn)))