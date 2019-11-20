let matches = [
  { id: "1", season: "2015" },
  { id: "2", season: "2017" }
];
let singleEntry = [
  { id: "1", season: "2015" }
];
let twoEntry = [
  { id: "1", season: "2015" },
  { id: "2", season: "2015" }
];
let emptyObject = [{}];
const first_query = require("./first_query");

describe("first query results", () => {
  it("2 different entries 2015-1, 2017-1", () => {
    let result = first_query(matches);
    let expectedOutput = {
      "2015": [1],
      "2017": [1]
    };
    expect(result).toEqual(expectedOutput);
  });
  it("No entries", () => {
    let noEntry = first_query(emptyObject);
    let exOutput = "Empty entries provided. Please provide min 1 entry";
    expect(noEntry).toEqual(exOutput);
  });
  it("Single Entry / Match, 2015-1", () => {
    let oneEntry = first_query(singleEntry);
    let exoneOutput = {
      "2015": [1]
    };
    expect(oneEntry).toEqual(exoneOutput);
  });

  it("Two same entries, 2015-2", () => {
    let doubleEntry = first_query(twoEntry);
    let extwoOutput = {
      "2015": [2]
    };
    expect(doubleEntry).toEqual(extwoOutput);
  });
});
