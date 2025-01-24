import { defineStore } from "pinia";
import axios from "axios";

export const useCepStore = defineStore("cep", {
  state: () => ({
    cache: {},
  }),
  actions: {
    async fetchCep(cep) {
      console.time("cache");
      if (this.cache[cep]) {
        console.log(`cache: Dados carregados do cache: ${JSON.stringify(this.cache[cep])}`);
        console.timeLog("cache");
        return this.cache[cep];
      }

      try {
        console.time("api");
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        this.cache[cep] = response.data;
        console.log(`api: Dados carregados da API: ${JSON.stringify(response.data)}`);
        console.timeLog("api");
        return response.data;
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
      }
    },
  },
});
