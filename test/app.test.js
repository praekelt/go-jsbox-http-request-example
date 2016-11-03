var assert = require('assert');
var vumigo = require('vumigo_v02');
var fixtures = require('./fixtures');
var AppTester = vumigo.AppTester;
var AppTester = vumigo.AppTester;

describe("app", function() {
    describe("HttpApp", function() {
        var app;
        var tester;

        beforeEach(function() {
            app = new go.app.HttpApp();
            tester = new AppTester(app);

            tester
                .setup.config.app({
                    name: 'test_app'
                })
                .setup(function(api) {
                    // Add all of the fixtures.
                    fixtures().forEach(api.http.fixtures.add);
                });
        });

        describe("when the user starts a session", function() {
            it("should ask them to pick a route", function() {
                return tester
                    .start()
                    .check.interaction({
                        state: 'states:start',
                        reply: [
                            'Welcome to CTA train tracker.Pick a route:',
                            '1. Red Line',
                            '2. Blue Line',
                            '3. Brown Line',
                            '4. Green Line',
                            '5. Orange Line',
                            '6. Purple Line',
                            '7. Pink Line',
                            '8. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user is asked to pick a route e.g red line", function() {
            it("should select red line", function() {
                return tester
                    .setup.user.state('states:red')
                    .input('1')
                    .check(function(api) {
                        var req = api.http.requests[0];
                        assert.deepEqual(req.params, {rt: 'red', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'});
                    })
                    .run();
            });

            it("should tell them the result", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('1')
                    .check.interaction({
                        state: 'states:exit',
                        reply: [
                            "Thanks for using CTA tran tracker.",
                            "Search results: [object Object]" //TODO: Display real data
                        ].join(' ')
                    })
                    .check.reply.ends_session()
                    .run();
            });
        });

        describe("when the user is asked to pick a route e.g blue line", function() {
            it("should select blue line", function() {
                return tester
                    .setup.user.state('states:blue')
                    .input('2')
                    .check(function(api) {
                        var req = api.http.requests[0];
                        assert.deepEqual(req.params, {rt: 'blue', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'});
                    })
                    .run();
            });

            it("should tell them the result", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('2')
                    .check.interaction({
                        state: 'states:exit',
                        reply: [
                            "Thanks for using CTA tran tracker.",
                            "Search results: [object Object]" //TODO: Display real data
                        ].join(' ')
                    })
                    .check.reply.ends_session()
                    .run();
            });
        });

        describe("when the user is asked to pick a route e.g brown line", function() {
            it("should select brown line", function() {
                return tester
                    .setup.user.state('states:brown')
                    .input('3')
                    .check(function(api) {
                        var req = api.http.requests[0];
                        assert.deepEqual(req.params, {rt: 'brn', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'});
                    })
                    .run();
            });

            it("should tell them the result", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('3')
                    .check.interaction({
                        state: 'states:exit',
                        reply: [
                            "Thanks for using CTA tran tracker.",
                            "Search results: [object Object]" //TODO: Display real data
                        ].join(' ')
                    })
                    .check.reply.ends_session()
                    .run();
            });
        });

        describe("when the user is asked to pick a route e.g green line", function() {
            it("should select green line", function() {
                return tester
                    .setup.user.state('states:green')
                    .input('4')
                    .check(function(api) {
                        var req = api.http.requests[0];
                        assert.deepEqual(req.params, {rt: 'g', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'});
                    })
                    .run();
            });

            it("should tell them the result", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('4')
                    .check.interaction({
                        state: 'states:exit',
                        reply: [
                            "Thanks for using CTA tran tracker.",
                            "Search results: [object Object]" //TODO: Display real data
                        ].join(' ')
                    })
                    .check.reply.ends_session()
                    .run();
            });
        });

        describe("when the user is asked to pick a route e.g orange line", function() {
            it("should select orange line", function() {
                return tester
                    .setup.user.state('states:orange')
                    .input('5')
                    .check(function(api) {
                        var req = api.http.requests[0];
                        assert.deepEqual(req.params, {rt: 'org', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'});
                    })
                    .run();
            });

            it("should tell them the result", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('5')
                    .check.interaction({
                        state: 'states:exit',
                        reply: [
                           "Thanks for using CTA tran tracker.",
                           "Search results: [object Object]" //TODO: Display real data
                        ].join(' ')
                    })
                    .check.reply.ends_session()
                    .run();
            });
        });

        describe("when the user is asked to pick a route e.g purple line", function() {
            it("should select purple line", function() {
                return tester
                    .setup.user.state('states:purple')
                    .input('6')
                    .check(function(api) {
                        var req = api.http.requests[0];
                        assert.deepEqual(req.params, {rt: 'p', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'});
                    })
                    .run();
            });

            it("should tell them the result", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('6')
                    .check.interaction({
                        state: 'states:exit',
                        reply: [
                            "Thanks for using CTA tran tracker.",
                            "Search results: [object Object]" //TODO: Display real data
                        ].join(' ')
                    })
                    .check.reply.ends_session()
                    .run();
            });
        });

        describe("when the user is asked to pick a route e.g pink line", function() {
            it("should select pink line", function() {
                return tester
                    .setup.user.state('states:pink')
                    .input('7')
                    .check(function(api) {
                        var req = api.http.requests[0];
                        assert.deepEqual(req.params, {rt: 'pink', key: '33305d8dcece4aa58c651c740f88d1e2', outputType: 'JSON'});
                    })
                    .run();
            });

            it("should tell them the result", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('7')
                    .check.interaction({
                        state: 'states:exit',
                        reply: [
                            "Thanks for using CTA tran tracker.",
                            "Search results: [object Object]" //TODO: Display real data
                        ].join(' ')
                    })
                    .check.reply.ends_session()
                    .run();
            });
        });

        describe("when the user select exit", function() {
            it("should end the session and start the user at the start state next session", function() {

                return tester
                    .setup.user.state('states:exit')
                    .start()
                    .check.user.state('states:start')
                    .run();
            });
        });
    });
});
