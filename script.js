// Parse the URL parameter
function getParam(source, url) {
    if (!url) url = window.location.href;
    // url = window.location.href;
    source = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + source + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Assign the referral source to the UTM code
var sourceName = getParam('utm_source');
 $(document).ready(function() {
	// Check the UTM code and assign the correct unique phone number per source
	if (sourceName == 'google') {
		$('#yourDiv').html('(415)-111-0000');
	}
	else if (sourceName == 'facebook') {
		$('#yourDiv').html('(415)-222-0000');
	}
	else if (sourceName == 'newsletter') {
		$('#yourDiv').html('(415)-333-0000');
	}
	else {
		$('#dki').html('<p><b>normal number - (415)-000-0000</b><p>');
	}
});
