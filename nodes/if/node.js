try {
  if(iffi(input['if'], 'value', input.value)) {
    output = { yes: true };
  } else {
    output = { no: true };
  }
} catch (e) {
  output = { error: e };
}
