// Can use either assert or should (or both)
var should = require('should');
var assert = require('assert');
var User = require('../models/user');
// Outer describe - feature or subject
// Inner describe - thing we're testing
// BDD - not only features, but also scenarios

describe("User", function () {
  describe("defaults", function () {
    var user = {};

    before(function () {
      user = new User({ 
        email: 'igor@gmail.com',
        createdAt: new Date()
      });
    });

    it("email is igor@gmail.com", function () {
      // user.email.should.equal('igor@gmail.com');
      assert.equal(user.email, 'igor@gmail.com');
    });
    it("has an authentication token");
    it("has a pendign status");
    it("has a created date", function () {
      // user.createdAt.should.be.defined;
      assert(user.createdAt);
    });
    it("has a signInCount of 0");
    it("has lastLogin");
    it("has currentLogin");
    it("has a sessionToken");
    it("has a reminderToken");
    it("has a reminder sent date");

  });
});
