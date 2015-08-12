
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev,data) {
    ev.dataTransfer.setData("draggedObject", angular.toJson(data));
}

function drop(ev) {
    ev.preventDefault();
    var data = angular.fromJson(ev.dataTransfer.getData("draggedObject"));
    ev.target.innerHTML =  ev.target.innerHTML + '<docker-image imageJson="'+ev.dataTransfer.getData("draggedObject")+'"></docker-image>';
}

angular.module('app');

function cloudMainCtrl($scope , $http ) {



}






