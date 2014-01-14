try {
  if(iffi(input['if'], {
      'value1': input.value1,
      'value2': input.value2
    })) {
    output = { yes: true };
  } else {
    output = { no: true };
  }
} catch (e) {
  output = { error: e };
}
