import Cookie from "universal-cookie";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import firebase from "../firebaseConfig";
import { unSubMeta } from "./useUserChanged";
import { resetEditedTask, resetEditedNews } from "../slices/uiSlice";

const cookie = new Cookie();

export const useLogout = () => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();
	const logout = async () => {
		if (unSubMeta) {
			unSubMeta();
		}
		dispatch(resetEditedTask());
		dispatch(resetEditedNews());
		await firebase.auth().signOut();
		cookie.remove("token");
	};
	return { logout };
};
