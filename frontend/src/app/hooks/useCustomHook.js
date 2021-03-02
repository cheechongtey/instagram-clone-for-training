import usePromiseHook from "./usePromiseQuery";

export const useGetStoryHook = (query) => {
    const hook = usePromiseHook(query);

    const getStory = async ({ filter }) => {
        const result = await hook();
        if (result?.error || !result?.data) return [];

        return result.data.stories.map((x) => {
            let medias = x.medias.map((v) => {
                const header = {
                    heading: x.user.username,
                    profileImage: `${process.env.REACT_APP_MEDIA_URL}${x.user.avatar}`,
                    subheading: "Posted 30m ago",
                };

                return {
                    url: `${process.env.REACT_APP_MEDIA_URL}${v}`,
                    header,
                };
            });

            return {
                ...x,
                medias,
            };
        });
    };

    return getStory;
};

export const useGetPostHook = (query) => {
    const hook = usePromiseHook(query);

    const getPosts = async ({ filter }) => {
        console.log(query);
        const result = await hook();
        console.log(result);
        if (result?.error || !result?.data) return [];

        return result.data.posts;
    };

    return getPosts;
};
