import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bemVindoDeVolta: null,
    menuShow: false,
    temNome: false,
    iconeMenu: "bars",
    modalNome: true,
    modalAulaCompleta: false,
    progresso: Number("0"),
    nomeDoCurso: "Comidas Regionais",
    aluno: "",
    btnAlunoInativo: true,
    modalCursoFinalizado: false,
    aulas: [
      {
        id: "1",
        numeroAula: "01",
        nomeAula: "Boas práticas na manipulação de alimentos",
        descricaoAula:
          "Nesta aula vamos compreender que a preparação dos alimentos requer atenção e aplicação de cuidados específicos, desde a compra dos insumos até chegar às mãos de quem vai consumir o alimento. Você compreenderá que o cuidado com o ambiente, a atenção da pessoa que manipula o alimento e as formas corretas de manipulação, são fundamentais para garantir uma boa qualidade do produto e a segurança para quem vai produzir. Vamos à aula, então?",
        img: "aula-1.jpg",
        link: "/aula-01",
        completa: false,
      },
      {
        id: "2",
        numeroAula: "02",
        nomeAula: "Conhecendo os utensílios",
        descricaoAula:
          "Nesta aula, vamos conhecer os utensílios que você utilizará para produzir as receitas deste curso. Mesmo que você não tenha em casa todos os utensílios que serão apresentados, é importante que você os conheça e saiba qual a aplicabilidade de cada um deles, na preparação das receitas. Vamos à aula, então?",
        img: "aula-2.jpg",
        link: "/aula-02",
        completa: false,
      },
      {
        id: "3",
        numeroAula: "03",
        nomeAula: "Cortes de vegetais",
        descricaoAula:
          "Nesta aula vamos compreender a importância dos cortes dos vegetais, seus diferentes tipos de técnicas, aplicações e finalidades para elaboração dos mais diversos pratos.",
        img: "aula-3.jpg",
        link: "/aula-03",
        completa: false,
      },
      {
        id: "4",
        numeroAula: "04",
        nomeAula: "Receituário",
        descricaoAula:
          "Nesta aula iremos aprender sobre opções de massas para a base da pizza, fazendo uma variação de sabor e trazendo uma proposta mais personalizada. Também será possível aprender como fazer um molho de tomate artesanal, recheios deliciosos e a montagem, para equilibrar sabor, textura e preço.",
        img: "aula-4.jpg",
        link: "/aula-04",
        receita_1_completa: false,
        receita_2_completa: false,
        receita_3_completa: false,
        receita_4_completa: false,
        receita_5_completa: false,
        receita_6_completa: false,
        receita_8_completa: false,
        receita_9_completa: false,
        receita_10_completa: false,
        receita_11_completa: false,
        receita_12_completa: false,
        receita_13_completa: false,
        receita_14_completa: false,
      },
    ],
    navbarItems: [
      {
        id: "1",
        nome: "Apresentação",
        icone: "home",
        link: "/",
        estaNaAula: false,
      },
      {
        id: "2",
        nome: "Aula 01 - Boas práticas na fabricação de alimentos (BPF)",
        icone: "book-open",
        link: "/aula-01",
        estaNaAula: false,
      },
      {
        id: "3",
        nome: "Aula 02 - Conhecendo os utensílios",
        icone: "book-open",
        link: "/aula-02",
        estaNaAula: false,
      },
      {
        id: "4",
        nome: "Aula 03 - Tipos de Corte",
        icone: "book-open",
        link: "/aula-03",
        estaNaAula: false,
      },
      {
        id: "5",
        nome: "Aula 04 - Receitas",
        icone: "book-open",
        link: "/aula-04",
        estaNaAula: false,
      },
    ],
    receitas: [
      {
        id: 1,
        nome: "Vinagrete",
        imagem: "vinagrete.jpg",
        tempo: "55min",
        porcoes: "12 porções",
        calorias: "100kcal",
        dificuldade: "fácil",
        path: "/aula-04/vinagrete",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 2,
        nome: "Salada de Legumes",
        imagem: "salada-de-legumes.jpg",
        tempo: "25min",
        porcoes: "8 porções",
        calorias: "300kcal",
        dificuldade: "fácil",
        path: "/aula-04/salada-de-legumes",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 3,
        nome: "Salpicao de Frango",
        imagem: "salpicao-de-frango.jpg",
        tempo: "50min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/salpicao-de-frango",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 4,
        nome: "Batata palha",
        imagem: "batata-palha.jpg",
        tempo: "30min",
        porcoes: "12 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/batata-palha",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 5,
        nome: "Farofa de Cuscuz",
        imagem: "farofa-de-cuscuz.jpg",
        tempo: "60min",
        porcoes: "20 porções",
        calorias: "200kcal",
        dificuldade: "médio",
        path: "/aula-04/farofa-de-cuscuz",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 6,
        nome: "Paçoca",
        imagem: "pacoca.jpg",
        tempo: "45min",
        porcoes: "85 porções",
        calorias: "200kcal",
        dificuldade: "médio",
        path: "/aula-04/pacoca",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 7,
        nome: "Arroz temperado",
        imagem: "arroz-temperado.jpg",
        tempo: "35min",
        porcoes: "16 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/arroz-temperado",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 8,
        nome: "Baião de dois",
        imagem: "baiao-de-dois.jpg",
        tempo: "40min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/baiao-de-dois",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 9,
        nome: "Linguiça acebolada",
        imagem: "linguica-acebolada.jpg",
        tempo: "40min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/lingua-acebolada",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 10,
        nome: "Frango trinchado",
        imagem: "frango-trinchado.jpg",
        tempo: "40min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/frango-trinchado",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 11,
        nome: "Creme de galinha",
        imagem: "creme-de-galinha.jpg",
        tempo: "40min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/creme-de-galinha",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 12,
        nome: "Vatapá de frango",
        imagem: "vatapa-de-frango.jpg",
        tempo: "40min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/vatapa-de-frango",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 13,
        nome: "Carne de sol",
        imagem: "carne-de-sol.jpg",
        tempo: "40min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/carne-de-sol",
        finalizada: false,
        skeleton: true,
      },
      {
        id: 14,
        nome: "Farofa temperada",
        imagem: "farofa-temperada.jpg",
        tempo: "40min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-04/farofa-temperada",
        finalizada: false,
        skeleton: true,
      },
    ],
  },
  mutations: {
    ESTA_NA_AULA_APRESENTACAO(state, payload) {
      state.navbarItems[0].estaNaAula = payload;
    },
    ESTA_NA_AULA_1(state, payload) {
      state.navbarItems[1].estaNaAula = payload;
    },
    ESTA_NA_AULA_2(state, payload) {
      state.navbarItems[2].estaNaAula = payload;
    },
    ESTA_NA_AULA_3(state, payload) {
      state.navbarItems[3].estaNaAula = payload;
    },
    ESTA_NA_AULA_4(state, payload) {
      state.navbarItems[4].estaNaAula = payload;
    },
    modalNomeOposto(state) {
      state.modalNome = true;
    },
    iconeMenuOposto(state) {
      state.iconeMenu = "bars";
    },
    menuShowOposto(state) {
      state.menuShow = !state.menuShow;
    },
    SALVAR_NOME(state) {
      if (state.aluno.length >= 3 && state.aluno.length < 15) {
        state.temNome = true;
        state.modalNome = false;
        localStorage.setItem("Comidas Regionais", JSON.stringify(state));
      } else {
        ("Comidas Regionais");
        return;
      }
    },
    SALVAR_LOCAL_STORAGE(state) {
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },

    COMPLETAR_AULA_1(state) {
      if (!state.aulas[0].completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[0].completa = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_AULA_2(state) {
      if (!state.aulas[1].completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[1].completa = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_AULA_3(state) {
      if (!state.aulas[2].completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].completa = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_1(state) {
      if (!state.aulas[2].receita_1_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_1_completa = true;
      state.receitas[0].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_2(state) {
      if (!state.aulas[2].receita_2_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_2_completa = true;
      state.receitas[1].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_3(state) {
      if (!state.aulas[2].receita_3_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_3_completa = true;
      state.receitas[2].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_4(state) {
      if (!state.aulas[2].receita_4_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_4_completa = true;
      state.receitas[3].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_5(state) {
      if (!state.aulas[2].receita_5_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_5_completa = true;
      state.receitas[4].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_6(state) {
      if (!state.aulas[2].receita_6_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_6_completa = true;
      state.receitas[5].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_7(state) {
      if (!state.aulas[2].receita_7_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_7_completa = true;
      state.receitas[6].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_8(state) {
      if (!state.aulas[2].receita_8_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_8_completa = true;
      state.receitas[7].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_9(state) {
      if (!state.aulas[2].receita_9_completa) {
        state.progresso = state.progresso + 10;
      }
      state.aulas[2].receita_9_completa = true;
      state.receitas[8].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_10(state) {
      if (!state.aulas[2].receita_10_completa) {
        state.progresso = state.progresso + 10;
      }
      state.aulas[2].receita_10_completa = true;
      state.receitas[9].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_11(state) {
      if (!state.aulas[2].receita_11_completa) {
        state.progresso = state.progresso + 10;
      }
      state.aulas[2].receita_11_completa = true;
      state.receitas[10].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_12(state) {
      if (!state.aulas[2].receita_12_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_12_completa = true;
      state.receitas[11].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_13(state) {
      if (!state.aulas[2].receita_13_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_13_completa = true;
      state.receitas[12].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },
    COMPLETAR_RECEITA_14(state) {
      if (!state.aulas[2].receita_14_completa) {
        state.progresso = state.progresso + 5;
      }
      state.aulas[2].receita_14_completa = true;
      state.receitas[13].finalizada = true;
      localStorage.setItem("Comidas Regionais", JSON.stringify(state));
    },

    SHOW_MODAL_COMPLETAR_AULA_1(state) {
      state.modalAulaCompleta = true;
    },
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("Comidas Regionais")) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(
            state,
            JSON.parse(localStorage.getItem("Comidas Regionais"))
          )
        );
        if (state.aluno.length >= 3) {
          state.bemVindoDeVolta = true;
        }
        localStorage.setItem("Comidas Regionais", JSON.stringify(state));
      } else {
        state.modalNome = true;
        localStorage.setItem("Comidas Regionais", JSON.stringify(state));
      }
    },
  },
  actions: {
    abrirModalNome({ commit }) {
      commit("modalNomeOposto");
      if (this.state.menuShow) {
        commit("iconeMenuOposto");
        commit("menuShowOposto");
      }
    },
    finalizarAula01({ commit }) {
      commit("SHOW_MODAL_COMPLETAR_AULA_1");
      //commit('COMPLETAR_AULA_1')
    },
    finalizarAula02({ commit }) {
      commit("SHOW_MODAL_COMPLETAR_AULA_1");
      //commit('COMPLETAR_AULA_2')
    },
    finalizarAula03({ commit }) {
      commit("SHOW_MODAL_COMPLETAR_AULA_1");
      //commit('COMPLETAR_AULA_2')
    },
  },
  getters: {
    /*     nomeEscolhido(state) {
      return localStorage.setItem('salgados-para-festas', JSON.stringify(state))
    } */
  },
});
