var should = require("should");
var greeter = require("../lib/greeter.js");

describe("Typescript is compiled ok", function () {
    it("When this passed", function () {
        var g = new greeter.Greeter();
        g.greet("Yoda").should.equal("Hello Yoda");
    });
});