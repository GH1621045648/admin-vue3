export const actions = {
  /**
   * @param context 上下文对象，这里你可以理解称store本身
   * @param {commit} 直接把commit对象传递过来
   * @param {state} 直接把state对象传递过来
   */
  addAction(context, num) {
    setTimeout(() => {
      context.commit('increment', num);
    }, 100);
  },
};
