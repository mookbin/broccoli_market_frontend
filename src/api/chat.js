import axios from "./axios";

// 목록 전체 조회
const fetchChatLists = async (user_id) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/chat`,
        {
            headers: {
                "user_id": user_id
            }
        }
    );
    // console.log('api 안', response.data);
    return response.data;
}

// 새로운 1:1채팅 생성
const createChat = async ({ product_id, buyer_id, buyer_nickname, seller_id, seller_nickname, title, address }) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/${product_id}`, {
        buyer_id,
        buyer_nickname,
        seller_id,
        seller_nickname,
        title,
        address
    });
    return response.data.newChat;
}

//1:1채팅 내역 조회
const fetchChat = async (chat_id) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${chat_id}`);
    return response.data.chat;
}


//1:1 채팅 내역 저장
const addChatContents = async ({ chat_id, content, user_id }) => {
    const createdAt = new Date().toISOString();
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/${chat_id}`, {
        chat_id,
        contents: [
            {
                content,
                user_id,
                createdAt,
            },

        ],
    });
    return response.data.updatedChat;
}


export { fetchChatLists, createChat, fetchChat, addChatContents };
