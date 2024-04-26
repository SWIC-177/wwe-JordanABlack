import { CHAMPIONS } from "./src/data";

const championsWithoutVacantTitle = CHAMPIONS.filter(
    (champions) => champions !== "Vacant Title",
);

console.log(championsWithoutVacantTitle);