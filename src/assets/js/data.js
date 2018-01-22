'use: strict';

import * as base from './base.js';
import { CATEGORIES } from '../data/categories';

var data = CATEGORIES;
var category = document.getElementsByClassName('section');

function loadPage() {
	loadPreview();
	loadMain();
	loadProjects();
	loadProjectHighlight();
}
loadPage();

function loadPreview() {
	var category = document.getElementsByClassName('section');

	for (var i = 0; i < category.length; i++) {
		// Dynamically add category classes
		var target = category[i];
		target.setAttribute('class', 'section ' + data[i].category);

		// Dynamically add category titles
		function insertCategoryTitle() {
			if (data[i].hasOwnProperty('name')) {
				var title = document.createElement('h2');
				title.textContent = data[i].name;
				title.setAttribute('class', 'section__title');
				target.appendChild(title);
				target.insertBefore(title, target.childNodes[0]);
			}
		}
		insertCategoryTitle();

		// Dynamically add a picture overlay (to all)
		function insertOverlay() {
			var overlay = document.createElement('div');
			overlay.setAttribute('class', 'section__overlay');
			target.appendChild(overlay);
			target.insertBefore(overlay, target.childNodes[1]);
		}
		insertOverlay();

		// Dynamically add a category picture (to all)
		function insertBackground() {
			var picture = document.createElement('img');
			picture.setAttribute('class', 'section__background');
			picture.src = '/images/' + data[i].category + '-bg.jpg';
			picture.onerror = function () {
				picture.src = '/images/placeholder.jpg';
			}
			target.appendChild(picture);
			target.insertBefore(picture, target.childNodes[2]);
		}
		insertBackground();

	}
}

function loadMain() {

	for (var i = 0; i < category.length; i++) {
		var target = category[i];

		// Dynamically add a content container
		function insertMainContainer() {
			var main = document.createElement('div');
			main.setAttribute('class', 'section__content');
			target.appendChild(main);
			target.insertBefore(main, target.childNodes[1]);
		}
		insertMainContainer();

		var target = category[i].querySelector('.section__content');

		// Dynamically add a content container
		function insertContentContainer() {
			var container = document.createElement('div');
			container.setAttribute('class', 'section__main');
			target.appendChild(container);
			//target.insertBefore(container, target.childNodes[1]);
		}
		insertContentContainer();

		var target = category[i].querySelector('.section__main');

		// Dynamically add a category title
		function insertMainTitle() {
			if (data[i].hasOwnProperty('name')) {
				var title = document.createElement('h3');
				title.textContent = data[i].name;
				title.setAttribute('class', 'content__title');
				target.appendChild(title);
				target.insertBefore(title, target.childNodes[0]);
			}
		}
		insertMainTitle();

		// Dynamically add a close icon
		function insertCloseIcon() {
			var close = document.createElement('span');
			close.textContent = ' ';
			close.setAttribute('class', 'content__close');
			target.appendChild(close);
			target.insertBefore(close, target.childNodes[1]);
		}
		insertCloseIcon();

		// Dynamically add category tags
		var tags = data[i].tags;
		function createList() {
			if (data[i].hasOwnProperty('tags')) {
				var list = document.createElement('ul');
				list.setAttribute('class', 'content__tags');
				for (var x = 0; x < tags.length; x++) {
					var item = document.createElement('li');
					item.setAttribute('class', 'tag');
					item.textContent = tags[x];
					list.appendChild(item);
				}
				target.appendChild(list);
				target.insertBefore(list, target.childNodes[2]);
			}
		}
		createList();

		// Dynamically add a category description
		function insertDescription() {
			if (data[i].hasOwnProperty('description')) {
				var items = data[i].description.length;
				for (var b = 0; b < items; b++) {
					var description = document.createElement('p');
					description.textContent = data[i].description[b];
					description.setAttribute('class', 'content__description');
					target.appendChild(description);
				}
			}
		}
		insertDescription();

	}
}

function loadProjects() {
	for (var i = 0; i < category.length; i++) {

		if (data[i].hasOwnProperty('projects') && data[i].projects.length >= 1) {

			var target = category[i].querySelector('.section__content');

			// Dynamically add a projects container
			function insertProjectsContainer() {
				var container = document.createElement('div');
				container.setAttribute('class', 'section__projects');
				target.appendChild(container);
				target.insertBefore(container, target.childNodes[4]);
			}
			insertProjectsContainer();

			var target = category[i].querySelector('.section__content');

			// Dynamically add a projects container
			function insertProjectContainer() {
				var container = document.createElement('div');
				container.setAttribute('class', 'project__highlight');
				target.appendChild(container);
			}
			insertProjectContainer();

			var target = category[i].querySelector('.section__projects');

			// Dynamically add a category title
			function insertTitle() {
				if (data[i].hasOwnProperty('name')) {
					var title = document.createElement('h3');
					title.textContent = data[i].name + ' Projects';
					title.setAttribute('class', 'projects__title');
					target.appendChild(title);
					target.insertBefore(title, target.childNodes[1]);
				}
			}
			insertTitle();

			var projects = data[i].projects;

			for (var x = 0; x < projects.length; x++) {

				var container = document.createElement('div');
				container.setAttribute('class', 'section__project');
				target.appendChild(container);

				var subTarget = container;
				var projectName = data[i].projects[x].title;

				// Dynamically add a project title
				function insertProjectTitle() {
					var title = document.createElement('h3');
					title.textContent = projectName;
					title.setAttribute('class', 'project__title');
					subTarget.appendChild(title);
				}
				insertProjectTitle();

				// Dynamically add a project picture (to all)
				function insertProjectImage() {
					var picture = document.createElement('img');
					projectName = projectName.replace(/\s+/g, '-').toLowerCase();
					picture.setAttribute('class', 'project__image');

					picture.src = '/images/projects/' + projectName + '/' + projectName + '--preview.jpg';
					picture.onerror = function () {
						picture.src = '/images/placeholder.jpg';
					}
					container.appendChild(picture);
				}
				insertProjectImage();

			}
		}
	}
}

function loadProjectHighlight() {
	for (var i = 0; i < category.length; i++) {
		if (data[i].hasOwnProperty('projects') && data[i].projects.length >= 1) {

			var projects = data[i].projects;
			var target = category[i].querySelector('.project__highlight');

			// Dynamically add a project title
			function insertProjectTitle() {
				var title = document.createElement('h2');
				title.setAttribute('class', 'highlight__title');
				target.appendChild(title);
			}
			insertProjectTitle();

			// Dynamically add a close icon
			function insertCloseIcon() {
				var close = document.createElement('span');
				close.textContent = ' ';
				close.setAttribute('class', 'highlight__close');
				target.appendChild(close);
			}
			insertCloseIcon();

			// Dynamically add a project intro
			function insertProjectIntro() {
				var intro = document.createElement('p');
				intro.setAttribute('class', 'highlight__intro');
				target.appendChild(intro);
			}
			insertProjectIntro();

			// Dynamically add a category picture (to all)
			function insertProjectBackground() {
				var picture = document.createElement('img');
				picture.setAttribute('class', 'highlight__background');
				picture.src = '/images/highlight-bg.jpg';
				target.appendChild(picture);
			}
			insertProjectBackground();

		}
	}
}
