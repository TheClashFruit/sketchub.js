export = ApiMeta;
declare class ApiMeta {
    badgeReverse: {
        60: string;
        50: string;
        40: string;
        20: string;
        15: string;
        5: string;
        0: string;
    };
    badgeFromInt(int: any): any;
    badgeToInt(badge: any): any;
}
declare namespace ApiMeta {
    namespace URLS {
        const getCategories: string;
        const getProjectDetails: string;
        const getProjectList: string;
        const getProjectTypes: string;
        const getAnnouncements: string;
        const getMeta: string;
        const findUserName: string;
        const searchUser: string;
        const getUser: string;
    }
    namespace BADGE {
        const Developer: number;
        const Admin: number;
        const Moderator: number;
        const Vip: number;
        const Premium: number;
        const Verified: number;
        const User: number;
    }
}
