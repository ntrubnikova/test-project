//Custom JS

// Nav Tree
$(".site-nav-tree li").parents().closest("li").addClass("nav-has-children");

$('table.api-code-block  td').html(function (i, html) {
	return html.replace(/&nbsp;/g, '');
});

$('.site-title').addClass('logo-img');


