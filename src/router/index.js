import Vue from "vue";
import VueRouter from "vue-router";

import Apresentacao from "@/views/Apresentacao.vue";
import Aula01Introducao from "@/views/aulas/aula-01/Aula01Introducao.vue";
import Aula02Introducao from "@/views/aulas/aula-02/Aula02Introducao.vue";
import Aula03Introducao from "@/views/aulas/aula-03/Aula03Introducao.vue";
import Aula04Introducao from "@/views/aulas/aula-04/Aula04Introducao.vue";

import Receitas from "@/views/aulas/aula-04/Receitas.vue";
import SaladaDeLegumes from "@/views/aulas/aula-04/receitas/SaladaDeLegumes.vue";
import SalpicaoDeFrango from "@/views/aulas/aula-04/receitas/SalpicaoDeFrango.vue";
import BaiaoDeDois from "@/views/aulas/aula-04/receitas/BaiaoDeDois.vue";
import BatataPalha from "@/views/aulas/aula-04/receitas/BatataPalha.vue";
import ArrozTemperado from "@/views/aulas/aula-04/receitas/ArrozTemperado.vue";
import Vinagrete from "@/views/aulas/aula-04/receitas/Vinagrete.vue";
import Pacoca from "@/views/aulas/aula-04/receitas/Pacoca.vue";
import FarofaDeCuscuz from "@/views/aulas/aula-04/receitas/FarofaDeCuscuz.vue";
import LinguaAcebolada from "@/views/aulas/aula-04/receitas/LinguaAcebolada.vue";
import FrangoTrinchado from "@/views/aulas/aula-04/receitas/FrangoTrinchado.vue";
import CremeDeGalinha from "@/views/aulas/aula-04/receitas/CremeDeGalinha.vue";
import VatapaDeFrango from "@/views/aulas/aula-04/receitas/VatapaDeFrango.vue";
import CarneDeSol from "@/views/aulas/aula-04/receitas/CarneDeSol.vue";
import FarofaTemperada from "@/views/aulas/aula-04/receitas/FarofaTemperada.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apresentacao",
    component: Apresentacao,
  },
  {
    path: "/aula-01",
    name: "Aula 01 - Boas práticas na fabricação de alimentos (BPF)",
    component: Aula01Introducao,
  },
  {
    path: "/aula-02",
    name: "Aula 02 - Conhecendo os utensílios",
    component: Aula02Introducao,
  },
  {
    path: "/aula-03",
    name: "Aula 03 - Cortes de vegetais",
    component: Aula03Introducao,
  },
  {
    path: "/aula-04",
    name: "Aula 04 - Receitas",
    component: Aula04Introducao,
    children: [
      {
        path: "",
        name: "Aula 04 - Receitas",
        component: Receitas,
      },
      {
        path: "vinagrete",
        name: "Aula 04 - Receita: Vinagrete",
        component: Vinagrete,
      },
      {
        path: "salada-de-legumes",
        name: "Aula 04 - Receita: Salada de Legumes",
        component: SaladaDeLegumes,
      },
      {
        path: "salpicao-de-frango",
        name: "Aula 04 - Receita: Salpicao de Frango",
        component: SalpicaoDeFrango,
      },
      {
        path: "batata-palha",
        name: "Aula 04 - Receita: Batata Palha",
        component: BatataPalha,
      },
      {
        path: "farofa-de-cuscuz",
        name: "Aula 04 - Receita: Farofa de Cuscuz",
        component: FarofaDeCuscuz,
      },
      {
        path: "pacoca",
        name: "Aula 04 - Receita: Paçoca",
        component: Pacoca,
      },
      {
        path: "arroz-temperado",
        name: "Aula 04 - Receita: Arroz Temperado",
        component: ArrozTemperado,
      }, 
      {
        path: "baiao-de-dois",
        name: "Aula 04 - Receita: Baião de Dois",
        component: BaiaoDeDois,
      },
      {
        path: "lingua-acebolada",
        name: "Aula 04 - Receita: Linguiça Acebolada",
        component: LinguaAcebolada,
      },
      {
        path: "frango-trinchado",
        name: "Aula 04 - Receita: Frango Trinchado",
        component: FrangoTrinchado,
      },
      {
        path: "creme-de-galinha",
        name: "Aula 04 - Receita: Creme de Galinha",
        component: CremeDeGalinha,
      },
      {
        path: "vatapa-de-frango",
        name: "Aula 04 - Receita: Vatapa de Frango",
        component: VatapaDeFrango,
      },
      {
        path: "carne-de-sol",
        name: "Aula 04 - Receita: Carne de Sol",
        component: CarneDeSol,
      },
      {
        path: "farofa-temperada",
        name: "Aula 04 - Receita: Farofa Temperada",
        component: FarofaTemperada,
      },
    ],
  },
];

const router = new VueRouter({
  //mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

//salvar ultima pagina visitada ao reabrir o site
router.afterEach((to) => {
  localStorage.setItem("router-comidas-regionais", to.name);
});

let isFirstTransition = true;
router.beforeEach((to, from, next) => {
  const lastRouteName = localStorage.getItem("router-comidas-regionais");
  const shouldRedirect = Boolean(
    to.name === "Apresentacao" && lastRouteName && isFirstTransition
  );

  if (shouldRedirect && to.name !== from.name) {
    isFirstTransition = false;
    next({ name: lastRouteName });
    console.log("pegou o localstorage");
  } else {
    next();
    console.log("Navegou normal sem reabrir a aba");
  }
});

export default router;
