<template>
  <div>
    <h2>Resultados</h2>
    <div>
      <label for="bairro">Bairro:</label>
      <input type="text" id="bairro" :value="bairro" readonly />
    </div>
    <div>
      <label for="cidade">Cidade:</label>
      <input type="text" id="cidade" :value="cidade" readonly />
    </div>
    <div>
      <label for="rua">Rua:</label>
      <input type="text" id="rua" :value="rua" readonly />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bairro: { type: String, default: "" },
    cidade: { type: String, default: "" },
    rua: { type: String, default: "" },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

div {
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
