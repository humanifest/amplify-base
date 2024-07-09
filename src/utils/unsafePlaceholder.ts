export const unsafePlaceholder = <S>(prev?: S) => {
  throw new Error(
    `Placeholder Function for state: ${prev}. Check createHybridContext for memory leak.`
  );
};
