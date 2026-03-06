import { ICollection } from "@/libs/collection/collection"

type CollectionDetailCache = {
  data: ICollection
  timestamp: number
}

type CollectionListCache = {
  data: ICollection[]
  timestamp: number
}

const CACHE_DURATION  = 24 * 60 * 60 * 1000 // one day

export function getCachedCollection(id: number): ICollection | null {
  const raw = localStorage.getItem(`collection_${id}`)
  if (!raw) return null

  const parsed: CollectionDetailCache = JSON.parse(raw)

  if (Date.now() - parsed.timestamp > CACHE_DURATION ) {
    localStorage.removeItem(`collection_${id}`)
    return null
  }

  return parsed.data
}

export function setCachedCollection(data: ICollection) {
  const entry: CollectionDetailCache = {
    data,
    timestamp: Date.now() + CACHE_DURATION 
  }

  localStorage.setItem(`collection_${data.id}`, JSON.stringify(entry))
}

export function getCachedCollectionList(): ICollection[] | null {
  const raw = localStorage.getItem(`collection_list`)
  if (!raw) return null

  const parsed: CollectionListCache = JSON.parse(raw)

  if (Date.now() - parsed.timestamp > CACHE_DURATION ) {
    localStorage.removeItem(`collection_list`)
    return null
  }

  return parsed.data
}

export function setCachedCollectionList(data: ICollection[]) {
  const entry: CollectionListCache = {
    data,
    timestamp: Date.now() + CACHE_DURATION 
  }

  localStorage.setItem(`collection_list`, JSON.stringify(entry))
}