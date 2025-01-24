<template>
  <form @submit.prevent="handleSearch">
    <label for="cep">Digite o CEP</label>
    <input type="text" id="cep" v-model="cep" />
    <button type="submit">Buscar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cep: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("onSearch", this.cep);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
