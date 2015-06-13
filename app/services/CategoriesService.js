angular.module('eventsApp.services').factory('categoriesService', ['$http', function ($http) {
	return {
		getAllCategories : getAllCategories,
		getCategory: getCategory,
		addNewCategory: addNewCategory,
		editCategory: editCategory
	};

	function getAllCategories() {
		return $http.get('https://baratheoneventsdb.firebaseio.com/categories.json');
	};

	function getCategory(categoryId) {
		return $http.get('https://baratheoneventsdb.firebaseio.com/categories/' + categoryId + '.json');
	};

	function addNewCategory(newCategory) {
		return $http.post('https://baratheoneventsdb.firebaseio.com/categories.json', newCategory);
	};

	function editCategory(editCategory) {
		return $http.post('https://baratheoneventsdb.firebaseio.com/categories.json', editCategory);
	};
}]);
