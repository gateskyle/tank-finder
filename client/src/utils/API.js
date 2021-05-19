import axios from "axios";

export default {
    findTank: function(data) {
        console.log(data)
        return axios.get(`/api/${data}`)
        .then(function (response) {
            console.log(response);
            return(response)
        })
        .catch(function (error) {
        console.log(error);
        })
    }
}