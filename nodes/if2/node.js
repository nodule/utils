try {
  if (iffi(input['in'], {
    'value': $.value,
    'compare': $.compare
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
