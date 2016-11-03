// WARNING: This is a generated file.
//          If you edit it you will be sad.
//          Edit src/app.js instead.

var go = {};
go;

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
            question: 'Welcome to CTA train tracker.Pick a route:',

            choices: [
                new Choice('states:red', 'Red Line'),
                new Choice('states:blue', 'Blue Line'),
                new Choice('states:brown', 'Brown Line'),
                new Choice('states:green', 'Green Line'),
                new Choice('states:orange', 'Orange Line'),
                new Choice('states:purple', 'Purple Line'),
                new Choice('states:pink', 'Pink Line'),
                new Choice('states:yellow', 'Yellow Line'),
                new Choice('states:exit', 'Exit')]
        });
    });

    self.states.add('states:red', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=red&outputType=JSON', {
                params: {rt: 'red', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'}
            })
            .then(function(resp) {
                return self.states.create('states:exit', { echo: resp.data});
            });
    });

    self.states.add('states:blue', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=blue&outputType=JSON', {
                params: {rt: 'blue', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'}
            })
            .then(function(resp) {
                return self.states.create('states:exit', { echo: resp.data});
            });
    });

    self.states.add('states:brown', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=brn&outputType=JSON', {
                params: {rt: 'brn', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'}
            })
            .then(function(resp) {
                return self.states.create('states:exit', { echo: resp.data});
            });
    });

    self.states.add('states:green', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=g&outputType=JSON', {
                params: {rt: 'g', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'}
            })
            .then(function(resp) {
                return self.states.create('states:exit', { echo: resp.data});
            });
    });

    self.states.add('states:orange', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=org&outputType=JSON', {
                params: {rt: 'org', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'}
            })
            .then(function(resp) {
                return self.states.create('states:exit', { echo: resp.data});
            });
    });

    self.states.add('states:purple', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=p&outputType=JSON', {
                params: {rt: 'p', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'}
            })
            .then(function(resp) {
                return self.states.create('states:exit', { echo: resp.data});
            });
    });

    self.states.add('states:pink', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=pink&outputType=JSON', {
                params: {rt: 'pink', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'}
            })
            .then(function(resp) {
                return self.states.create('states:exit', { echo: resp.data});
            });
    });

    self.states.add('states:yellow', function(name) {
        return self
            .http.get(
                'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=33305d8dcece4aa58c651c740f88d1e2&rt=y&outputType=JSON', {
                params: {rt: 'y', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'}
            })
            .then(function(resp) {
                return self.states.create('states:exit', { echo: resp.data});
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

go.init = function() {
    var vumigo = require('vumigo_v02');
    var InteractionMachine = vumigo.InteractionMachine;
    var HttpApp = go.app.HttpApp;


    return {
        im: new InteractionMachine(api, new HttpApp())
    };
}();
