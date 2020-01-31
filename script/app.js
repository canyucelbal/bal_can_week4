(() => {
	// set up the puzzle pieces and boards
	// navButtons -> images at the bottom of the page
	const navButtons = document.querySelectorAll("#buttonHolder img"),
				puzzlePiece = document.querySelectorAll('.puzzle-pieces img'),
				puzzleBoard = document.querySelector('.puzzle-board');

	// store the image names here
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// functions go here => what we want to have happen when our triggers fire
	function changeImageSet() {
		// change the thumbnail images on the left to match the button image
		pieces.forEach((piece, index) => puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`);
		// and set a background image on the drop zone container
		//debugger;
		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`;
	}


	// add some event handling for the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));
})();
