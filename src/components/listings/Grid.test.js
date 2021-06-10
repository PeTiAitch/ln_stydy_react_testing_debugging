/* eslint-disable */
import data from "../../data/courses.json";

// Numbers
describe("Number tests", () => {
  const numItems = data.length;

  test("Number of items = 12", () => {
    expect(numItems).toBe(12);
  });

  test("Number of items is greater than 12", () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

// Strings
describe("String tests", () => {
  const dataTest = data[0].title;

  test("There is a JS in this title", () => {
    expect(dataTest).toMatch(/JS/);
  });

  test("This title contains React", () => {
    expect(dataTest).toContain("React");
  });
});

// Arrays
describe("Array tests", () => {
  const data2 = ["React Native", "MeteorJS"];

  test("The list of course mentions React native and MeteorJS", () => {
    expect(["React Native", "MeteorJS", "React"]).toEqual(
      expect.arrayContaining(data2)
    );
  });
});

// Objects
describe("Object tests", () => {
  test("The first course to have a property of Title", () => {
    expect(data[0]).toHaveProperty("title");
  });

  test("The first course to have a property of views with the correct number", () => {
    expect(data[0]).toHaveProperty("views", "31,266");
  });
});
