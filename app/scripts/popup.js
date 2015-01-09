'use strict';

// Dummy data
var repos = [
  {
    "archive_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/{archive_format}{/ref}",
    "assignees_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/branches{/branch}",
    "clone_url": "https://github.com/reydelleon/effective-javascript-examples.git",
    "collaborators_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/comments{/number}",
    "commits_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/commits{/sha}",
    "compare_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/contributors",
    "created_at": "2014-12-10T02:43:04Z",
    "default_branch": "master",
    "description": "Examples for the book Effective Javascript",
    "downloads_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/downloads",
    "events_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/events",
    "fork": false,
    "forks": 0,
    "forks_count": 0,
    "forks_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/forks",
    "full_name": "reydelleon/effective-javascript-examples",
    "git_commits_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/git/tags{/sha}",
    "git_url": "git://github.com/reydelleon/effective-javascript-examples.git",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": false,
    "has_wiki": true,
    "homepage": null,
    "hooks_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/hooks",
    "html_url": "https://github.com/reydelleon/effective-javascript-examples",
    "id": 27798972,
    "issue_comment_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/issues/comments/{number}",
    "issue_events_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/issues{/number}",
    "keys_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/labels{/name}",
    "language": null,
    "languages_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/languages",
    "merges_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/merges",
    "milestones_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/milestones{/number}",
    "mirror_url": null,
    "name": "effective-javascript-examples",
    "notifications_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/notifications{?since,all,participating}",
    "open_issues": 0,
    "open_issues_count": 0,
    "owner": {
      "avatar_url": "https://avatars.githubusercontent.com/u/2479575?v=3",
      "events_url": "https://api.github.com/users/reydelleon/events{/privacy}",
      "followers_url": "https://api.github.com/users/reydelleon/followers",
      "following_url": "https://api.github.com/users/reydelleon/following{/other_user}",
      "gists_url": "https://api.github.com/users/reydelleon/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/reydelleon",
      "id": 2479575,
      "login": "reydelleon",
      "organizations_url": "https://api.github.com/users/reydelleon/orgs",
      "received_events_url": "https://api.github.com/users/reydelleon/received_events",
      "repos_url": "https://api.github.com/users/reydelleon/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/reydelleon/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/reydelleon/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/reydelleon"
    },
    "permissions": {
      "admin": true,
      "pull": true,
      "push": true
    },
    "private": false,
    "pulls_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/pulls{/number}",
    "pushed_at": "2014-12-10T02:43:04Z",
    "releases_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/releases{/id}",
    "size": 0,
    "ssh_url": "git@github.com:reydelleon/effective-javascript-examples.git",
    "stargazers_count": 0,
    "stargazers_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/stargazers",
    "statuses_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/subscribers",
    "subscription_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/subscription",
    "svn_url": "https://github.com/reydelleon/effective-javascript-examples",
    "tags_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/tags",
    "teams_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/teams",
    "trees_url": "https://api.github.com/repos/reydelleon/effective-javascript-examples/git/trees{/sha}",
    "updated_at": "2014-12-10T02:43:04Z",
    "url": "https://api.github.com/repos/reydelleon/effective-javascript-examples",
    "watchers": 0,
    "watchers_count": 0
  },
  {
    "archive_url": "https://api.github.com/repos/reydelleon/practice-quiz/{archive_format}{/ref}",
    "assignees_url": "https://api.github.com/repos/reydelleon/practice-quiz/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/reydelleon/practice-quiz/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/reydelleon/practice-quiz/branches{/branch}",
    "clone_url": "https://github.com/reydelleon/practice-quiz.git",
    "collaborators_url": "https://api.github.com/repos/reydelleon/practice-quiz/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/reydelleon/practice-quiz/comments{/number}",
    "commits_url": "https://api.github.com/repos/reydelleon/practice-quiz/commits{/sha}",
    "compare_url": "https://api.github.com/repos/reydelleon/practice-quiz/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/reydelleon/practice-quiz/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/reydelleon/practice-quiz/contributors",
    "created_at": "2014-12-08T05:18:44Z",
    "default_branch": "master",
    "description": "A simple JS app coded for practice purposes",
    "downloads_url": "https://api.github.com/repos/reydelleon/practice-quiz/downloads",
    "events_url": "https://api.github.com/repos/reydelleon/practice-quiz/events",
    "fork": false,
    "forks": 0,
    "forks_count": 0,
    "forks_url": "https://api.github.com/repos/reydelleon/practice-quiz/forks",
    "full_name": "reydelleon/practice-quiz",
    "git_commits_url": "https://api.github.com/repos/reydelleon/practice-quiz/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/reydelleon/practice-quiz/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/reydelleon/practice-quiz/git/tags{/sha}",
    "git_url": "git://github.com/reydelleon/practice-quiz.git",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": false,
    "has_wiki": true,
    "homepage": null,
    "hooks_url": "https://api.github.com/repos/reydelleon/practice-quiz/hooks",
    "html_url": "https://github.com/reydelleon/practice-quiz",
    "id": 27699009,
    "issue_comment_url": "https://api.github.com/repos/reydelleon/practice-quiz/issues/comments/{number}",
    "issue_events_url": "https://api.github.com/repos/reydelleon/practice-quiz/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/reydelleon/practice-quiz/issues{/number}",
    "keys_url": "https://api.github.com/repos/reydelleon/practice-quiz/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/reydelleon/practice-quiz/labels{/name}",
    "language": "JavaScript",
    "languages_url": "https://api.github.com/repos/reydelleon/practice-quiz/languages",
    "merges_url": "https://api.github.com/repos/reydelleon/practice-quiz/merges",
    "milestones_url": "https://api.github.com/repos/reydelleon/practice-quiz/milestones{/number}",
    "mirror_url": null,
    "name": "practice-quiz",
    "notifications_url": "https://api.github.com/repos/reydelleon/practice-quiz/notifications{?since,all,participating}",
    "open_issues": 0,
    "open_issues_count": 0,
    "owner": {
      "avatar_url": "https://avatars.githubusercontent.com/u/2479575?v=3",
      "events_url": "https://api.github.com/users/reydelleon/events{/privacy}",
      "followers_url": "https://api.github.com/users/reydelleon/followers",
      "following_url": "https://api.github.com/users/reydelleon/following{/other_user}",
      "gists_url": "https://api.github.com/users/reydelleon/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/reydelleon",
      "id": 2479575,
      "login": "reydelleon",
      "organizations_url": "https://api.github.com/users/reydelleon/orgs",
      "received_events_url": "https://api.github.com/users/reydelleon/received_events",
      "repos_url": "https://api.github.com/users/reydelleon/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/reydelleon/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/reydelleon/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/reydelleon"
    },
    "permissions": {
      "admin": true,
      "pull": true,
      "push": true
    },
    "private": false,
    "pulls_url": "https://api.github.com/repos/reydelleon/practice-quiz/pulls{/number}",
    "pushed_at": "2014-12-08T22:54:35Z",
    "releases_url": "https://api.github.com/repos/reydelleon/practice-quiz/releases{/id}",
    "size": 164,
    "ssh_url": "git@github.com:reydelleon/practice-quiz.git",
    "stargazers_count": 0,
    "stargazers_url": "https://api.github.com/repos/reydelleon/practice-quiz/stargazers",
    "statuses_url": "https://api.github.com/repos/reydelleon/practice-quiz/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/reydelleon/practice-quiz/subscribers",
    "subscription_url": "https://api.github.com/repos/reydelleon/practice-quiz/subscription",
    "svn_url": "https://github.com/reydelleon/practice-quiz",
    "tags_url": "https://api.github.com/repos/reydelleon/practice-quiz/tags",
    "teams_url": "https://api.github.com/repos/reydelleon/practice-quiz/teams",
    "trees_url": "https://api.github.com/repos/reydelleon/practice-quiz/git/trees{/sha}",
    "updated_at": "2014-12-08T22:54:35Z",
    "url": "https://api.github.com/repos/reydelleon/practice-quiz",
    "watchers": 0,
    "watchers_count": 0
  },
  {
    "archive_url": "https://api.github.com/repos/reydelleon/OpenIt/{archive_format}{/ref}",
    "assignees_url": "https://api.github.com/repos/reydelleon/OpenIt/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/reydelleon/OpenIt/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/reydelleon/OpenIt/branches{/branch}",
    "clone_url": "https://github.com/reydelleon/OpenIt.git",
    "collaborators_url": "https://api.github.com/repos/reydelleon/OpenIt/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/reydelleon/OpenIt/comments{/number}",
    "commits_url": "https://api.github.com/repos/reydelleon/OpenIt/commits{/sha}",
    "compare_url": "https://api.github.com/repos/reydelleon/OpenIt/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/reydelleon/OpenIt/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/reydelleon/OpenIt/contributors",
    "created_at": "2014-12-01T06:30:09Z",
    "default_branch": "master",
    "description": "",
    "downloads_url": "https://api.github.com/repos/reydelleon/OpenIt/downloads",
    "events_url": "https://api.github.com/repos/reydelleon/OpenIt/events",
    "fork": false,
    "forks": 0,
    "forks_count": 0,
    "forks_url": "https://api.github.com/repos/reydelleon/OpenIt/forks",
    "full_name": "reydelleon/OpenIt",
    "git_commits_url": "https://api.github.com/repos/reydelleon/OpenIt/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/reydelleon/OpenIt/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/reydelleon/OpenIt/git/tags{/sha}",
    "git_url": "git://github.com/reydelleon/OpenIt.git",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": false,
    "has_wiki": true,
    "homepage": null,
    "hooks_url": "https://api.github.com/repos/reydelleon/OpenIt/hooks",
    "html_url": "https://github.com/reydelleon/OpenIt",
    "id": 27366003,
    "issue_comment_url": "https://api.github.com/repos/reydelleon/OpenIt/issues/comments/{number}",
    "issue_events_url": "https://api.github.com/repos/reydelleon/OpenIt/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/reydelleon/OpenIt/issues{/number}",
    "keys_url": "https://api.github.com/repos/reydelleon/OpenIt/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/reydelleon/OpenIt/labels{/name}",
    "language": "CSS",
    "languages_url": "https://api.github.com/repos/reydelleon/OpenIt/languages",
    "merges_url": "https://api.github.com/repos/reydelleon/OpenIt/merges",
    "milestones_url": "https://api.github.com/repos/reydelleon/OpenIt/milestones{/number}",
    "mirror_url": null,
    "name": "OpenIt",
    "notifications_url": "https://api.github.com/repos/reydelleon/OpenIt/notifications{?since,all,participating}",
    "open_issues": 0,
    "open_issues_count": 0,
    "owner": {
      "avatar_url": "https://avatars.githubusercontent.com/u/2479575?v=3",
      "events_url": "https://api.github.com/users/reydelleon/events{/privacy}",
      "followers_url": "https://api.github.com/users/reydelleon/followers",
      "following_url": "https://api.github.com/users/reydelleon/following{/other_user}",
      "gists_url": "https://api.github.com/users/reydelleon/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/reydelleon",
      "id": 2479575,
      "login": "reydelleon",
      "organizations_url": "https://api.github.com/users/reydelleon/orgs",
      "received_events_url": "https://api.github.com/users/reydelleon/received_events",
      "repos_url": "https://api.github.com/users/reydelleon/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/reydelleon/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/reydelleon/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/reydelleon"
    },
    "permissions": {
      "admin": true,
      "pull": true,
      "push": true
    },
    "private": false,
    "pulls_url": "https://api.github.com/repos/reydelleon/OpenIt/pulls{/number}",
    "pushed_at": "2014-12-01T07:09:30Z",
    "releases_url": "https://api.github.com/repos/reydelleon/OpenIt/releases{/id}",
    "size": 1408,
    "ssh_url": "git@github.com:reydelleon/OpenIt.git",
    "stargazers_count": 0,
    "stargazers_url": "https://api.github.com/repos/reydelleon/OpenIt/stargazers",
    "statuses_url": "https://api.github.com/repos/reydelleon/OpenIt/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/reydelleon/OpenIt/subscribers",
    "subscription_url": "https://api.github.com/repos/reydelleon/OpenIt/subscription",
    "svn_url": "https://github.com/reydelleon/OpenIt",
    "tags_url": "https://api.github.com/repos/reydelleon/OpenIt/tags",
    "teams_url": "https://api.github.com/repos/reydelleon/OpenIt/teams",
    "trees_url": "https://api.github.com/repos/reydelleon/OpenIt/git/trees{/sha}",
    "updated_at": "2014-12-01T07:09:31Z",
    "url": "https://api.github.com/repos/reydelleon/OpenIt",
    "watchers": 0,
    "watchers_count": 0
  },
  {
    "archive_url": "https://api.github.com/repos/reydelleon/RSVPlus/{archive_format}{/ref}",
    "assignees_url": "https://api.github.com/repos/reydelleon/RSVPlus/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/reydelleon/RSVPlus/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/reydelleon/RSVPlus/branches{/branch}",
    "clone_url": "https://github.com/reydelleon/RSVPlus.git",
    "collaborators_url": "https://api.github.com/repos/reydelleon/RSVPlus/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/reydelleon/RSVPlus/comments{/number}",
    "commits_url": "https://api.github.com/repos/reydelleon/RSVPlus/commits{/sha}",
    "compare_url": "https://api.github.com/repos/reydelleon/RSVPlus/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/reydelleon/RSVPlus/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/reydelleon/RSVPlus/contributors",
    "created_at": "2014-04-08T19:58:05Z",
    "default_branch": "master",
    "description": "Plugin to add RSVP capabilities to Wordpress",
    "downloads_url": "https://api.github.com/repos/reydelleon/RSVPlus/downloads",
    "events_url": "https://api.github.com/repos/reydelleon/RSVPlus/events",
    "fork": false,
    "forks": 0,
    "forks_count": 0,
    "forks_url": "https://api.github.com/repos/reydelleon/RSVPlus/forks",
    "full_name": "reydelleon/RSVPlus",
    "git_commits_url": "https://api.github.com/repos/reydelleon/RSVPlus/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/reydelleon/RSVPlus/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/reydelleon/RSVPlus/git/tags{/sha}",
    "git_url": "git://github.com/reydelleon/RSVPlus.git",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": false,
    "has_wiki": true,
    "homepage": null,
    "hooks_url": "https://api.github.com/repos/reydelleon/RSVPlus/hooks",
    "html_url": "https://github.com/reydelleon/RSVPlus",
    "id": 18572937,
    "issue_comment_url": "https://api.github.com/repos/reydelleon/RSVPlus/issues/comments/{number}",
    "issue_events_url": "https://api.github.com/repos/reydelleon/RSVPlus/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/reydelleon/RSVPlus/issues{/number}",
    "keys_url": "https://api.github.com/repos/reydelleon/RSVPlus/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/reydelleon/RSVPlus/labels{/name}",
    "language": "PHP",
    "languages_url": "https://api.github.com/repos/reydelleon/RSVPlus/languages",
    "merges_url": "https://api.github.com/repos/reydelleon/RSVPlus/merges",
    "milestones_url": "https://api.github.com/repos/reydelleon/RSVPlus/milestones{/number}",
    "mirror_url": null,
    "name": "RSVPlus",
    "notifications_url": "https://api.github.com/repos/reydelleon/RSVPlus/notifications{?since,all,participating}",
    "open_issues": 10,
    "open_issues_count": 10,
    "owner": {
      "avatar_url": "https://avatars.githubusercontent.com/u/2479575?v=3",
      "events_url": "https://api.github.com/users/reydelleon/events{/privacy}",
      "followers_url": "https://api.github.com/users/reydelleon/followers",
      "following_url": "https://api.github.com/users/reydelleon/following{/other_user}",
      "gists_url": "https://api.github.com/users/reydelleon/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/reydelleon",
      "id": 2479575,
      "login": "reydelleon",
      "organizations_url": "https://api.github.com/users/reydelleon/orgs",
      "received_events_url": "https://api.github.com/users/reydelleon/received_events",
      "repos_url": "https://api.github.com/users/reydelleon/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/reydelleon/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/reydelleon/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/reydelleon"
    },
    "permissions": {
      "admin": true,
      "pull": true,
      "push": true
    },
    "private": false,
    "pulls_url": "https://api.github.com/repos/reydelleon/RSVPlus/pulls{/number}",
    "pushed_at": "2014-04-26T01:32:52Z",
    "releases_url": "https://api.github.com/repos/reydelleon/RSVPlus/releases{/id}",
    "size": 932,
    "ssh_url": "git@github.com:reydelleon/RSVPlus.git",
    "stargazers_count": 0,
    "stargazers_url": "https://api.github.com/repos/reydelleon/RSVPlus/stargazers",
    "statuses_url": "https://api.github.com/repos/reydelleon/RSVPlus/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/reydelleon/RSVPlus/subscribers",
    "subscription_url": "https://api.github.com/repos/reydelleon/RSVPlus/subscription",
    "svn_url": "https://github.com/reydelleon/RSVPlus",
    "tags_url": "https://api.github.com/repos/reydelleon/RSVPlus/tags",
    "teams_url": "https://api.github.com/repos/reydelleon/RSVPlus/teams",
    "trees_url": "https://api.github.com/repos/reydelleon/RSVPlus/git/trees{/sha}",
    "updated_at": "2014-04-26T01:32:53Z",
    "url": "https://api.github.com/repos/reydelleon/RSVPlus",
    "watchers": 0,
    "watchers_count": 0
  }
];

(function () {
  var popupModule = angular.module('popup', []);

  popupModule.controller('PopupController', function () {
    this.repos = repos;
  });
}());