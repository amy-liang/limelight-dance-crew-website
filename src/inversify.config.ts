import { GlobalStore } from "./stores/GlobalStore";
import { IGlobalStore } from "./stores/Interfaces";
import TYPES from "./stores/Types";
import { Container } from "inversify";

export const container = new Container();
container
    .bind<IGlobalStore>(TYPES.GlobalStore)
    .to(GlobalStore)
    .inSingletonScope();
