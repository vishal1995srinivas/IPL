const fifth_query = require("./fifth_query");
let throws = [
    { bowler: "bowler1", total_runs: "0"},
    { bowler: "bowler1", total_runs: "0"},
    { bowler: "bowler1", total_runs: "0"},
    { bowler: "bowler1", total_runs: "0"},
    { bowler: "bowler1", total_runs: "0"},
    { bowler: "bowler1", total_runs: "0"}
  ];
  let nothrows = [{}];
  let nonmaidenthrows = [
    {bowler: "bowler1", total_runs: "1"},
    {bowler: "bowler1", total_runs: "3"},
    {bowler: "bowler1", total_runs: "2"},
    {bowler: "bowler1", total_runs: "4"},
    {bowler: "bowler1", total_runs: "0"},
    {bowler: "bowler1", total_runs: "1"},
    {bowler: "bowler2", total_runs: "1"},
    {bowler: "bowler2", total_runs: "3"},
  ];
   
describe("Fifth query results", () => {
    it("No throws", () => {
      let result = fifth_query(nothrows);
      let expectedOutput = "No bowler details / total Runs";
      expect(result).toEqual(expectedOutput);
    });

    it("non maiden throws", () => {
        let result = fifth_query(nonmaidenthrows);
        let expectedOutput = {};
        expect(result).toEqual(expectedOutput);
      });

      it("maiden throws", () => {
        let result = fifth_query(throws);
        let expectedOutput = { bowler1: [ 1 ] };
        expect(result).toEqual(expectedOutput);
      });
});