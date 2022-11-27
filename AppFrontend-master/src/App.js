import React, {useEffect} from "react";
import { Provider, useDispatch } from 'react-redux';
import axios from 'axios';
import Routers from "./router";
import { store } from './app/store';
import { baseServerUrl } from "./core/constant/base";
import { setSubmissions } from "./app/appSlice";

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      let response;
      try {
        response = await axios.get(`${baseServerUrl}/submissions`);
        if (response.data) {
          // console.log(response.data);
          dispatch(setSubmissions(response.data));
        }
      } catch (error) {
        console.log("[ERROR][GROUPS][CREATE]: ", error.message);
        return;
      }
    }
    getData();
  }, [])
  return (
    <>
      <Routers />
    </>
  );
};

export default App;
