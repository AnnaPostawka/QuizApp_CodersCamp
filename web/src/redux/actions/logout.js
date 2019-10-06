export const LOGGED_OUT = "LOGGED_OUT";

export function logout() {
	localStorage.removeItem("token");
	return {
		type: LOGGED_OUT
	};
}
