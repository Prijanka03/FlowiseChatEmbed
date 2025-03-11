declare const chatbot: {
    initFull: (props: {
        chatflowid: string;
        apiHost?: string;
        onRequest?: (request: RequestInit) => Promise<void>;
        chatflowConfig?: Record<string, unknown>;
        observersConfig?: import("./components/Bot").observersConfigType;
        theme?: import("./features/bubble/types").BubbleTheme;
    } & {
        id?: string;
    }) => void;
    init: (props: {
        chatflowid: string;
        apiHost?: string;
        onRequest?: (request: RequestInit) => Promise<void>;
        chatflowConfig?: Record<string, unknown>;
        observersConfig?: import("./components/Bot").observersConfigType;
        theme?: import("./features/bubble/types").BubbleTheme;
    }) => void;
    destroy: () => void;
};
export default chatbot;
//# sourceMappingURL=web.d.ts.map