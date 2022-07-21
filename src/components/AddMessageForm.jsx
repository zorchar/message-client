import { postMessage } from "../api/api"

const AddMessageForm = ({ setMessages }) => {
    const onSubmitSend = async (e) => {
        e.preventDefault()
        try {
            const message = e.target.children[0].value
            const data = await postMessage(message)
            setMessages((prev) => prev.concat(data.data.data))
        } catch (err) {
            alert(err)
        }
    }

    return (
        <form onSubmit={onSubmitSend}>
            <input type="text" placeholder="message" />
            <button>Send</button>
        </form>
    )
}

export default AddMessageForm