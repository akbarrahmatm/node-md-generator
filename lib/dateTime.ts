// Format YYYY-MM-DD HH-MM-SS

export const formattedDate = (): string => {
  const d = new Date();
  const date = d.toISOString().split("T")[0];
  const time = d.toTimeString().split(" ")[0].replace(/:/g, "-");
  return `${date} ${time}`;
};

export const formattedDateSlug = (): string => {
  const d = new Date();
  const date = d.toISOString().split("T")[0];
  const time = d.toTimeString().split(" ")[0].replace(/:/g, "-");
  return `${date}-${time}`;
};
