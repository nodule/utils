module.exports = {
  name: "glob",
  ns: "fs",
  title: "Glob",
  description: "Match files using the patterns the shell uses, like stars and stuff.",
  phrases: {
    active: "Globbing with pattern: {{input.pattern}}"
  },
  ports: {
    input: {
      match: {
        type: "string",
        title: "Pattern",
        description: "Pattern to be matched",
        required: true
      }
    },
    output: {
      error: {
        type: "event",
        title: "Error",
        description: "Emitted when an unexpected error is encountered, or whenever any fs error occurs if `options.strict` is set."
      },
      matches: {
        type: "array",
        title: "Matches",
        description: "Filenames found matching the pattern"
      },
      end: {
        type: "event",
        title: "End",
        description: "When the matching is finished, this is emitted with all the matches found. If the `nonull` option is set, and no match was found, then the `matches` list contains the original pattern. The matches are sorted, unless the `nosort` flag is set."
      },
      match: {
        type: "event",
        title: "Match",
        description: "Every time a match is found, this is emitted with the matched."
      },
      xmatch: {
        type: "event",
        title: "Xmatch",
        description: "Used for transmitting the groupID."
      },
      abort: {
        type: "event",
        title: "Abort",
        description: "When `abort()` is called, this event is raised."
      }
    }
  },
  dependencies: {
    npm: {
      glob: require('glob'),
      "chix-group": require('chix-group')
    }
  },
  fn: function glob(input, $, output, state, done, cb, on, glob, chix_group) {
    var r = function() {
      var g = chix_group.send.create()

      setTimeout(function() {
        var mg = new glob.Glob($.match, {}, function(err, matches) {
          output({
            matches: $.create(matches)
          });
        });

        mg.on('match', function(match) {
          output({
            match: g.write($.create(match))
          });
        });

        mg.on('end', function() {
          output({
            xmatch: g.close()
          })
          done();
        });

        mg.on('error', function(err) {
          output({
            error: $.create(err)
          });
        });

        mg.on('abort', function() {
          output({
            abort: $.create(null)
          });
        });
      }, 0)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}