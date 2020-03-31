const cal = require("../Actions/demo");

// grouping of test using describe function
describe("Group tests", () => {
  // test("positive case", () => {
  //     const result = cal(100);

  //     expect(result).toBe(1);
  //   });

  //   test("negative case", () => {
  //     const result = cal(-100);

  //     expect(result).toBe(-1);
  //   });

  it("positive case", () => {
    const result = cal.numCal(100);

    expect(result).toBe(1);
  });

  it("negative case", () => {
    const result = cal.numCal(-100);

    expect(result).toBe(-1);
  });
});

describe("string methods", () => {
  it("return name starts with welcome", () => {
    const result = cal.stringCal("Abhishek");
    //expect(result).toBe("welcome Abhishek");
    expect(result).toMatch(/Abhishek/);
  });
});

describe("test currency", () => {
  it("list of currency", () => {
    const result = cal.getCurrency();
    expect(result).toContain("USD");
    expect(result).toContain("INR");
    // expect(result).toContain("INR1");
  });
});
