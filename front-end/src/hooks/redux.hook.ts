
import { RootState, AppDispatch } from "../redux/store";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppDispatch = () => useDispatch<AppDispatch>()

export {
    useAppDispatch,
    useAppSelector
}