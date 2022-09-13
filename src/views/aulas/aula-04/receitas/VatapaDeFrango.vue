<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[11].nome }}
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
              video-id="9TLyIjn4Jgc"
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
          <li>Cebola - 100g</li>
          <li>Pimentão - 100g</li>
          <li>Tomates - 100g</li>
          <li>Dente de alho - 50g</li>
          <li>Páprica defumada - 5g</li>
          <li>Sal - Q.B</li>
          <li>Cheiro verde - 1/2 maço</li>
          <li>Leite líquido  - 1LT</li>
          <li>Leite de coco - 400g</li>
          <li>Pães franceses adormecidos - 14 unid</li>
          <li>Tablete de caldo de galinha - 44g</li>
          <li>Azeite de dendê - 150g</li>
          <li>Pimenta malagueta (opcional) - 5g</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <p>
          Coloque os pães picados dentro de um recipiente e despeje o leite líquido. Deixe hidratar por 30 minutos. Em seguida, bata no liquidificador até dissolver todos os pães. Reserve. Corte as verduras e coloque em uma panela com azeite de dendê, para refogar todas as verduras. Quando murcharem, adicione o frango e vá mexendo. Coloque o leite de coco. A mistura de pães batido no liquidificador você leva ao fogo e não pare de mexer até engrossar. Coloque no refogado do frango, vá mexendo até ferver e soltar do fundo da panela. Por último, finalize com o cheiro verde.
        </p>

        <p>
          OBS: O "Q.B" que aparece na receita, significa “Quanto baste”, ou seja, no preparo, você decide quanto quer colocar de sal.
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
  title: "Aula 03 - Receitas: Vatapá de frango",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_12");
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
