import { useEffect } from "react"
import { deleteMessage, getAllMessages } from "../api/api"

const AllMessages = ({ messages, setMessages }) => {

    const onClickDeleteMessage = async (messageId) => {
        try {
            const messagesAfterDelete = messages.filter(message => message.id !== messageId)
            setMessages(messagesAfterDelete)

            await deleteMessage(messageId);
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        getAllMessages()
            .then((data) => {
                setMessages(data.data.data)
            })
            .catch(() => alert('getAllMessages Error'))
    }, [setMessages])

    return (
        <>
            {messages && messages.map((message, i) => {
                return <div key={i}>
                    <div >{message.body}</div>
                    <button onClick={() => onClickDeleteMessage(message.id)}>X</button>
                </div>
            })}
        </>
    )
}

export default AllMessages