import { User } from './user';

export class SearchResults {
    constructor(public totalCount: number, public users: User[]) {}
}
