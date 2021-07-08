import Axios from 'axios'
import { showMessage, storeData } from '../../utils';
import { setLoading } from './global';


const API_HOST= {
    url:'http://foodmarket-backend.buildwithangga.id/api',
}

export const signUpAction = (dataRegister, photoReducer, navigation) =>(dispatch) =>{
    Axios.post(`${API_HOST.url}/register`, dataRegister)
   

    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`
      const profile = res.data.data.user
      console.log("data success: ", res.data);
       //data user
    storeData('userProfile', profile)
    //data token
    storeData('token',{value : token})
      if(photoReducer.isUploadPhoto ){
        const photoForUpload= new FormData();
        photoForUpload.append('file', photoReducer);

        Axios.post(`${API.HOST.url}/user/photo`,
        photoForUpload,
        {
          headers:{
            Authorization: token,
            'Content-Type' : 'multipart/form-data'
          },
        })
        .catch(err=>{
          showMessage('upload Photo Tidak berhasil')
        })
      }
    
      dispatch(setLoading(false));
      navigation.replace("SuccessSignUp");
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message)  
    });
}