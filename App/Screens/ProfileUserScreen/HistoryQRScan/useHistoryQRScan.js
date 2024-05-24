import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import QR from "../../../Services/QRScanService";
export default function useHistoryQRScan({ clientId }) {
  const parseDataAllHistory = useCallback((data) => {
    console.log("data: ", data?.history)
    const historyQRScan = data?.history?.map((qrScan) => ({
      id: qrScan?._id,
      purchaseInfo: qrScan?.purchaseInfo || "",
      plant: qrScan?.qr?.project?.plant?.name || "fake plant",
      projectId: qrScan?.qr?.project?._id || "6635f707f2303b52117102cf",
      time: qrScan?.time || "",
      tx: qrScan?.qr?.txScan || "",
    }));
    console.log("---------fasdfads----------,", historyQRScan);
    return { historyQRScan };
  }, []);

  const {
    data: dataHistoryQRScan,
    isSuccess: isSuccessHistoryQRScan,
    isLoading: isLoadingHistoryQRScan,
  } = useQuery({
    queryKey: ["getHistoryQRScan"],
    queryFn: () => QR.historyScanQR(clientId),
    staleTime: 20 * 1000,
    select: (data) => parseDataAllHistory(data.data.metadata),
    enabled: !!clientId,
  });

  return {
    dataHistoryQRScan: dataHistoryQRScan?.historyQRScan,
    isSuccessHistoryQRScan,
    isLoadingHistoryQRScan,
  };
}
