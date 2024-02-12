import axios from "axios";

export function addFormMiaudelo(navigate) {
    return (body) => {
        console.log(body)
        axios.post(`${import.meta.env.VITE_API_URL}/addmialdelo`, body)
            .then(res => navigate("/home"))
            .catch(err => {
                if (err.response) {
                    alert(err.response.data);
                } else {
                    alert(err.message);
                }
            });
    };
}
