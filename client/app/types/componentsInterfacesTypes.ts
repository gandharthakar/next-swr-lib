
export type UserCompType = {
    user_id: string,
    user_name: string,
    user_gender?: string,
    user_gender_val?: string,
}

export type EditStoreType = {
    isEditPanelShown: boolean,
    setData: (payload: UserCompType) => void,
    toggleOpenState: (payload: boolean) => void,
} & UserCompType

export type APIRespCommonTypeA = {
    success: boolean,
    message: string
}

export type UserAPIResp = {
    _id: string,
    user_full_name: string,
    user_gender: string,
}

export type UserGetAPIResp = {
    users: UserAPIResp[]
} & APIRespCommonTypeA