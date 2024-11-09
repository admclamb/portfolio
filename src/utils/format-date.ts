import dayjs from "dayjs";

const formatDate = (date: Date) => dayjs(date).format("MMM DD, YYYY");

export const formatCreatedAtUpdatedAt = (
  createdAt: Date,
  finishedAt: Date | null
) => {
  const createdDate = formatDate(createdAt);
  const finishedDate = finishedAt ? formatDate(finishedAt) : "Current";

  return `${createdDate} - ${finishedDate}`;
};

export const formatDateToYear = (date: Date | null) => {
  if (!date) {
    return "Current";
  }

  return dayjs(date).format("YYYY");
};
