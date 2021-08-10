const displayNumber = (num: number): string => {
  if (num < 1000) return num.toString();

  if (num < 1000000) {
    const thousands = Math.floor(num / 1000);
    const almostThousands = Math.floor((num % 1000) / 100);

    return `${thousands}.${almostThousands}k`;
  }

  const millions = Math.floor(num / 1000000);
  const almostMillions = Math.floor((num % 1000000) / 100000);

  return `${millions}.${almostMillions}m`;
};

export default displayNumber;
