const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageText;
      state.newMessageText = '';
      state.messages.push({id: 6, message: body});
      return state;
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (messageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: messageText});

export default dialogsReducer;