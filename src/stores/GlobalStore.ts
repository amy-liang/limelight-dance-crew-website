import { observable } from "mobx";
import { injectable } from "inversify";
import { IGlobalStore } from "./Interfaces";

@injectable()
export class GlobalStore implements IGlobalStore {
    @observable
    atScrollTop: boolean = true;
}
