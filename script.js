
document.addEventListener("DOMContentLoaded", function() {
// Starts script when HTML is loaded and parsed; Not supported before IE9
	"use strict";

	/* Document status variables */
	var menuRaised = false,
		activeTab = false,
		activePanel = false,
		activeDropdown = "physics-dropdown",
		activeIcon = "physics";

	// Assigns a click event handler to each link that is a child of #tab-menu
	// The HTMLCollection is passed as 'this' in order to use an Array.prototype method
	var tabs = document.getElementById("tab-menu").getElementsByTagName("a");

	Array.prototype.forEach.call(tabs, function addClickEvents(element) {
		element.addEventListener("click", tabClick);
	});

	// The click event handler for each menu tab
	// 'this' is the element that was clicked
	function tabClick() {
		if (menuRaised === false) {
			// The first tab click raises the menu
			document.getElementById("menu").classList.add("menu-raised");			
			menuRaised = true;
			this.classList.add("active-tab");
			activeTab = this.id;
			// Set the active panel and display it after a delay
			activePanel = this.id + "-panel";
			setTimeout(function displayPanel() {
				document.getElementById(activePanel).classList.add("active-panel");
			}, 1200);
		}
		else if (this.id !== activeTab){
			// Remove the previously active panel, then update and display the new active panel
			document.getElementById(activePanel).classList.remove("active-panel");
			activePanel = this.id + "-panel";
			document.getElementById(activePanel).classList.add("active-panel");
			document.getElementById(activeTab).classList.remove("active-tab");
			activeTab = this.id;
			this.classList.add("active-tab");
		}
	}

	// Assigns a click event handler to each link that is a child of #work-tabs
	var workHeadings = document.getElementById("work-tabs").getElementsByTagName("a");

	Array.prototype.forEach.call(workHeadings, function addClickEvents(element) {
		element.addEventListener("click", toggleDropdown);
	});

	// The click event handler for each dropdown textbox
	function toggleDropdown() {
		if (activeDropdown === false) {
			// Set the active dropdown and display it
			activeDropdown = this.id + "-dropdown";
			document.getElementById(activeDropdown).classList.add("active-dropdown");
			// Change the corresponding icon background color
			activeIcon = this.id;
			document.getElementById(activeIcon).children.item(0).classList.add("active-icon");
		}
		else if (activeDropdown === this.id + "-dropdown"){
			// Remove the currently active dropdown
			document.getElementById(activeDropdown).classList.remove("active-dropdown");
			activeDropdown = false;
			// Remove the icon background color
			document.getElementById(activeIcon).children.item(0).classList.remove("active-icon");
			activeDropdown = false;
		}
		else if (activeDropdown) {
			// Remove the currently active dropdown, then update and display the new active dropdown			
			document.getElementById(activeDropdown).classList.remove("active-dropdown");
			activeDropdown = this.id + "-dropdown";
			document.getElementById(activeDropdown).classList.add("active-dropdown");		
			// Remove the currently active icon background, add a background to the new icon
			document.getElementById(activeIcon).children.item(0).classList.remove("active-icon");
			activeIcon = this.id;
			document.getElementById(activeIcon).children.item(0).classList.add("active-icon");			
		}
	}

});
