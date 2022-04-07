import axios from "axios";
export const getAllEquipments = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_EQUIPMENTS_REQUEST" });

  try {
    const res = await axios.get("/api/equipments/getallequipments");
    dispatch({ type: "GET_ALL_EQUIPMENTS_SUCCESS", payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_ALL_EQUIPMENTS_FAILED", error });
  }
};