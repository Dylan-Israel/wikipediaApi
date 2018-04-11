const app = angular.module('wikiApp', []);

app.controller('wikiCtrl', function ($scope, $http) {
    const vm = $scope;
    vm.searchTermArr = [];
    vm.headerInfo = {
        project: 'AngularJs Wikipedia API',
        site: 'Free Code Camp - Intermediate Front End Projects',
        myChannel: 'YouTube.com/CodingTutorials360',
        myChannelURL: 'https://www.youtube.com/codingtutorials360'
    };

    vm.randomLink = 'https://en.wikipedia.org/wiki/Special:Random';

    vm.searchWiki = () => {
        $http({
            url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=${vm.searchTerm}&format=json&callback=JSON_CALLBACK`,
            method: 'jsonp'
        }).success(function (response) {
            vm.searchTermArr.push(response[1]);
            vm.searchTermArr.push(response[2]);
            vm.searchTermArr.push(response[3]);
        });
    };
});