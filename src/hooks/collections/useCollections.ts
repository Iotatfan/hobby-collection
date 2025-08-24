import { ICollection } from "@/libs/collection/collection"
import collectionServices from "@/services/content/collectionServices"
import { useState } from "react"

const useCollections = () => {

    const [collections, setCollections] = useState<ICollection[]>()
    

    const getCollections = async () => {
        const response = await collectionServices.getAllCollections()

        setCollections(response)
    }

    return {
        collections,
        getCollections
    }
}

export default useCollections