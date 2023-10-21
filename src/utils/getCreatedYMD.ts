export const getCreatedYMD = (createdAtTimeStamp: number) => {
  const createdAt = new Date(createdAtTimeStamp);

  const year = createdAt.getFullYear();
  const month = String(createdAt.getMonth() + 1).padStart(2, '0');
  const day = String(createdAt.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
