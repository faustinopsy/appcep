<template>
  <div>
    <h3>CEP API com Cache</h3>
    <SearchForm @onSearch="handleSearch" />
    <ResultForm v-if="result" :bairro="result.bairro" :cidade="result.localidade" :rua="result.logradouro" />
  </div>
</template>

<script>
import { useCepStore } from "./stores/cepStore";
import SearchForm from "./views/HomeView.vue";
import ResultForm from "./components/ResultForm.vue";

export default {
  components: { SearchForm, ResultForm },
  data() {
    return {
      result: null,
    };
  },
  setup() {
    const cepStore = useCepStore();
    return { cepStore };
  },
  methods: {
    async handleSearch(cep) {
      try {
        this.result = await this.cepStore.fetchCep(cep);
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    },
  },
};
</script>
