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
        createdAt: new Date(),
        signInCount: 0
      });
    });

    it("email is igor@gmail.com", function () {
      // user.email.should.equal('igor@gmail.com');
      assert.equal(user.email, 'igor@gmail.com');
    });
    it("has an authentication token", function () {
      assert(user.authenticationToken);
    });
    it("has a pendign status", function () {
      assert.equal(user.status, "pending");
    });
    it("has a created date", function () {
      // user.createdAt.should.be.defined;
      assert(user.createdAt);
    });
    it("has a signInCount of 0", function() {
      assert.equal(user.signInCount, 0);
    });
    it("has lastLogin", function () {
      assert(user.lastLoginAt);
    });
    it("has currentLogin", function () {
      assert(user.currentLoginAt);
    });
  });
});
