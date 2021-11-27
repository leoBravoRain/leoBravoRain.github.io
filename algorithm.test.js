// testing using jest
const maxScore = require("./algorithmDesign");

// max score
test("A equal to 26", () => {
  expect(maxScore("A")).toBe(26);
});

test("AB equal to 51", () => {
  expect(maxScore("AB")).toBe(51);
});

test("YZ equal to 51", () => {
  expect(maxScore("YZ")).toBe(51);
});

test("EEOOO equal to 128", () => {
  expect(maxScore("EEOOO")).toBe(128);
});

test("EOEOO equal to 128", () => {
  expect(maxScore("EOEOO")).toBe(128);
});

test("AGENDAPRO equal to 206", () => {
  expect(maxScore("AGENDAPRO")).toBe(206);
});

test("FERROCARRIL equal to 258", () => {
  expect(maxScore("FERROCARRIL")).toBe(258);
});

