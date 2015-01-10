/**
 * @module      app
 * @author      Reydel Leon Machado
 * @copyright   (c) 2014 Reydel Leon Machado
 * @license     Licensed under MIT license
 */

requirejs.config({
  //By default load any module IDs from js
  baseUrl: "scripts/core",
  //except, if the module ID starts with "app, etc.",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    util: "util",
    lib: "lib",
    vendors: "../bower_components"
  },

  //Shim config
  shim: {
    "vendors/underscore/underscore-min.js": {
      exports: "_"
    },

    "lib/github": {
      deps: ["vendors/underscore/underscore-min"],
      exports: "Github"
    },

    "vendors/moment/moment": {
      exports: "moment"
    },

    "vendors/angular/angular.min": {
      exports: "angular"
    }
  }
});

// Define the entry-point module
define(["vendors/angular/angular.min", "util/chrome.storage", "util/chrome.tabs", "lib/github"],
  function (angular, chromeStorage, chromeTabs) {
    "use strict";

    // Define the Global Object that will hold the extension functionality
    SPEEDHUB = {};

    var getLocalRepos,
      getRepo,
      githubClient;

    /**
     * Executes the callback with an array of repositories as the parameter.
     * @param {function} callback
     */
    getLocalRepos = function (callback) {
      chromeStorage.get("localRepos",
        function (items) {
          callback(items.localRepos);
        },
        "chrome.local");
    };

    /**
     * Passes the repository associated with the id to the callback function.
     * @param {number} id The id of the repository that is being retrieved.
     * @param {function} callback Callback to execute with the repository retrieved as a parameter.
     */
    getRepo = function (id, callback) {
      chromeStorage.get(
        "localRepos",
        function (items) {
          var repo = items.localRepos.filter(function (repo) {
            if (repo.id === parseInt(id, 10)) {
              return repo;
            }
          })[0];

          callback(repo);
        },
        "chrome.local");
    };

    // Event listeners
    chrome.runtime.onInstalled.addListener(function (details) {
      switch (details.reason) {
        case "install":
          // Show the options page to the user
          chromeTabs.create({
              active: true,
              url: "options_custom/index.html"
            },
            null);
          break;
      }
    });

    chrome.storage.onChanged.addListener(function (changes, namespace) {
      if (namespace === "local" && changes.hasOwnProperty("localRepos")) {
        getLocalRepos(function (repos) {
          chrome.runtime.sendMessage({ repos: repos }, function () {
            // Do nothing
          });
        });
      }
    });

    window.addEventListener(
      "storage",
      function (e) {
        switch (e.key) {
          case "store.settings.personalKey":
            githubClient = new Github({
              token: JSON.parse(e.newValue),
              oauth: "oauth"
            });

            githubClient.getUser().repos(
              function (err, items) {
                if (err) {
                  throw new Error(err.message);
                }

                chromeStorage.set(
                  { localRepos: items },
                  null,
                  "chrome.local"
                );
              });

            githubClient.getUser().notifications(function (err, notifications) {
                if (err) {
                  throw new Error("Couldn't retrieve notifications");
                }

                if (notifications && notifications.length !== 0) {
                  chrome.browserAction.setBadgeText({ text: notifications.length.toString(10) });
                }
              }
            );

            break;
          default:
            break;
        }
      });

    // Listen to messages from the popup or other parts of the extension
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      switch (request.cmd) {
        case "update_cache":
          //updateView();
          sendResponse({ 200: "OK" });
          break;
        case "open-repo":
          getRepo(request.id, function (repo) {
            chromeTabs.create({ url: repo.html_url });
          });
          break;
        case "download":
          getRepo(request.id, function (repo) {
            var url = repo.html_url + "/archive/master.zip";
            chromeTabs.create({ url: url });
          });
          break;
        default:
          throw new Error("Unknown command: " + request.cmd);
      }
    });

    // Bind all functions to an object in the Global Space to make them accessible from the outside scripts
    // referencing the BackgroundPage object
    SPEEDHUB.getLocalRepos = getLocalRepos;
  });
