<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[2].nome }}
      </h3>
      <!-- <div class="container-icones">
        <div class="icone">
          <img
            src="../../../../assets/img/icones-receitas/tempo-de-preparo.png"
          />
          <span>25min</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/porcoes.png" />
          <span>8 porções de 150g</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/dificuldade.png" />
          <span>fácil</span>
        </div>
      </div> -->
      <hr class="border-t-1 border-gray-300 my-5" />
      <div class="mt-10">
        <div class="rounded-lg">
          <div id="video-apresentacao" class="aspect-w-16 aspect-h-9">
            <youtube
              video-id="hJODq2613B0"
              class="border-white border-4 shadow-xl rounded-sm"
              @ended="ended"
            />
          </div>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Ingredientes
        </h3>

        <ul class="lista-check mb-0">
          <li>Filé de peito de frango - 500g</li>
          <li>Creme de leite - 100g</li>
          <li>Maionese - 100g</li>
          <li>Pimenta do reino - Q.B</li>
          <li>Cenoura - 100g</li>
          <li>Milho - 100g</li>
          <li>Uva passa - 100g</li>
          <li>Batata palha - 100g</li>
          <li>Maçã - 150g</li>
          <li>Repolho roxo ou branco - 200g</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <p>
          Corte o frango, tempere e cozinhe. Em seguida, desfie o frango e
          reserve. Lave as verduras e descasque. Rale todas as verduras e
          reserve. Em uma travessa, misture o frango desfiado com o creme de
          leite e a maionese. Coloque a cenoura, a maçã, a uva passa, o milho, a
          pimenta do reino e misture bem. Em seguida, coloque a batata palha e
          misture. Pronto! Sirva em seguida.
        </p>

        <p>
          OBS: O "Q.B" que aparece na receita, significa “Quanto baste”, ou
          seja, no preparo, você decide quanto quer colocar de sal.
        </p>
      </div>

      <button
        @click.prevent="$router.push('/aula-04')"
        class="mx-auto bg-primary-color xl:hover:bg-primary-color-hover xl:transform xl:hover:-translate-y-1 xl:transition-all h-12 w-full md:w-60 rounded-lg text-white flex justify-center items-center"
      >
        <v-icon class="icone-setas mr-3" name="arrow-left" />
        Voltar para receitas
      </button>
    </div>
  </div>
</template>

<script>
export default {
  title: "Aula 03 - Receitas: Salpicão de Frango",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_3");
    },
  },
  created() {
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", false);
    this.$store.commit("ESTA_NA_AULA_2", false);
    this.$store.commit("ESTA_NA_AULA_3", false);
    this.$store.commit("ESTA_NA_AULA_4", true);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  },
};
</script>

<style scoped>
.container-icones {
  display: flex;
  gap: 10px;
  justify-content: center;
  max-width: 500px;
  margin: 12px auto;
}

.icone {
  display: flex;
  justify-content: center;
}

.icone span {
  font-size: 1rem;
}

.icone img {
  width: auto;
  height: 17px;
  margin-right: 5px;
}

svg {
  fill: white;
}
</style>
