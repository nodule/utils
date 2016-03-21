try {
  if (iffi(input['in'], {
    'value': $.value,
    'compare': $.compare
  })) {
    output = {yes: $.create($.value)};
  } else {
    output = {no: $.create($.value)};
  }
} catch (e) {
  output = {error: $.create(e)};
}
