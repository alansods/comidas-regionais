<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[6].nome }}
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
              video-id="yyXtUuLXv5A"
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
          <li>
            Arroz branco - 1kg
          </li>
          <li>Alho in natura - 50g</li>
          <li>Óleo ou azeite  - 150g</li>
          <li>Sal para cozimento do arroz - Q.B</li>
          <li>Linguiça calabresa - 1kg</li>
          <li>Milho verde - 300g</li>
          <li>Pimentão verde - 300g</li>
          <li>Cenoura = 300g</li>
          <li>Água - 2kg</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Preparação 1
        </h3>

        <p>
          Corte as verduras e reserve. Coloque em uma panela o óleo e o alho picado, a calabresa, o pimentão, a cenoura e o milho verde. Deixe fritar bem. Adicione o arroz e mexa bem por 2 minutos. Adicione a água até cobrir o arroz. Espere ferver. Com uma colher, retire parte do arroz para ver se a água secou. Se verificar que secou, acrescente mais um pouco de água para finalizar o cozimento. Prove o arroz para perceber o sal e a textura. Se estiver conforme o esperado, pronto! Agora, é só servir!
        </p>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Preparação 2
        </h3>

        <p>
          Frite a calabresa em fogo baixo até que ela libere gordura. Em seguida, acrescente as verduras e refogue bem. Quanto mais as verduras forem refogadas, mais saborosa ficará a comida. Por último, acrescente o arroz já cozido, e o milho e mexa bem. Sirva em seguida.
        </p>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
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
  title: "Aula 03 - Receitas: Arroz Temperado",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_7");
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
