import {
    GET_PROFILES, GET_PROFILE, DELETE_PROFILE, GET_CONTACTS,
    GET_SOCILALINK, GET_SOCIAL, GET_SKILLSETS, GET_SKILLSET ,GET_VSDATAS ,GET_VSDATA
} from './../actions/types';

const initialState = {
    profiles: [],
    profile: {},
    contacts: [],
    socials: [],
    social: {},
    skills: [],
    skill: {},
    vcDatas: [],
    vcData: {},


};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILES:
            return { ...state, profiles: action.payload };
        case GET_PROFILE:
            return { ...state, profile: action.payload };
        case DELETE_PROFILE:
            return { ...state, profiles: state.profiles.filter((profile) => profile.id !== action.payload) };
        //return {...state , profiles:action.payload };
        case GET_CONTACTS:
            return { ...state, contacts: action.payload };
        case GET_SOCILALINK:
            return { ...state, socials: action.payload };
        case GET_SOCIAL:
            return { ...state, social: action.payload };
        case GET_SKILLSETS:
            return { ...state, skills: action.payload };
        case GET_SKILLSET:
            return { ...state, skill: action.payload };
            case GET_VSDATAS:
            return { ...state, vcDatas: action.payload };
            case GET_VSDATA:
            return { ...state, vcData: action.payload };
        default:
            return state;
    }
};