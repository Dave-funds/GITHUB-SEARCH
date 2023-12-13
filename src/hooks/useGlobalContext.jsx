import { useContext} from "react"
import {GithubContext } from "../context/context.jsx"

export const useGlobalContext = () => useContext(GithubContext)