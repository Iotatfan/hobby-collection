import { ICollection } from "@/libs/collection/collection"
import collectionServices from "@/services/content/collectionServices"
import { useState, useCallback } from "react"

const useCollectionDetail = () => {

    const [collection, setCollection] = useState<ICollection>()

    const getCollectionDetail = useCallback(async (id: number) => {
        const response = await collectionServices.getCollection(id)
        setCollection(response)
    }, [])

    return {
        collection,
        getCollectionDetail
    }
}

export default useCollectionDetail