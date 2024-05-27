import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import CLIENT from "../../../Services/ClientService";

export default function useClientInformation({ clientId }) {
  const parseDataClient = useCallback((client) => {
    const dataClient = {
      id: client._id,
      name: client.name || "Chưa cập nhật tên",
      phone: client.phone || "Chưa cập nhật sdt",
      address: client.address || "Chưa cập nhật địa chỉ",
      district: client.district || "Chưa cập nhật tỉnh",
      status: client.status || "Chưa cập nhật trạng thái",
      email: client?.email || "Chưa cập nhật email",
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
