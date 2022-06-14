const sayHi = (
  strings: TemplateStringsArray,
  ...variables: string[]
): string => {
  variables.reverse();
  return strings
    .map((string, index) => string + (variables[index] ?? ""))
    .join("");
};

console.log(sayHi`Hello ${"my friend"} to the ${"world"}`);
