export declare const isNotDefined: <T>(value: T | undefined | null) => value is undefined | null;
export declare const isDefined: <T>(value: T | undefined | null) => value is NonNullable<T>;
export declare const isEmpty: (value: string | undefined | null) => value is undefined;
export declare const isNotEmpty: (value: string | undefined | null) => value is string;
export declare const sendRequest: <ResponseData>(params: {
    url: string;
    method: string;
    body?: Record<string, unknown> | FormData;
    type?: string;
    headers?: Record<string, any>;
    formData?: FormData;
    onRequest?: (request: RequestInit) => Promise<void>;
} | string) => Promise<{
    data?: ResponseData;
    error?: Error;
}>;
export declare const setLocalStorageChatflow: (chatflowid: string, chatId: string, saveObj?: Record<string, any>) => void;
export declare const getLocalStorageChatflow: (chatflowid: string) => any;
export declare const removeLocalStorageChatHistory: (chatflowid: string) => void;
export declare const getBubbleButtonSize: (size: "small" | "medium" | "large" | number | undefined) => number;
export declare const setCookie: (cname: string, cvalue: string, exdays: number) => void;
export declare const getCookie: (cname: string) => string;
//# sourceMappingURL=index.d.ts.map