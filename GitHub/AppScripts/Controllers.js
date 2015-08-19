
GitHub.IndexController = Em.ArrayController.extend({
    devs: [],
    actions: {
        addUser: function () {
            var dev = {
                name: this.get('name'),
                login: this.get('login')
            };
            this.get('devs').pushObject(dev);
            this.set('name', "");
            this.set('login', "");
        }
    }
});

GitHub.RepositoriesController = Em.ArrayController.extend({
    needs: ["user"],
    user: Em.computed.alias("controllers.user")
});

GitHub.RepositoryController = Em.ObjectController.extend({
    needs: ["user"],
    user: Em.computed.alias("controllers.user")
});