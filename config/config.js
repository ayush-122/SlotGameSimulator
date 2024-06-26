export const betAmount=30;

export let reelsBaseCombination = [
    ["H2","H4","L3","H2","H3","L2","H2","H3","L1","WC","H2","H4","WC","H1","L2","L1","WC","L3","L1","H1","BO","H5","L3","L2","H1","H5","L5","SC","H3","H4","H2","L2","L3","BO","L2","H3","H5","L3","L2","L5","H1","H5","SC","L3","H3","L4","SC","H4","H4","L3","L2","L4","SC","L4","H5","H1","SC"],
    ["H3","L3","L5","H3","WC","H1","H3","H4","L3","L2","WC","H1","H1","H2","H4","H3","L4","L3","H2","H4","L2","BO","H3","L3","H2","WC","L3","L2","H1","H4","H2","L2","H1","H4","L4","H3","L3","WC","H3","L3","L1","H2","H1","L3","WC","H2","L1","H4","H5","L5","BO","H4","H5","H2","SC"],
    ["L3","H1","H3","L3","H2","H1","L3","L1","L4","H1","L3","H3","L2","L3","H4","L4","L2","L3","WC","L5","L3","L2","H2","H5","H1","L4","L1","BO","H2","L1","L2","WC","L1","L2","H2","L3","L2","H2","L5","L1","H5","L5","H3","H4","WC","L2","H4","H5","H3","H5","L4","H4","L1","L4","H4","L5","L1","SC","L5","L1","H5","H3"],
    ["L3","H3","WC","L3","L1","H5","L2","H3","L3","L2","WC","L3","L4","L4","H2","L4","L2","H1","H5","L5","BO","H4","H2","L3","L5","H4","H5","SC","H1","H5","H2","L2","H4","H2","SC","H4","L3","H3","H1","H4","WC","H5","L2","L1","H4","H5","L1","H4","L3","L1","H5","L3","L2","H4","L1","WC","H1","H3","H2","H4","H3","H2","H1"],
    ["H5","L1","H1","H5","H2","H5","H5","SC","H2","L3","H5","H3","L1","H5","WC","L3","L4","L2","H3","H5","SC","H4","H3","L2","L3","H3","H4","H2","L2","L1","H4","L4","L2","WC","H1","H4","H2","L3","H3","L1","H2","L3","WC","H4","H2","L3","L2","SC","L5","L3","H2","L4","L2","SC","L4","L5","L3","L4","L5","SC","L2","L5"]
];

 export let reelsFGCombination=[
    ["H2","H4","L3","H2","H3","WC","H3","H2","H4","WC","H1","L3","L4","H1","H5","L2","L3","H5","H5","WC","H4","H2","WC","H3","H5","H1","L2","WC","H1","H5","H3","H4","WC","L1"],
    ["H3","L3","L1","H3","WC","H1","H3","H4","L3","WC","H2","H4","L2","H3","L3","H2","H4","H5","H3","L3","WC","H1","H4","H2","L4","H1","H4","WC","H3","L3","H1","WC","H2","H5","H4","H2","H4","WC","H5","H2"],
    ["L3","L4","H5","H3","L4","L3","H1","L5","H1","L3","H3","L5","L3","H4","L3","WC","H4","L3","H2","L1","H1","WC","H4","H2","H5","L1","L2","H2","H5","H3","H4","H4","H5","H5","H3","WC","H2","H1","H2","H1","H2","H1","H2","H1","H2"],
    ["L3","H1","WC","L3","L4","L5","L2","H1","L3","L2","L1","H3","L3","H2","L3","L2","H5","L3","L1","H1","H4","H2","L3","L1","H4","H5","H1","H5","H2","L2","H4","H2","H4","L3","L1","H5","H4","H4","H5","H4","H5","H4","WC","H1","H3","H2","H4","H3","H1"],
    ["H5","L1","L4","H5","H2","L5","H5","L2","H3","L3","H5","H3","L1","H5","WC","L3","H2","H3","H2","L3","H4","L2","L3","H3","L2","H4","H2","L3","L1","H4","H5","L2","WC","H1","H4","H2","L3","L2","L1","H2","L3","WC","H4","H2","L3","L2","H3","L3","L2","H2"]
];

 export let paylines=[
    [
    [1,0],[1,1],[1,2],[1,3],[1,4]],
    [[0,0],[0,1],[0,2],[0,3],[0,4]],
    [[2,0],[2,1],[2,2],[2,3],[2,4]],
    [[0,0],[1,1],[2,2],[1,3],[0,4]],
    [[2,0],[1,1],[0,2],[1,3],[2,4]],
    [[1,0],[2,1],[2,2],[2,3],[1,4]],
    [[1,0],[0,1],[0,2],[0,3],[1,4]],
    [[2,0],[1,1],[1,2],[1,3],[2,4]],
    [[0,0],[1,1],[1,2],[1,3],[0,4]],
    [[1,0],[0,1],[1,2],[0,3],[1,4]],
    [[1,0],[2,1],[1,2],[2,3],[1,4]],
    [[0,0],[2,1],[0,2],[2,3],[0,4]],
    [[2,0],[0,1],[2,2],[0,3],[2,4]],
    [[1,0],[1,1],[0,2],[1,3],[1,4]],
    [[1,0],[1,1],[2,2],[1,3],[1,4]],
    [[2,0],[0,1],[0,2],[0,3],[2,4]],
    [[0,0],[2,1],[2,2],[2,3],[0,4]],
    [[2,0],[1,1],[2,2],[1,3],[2,4]],
    [[0,0],[1,1],[0,2],[1,3],[0,4]],
    [[0,0],[0,1],[1,2],[0,3],[0,4]],
    [[1,0],[0,1],[2,2],[0,3],[1,4]],
    [[1,0],[2,1],[0,2],[2,3],[1,4]],
    [[1,0],[0,1],[1,2],[2,3],[1,4]],
    [[1,0],[2,1],[1,2],[0,3],[1,4]],
    [[0,0],[1,1],[2,2],[2,3],[2,4]],
    [[2,0],[1,1],[0,2],[0,3],[0,4]],
    [[0,0],[0,1],[1,2],[2,3],[2,4]],
    [[2,0],[2,1],[1,2],[0,3],[0,4]],
    [[2,0],[2,1],[0,2],[2,3],[2,4]],
    [[0,0],[0,1],[2,2],[0,3],[0,4]]
];

 export let paytable={"WC":[300,200,100,0,0],
    "H1":[200,100,40,0,0],
    "H2":[120,60,20,0,0],
    "H3":[80,40,16,0,0],
    "H4":[60,30,12,0,0],
    "H5":[40,25,10,0,0],
    "L1":[20,15,6,0,0],
    "L2":[16,10,5,0,0],
    "L3":[16,10,5,0,0],
    "L4":[12,8,4,0,0],
    "L5":[12,8,4,0,0],
    "SC":[0,0,0,0,0],
    "BO":[0,0,0,0,0]};