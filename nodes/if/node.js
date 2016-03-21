try {
  if (iffi(input['in'], {
    value: $.value
  })) {
    output = {yes: $.create($.value)};
  } else {
    output = {no: $.create($.value)};
  }
} catch (e) {
  output = {error: $.create(e)};
}
