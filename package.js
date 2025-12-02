// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
"use strict";

Package.describe({
    name: "useraccounts:iron-routing",
    summary:
        "UserAccounts package providing routes configuration capability via iron:router.",
    version: "1.16.1",
    git: "https://github.com/meteor-compat/useraccounts-iron-routing.git",
});

Package.onUse(function (api) {
    api.versionsFrom("METEOR@2.16");

    api.use(
        [
            "check",
            "vlasky:galvanized-iron-router@2.0.1",
            "useraccounts:core@1.16.2",
        ],
        ["client", "server"]
    );

    api.imply(
        ["useraccounts:core", "vlasky:galvanized-iron-router"],
        ["client", "server"]
    );

    api.addFiles(["lib/core.js", "lib/server.js"], ["server"]);

    api.addFiles(
        ["lib/core.js", "lib/client.js", "lib/templates_helpers/at_input.js"],
        ["client"]
    );
});
