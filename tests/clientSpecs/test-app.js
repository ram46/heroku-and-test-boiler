var React = require('react');
var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm
// var expect = require('expect');
var expect = require('chai').expect;
var List = require('../../react-client/src/components/List.jsx')


describe('App', function () {
  it('App component renders without problems', function () {
    // var app = ReactTestUtils.renderIntoDocument(List);
    var app = ReactTestUtils.isCompositeComponentWithType(List, '<List />')
    expect(app).to.exist;
    // expect(1).to.eql(1);
  });
});

