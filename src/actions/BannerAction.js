import axios from 'axios';
import { GET_PROFILES, GET_PROFILE, DELETE_PROFILE, GET_CONTACTS , 
    GET_SOCILALINK, GET_SOCIAL ,GET_SKILLSETS,GET_SKILLSET,GET_VSDATAS ,GET_VSDATA} from './types';
import { useHistory } from 'react-router-dom';
import fireDb from './../components/firebase';
const urlMain = "https://appletsoftech-default-rtdb.firebaseio.com/contact.json";
const url = "https://appletsoftech-default-rtdb.firebaseio.com/banner.json";
const urlDbjson = "http://localhost:8000";

export const createProfile = (profile, history) => async (dispatch) => {
    try {
        await axios.post(`${urlDbjson}/profiles`, profile);
       // fireDb.child("banner").push(profile);
       
        alert("successfull save go to admin");
        history.push("/admin");
    }
    catch (error) {
        dispatch({
            // type: GET_ERRORS,
            // payload: error.response.data
        })
    }
};
export const updateProfile = (updateprofile, history) => async (dispatch) => {
    try {
        await axios.put(`${urlDbjson}/profiles/${updateprofile.id}`, updateprofile);
       // fireDb.child("banner").push(profile);
       
        alert("successfull save go to admin");
        history.push("/admin");
    }
    catch (error) {
        dispatch({
            // type: GET_ERRORS,
            // payload: error.response.data
        })
    }
};
export const getProfiles = () => async (dispatch) => {

    const responce = await axios.get(`${urlDbjson}/profiles`);
    dispatch({
        type: GET_PROFILES,
        payload: responce.data,
    });


};
export const getProfile = (id) => async (dispatch) => {
    const res = await axios.get(`${urlDbjson}/profiles/${id}`);
    dispatch({
        type: GET_PROFILE,
        payload: res.data,
    });
};

export const deleteProfile = (id) => async (dispatch) => {
    const res = await axios.delete(`${urlDbjson}/profiles/${id}`);
    // const res = fireDb.child(`banner/${id}`).remove();
    dispatch({
        type: DELETE_PROFILE,
        payload: id,
    });
};

export const createContact = (contact, history) => async (dispatch) => {
    
    try {
        await axios.post(`${urlDbjson}/contacts`,contact);
       // fireDb.child("contact").push(contact);
        alert("successfull save go to admin");
        history.push('/admin');
    }
    catch (error) {
        dispatch({
           // type: GET_CONTACTS,
            // payload: error.response.data
        })
    }
};
export const getContacts = () => async (dispatch) => {

    const responce = await axios.get(`${urlDbjson}/contacts`);
    dispatch({
        type: GET_CONTACTS,
        payload: responce.data,
    });


};
export const createSocial = (social, history) => async (dispatch) => {
    try {
        await axios.post(`${urlDbjson}/socialInfo`, social);      
        alert("successfull save go to admin");
        history.push("/admin");
    }
    catch (error) {
        dispatch({
            // type: GET_ERRORS,
            // payload: error.response.data
        })
    }
};
export const getSocials = () => async (dispatch) => {

    const responce = await axios.get(`${urlDbjson}/socialInfo`);
    dispatch({
        type: GET_SOCILALINK,
        payload: responce.data,
    });


};
export const getSocial = (id) => async (dispatch) => {
    const res = await axios.get(`${urlDbjson}/socialInfo/${id}`);
    dispatch({
        type: GET_SOCIAL,
        payload: res.data,
    });
};


export const updateSocial = (updateSocial, history) => async (dispatch) => {
    try {
        await axios.put(`${urlDbjson}/socialInfo/${updateSocial.id}`, updateSocial);
       // fireDb.child("banner").push(profile);
       
        alert("successfull save go to admin");
        history.push("/admin");
    }
    catch (error) {
        dispatch({
            // type: GET_ERRORS,
            // payload: error.response.data
        })
    }
};
export const createSkill = (Skills, history) => async (dispatch) => {
    try {
        await axios.post(`${urlDbjson}/skillsInfo`, Skills);      
        alert("successfull save go to admin");
        history.push("/admin");
    }
    catch (error) {
        dispatch({
            // type: GET_ERRORS,
            // payload: error.response.data
        })
    }
};
export const getSkills = () => async (dispatch) => {

    const responce = await axios.get(`${urlDbjson}/skillsInfo`);
    dispatch({
        type: GET_SKILLSETS,
        payload: responce.data,
    });


};
export const getSkill = (id) => async (dispatch) => {
    const res = await axios.get(`${urlDbjson}/skillsInfo/${id}`);
    dispatch({
        type: GET_SKILLSET,
        payload: res.data,
    });
};


export const updateSkill = (updateSkill, history) => async (dispatch) => {
    try {
        await axios.put(`${urlDbjson}/skillsInfo/${updateSkill.id}`, updateSkill);
       // fireDb.child("banner").push(profile);
       
        alert("successfull save go to admin");
        history.push("/admin");
    }
    catch (error) {
        dispatch({
            // type: GET_ERRORS,
            // payload: error.response.data
        })
    }
};
export const createCard = (cards, history) => async (dispatch) => {
    try {
        await axios.post(`${urlDbjson}/vcData`, cards);      
        alert("successfull save go to admin");
        history.push("/admin");
    }
    catch (error) {
        dispatch({
            // type: GET_ERRORS,
            // payload: error.response.data
        })
    }
};
export const getCards = () => async (dispatch) => {

    const responce = await axios.get(`${urlDbjson}/vcData`);
    dispatch({
        type: GET_VSDATAS,
        payload: responce.data,
    });


};
export const getCard = (id) => async (dispatch) => {
    const res = await axios.get(`${urlDbjson}/vcData/${id}`);
    dispatch({
        type: GET_VSDATA,
        payload: res.data,
    });
};


export const updateCard = (updateCard, history) => async (dispatch) => {
    try {
        await axios.put(`${urlDbjson}/vcData/${updateCard.id}`, updateCard);
       // fireDb.child("banner").push(profile);
       
        alert("successfull save go to admin");
        history.push("/admin");
    }
    catch (error) {
        dispatch({
            // type: GET_ERRORS,
            // payload: error.response.data
        })
    }
};





//https://appletsoftech-default-rtdb.firebaseio.com/banner.json?orderBy=%22$key%22&print=pretty
