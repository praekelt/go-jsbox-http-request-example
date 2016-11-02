go.app = function() {
    var vumigo = require('vumigo_v02');
    var App = vumigo.App;
    var Choice = vumigo.states.Choice;
    var MenuState = vumigo.states.MenuState;
    var EndState = vumigo.states.EndState;
    var JsonApi = vumigo.http.api.JsonApi;

    var HttpApp = App.extend(function(self) {
    App.call(self, 'states:start');

    self.init = function() {
        // We use `JsonApi` here. This ensure requests are json encoded and
        // responses are json decoded.
        self.http = new JsonApi(self.im);
    };

    self.states.add('states:start', function(name) {
        return new MenuState(name, {
            question: $('Welcome to CTA train tracker.Pick a route: '),

            choices: [
                new states('red', 'Red Line'),
                new states('blue', 'Blue Line'),
                new states('brown', 'Brown Line'),
                new states('green', 'Green Line'),
                new states('orange', 'Orange Line'),
                new states('purple', 'Purple Line'),
                new states('pink', 'Pink Line'),
                new states('yellow', 'Yellow Line'),
                new states('exit', 'Exit')]
        });
    });

    self.states.add('states:red', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=Red&outputType=JSON', {
                data: {message: content}
            })
            .then(function(resp) {
                return 
                    self.states.create('states:exit', { echo: resp.data.json.message}):
            });
    });

    self.states.add('states:blue', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=Blue&outputType=JSON', {
                data: {message: content}
            })
            .then(function(resp) {
                return 
                    self.states.create('states:exit', { echo: resp.data.json.message}):
            });
    });

    self.states.add('states:brown', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=Brn&outputType=JSON', {
                data: {message: content}
            })
            .then(function(resp) {
                return 
                    self.states.create('states:exit', { echo: resp.data.json.message}):
            });
    });

    self.states.add('states:green', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=G&outputType=JSON', {
                data: {message: content}
            })
            .then(function(resp) {
                return 
                    self.states.create('states:exit', { echo: resp.data.json.message}):
            });
    });

    self.states.add('states:orange', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=Org&outputType=JSON', {
                data: {message: content}
            })
            .then(function(resp) {
                return 
                    self.states.create('states:exit', { echo: resp.data.json.message}):
            });
    });

    self.states.add('states:purple', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=P&outputType=JSON', {
                data: {message: content}
            })
            .then(function(resp) {
                return 
                    self.states.create('states:exit', { echo: resp.data.json.message}):
            });
    });

    self.states.add('states:pink', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=Pink&outputType=JSON', {
                data: {message: content}
            })
            .then(function(resp) {
                return 
                    self.states.create('states:exit', { echo: resp.data.json.message}):
            });
    });

    self.states.add('states:yellow', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=Y&outputType=JSON', {
                data: {message: content}
            })
            .then(function(resp) {
                return 
                    self.states.create('states:exit', { echo: resp.data.json.message}):
            });
    });

    self.states.add('states:exit', function(name) {
        return new EndState(name, {
            text: 'Thanks for using CTA tran tracker.',
            next: 'states:start'
        });
    });
});

    return {
        HttpApp: HttpApp
    };
}();
