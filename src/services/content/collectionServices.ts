import axios from "axios"
axios.defaults.baseURL = 'http://localhost:8080';

const getAllCollections = async () => {
    try {
        const response = await axios.get('/collection', )
        return response.data.data.collections
    } catch {
        console.log("Error")
    }
}

const collectionServices = {
    getAllCollections
}

export default collectionServices