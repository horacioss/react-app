import axios from "axios";
import { usersUrl } from "../../utils/constants/constants";
import { ResponseUserService } from "../../utils/interfaces/response";
import React from "react";
import { User } from "../../utils/interfaces/user";


export const getUsersList = async (setData: React.Dispatch<React.SetStateAction<User[]>>) => {

    const { data } = await axios.get<ResponseUserService>(usersUrl, {});
    console.log("Request user was called!")
    setData(data.data);

}
