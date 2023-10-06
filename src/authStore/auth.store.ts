// import Cookies from "js-cookie";
// import { apollo } from "../apollo";
// import { TOKEN_NAME } from "../utils/constants";

// interface IAuth {
//     response: LoginResponse[];
//     loading: boolean;
//     login: (input: LoginInput) => Promise<void>;
// }

// export const useAuthStore = create<IAuth>((set) => ({
//     response: [],
//     loading: false,
//     login: async (input: LoginInput) => {
//         try {
//             set({ loading: true });
//             const {data} = await apollo.mutate({
//                 mutation: LOGIN,
//                 variables: {input},
//             });
//             const res = data.login;
//             if (res) {
//                 Cookies.set(TOKEN_NAME, res?.token);
//                 window.location.href = "/dashboard/home";
//             }
//         } catch (error) {
//             console.log(error);
//         }finally {
//             set({ loading: false })
//         }
//     },
// }));
