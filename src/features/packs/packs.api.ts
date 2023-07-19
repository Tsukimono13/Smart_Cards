import {instance} from "../../common/api/common.api";

export const packsApi = {
    getPacks: () => {
        return instance.get<any>("/cards/pack")
    }
}

type PacksType = {

}