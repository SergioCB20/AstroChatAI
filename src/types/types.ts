export type userId =`user-${number}`;
export type messageId =`message-${number}`;

export type User = {
    id: userId;
    name: string;
    description: string;
    avatar: string;
    messages?: messageId[];
    isOnline?: boolean;
    chats?: number[];
}

export type Message = {
    id: messageId;
    text: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    isDeleted: boolean;
    isRead: boolean;
    target: Chat["id"];
}

export type Chat = {
    id: number;
    name?:string;//para los grupos
    photo?:string;
    members: User[];
    messages: Message[];
}
