import useSWRMutation from "swr/mutation";
import { useGetUsers } from "./queries"
import { createUser, updateUser, deleteUser } from "./api";
import { SWRCBtype } from "../types/componentsInterfacesTypes";

const mutateTimeDelay: number = 100;

export const useCreateUser = (callbacks?: SWRCBtype) => {
    const { mutate } = useGetUsers();

    return useSWRMutation('/create-user', createUser, {
        onSuccess: (data) => {
            const st = setTimeout(() => {
                mutate();
                clearTimeout(st);
            }, mutateTimeDelay);

            if (data.success) {
                if (callbacks?.successCB) {
                    callbacks.successCB();
                }
            } else {
                if (callbacks?.errorCB) {
                    callbacks.errorCB();
                }
            }
        },
        onError: () => {
            if (callbacks?.onErrorCB) {
                callbacks.onErrorCB();
            }
        }
    })
};

export const useUpdateUser = (callbacks?: SWRCBtype) => {
    const { mutate } = useGetUsers();

    return useSWRMutation('/update-user', updateUser, {
        onSuccess: (data: any) => {
            const st = setTimeout(() => {
                mutate();
                clearTimeout(st);
            }, mutateTimeDelay);

            if (data.success) {
                if (callbacks?.successCB) {
                    callbacks.successCB();
                }
            } else {
                if (callbacks?.errorCB) {
                    callbacks.errorCB();
                }
            }
        },
        onError: () => {
            if (callbacks?.onErrorCB) {
                callbacks.onErrorCB();
            }
        }
    })
}

export const useDeleteUser = (callbacks?: SWRCBtype) => {
    const { mutate } = useGetUsers();

    return useSWRMutation('/delete-user', deleteUser, {
        onSuccess: (data: any) => {
            const st = setTimeout(() => {
                mutate();
                clearTimeout(st);
            }, mutateTimeDelay);

            if (data.success) {
                if (callbacks?.successCB) {
                    callbacks.successCB();
                }
            } else {
                if (callbacks?.errorCB) {
                    callbacks.errorCB();
                }
            }
        },
        onError: () => {
            if (callbacks?.onErrorCB) {
                callbacks.onErrorCB();
            }
        }
    })
}