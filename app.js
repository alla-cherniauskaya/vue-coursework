const options = {
  data() {
    return {
      courseSteps: [
        {title: 'Основы', headline: 'В блоке Вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем всю базу фреймворка.'},
        {title: 'Компоненты', headline: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', headline: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'VueX', headline: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'CompositionAPI', headline: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ],
      currentCourseStepIndex: 0,
    }
  },
  methods: {
    goToPrevStep() {
      if (this.currentCourseStepIndex !== 0) {
        this.currentCourseStepIndex--;
      }
    },
    goToNextStep() {
      if (this.currentCourseStepIndex !== this.courseSteps.length-1) {
        this.currentCourseStepIndex++;
      }
    },
    beginFromStart() {
      this.currentCourseStepIndex = 0;
    }
  },
  computed: {
    activeStep() {
      return this.courseSteps[this.currentCourseStepIndex];
    },
    courseIsDone() {
      return this.currentCourseStepIndex === this.courseSteps.length-1;
    }
  }
}

const App = Vue.createApp(options);
App.mount('#app');

