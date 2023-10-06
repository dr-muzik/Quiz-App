import React from "react";
import { useState, useContext, createContext } from "react";
import { ICollation } from "../App";
import { IQuestion } from "../Questiongenerator";
import {
  LoginResponse,
  LoginUserInput,
  SignupUserInput,
  User,
} from "../authStore/authInterface/auth.interface";
import Cookies from "js-cookie";
import { apollo } from "../apollo";
import { LOGIN, SIGN } from "../apollo/queries/auth.query";
import { TOKEN_NAME } from "../utils/constants";
// import { IQuestion } from "../Questiongenerator";

interface AppContextType {
  selectedAnswers: ICollation[];
  data: IQuestion[];
  object: IQuestion[];
  report: IReport[];
  course: string | undefined;
  hide: boolean;
  login: (input: LoginUserInput) => Promise<void>;
  signup: (input: SignupUserInput) => Promise<void>;
  // user: User | undefined;
  loading: boolean;
  singleUser: User;
  // questions: IQuestion;
  updateSelectedAnswers(arg: ICollation[]): void;
  updateData(arg: IQuestion[]): void;
  updateObject(arg: IQuestion[]): void;
  updateReport(arg: IReport[]): void;
  updateCourse(arg: string | undefined): void;
  updateHide(arg: boolean): void;
}
export interface IReport {
  score: number;
  grade: string;
  remark: string;
  subject: string | undefined;
}

//create a single context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Export the context and custom hook
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

//Create the provider component
export const StateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<ICollation[]>([]);
  const [data, setData] = useState<IQuestion[]>([]);
  const [object, setObject] = useState<IQuestion[]>([]);
  const [report, setReport] = useState<IReport[]>([]);
  const [course, setCourse] = useState<string | undefined>("");
  const [hide, setHide] = useState(true);

  const updateHide = (newState: boolean) => {
    setHide(newState);
  };
  const updateSelectedAnswers = (newState: ICollation[]) => {
    setSelectedAnswers(newState);
  };
  const updateData = (newState: IQuestion[]) => {
    setData(newState);
  };
  const updateObject = (newState: IQuestion[]) => {
    setObject(newState);
  };
  const updateReport = (newState: IReport[]) => {
    setReport(newState);
  };
  const updateCourse = (newState: string | undefined) => {
    setCourse(newState);
  };

  // authContext
  const [singleUser, setSingleUser] = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(false);

  // const userRef = useRef<User>({} as User);

  console.log(singleUser);
  const login = async (input: LoginUserInput) => {
    try {
      setLoading(true);
      const { data } = await apollo.mutate({
        mutation: LOGIN,
        variables: { input },
      });
      const res = data.login as LoginResponse;
      const use = res.user;
      setSingleUser(use);

      if (res) {
        Cookies.set(TOKEN_NAME, res?.access_token);
        window.location.href = "/dashboard/Home";
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //signup
  const signup = async (input: SignupUserInput) => {
    try {
      setLoading(true);
      const { data } = await apollo.mutate({
        mutation: SIGN,
        variables: { input },
      });
      const res = data.signup as SignupUserInput;
      if (res) {
        // Cookies.set(TOKEN_NAME, res?.access_token);
        window.location.href = "/signup/redirect";
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue: AppContextType = {
    selectedAnswers,
    updateSelectedAnswers,
    data,
    hide,
    updateData,
    object,
    course,
    updateObject,
    report,
    updateReport,
    updateCourse,
    updateHide,
    loading,
    login,
    // user,
    singleUser,
    signup,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
