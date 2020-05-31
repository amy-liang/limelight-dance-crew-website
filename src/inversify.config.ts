import { GlobalStore } from "./stores/GlobalStore";
import { IGlobalStore, IYoutubeStore } from "./stores/Interfaces";
import TYPES from "./stores/Types";
import { Container } from "inversify";
import { YoutubeStore } from "./stores/YoutubeStore";

export const container = new Container();
container
    .bind<IGlobalStore>(TYPES.GlobalStore)
    .to(GlobalStore)
    .inSingletonScope();
container
    .bind<IYoutubeStore>(TYPES.YoutubeStore)
    .to(YoutubeStore)
    .inSingletonScope();
