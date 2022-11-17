import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const createHookFromService =
  (service, key) =>
  ({ id, enableAll = false, enableOne = true, config }) => {
    const queryClient = useQueryClient();
    const queryAll = useQuery({
      queryKey: [key],
      queryFn: () => service.getAll(config),
      enabled: enableAll,
    });
    const queryOne = useQuery({
      queryKey: [key + "-" + id],
      queryFn: () => service.getOne(id),
      enabled: enableOne,
    });
    const idKey = key + "-" + id;
    const createOne = useMutation({
      mutationFn: service.createOne,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [key] });
        queryClient.invalidateQueries({ queryKey: [idKey] });
      },
    });

    const deleteOne = useMutation({
      mutationFn: service.deleteOne,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [key] });
        queryClient.invalidateQueries({ queryKey: [idKey] });
      },
    });

    const updateOne = useMutation({
      mutationFn: service.updateOne,
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
