import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const createHookFromService =
  (service, key) =>
  ({ id, enableAll = false, enableOne = true }) => {
    const queryClient = useQueryClient();
    const queryAll = useQuery({
      queryKey: [key],
      queryFn: () => service.getAll(),
      enabled: enableAll,
    });
    const queryOne = useQuery({
      queryKey: [key + "-" + id],
      queryFn: () => service.getOne(id),
      enabled: enableOne,
    });
    const idKey = key + "-" + id;
    const createOne = useMutation({
      mutationFn: (data) => service.createOne(id, data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [key] });
        queryClient.invalidateQueries({ queryKey: [idKey] });
      },
    });

    const deleteOne = useMutation({
      mutationFn: (data) => service.deleteOne(id, data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [key] });
        queryClient.invalidateQueries({ queryKey: [idKey] });
      },
    });

    const updateOne = useMutation({
      mutationFn: (data) => service.updateOne(id, data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [key] });
        queryClient.invalidateQueries({ queryKey: [idKey] });
      },
    });

    return {
      getAll: queryAll.refetch,
      getOne: queryOne.refetch,
      createOne: createOne.mutate,
      updateOne: updateOne.mutate,
      deleteOne: deleteOne.mutate,
      items: queryAll.data,
      item: queryOne.data,
    };
  };
