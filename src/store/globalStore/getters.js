export const getters = {
  listCount(state) {
    let count = state.count;
    return (count += 100);
  },
};
