import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import PropTypes from "prop-types";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'e838bf18-42b3-40e1-8cf0-fd5638e14dec', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}
ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired
    }).isRequired
};

export default ChatsPage