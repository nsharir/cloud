
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev,data) {
    ev.dataTransfer.setData("draggedObject", angular.toJson(data));
}

function drop(ev) {
    ev.preventDefault();
    var data = angular.fromJson(ev.dataTransfer.getData("draggedObject"));

}

angular.module('app');

function cloudMainCtrl($scope , $http ) {



}






