const fourth_query = require("./fourth_query");
let nomatch = [{}];
let onematch = [{ id: "1", season: "2015" }];
let manymatch = [
  { id: "1", season: "2015" },
  { id: "2", season: "2015" }
];
let nodelivery = [{}];
let onedelivery = [{ match_id: "2",bowler: "bowler1" , bowling_team: "team3", total_runs: "1", wide_runs: "0", noball_runs: "0"}];
let deliveries = [
  { match_id: "1",bowler: "bowler3", total_runs: "2", wide_runs: "1", noball_runs: "0"},
  { match_id: "2",bowler: "bowler2", total_runs: "1", wide_runs: "0", noball_runs: "0"},
  { match_id: "1",bowler: "bowler1", total_runs: "1", wide_runs: "0", noball_runs: "0"},
  { match_id: "1",bowler: "bowler1", total_runs: "1", wide_runs: "0", noball_runs: "0"},
  { match_id: "1",bowler: "bowler1", total_runs: "1", wide_runs: "0", noball_runs: "0"},
  { match_id: "1",bowler: "bowler1", total_runs: "1", wide_runs: "0", noball_runs: "1"},
  { match_id: "2",bowler: "bowler2", total_runs: "2", wide_runs: "0", noball_runs: "0"},
  { match_id: "1",bowler: "bowler1", total_runs: "1", wide_runs: "1", noball_runs: "0"}
];

describe("Fourth Query results", () => {
    it("No match and No delivery", () => {
      let result = fourth_query(nomatch, nodelivery);
      let expectedOutput = "No Entry found. Please provide min 1 match / entry";
      expect(result).toEqual(expectedOutput);
    });
  
    it("One match and No delivery", () => {
      let result = fourth_query(onematch, nodelivery);
      let expectedOutput = "Either match_id / bowler name / total runs / wide runs / noball runs are absent in the entry.";
      expect(result).toEqual(expectedOutput);
    });
  
    it("Many matches and No delivery", () => {
      let result = fourth_query(manymatch, nodelivery);
      let expectedOutput = "Either match_id / bowler name / total runs / wide runs / noball runs are absent in the entry.";
      expect(result).toEqual(expectedOutput);
    });
  
    it("One match and One delivery of different match", () => {
      let result = fourth_query(onematch, onedelivery);
      let expectedOutput ="No deliveries of MatchIDs 2015 present";
      expect(result).toEqual(expectedOutput);
    });
  
    it("One match and all deliveries. Here we need only values of 2016 matches only", () => {
      let result = fourth_query(onematch, deliveries);
      let Output = { bowler1: [ 10 ], bowler3: [ 12 ] };
      expect(result).toEqual(Output);
    });
  
    it("Many matches of 2016 and all deliveries. Here we need only values of 2016 matches and displayed team-wise", () => {
      let result = fourth_query(manymatch, deliveries);
      let expectedOutput = { bowler2: [ 9 ], bowler1: [ 10 ], bowler3: [ 12 ] };
      expect(result).toEqual(expectedOutput);
    });
  });
