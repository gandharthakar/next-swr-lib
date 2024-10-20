'use client';

import UpdateUserForm from "../components/updateUserForm";
import { useEditUserStore } from "../zustand/store";

const HomePager = () => {

    const isOpen = useEditUserStore((state) => state.isEditPanelShown);
    const uid = useEditUserStore((state) => state.user_id);
    const unm = useEditUserStore((state) => state.user_name);
    const ugn = useEditUserStore((state) => state.user_gender);
    const ugnvl = useEditUserStore((state) => state.user_gender_val);

    return (
        <>
            {
                isOpen && (
                    <>
                        <div className="border-b-0 mda-1:border-b-[2px] border-solid border-zinc-800">
                            <UpdateUserForm
                                user_id={uid}
                                user_name={unm}
                                user_gender={ugn}
                                user_gender_val={ugnvl}
                            />
                        </div>
                    </>
                )
            }
        </>
    )
};

export default HomePager;