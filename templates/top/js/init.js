
function set_color_scheme(element) {
	var mode = JSON.parse(localStorage.getItem('mode'));
	var change_color_scheme = function (mode) {
		if (!mode) {
			element.addClass('dark');
			element.removeClass('light');
		} else {
			element.addClass('light');
			element.removeClass('dark');
		}
	};
	change_color_scheme(mode);
	$('<a></a>')
		.hide()
		.addClass('toggle')
		.html('&#x2600;')
		.prependTo($('header'))
		.attr('title', 'Переключить тему')
		.click(function () {
			mode = !mode;
			localStorage.setItem('mode', mode);
			element.fadeOut('slow', function () {
				change_color_scheme(mode);
				element.fadeIn('slow');
			});
		})
		.fadeIn('slow')
		;
}

$(function () {
	'use strict';

	set_color_scheme($('html'));

	// Fix https://github.com/jgm/pandoc/issues/3858
	$.each([
		'apacheconf', 'bash', 'c', 'csp', 'css', 'cmake', 'cpp', 'docker',
		'dockerfile', 'git', 'hpkp', 'hsts', 'html', 'http', 'ini',
		'javascript', 'json', 'jsonp', 'makefile', 'mathml', 'nginx', 'php',
		'scss', 'shell', 'shell-session', 'sql', 'twig', 'yaml', 'svg', 'xml'
	], function (index, value) {
		var block = $('.' + value);
		block.removeClass(value).addClass('language-' + value);
		/*
		if (block.length > 2) {
			block.addClass('line-numbers');
		}
		*/
	});
	Prism.highlightAll();
	$('pre > code, pre > div, .toolbar').fadeTo('slow', 1);
	$('.uncopyable').parent().find('.toolbar-item').remove();
});
