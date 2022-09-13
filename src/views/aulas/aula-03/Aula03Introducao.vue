<template>
  <div id="aula-01">
    <ModalAula01Completa
      :numeroAula="$store.state.aulas[2].numeroAula"
      :nomeAula="$store.state.aulas[2].nomeAula"
      :linkContinuar="$store.state.aulas[3].link"
    />

    <div
      style="background-position: bottom"
      id="container-bg-video"
      class="img-bg-aula bg-cover h-1/4 px-5 pb-10 md:py-8 xl:px-0 mx-auto text-white"
    >
      <div
        id="container-all-content-bg-video"
        class="w-full xl:max-w-screen-lg mx-auto flex flex-col xl:flex-row xl:items-center pt-12 xl:pt-7 xl:pb-5"
      >
        <div id="titulo-curso" class="xl:w-3/4 text-left">
          <div class="flex items-center">
            <v-icon
              name="book-open"
              class="mr-2 text-xl xl:text-xl fill-current"
            />
            <h2 class="text-xl xl:text-xl font-light shadow-sm">
              Aula {{ $store.state.aulas[2].numeroAula }}
            </h2>
          </div>
          <h3 class="text-3xl xl:text-4xl font-bold shadow-sm">
            {{ $store.state.aulas[2].nomeAula }}
          </h3>
          <hr style="opacity: 40%; margin: 15px 0" />
          <p class="mt-2 font-light" style="width 80%">
            {{ $store.state.aulas[2].descricaoAula }}
          </p>
        </div>
      </div>
    </div>

    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <div class="bg-white p-8 rounded-lg shadow my-5">
        <p>
          Você já deve ter escutado a seguinte expressão: "Comida se come
          primeiro com os olhos". Isso se deve à sua finalização e apresentação!
          Quanto mais bonito o prato, mais temos vontade de saborear, não é
          mesmo? Contudo, para você deixar os pratos bem atraentes, é necessário
          entender e aplicar algumas técnicas de cortes, utilizadas na
          Gastronomia. Aqui são apresentados os cortes básicos utilizados:
        </p>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <p><strong>Brunoise:</strong> cubinhos regulares de 3mm X 3mm X 3mm.</p>

        <img style="margin-top: 10px" src="@/assets/img/tipos-de-corte/brunoise.jpg" />
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <p>
          <strong>Julienne:</strong> bastõezinhos regulares de 8mm X 3mm X 3cm.
        </p>

        <img style="margin-top: 10px" src="@/assets/img/tipos-de-corte/julienne.png" />
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <p><strong>Bâtonnet:</strong> bastões regulares de 8mm X 8mm X 3cm.</p>

        <img style="margin-top: 10px" src="@/assets/img/tipos-de-corte/batonnet.png" />
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <p>
          <strong>Chiffonnade:</strong> Corte fino e regular, são tiras finas de
          folhas.
        </p>

        <img style="margin-top: 10px" src="@/assets/img/tipos-de-corte/chiffonnade.png" />
      </div>

      <div class="flex justify-around mt-12">
        <router-link to="/aula-02">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <div @click="$store.dispatch('finalizarAula03')">
          <NavButton :icone="'arrow-right'"></NavButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";

export default {
  title: "Aula 03 - Cortes de vegetais",
  components: { NavButton },
  created() {
    this.$store.commit("COMPLETAR_AULA_3");
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", false);
    this.$store.commit("ESTA_NA_AULA_2", false);
    this.$store.commit("ESTA_NA_AULA_3", true);
    this.$store.commit("ESTA_NA_AULA_4", false);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
    this.$store.state.modalAulaCompleta = false;
  },
};
</script>

<style scoped></style>
