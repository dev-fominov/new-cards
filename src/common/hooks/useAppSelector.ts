import { AppRootStateType } from "01-app/store";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector