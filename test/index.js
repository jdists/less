
global.processor = require('../')
      

describe("src/index.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("processor():base", function (done) {
    examplejs_printLines = [];
  let attrs = {}
  let scope = {
    getFilename: function () {
      return 'src/index.ts'
    }
  }
  processor(`
  @base: #f938ab;
  div {
    color: @base;
  }
  `, attrs, scope).then(function (css) {
    examplejs_print(JSON.stringify(css))
    assert.equal(examplejs_printLines.join("\n"), "\"div {\\n  color: #f938ab;\\n}\\n\""); examplejs_printLines = [];
    done();
  }).catch(function (err) {
    console.error(err)
  })
  });
          
  it("processor():content is null", function () {
    examplejs_printLines = [];
  let attrs = {}
  let scope = {}
  examplejs_print(processor(null, attrs, scope))
  assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];
  });
          
});
         