
var source = "";
var count = 0;

jQuery.get("http://www.justinclagg.com/tribute-page/styles.css", addSource);
jQuery.get("http://www.justinclagg.com/tribute-page/script.js", addSource);

function addSource(data) {
	count++;
	source += "<pre>" + data + "</pre>";
	if (count === 2) {
		var test = $("html").html();
		test = test.replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]});
		test = "<pre>" + test + "</pre>";
		source += test;
		$("#source").html(source);
		$("#source").css("text-align", "left");
	}
}