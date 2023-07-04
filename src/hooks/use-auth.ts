import { useAppselector } from "./redux-hooks";

export const useAuth = () => {
  const { email, token, id } = useAppselector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
