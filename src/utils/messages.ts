import { v4 as uuid } from 'uuid';
import { RizkyId } from './users';

export interface Messages {
    readonly id: string;
    readonly userId: string;
    readonly message: string;
}

export const messages: Messages[] = [
    {
        id: uuid(),
        userId: RizkyId,
        message: "Hello, thanks for setting up the Chess Club, I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    }
]
