export interface Game {
    uid: string,
    title: string;
    price: number;
    currency: string;
    description: string;
}

export interface User {
    uid: number,
    email: string;
}

export interface UserGame {
    userId: string;
    gameId: string;
}