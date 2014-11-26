'use strict';

var should = require('chai').should(),
    nowt = require('../index.js');

describe('#toNowt', function() {
  it('converts 0 to nowt', function() {
    nowt.toNowt(0).should.equal('nowt');
  });
});
