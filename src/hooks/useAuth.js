import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      return queryClient.getQueryData(["auth"]) || null;
    },
  });
  const mutation = useMutation({
    mutationFn: authService.auth,
    onSuccess: (result) => {
      queryClient.setQueryData(["auth"], result.data);
    },
    onError: () => {
      queryClient.setQueryData(["auth"], null);
    },
  });

  // console.log(result);

  return {
    isLoggedIn: Boolean(result.data && result.data.accessToken),
    isLoading: result.isLoading || mutation.isLoading,
    auth: mutation.mutate,
    token: result.data && result.data.accessToken,
    user: result.data && result.data.user,
  };
};
