var Registration = require("../lib/registration");
var should = require('should');
var assert = require('assert');

// BDD tests
describe("Registration", function () {
  
  describe("a valid application", function () {
    var regResult = {};
    before(function () {
      regResult = Registration.applyForMembership({
        email: "igor@gmail.com"
      });
    });
    it("is succesful", function () {
      regResult.success.should.equal(true);
    });
    it("creates a user", function () {
      assert(regResult.user);
    });
    it("creates a log entry");
    it("sets the user status to approved");
    it("offers a welcome message");
  });
  
  describe("an empty or null email", function () {
    it("is not succesful");
    it("tells user that email is required");
  });

  describe("empty or null password", function () {
    it("is not succesful");
    it("tells user that password is required");
  });
  
  describe("password and confirm mismatch", function () {
    it("is not succesful");
    it("tells user passwords don't match");
  });

  describe("email already exists", function () {
    it("is not succesful");
    it("tells user that email already exists");
  });

});
