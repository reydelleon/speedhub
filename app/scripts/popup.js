/**
 * @module      popup
 * @author      Reydel Leon Machado
 * @copyright   (c) 2014 Reydel Leon Machado
 * @license     Licensed under MIT license
 */

(function () {
  'use strict';

  var popupModule;

  /**
   * @module
   */
  popupModule = angular.module('popup', []);

  popupModule.controller('PopupController',
    [
      '$scope',
      function ($scope) {
        chrome.runtime.getBackgroundPage(
          function (backgrondPageObject) {
            var SPEEDHUB = backgrondPageObject.SPEEDHUB;

            SPEEDHUB.getLocalRepos(function (repos) {
              $scope.$apply(function () {
                $scope.repos = repos;
              });
            });
          });

        // Listen for changes in repos
        chrome.runtime.onMessage.addListener(
          function (request, sender, sendResponse) {
            $scope.$apply(function () {
              $scope.repos = request.repos;
            });
          });
      }
    ]
  );
}());