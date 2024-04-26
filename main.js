import { BELTS } from "./src/data";

const beltsWithoutTeamChampions = BELTS.filter(
    (belts) => belt !== "World Tag Team Champions", "SmackDown Tag Team Champions", "WWE Women's Tag Team Champions",
);

console.log(beltsWithoutTeamChampions);

import { CHAMPIONS } from "./src/data";

const championsCorrispondingIndex = CHAMPIONS.filter(
    (champions) => champions !==  "Damian Priest",
    "Vacant Title",
    "Bayley",
);

console.log(championsCorrispondingIndex);

