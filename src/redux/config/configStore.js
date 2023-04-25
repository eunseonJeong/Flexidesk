import { configureStore } from '@reduxjs/toolkit';
import reservation from '../modules/reservation';
import spaces from '../modules/spacesSlice';
import space from '../modules/spaceSlice';
import mr from '../modules/spaceMrSlice';
import box from '../modules/spaceBoxSlice';
import detail from '../modules/detail';
import loginSlice from '../modules/loginSlice';
import userSchedules from '../modules/userSchedules';
import reservationList from '../modules/allReservationSlice';
import floors from '../modules/floorsSlice';
import floor from '../modules/floorSlice';
import schedules from '../modules/schedules';
import multiBox from '../modules/MultiBoxSlice';

const store = configureStore({
  reducer: {
    reservation,
    spaces,
    space,
    detail,
    loginSlice,
    reservationList,
    mr,
    box,
    schedules,
    floors,
    floor,
    multiBox,
  },
});

export default store;
