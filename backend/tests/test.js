var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');
var expect = chai.expect;

var token;
var batID;

require(__dirname + '/../../server.js');
chai.use(chaiHttp);

describe('server test with a single rest resource', function() {
  //before all test, create dummy data in test server
  //before(function(done) {
  //    var batman = new User({"username": "batman", "password": "becauseimbatman"});
  //    //game.key = game.name.replace(/\s+/g, '').toLowerCase();
  //    batman.save();
  //    done();
  //});

  ////clear test database after all tests
  //after(function(done) {
  //  mongoose.connection.db.dropDatabase(function() {
  //    done();
  //  });
  //});
  //User tests
  it('will post a new user to users collection', function(done) {
    chai.request('http://localhost:3000')
        .post('/')
        .send({"username": "batman", "password": "becauseimbatman"})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res).to.have.status(200)
          done();
        });
  });
  it('will get batman from users collection', function(done) {
    chai.request('http://localhost:3000')
        .get('/users')
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(typeof res.body).to.eql('object');
          done();
        });
  });
  it('will authenticate batman', function(done) {
    chai.request('http://localhost:3000')
        .post('/auth')
        .send({"username": "batman", "password": "becauseimbatman"})
        .end(function(err, res) {
          token = res.body.token;
          expect(err).to.eql(null);
          expect(res).to.have.status(200)
          done();
        });
  });
  it('will post batman\'s event', function(done) {
    chai.request('http://localhost:3000')
        .post('/users/events')
        .send({"name": "Wayne Manor Partay", "date": "7/29/2015",
               "description": "Party like its 1999", "cost": "1000000",
               "token": token})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          done();
        });
  });
  it('will get batman\'s event', function(done) {
    chai.request('http://localhost:3000')
        .get('/users/events')
        .send({"token": token})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          done();
        });
  });
});

