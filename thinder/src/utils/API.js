import axios from 'axios';

export default{
    userAuth: function(credentials){
        return axios.post('/api/login', credentials)
    }
}