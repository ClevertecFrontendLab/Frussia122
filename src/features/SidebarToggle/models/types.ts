import { Dispatch } from "react"

export type Props = {
    collapsed: boolean,
    setCollapsed: Dispatch<React.SetStateAction<boolean>>,
    typeTest: string
}