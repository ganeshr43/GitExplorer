GitHub.Router.map(function () {
    this.resource("user", { path: "/users/:login" }, function () {
        this.resource("repositories");
        this.resource("repository", { path: "repositories/:reponame" });
    });
});

GitHub.IndexRoute = Em.Route.extend({
    //model: function () {
    //    return devs;
    //}
});

GitHub.UserRoute = Em.Route.extend({
    model: function (params) {
        return Em.$.getJSON("https://api.github.com/users/" + params.login);
    }
});


GitHub.UserIndexRoute = Em.Route.extend({
    model: function () {
        return this.modelFor('user');
    }
});

GitHub.RepositoriesRoute = Em.Route.extend({
    model: function () {
        var userModel = this.modelFor('user');
        return Em.$.getJSON(userModel.repos_url);
    }
});

GitHub.RepositoryRoute = Em.Route.extend({
    model: function (param) {
        var userModel = this.modelFor('user');
        return Em.$.getJSON("https://api.github.com/repos/" + userModel.login + "/" + param.reponame);
    }
});