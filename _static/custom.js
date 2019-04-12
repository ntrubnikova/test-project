//Custom JS

// Nav Tree Expand Colapse Icons

$(".site-nav-tree li").parents().closest("li").children("a").before('<span class="nav-parent"></span>');


$('.nav-parent').click(function() {
	$(this).siblings("ul").toggle();
	$(this).parent("li").toggleClass("nav-expanded");
});

$('li.current').children('.nav-parent').click(function() {
	$(this).parent("li").toggleClass("nav-current-collapsed");
});

// API

$('table.api-code-block  td').html(function (i, html) {
	return html.replace(/&nbsp;/g, '');
});

// Logo

$('.site-title').addClass('logo-img');



