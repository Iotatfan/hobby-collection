import type { ICollection } from "@/libs/collection/collection";
import http from "@/services/http"

const getAllCollections = async () => {
    try {
        const response = await http.get('/collection',)
        return response.data.data.collections as ICollection[]
    } catch (error) {
        console.error("Error fetching collections:", error)
        throw error
    }
}

const getCollection = async (id: number) => {
    try {
        const response = await http.get(`/collection/${id}`)
        return response.data.data as ICollection
    } catch (error) {
        console.error("Error fetching collection detail:", error)
        throw error
    }
}

const collectionServices = {
    getAllCollections,
    getCollection
}

export default collectionServices
