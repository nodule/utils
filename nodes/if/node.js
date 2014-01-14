try {
  if(iffi(input['in'], { value: input.value })) {
    output = { yes: input.value };
  } else {
    output = { no: input.value };
  }
} catch (e) {
  output = { error: e };
}
