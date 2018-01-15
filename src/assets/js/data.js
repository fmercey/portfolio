'use: strict';

import * as base from './base.js';

function loadPage() {
	loadPreview();
	loadCategoryContent();
	loadCategoryProjects();
}
loadPage();

function loadPreview() {
	var dataRequest = new XMLHttpRequest();
	dataRequest.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(dataRequest.responseText);
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
					picture.src = 'dist/images/' + data[i].category + '-bg.jpg';
					target.appendChild(picture);
					target.insertBefore(picture, target.childNodes[2]);
				}
				insertBackground();

			}
		}

	};
	dataRequest.open('GET', '/src/assets/data/categories.json');
	dataRequest.send();
}

function loadCategoryContent() {
	var dataRequest = new XMLHttpRequest();
	dataRequest.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(dataRequest.responseText);
			var category = document.getElementsByClassName('section');

			for (var i = 0; i < category.length; i++) {
				var target = category[i];

				// Dynamically add a content container
				function insertMainContainer() {
					var main = document.createElement('div');
					main.setAttribute('class', 'section__main');
					target.appendChild(main);
					target.insertBefore(main, target.childNodes[1]);
				}
				insertMainContainer();

				var target = category[i].querySelector('.section__main');

				// Dynamically add a content container
				function insertContentContainer() {
					var container = document.createElement('div');
					container.setAttribute('class', 'section__content');
					target.appendChild(container);
					//target.insertBefore(container, target.childNodes[1]);
				}
				insertContentContainer();

				var target = category[i].querySelector('.section__content');

				// Dynamically add a category title
				function insertTitle() {
					if (data[i].hasOwnProperty('name')) {
						var title = document.createElement('h3');
						title.textContent = data[i].name;
						title.setAttribute('class', 'content__title');
						target.appendChild(title);
						target.insertBefore(title, target.childNodes[0]);
					}
				}
				insertTitle();

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
						target.insertBefore(list, target.childNodes[1]);
					}
				}
				createList();

				// Dynamically add a category description
				function insertDescription() {
					if (data[i].hasOwnProperty('description')) {
						var description = document.createElement('p');
						description.textContent = data[i].description;
						description.setAttribute('class', 'content__text');
						target.appendChild(description);
						target.insertBefore(description, target.childNodes[2]);
					}
				}
				insertDescription();

			}

		}

	};
	dataRequest.open('GET', '/src/assets/data/categories.json');
	dataRequest.send();
}

function loadCategoryProjects() {
	var dataRequest = new XMLHttpRequest();
	dataRequest.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(dataRequest.responseText);
			var category = document.getElementsByClassName('section');

			for (var i = 0; i < category.length; i++) {

				if (data[i].hasOwnProperty('projects')) {

					var target = category[i].querySelector('.section__main');

					// Dynamically add a projects container
					function insertProjectsContainer() {
						var container = document.createElement('div');
						container.setAttribute('class', 'section__projects');
						target.appendChild(container);
						target.insertBefore(container, target.childNodes[4]);
					}
					insertProjectsContainer();

					var target = category[i].querySelector('.section__projects');
					var projects = data[i].projects;

					for (var x = 0; x < projects.length; x++) {

						var container = document.createElement('div');
						container.setAttribute('class', 'section__project');
						target.appendChild(container);

						var subTarget = container;

						// Dynamically add a project title
						function insertProjectTitle() {
							var title = document.createElement('h3');
							title.textContent = data[i].projects[x].title;
							title.setAttribute('class', 'project__title');
							subTarget.appendChild(title);
						}
						insertProjectTitle();

					}

				}

			}

		}

	};
	dataRequest.open('GET', '/src/assets/data/categories.json');
	dataRequest.send();
}
