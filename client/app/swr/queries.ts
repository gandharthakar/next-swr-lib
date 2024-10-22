import useSWR from "swr";
import { UserGetAPIResp, SWRCBtype } from "./../types/componentsInterfacesTypes";

export const useGetUsers = (cb?: SWRCBtype) => {
    return useSWR<UserGetAPIResp>('/get-users', null, {
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