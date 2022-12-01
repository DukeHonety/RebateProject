import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider, useSelector, useDispatch } from 'react-redux';
import Home from "./pages/Home";
import Rating from "./pages/Rating";
import Comments from "./pages/Comments";
import Reward from "./pages/Reward";
import RewardOnNumber from "./pages/RewardOnNumber";
import RewardOnEmail from "./pages/RewardOnEmail";
import Finish from "./pages/Finish";
import StandBy from "./pages/StandBy";
import Suggestion from "./pages/Suggestion";
import SuggestionLocation from "./pages/SuggestionLocation";
import OfferUnavailable from "./pages/OfferUnavailable";
import AlreadyUsedOrderNumber from "./pages/AlreadyUsedOrderNumber";
import SystemUpdate from "./pages/SystemUpdate";
import UpdatingVersion from "./pages/Updating";
import { setStatus } from "./app/appSlice";

const App = () => {
  const status = useSelector(state => state.app.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStatus('normal'));
  }, []);
  return (
    <>
      <Routes>
        {status === "updating" && (
          <>
            <Route path="/" element={<UpdatingVersion />} />
            <Route path="/updating" element={<UpdatingVersion />} />
          </>
        )}
        {status === 'normal' && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/reward" element={<Reward />} />
            <Route path="/number" element={<RewardOnNumber />} />
            <Route path="/email" element={<RewardOnEmail />} />
            <Route path="/finish" element={<Finish />} />
            <Route path="/stand_by" element={<StandBy />} />
            <Route path="/suggestion" element={<Suggestion />} />
            <Route path="/suggestion_link" element={<SuggestionLocation />} />
            <Route path="/offer_unavailable" element={<OfferUnavailable />} />
            <Route
              path="/already_used_order_number"
              element={<AlreadyUsedOrderNumber />}
            />
            <Route path="/system_update" element={<SystemUpdate />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
