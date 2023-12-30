import { publicProcedure, router } from "./trpc";
export const appRouter = router({
    getTodos: publicProcedure.query(() => {
        return [
            { id: 1, title: "Todo 1" },
            { id: 2, title: "Todo 2" },
            { id: 3, title: "Todo 3" },
        ];
    }),
});

export type AppRouter = typeof appRouter;
