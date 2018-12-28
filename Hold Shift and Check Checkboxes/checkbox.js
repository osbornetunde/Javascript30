const checkboxes = document.querySelectorAll('input');

let lastChecked;
function handleCheck(e) {

	let inBetween = false;
	if(e.shiftKey && this.checked) {

		checkboxes.forEach(checkbox => {

			//I introduced lastChecked to handle when the first box is checked while holding down Shift
			//which checks every box below the selected box
			if(lastChecked && checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}

			if(inBetween) {
				checkbox.checked = true;
			}
		});

	}
lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));