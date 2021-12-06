export const state = () => ({
  id: 1,
  all: [],
});

export const actions = {
  async getPosts({ commit }) {
    try {
      const results = await this.$axios.get("/posts");
      commit("setPosts", results.data);
    } catch (error) {
      console.log(error);
    }
  },
};

export const mutations = {
  setPosts(state, posts) {
    state.all = posts;
  },
};
