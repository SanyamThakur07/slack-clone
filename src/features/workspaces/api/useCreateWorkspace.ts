import { useMutation } from "@tanstack/react-query";
import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api"



export const useCreateWorkspace = () => {
    const mutation = useConvexMutation(api.workspaces.create);

    const createWorkspace = useMutation({
        mutationFn: mutation,
    });

    return createWorkspace;
};