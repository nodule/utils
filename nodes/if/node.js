try {
  if (iffi(input['in'], {
    value: $.value
  })) {
    output = {
      yes: $.value
    };
  } else {
    output = {
      no: $.value
    };
  }
} catch (e) {
  output = {
    error: e
  };
}
