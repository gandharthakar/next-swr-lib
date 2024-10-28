import useSWR from "swr";
import { UserGetAPIResp, SWRCBtype, PaginationConfig } from "./../types/componentsInterfacesTypes";

export const useGetUsers = (cb?: SWRCBtype, pagconf?: PaginationConfig) => {
    console.log(pagconf);
    return useSWR<UserGetAPIResp>(`/get-users?enpg=${pagconf?.enpg ? pagconf?.enpg : false}&page=${pagconf?.pageIndex ? pagconf?.pageIndex : 1}&limit=${pagconf?.limit ? pagconf?.limit : 2}`, null, {
        onSuccess: (data) => {
            if (data.success) {
                if (cb?.successCB) {
                    cb.successCB();
                }
            } else {
                if (cb?.errorCB) {
                    cb.errorCB();
                }
            }
        },
        onError: () => {
            if (cb?.onErrorCB) {
                cb.onErrorCB();
            }
        }
    });
}