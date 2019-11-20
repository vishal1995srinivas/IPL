//third_query(nomatch, nodelivery);
//third_query(onematch,nodelivery);
//third_query(manymatch,nodelivery);
//third_query(onematch,onedelivery);
//third_query(onematch,deliveries);
//third_query(manymatch,deliveries);
let nomatch = [{}];
let onematch = [{ id: "1", season: "2016" }];
let manymatch = [
  { id: "1", season: "2016" },
  { id: "2", season: "2016" }
];
let nodelivery = [{}];
let onedelivery = [{ match_id: "2", bowling_team: "team3", extra_runs: "1" }];
let deliveries = [
  { match_id: "1", bowling_team: "team1", extra_runs: "2" },
  { match_id: "1", bowling_team: "team1", extra_runs: "1" },
  { match_id: "2", bowling_team: "team3", extra_runs: "1" }
];

const third_query = require("./third_query");
  
describe("Third query results", () => {
  it("No match and No delivery", () => {
    let result = third_query(nomatch, nodelivery);
    let expectedOutput = "No Entry found. Please provide min 1 match / entry";
    expect(result).toEqual(expectedOutput);
  });

  it("One match and No delivery", () => {
    let result = third_query(onematch, nodelivery);
    let expectedOutput = "Either match_id or bowling team or extra runs are absent in the entry.";
    expect(result).toEqual(expectedOutput);
  });

  it("Many matches and No delivery", () => {
    let result = third_query(manymatch, nodelivery);
    let expectedOutput = "Either match_id or bowling team or extra runs are absent in the entry.";
    expect(result).toEqual(expectedOutput);
  });

  it("One match and One delivery of different match", () => {
    let result = third_query(onematch, onedelivery);
    let expectedOutput ="No deliveries of MatchIDs 2016 present";
    expect(result).toEqual(expectedOutput);
  });

  it("One match and all deliveries. Here we need only values of 2016 matches only", () => {
    let result = third_query(onematch, deliveries);
    let expectedOutput ={
        team1: [3]
    };
    expect(result).toEqual(expectedOutput);
  });

  it("Many matches of 2016 and all deliveries. Here we need only values of 2016 matches and displayed team-wise", () => {
    let result = third_query(manymatch, deliveries);
    let expectedOutput ={
        team1: [3],
        team3: [1]
    };
    expect(result).toEqual(expectedOutput);
  });
});
