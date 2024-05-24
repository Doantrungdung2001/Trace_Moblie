import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import CLIENT from "../../../Services/ClientService";

export default function useClientInformation({ clientId }) {
  const parseDataClient = useCallback((client) => {
    const dataClient = {
      id: client._id,
      name: client.name || "Chưa cập nhật",
      phone: client.phone || "Chưa cập nhật",
      address: client.address || "Chưa cập nhật",
      district: client.district || "Chưa cập nhật",
      status: client.status || "Chưa cập nhật",
      email: client?.email || "Chưa cập nhật",
      history: client.history || "Chưa cập nhật",
      isDeleted: client.isDeleted || "",
    };

    return { dataClient };
  }, []);

  const {
    data: dataClientInformation,
    isSuccess: isSuccessClientInformation,
    isLoading: isLoadingClientInformation,
  } = useQuery({
    queryKey: ["getClientInformation"],
    queryFn: () => CLIENT.getClientById(clientId),
    staleTime: 20 * 1000,
    select: (data) => parseDataClient(data.data.metadata),
    enabled: !!clientId,
  });

  return {
    dataClient: dataClientInformation?.dataClient,
    isSuccessClientInformation,
    isLoadingClientInformation,
  };
}
