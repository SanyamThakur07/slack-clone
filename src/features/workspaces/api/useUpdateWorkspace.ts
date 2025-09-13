import { useMutation } from "@tanstack/react-query"
import { useConvexMutation } from "@convex-dev/react-query"
import { api } from "../../../../convex/_generated/api"


export const useUpdateWorkspace = () => {
    const mutation = useConvexMutation(api.workspaces.update);

    const useUpdateWorkspace = useMutation({
        mutationFn: mutation,
    })

    return useUpdateWorkspace;
}