let matches = [
    { id: "1", winner: "team1" },
    { id: "2", winner: "team2" }
  ];
  let singleEntry = [
    { id: "1", winner: "team1" }
  ];
  let twosameEntry = [
    { id: "1", winner: "team1" },
    { id: "2", winner: "team1" }
  ];
  let emptyObject = [{}];
  
  const second_query = require("./second_query");
  
  describe("Second query results", () => {
    it("2 different entries team1-1, team2-1", () => {
      let result = second_query(matches);
      let expectedOutput = {
        "team1": [1],
        "team2": [1]
      };
      expect(result).toEqual(expectedOutput);
    });
    it("No entries", () => {
      let noEntry = second_query(emptyObject);
      let exOutput = "Empty entries provided. Please provide min 1 entry";
      expect(noEntry).toEqual(exOutput);
    });
    it("Single Entry / Match, team1-1", () => {
      let oneEntry = second_query(singleEntry);
      let exoneOutput = {
        team1: [1]
      };
      expect(oneEntry).toEqual(exoneOutput);
    });
  
    it("Two same entries, team1-2", () => {
      let doubleEntry = second_query(twosameEntry);
      let extwoOutput = {
        team1: [2]
      };
      expect(doubleEntry).toEqual(extwoOutput);
    });
  });
  