import { useMutation } from "@tanstack/react-query"
import { useConvexMutation } from "@convex-dev/react-query"
import { api } from "../../../../convex/_generated/api"


export const useDeleteWorkspace = () => {
    const mutation = useConvexMutation(api.workspaces.remove);

    const useDeleteWorkspace = useMutation({
        mutationFn: mutation,
    })

    return useDeleteWorkspace;
}