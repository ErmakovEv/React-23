import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDistaptch, RootState } from '..';
import { useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDistaptch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
