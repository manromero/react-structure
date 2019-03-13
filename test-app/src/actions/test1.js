// Actions type
export const AT_UPDATE_TEXT = 'AT_UPDATE_TEXT';

// Actions creators
export function updateTextAction(text) {
    return {type: AT_UPDATE_TEXT, text};
}