export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

//format date
export function formatDate(inputDateTime) {
  // Tạo một đối tượng Date từ chuỗi đầu vào
  const date = new Date(inputDateTime);
  // Lấy ngày, tháng, năm, giờ và phút từ đối tượng Date
  const day = date.getDate();
  const month = date.getMonth() + 1; // Lưu ý rằng tháng bắt đầu từ 0
  const year = date.getFullYear();
  const formattedDateTime = `${day}/${month}/${year}`;
  return formattedDateTime;
}
//format Time
export function formatTime(inputDateTime) {
  // Tạo một đối tượng Date từ chuỗi đầu vào
  const date = new Date(inputDateTime);
  // Lấy ngày, tháng, năm, giờ và phút từ đối tượng Date
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  // Tạo chuỗi định dạng "dd/mm/yyyy giờ:phút"
  // const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
}
//format datetime
export function formatDateTime(inputDateTime) {
  // Tạo một đối tượng Date từ chuỗi đầu vào
  const date = new Date(inputDateTime);
  // Lấy ngày, tháng, năm, giờ và phút từ đối tượng Date
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Lưu ý rằng tháng bắt đầu từ 0
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  // Tạo chuỗi định dạng "dd/mm/yyyy giờ:phút"
  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
  return formattedDateTime;
}

export function renderTypeProcess(type) {
  switch (type) {
    case "pesticide":
      return "Phòng trừ sâu bệnh";
    case "fertilize":
      return "Bón phân";
    case "planting":
      return "Gieo trồng";
    case "other":
      return "Hoạt động khác";
    case "cultivation":
      return "Làm đất";
  }
}

export function renderTypeFertilization(type) {
  switch (type) {
    case "baseFertilizer":
      return "Bón lót";
    case "topFertilizer":
      return "Bón thúc";
    case "pest":
      return "Sâu";
    case "disease":
      return "Bệnh";
  }
}

export function renderTypePestAndDisease(type) {
  switch (type) {
    case "pest":
      return "Sâu";
    case "disease":
      return "Bệnh";
  }
}

export function renderTypePlant(type) {
  switch (type) {
    case "herbList":
      return "Rau gia vị";
    case "leafyList":
      return "Rau ăn lá";
    case "rootList":
      return "Củ";
    case "fruitList":
      return "Quả";
    case "fruit":
      return "Quả";
    case "herb":
      return "Rau gia vị";
    case "leafy":
      return "Rau ăn lá";
    case "root":
      return "Củ";
  }
}
export function renderTypeProcessProject(type) {
  switch (type) {
    case "inProgress":
      return "Đang thực hiện";
    case "finished":
      return "Hoàn thành";
    default:
      return "Đã hủy";
  }
}
export function renderTypeStatusDelivery(type) {
  switch (type) {
    case "cancel":
      return "Đã hủy bỏ";
    case "done":
      return "Hoàn thành";
    case "coming":
      return "Đang giao hàng";
    default:
      return "Không có trạng thái";
  }
}

export function formatLocaleDateStringToNormal(dateString) {
  // Tạo đối tượng Date từ chuỗi ngày đầu vào
  var dateParts = dateString.split("/");
  var year = dateParts[2];
  var month = dateParts[0];
  var day = dateParts[1];
  var formattedDate = day + "/" + month + "/" + year;
  return formattedDate;
}
export function getStatusText(status) {
  switch (status) {
    case "started":
      return "Đang thực hiện";
    case "cancel":
      return "Đã hủy";
    case "completed":
      return "Đã hoàn thành";
    default:
      return status;
  }
}
