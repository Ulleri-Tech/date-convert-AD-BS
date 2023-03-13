import { ADTOBS, BSTOAD } from "../src/index";

describe("ADTOBS", () => {
  it("should return correct BS date for valid AD date", () => {
    expect(ADTOBS(1993, 5, 29)).toBe("2050-03-15");
  });

  // it("should return error message for invalid AD date", () => {
  //   expect(ADTOBS(2022, 13, 1)).toBe("Invalid Date");
  //   expect(ADTOBS(2022, 12, 32)).toBe("Invalid Date");
  //   expect(ADTOBS(2022, 2, 29)).toBe("Invalid Date out of range");
  //   expect(ADTOBS(0, 0, 0)).toBe("Invalid Date");
  // });
});

describe("BSTOAD", () => {
  it("should return correct AD date for valid BS date", () => {
    expect(BSTOAD(2050, 2, 15)).toBe("1993-06-29");
  });

  // it("should return error message for invalid AD date", () => {
  //   expect(ADTOBS(2022, 13, 1)).toBe("Invalid Date");
  //   expect(ADTOBS(2022, 12, 32)).toBe("Invalid Date");
  //   expect(ADTOBS(2022, 2, 29)).toBe("Invalid Date out of range");
  //   expect(ADTOBS(0, 0, 0)).toBe("Invalid Date");
  // });
});
