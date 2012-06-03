$(document).ready(function () {
	'use strict';

	// load values and scroll position on start
	$('#calendar').val(localStorage.getItem('calendar'));
	$('#projects').val(localStorage.getItem('projects'));
	$('#personal').val(localStorage.getItem('personal'));
	$('#calendar').scrollTop(localStorage.getItem('scroll-calendar'));
	$('#projects').scrollTop(localStorage.getItem('scroll-projects'));
	$('#personal').scrollTop(localStorage.getItem('scroll-personal'));

	syncer.display('remotestorage-connect', ['tasks'], 'syncer/', function (e) {
		$('#calendar').val(syncer.getItem('tasks', 'calendar'));
		$('#projects').val(syncer.getItem('tasks', 'projects'));
		$('#personal').val(syncer.getItem('tasks', 'personal'));
	});

	$('#calendar').change(function () {
		syncer.setItem('tasks', 'calendar', $('#calendar').val());
		localStorage.setItem('calendar', $('#calendar').val());
		localStorage.setItem('scroll-calendar', $('#calendar').scrollTop());
	});
	$('#projects').change(function () {
		syncer.setItem('tasks', 'projects', $('#projects').val());
		localStorage.setItem('projects', $('#projects').val());
		localStorage.setItem('scroll-projects', $('#projects').scrollTop());
	});
	$('#personal').change(function () {
		syncer.setItem('tasks', 'personal', $('#personal').val());
		localStorage.setItem('personal', $('#personal').val());
		localStorage.setItem('scroll-personal', $('#personal').scrollTop());
	});
});

$(window).unload(function () { // save values and scroll position on exit
	'use strict';
	localStorage.setItem('calendar', $('#calendar').val());
	localStorage.setItem('projects', $('#projects').val());
	localStorage.setItem('personal', $('#personal').val());
	localStorage.setItem('scroll-calendar', $('#calendar').scrollTop());
	localStorage.setItem('scroll-projects', $('#projects').scrollTop());
	localStorage.setItem('scroll-personal', $('#personal').scrollTop());
});
