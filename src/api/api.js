import axios from "axios";
import { url } from '../data/data'

export const getAllMessages = async () => {
    return await axios.get(url + '/messages')
}

export const postMessage = async (body, title) => {
    return await axios.post(url + '/post', { body })
}

export const deleteMessage = async (messageId) => {
    const config = {
        data: {
            messageId
        }
    }

    return await axios.delete(url + '/delete', config)
}