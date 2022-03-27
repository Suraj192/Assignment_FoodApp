export const log = () => {
  return (
    parseInt(carbs.value) * 4 +
    parseInt(protein.value) * 4 +
    parseInt(fat.value) * 9
  );
};
