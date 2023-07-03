import { AppDispatchType } from "01-app/store";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatchType>()