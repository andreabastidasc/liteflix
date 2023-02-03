import {api} from "@/config/api";

export const getShows = () => {
    return api.get('/popular?language=es-SP&page=1')
}