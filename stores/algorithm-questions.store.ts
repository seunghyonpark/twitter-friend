import {action, makeObservable, observable} from "mobx";
import {QuestionsStore} from "./questions.store";


export type AlgorithmQuestionsStoreProps = {
    store: AlgorithmQuestionsStore,
}
// export type AlgorithmQuestionsStoreProps = QuestionsStoreProps & {
//     bojId?: string,
//     solvedacTier?: number,
//     codeforcesId?: string,
//     codeforcesTier?: number,
//     atcoderId?: string,
//     atcoderTier?: number,
// }

export class AlgorithmQuestionsStore extends QuestionsStore {
    @observable bojId:string = "";
    @observable solvedacTier: number = 0;
    @observable codeforcesId:string = "";
    @observable codeforcesTier: number = 0;
    @observable atcoderId: string = "";
    @observable atcoderTier: number = 0;

    @action
    public updateBojId = (bojId:string) => {
        this.bojId = bojId;
    }

    @action
    public updateSolvedacTier = (solvedacTier:number) => {
        this.solvedacTier = solvedacTier;
    }

    @action
    public updateCodeforcesId = (codeforcesId:string) => {
        this.codeforcesId = codeforcesId;
    }

    @action
    public updateCodeforcesTier = (codeforcesTier:number) => {
        this.codeforcesTier = codeforcesTier;
    }

    @action
    public updateAtcoderId = (atcoderId:string) => {
        this.atcoderId = atcoderId;
    }

    @action
    public updateAtcoderTier = (atcoderTier:number) => {
        this.atcoderTier = atcoderTier;
    }

    constructor() {
        super();
        makeObservable(this);
    }
}
