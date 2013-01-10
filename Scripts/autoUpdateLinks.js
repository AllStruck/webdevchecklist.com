$(document).ready(function() {
	$('a[actionURI]').each(function() {
		savedHREF = $(this).attr('href');
		$(this).attr('savedHREF', savedHREF);
	})

	$('input#checkThisSite').keyup(updateLinks);
})

function updateLinks(event) {
	$('a[actionURI]').each(function() {
		inputFieldContents = $('input#checkThisSite').attr('value');
		if (inputFieldContents != "") {
			newHREF = $(this).attr('actionURI');
			$(this).attr('href', newHREF.replace('%s', inputFieldContents));
		} else {
			savedHREF = $(this).attr('savedHREF');
			$(this).attr('href', savedHREF);
		}
	})
}