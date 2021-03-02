import { useQuery } from "@apollo/client";

function usePromiseQuery(query) {
    const { refetch } = useQuery(query, { skip: true });

    const promiseCallQuery = (variables) => {
        return refetch(variables);
    };

    return promiseCallQuery;
}

export default usePromiseQuery;
