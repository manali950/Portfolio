import { combineReducers } from 'redux';
import bannerReducer from './bannerReducer';

export default combineReducers({
    profiles:bannerReducer,
    contacts:bannerReducer,
    socials:bannerReducer,
    skills:bannerReducer,
    vsDatas:bannerReducer,
});