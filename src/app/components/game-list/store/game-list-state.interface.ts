import { Game } from "src/app/models";

export interface GameListState {
    sortCriteria: string;
    games: Game[];
}