// // import React from 'react'
// import { createContext, useContext, useState } from "react";
// import { LoginResponse, LoginUserInput, User } from "./auth.interface";
// import { apollo } from "../../apollo";
// import { LOGIN } from "../../apollo/queries/auth.query";
// import { TOKEN_NAME } from "../../utils/constants";
// import Cookies from "js-cookie";

// interface IAuth {
//   login: (input: LoginUserInput) => Promise<void>;
//   user: User | undefined;
//   loading: boolean;
// }

// const AuthContext = createContext<IAuth>({} as IAuth);

// export const useAuthContext = () => useContext(AuthContext);

// export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User>();
//   const [loading, setLoading] = useState<boolean>(false);

//   const login = async (input: LoginUserInput) => {
//     try {
//       setLoading(true);
//       const { data } = await apollo.mutate({
//         mutation: LOGIN,
//         variables: { input },
//       });
//       const res = data.login as LoginResponse;
//       setUser(res.user);
//       if (res) {
//         Cookies.set(TOKEN_NAME, res?.token);
//         window.location.href = "/dashboard/Home";
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
