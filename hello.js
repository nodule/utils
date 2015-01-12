module.exports = {
  name: "hello",
  ns: "world",
  description: "Hello World!",
  phrases: {
    active: "Hello World from phrases.active!"
  },
  ports: {
    input: {},
    output: {
      hello: {
        type: "string",
        title: "Hello World",
        description: "Provides Hello to the world",
        readonly: true
      }
    }
  },
  fn: function hello(input, output, state, done, cb, on) {
    var r = function() {
      output = {
        hello: 'Hello World!'
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}