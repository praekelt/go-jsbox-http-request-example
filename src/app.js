go.app = function() {
    var vumigo = require('vumigo_v02');
    var App = vumigo.App;
    var MenuState = vumigo.states.MenuState;
    var Choice = vumigo.states.Choice;
    var ChoiceState = vumigo.states.ChoiceState;
    var EndState = vumigo.states.EndState;
    var FreeText = vumigo.states.FreeText;
    var JsonApi = vumigo.http.api.JsonApi;

    var HttpApp = App.extend(function(self) {
    App.call(self, 'states:start');

    self.init = function() {
        // We use `JsonApi` here. This ensure requests are json encoded and
        // responses are json decoded.
        self.http = new JsonApi(self.im);
    };

    self.states.add('states:start', function(name) {
        return new ChoiceState(name, {
            question: $('Pick a route'),

            choices: [
                new Choice('red', 'Red Line'),
                new Choice('blue', 'Blue Line'),
                new Choice('brown', 'Brown Line'),
                new Choice('green', 'Green Line'),
                new Choice('orange', 'Orange Line'),
                new Choice('purple', 'Purple Line'),
                new Choice('pink', 'Pink Line'),
                new Choice('yellow', 'Yellow Line'),
                new Choice('exit', 'Exit')],

            next: function(choice) {
                return {
                    red: 'states:red',
                    blue: 'states:blue',
                    brown: 'states:brown',
                    green: 'states:green',
                    orange:'states:orange',
                    purple: 'states:purple',
                    pink: 'states:pink',
                    yellow:'states:yellow',
                    exit:'states:exit'

                }[choice.value];
            }
        });
    });

    self.states.add('states:red', function(name) {
        return new ChoiceState(name, {
            question: $('Please select your stop'),

            choices: [
                new Choice('howard', $("Howard")),
                new Choice('danryan', $("95th/Dan Ryan")),
                new Choice('back', $("Back"))
            ],

            next: function(content) {
                return self
                    .http.get(
                        'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=4ba28f6b2b8843bf9cef1c0fcc05f874&rt=red', {
                        data: {message: content}
                    })
                    .then(function(resp) {
                        return {
                            name: 'states:done',
                            creator_opts: {
                                method: 'get',
                                echo: resp.data.json.message
                            }
                        };
                    });
            }
        });
    });

    self.states.add('states:blue', function(name) {
        return new ChoiceState(name, {
            question: $('Please select your stop'),

            choices: [
                new Choice('ohare', $("O'Hare")),
                new Choice('forestpark', $("Forest Park")),
                new Choice('back', $("Back"))
            ],

            next: function(content) {
                return self
                    .http.get(
                        'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=4ba28f6b2b8843bf9cef1c0fcc05f874&rt=blue', {
                        data: {message: content}
                    })
                    .then(function(resp) {
                        return {
                            name: 'states:done',
                            creator_opts: {
                                method: 'get',
                                echo: resp.data.json.message
                            }
                        };
                    });
            }
        });
    });

    self.states.add('states:brown', function(name) {
        return new ChoiceState(name, {
            question: $('Please select your stop'),

            choices: [
                new Choice('kimball', $("Kimball")),
                new Choice('loop', $("Loop")),
                new Choice('back', $("Back"))
            ],

            next: function(content) {
                return self
                    .http.get(
                        'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=4ba28f6b2b8843bf9cef1c0fcc05f874&rt=brn', {
                        data: {message: content}
                    })
                    .then(function(resp) {
                        return {
                            name: 'states:done',
                            creator_opts: {
                                method: 'get',
                                echo: resp.data.json.message
                            }
                        };
                    });
            }
        });
    });

    self.states.add('states:green', function(name) {
        return new ChoiceState(name, {
            question: $('Please select your stop'),

            choices: [
                new Choice('ashland', $("Ashaland")),
                new Choice('harlem', $("Harlem")),
                new Choice('cottage', $("Cottage Grove")),
                new Choice('back', $("Back"))
            ],

            next: function(content) {
                return self
                    .http.get(
                        'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=4ba28f6b2b8843bf9cef1c0fcc05f874&rt=g', {
                        data: {message: content}
                    })
                    .then(function(resp) {
                        return {
                            name: 'states:done',
                            creator_opts: {
                                method: 'get',
                                echo: resp.data.json.message
                            }
                        };
                    });
            }
        });
    });

    self.states.add('states:orange', function(name) {
        return new ChoiceState(name, {
            question: $('Please select your stop'),

            choices: [
                new Choice('midway', $("Midway")),
                new Choice('loop', $("Loop")),
                new Choice('back', $("Back"))
            ],

            next: function(content) {
                return self
                    .http.get(
                        'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=4ba28f6b2b8843bf9cef1c0fcc05f874&rt=org', {
                        data: {message: content}
                    })
                    .then(function(resp) {
                        return {
                            name: 'states:done',
                            creator_opts: {
                                method: 'get',
                                echo: resp.data.json.message
                            }
                        };
                    });
            }
        });
    });

    self.states.add('states:purple', function(name) {
        return new ChoiceState(name, {
            question: $('Please select your stop'),

            choices: [
                new Choice('linden', $("Linden")),
                new Choice('loop', $("Loop")),
                new Choice('back', $("Back"))
            ],

            next: function(content) {
                return self
                    .http.get(
                        'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=4ba28f6b2b8843bf9cef1c0fcc05f874&rt=p', {
                        data: {message: content}
                    })
                    .then(function(resp) {
                        return {
                            name: 'states:done',
                            creator_opts: {
                                method: 'get',
                                echo: resp.data.json.message
                            }
                        };
                    });
            }
        });
    });

    self.states.add('states:pink', function(name) {
        return new ChoiceState(name, {
            question: $('Please select your stop'),

            choices: [
                new Choice('loop', $("Loop")),
                new Choice('cermak', $("54th Cermak")),
                new Choice('back', $("Back"))
            ],

            next: function(content) {
                return self
                    .http.get(
                        'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=4ba28f6b2b8843bf9cef1c0fcc05f874&rt=pink', {
                        data: {message: content}
                    })
                    .then(function(resp) {
                        return {
                            name: 'states:done',
                            creator_opts: {
                                method: 'get',
                                echo: resp.data.json.message
                            }
                        };
                    });
            }
        });
    });

    self.states.add('states:yellow', function(name) {
        return new ChoiceState(name, {
            question: $('Please select your stop'),

            choices: [
                new Choice('howard', $("Howard")),
                new Choice('skokie', $("Skokie")),
                new Choice('back', $("Back"))
            ],

            next: function(content) {
                return self
                    .http.get(
                        'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=4ba28f6b2b8843bf9cef1c0fcc05f874&rt=y', {
                        data: {message: content}
                    })
                    .then(function(resp) {
                        return {
                            name: 'states:done',
                            creator_opts: {
                                method: 'get',
                                echo: resp.data.json.message
                            }
                        };
                    });
            }
        });
    });

    self.states.add('states:exit', function(name) {
        return new EndState(name, {
            text: 'Thanks for using CTA tran tracker.',
            next: 'states:start'
        });
    });

    // self.add('state_language', function(name) {
    //     return new ChoiceState(name, {
    //         question: $("Welcome to CTA train tracker. Please select your language:"),
    //         choices: [
    //             new Choice('en', $("English")),
    //             new Choice('es', $("Spanish")),
    //             new Choice('de', $("Germany")),
    //             new Choice('fr', $("French")),
    //             new Choice('zu', $("Zulu")),
    //         ],
    //         next: function(choice) {
    //             return go.utils
    //                 .save_language(self.im, self.contact, choice.value)
    //                 .then(function() {
    //                     return 'something';
    //                 });
    //         }
    //     });
    // });
});

    return {
        HttpApp: HttpApp
    };
}();
