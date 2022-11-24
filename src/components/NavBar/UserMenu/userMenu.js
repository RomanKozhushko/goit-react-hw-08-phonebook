import { UserEmail, ButtonOut } from "./userMenu.styled";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "API/authOperations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    
    return (
        <>
            <UserEmail>{user.name}</UserEmail>
            <ButtonOut type="button" onClick={() => dispatch(logout())}>LogOut</ButtonOut>
        </>
    )
}