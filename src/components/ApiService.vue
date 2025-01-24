<script>
import axios from "axios";

export default {
  async fetchCepData(cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  },
};
</script>
