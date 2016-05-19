/**
 * Created by li_sj on 2016/5/17.
 */

require("./tab.scss");

angular.module('app.ui').directive('tabs', tabs).directive('tab', tab);

function tabs() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controllerAs: 'tabs',
        template: ['<div>',
                      "<div class='tabs_list'>",
                          "<ul >",
                            "<li ng-repeat='tab in tabs.tabs' ng-class=\"{'active':tab.selected}\"  ng-click='tabs.selectTab($index)'>",
                               "<a>{{tab.title}}</a>",
                             "</li>",
                           "</ul>",
                     "</div>",
                     '<div class="tabs_body" ng-transclude></div>',
                  '</div>'].join(""),
        controller: function () {
            this.tabs = [];
            this.addTab = function (tab) {
                this.tabs.push(tab);
                console.log(tab);
            }
            this.selectTab = function (index) {
                for (var i = 0; i < this.tabs.length; i++) {
                    this.tabs[i].selected = false;
                }
                this.tabs[index].selected = true;
            }
        }, link: function ($scope, $element, $attrs, $ctrl) {
            $ctrl.selectTab(0);
        }
    }
}
function tab() {
    return {
        restrict: 'E',
        require: '^tabs',
        transclude: true,
        template: '<div class="tab_content" ng-if="tab.selected"><div ng-transclude></div></div>',
        controller: function ($scope) {
            $scope.tab = {
                selected: false,
                title: ''
            };
        },
        scope: {
            title: '@'
        },
        link: function ($scope, $el, $attrs, $ctrl) {
            $scope.tab["title"] = $attrs["title"];
            $ctrl.addTab($scope.tab)
        }
    }
}