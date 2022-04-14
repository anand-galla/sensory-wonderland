
/* Toggle mobile menu */
function toggleMenu() {
    const menu = document.querySelector(".nav-items");
    const toggle = document.querySelector(".nav-icon");
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");

		// adds the menu (hamburger) icon
		toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
	} else {

		menu.classList.add("active");

		// adds the close (x) icon
		toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
	}
}
