import axios from "axios";
import { usersUrl } from "../../utils/constants/constants";
import { ResponseUserService } from "../../utils/interfaces/response";

const getUsersList = async () => {
    const response = await axios.get<ResponseUserService>(usersUrl, {});
    return response.data.data;
}

export default getUsersList;