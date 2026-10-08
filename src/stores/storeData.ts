import {create} from 'zustand';


const initialState = { 
    firstData: null,
}

type State = {
    // state
    firstData: any | null
}

type Actions = {
    // actions
    setFirstData: (data: any) => void
}


export const useStoreData = create<State & Actions>()((set) => ({
    ...initialState,
    setFirstData: (data) => set({ firstData: data }),
    // state
}))