const app = new Vue({
  el: "#app",
  data: {
    text: "$hi$"
  },
  watch: {
    text: function (val) {
      Vue.nextTick(function () {
        MathJax.typesetPromise();
      })
    }
  },
  computed: {
    textTeX: function () {
      return this.text.replace(/\n/g, "<br />");
    }
  }
});