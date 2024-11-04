import { selector } from "recoil"
import { countAtom } from "./Count"

export const evenFilter = selector({
    key: "evenFilter",
    get: ({ get}) => {
        const count = get(countAtom)
        return count % 2 === 0 ? "It is even" : null
    },
})
