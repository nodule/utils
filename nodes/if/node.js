try {
  if(iffi(input['if'], { value: input.value })) {
    output = { yes: input.value };
  } else {
    output = { no: input.value };
  }
} catch (e) {
  output = { error: e };
}
