
function toggleComments() {
	var comments = document.getElementsByClassName('comment');

	for (var i=0; i<comments.length; ++i) {
		comments.item(i).classList.toggle('hidden');
	}
}