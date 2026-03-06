import type { ICollection } from "@/libs/collection/collection";
import http from "@/services/http"
import { getCachedCollection, setCachedCollection, getCachedCollectionList, setCachedCollectionList } from "@/utils/collectionCaches";

const getAllCollections = async () => {
    const cached = getCachedCollectionList()
    if (cached) return cached as ICollection[]

    try {
        const response = await http.get('/collection',)
        setCachedCollectionList(response.data.data.collections as ICollection[])

        return response.data.data.collections as ICollection[]
    } catch (error) {
        console.error("Error fetching collections:", error)
        throw error
    }
}

const getCollection = async (id: number) => {
    const cached = getCachedCollection(id)
    if (cached) return cached as ICollection

    try {
        const response = await http.get(`/collection/${id}`)
        setCachedCollection(response.data.data as ICollection)

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
