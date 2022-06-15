interface Bookmark {
    bookmark: any,
}

export const bookmark = {
    namespaced: true,
    state: () : Bookmark => ({
        bookmark: [] as any,
    }),

    mutations: {
        addBookmark(state: Bookmark, payload: any){
            state.bookmark.unshift(payload);
        },

        unBookmark(state: Bookmark, payload: any){
            const item = state.bookmark.find((b: any) => b.id === payload.id);
        
            const indexOfItem = state.bookmark.indexOf(item);
            state.bookmark.splice(indexOfItem, 1);
        }
    },

    getters: {
        bookmark: (state: Bookmark) => state.bookmark
    }
}