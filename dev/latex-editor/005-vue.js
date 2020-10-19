//const toolbox = [];

const app = new Vue({
  el: "#app",
  data: {
    text: "# Type your notes here",
    md: new markdownTreatment(),
    tb: toolbox
  },
  watch: {
    text: function (val) {
      Vue.nextTick(function () {
        refreshMathJax();
      })
    }
  },
  mounted: function () {
    document.getElementsByTagName('textarea')[0].focus();
  },
  computed: {
    textTeX: function () {
      return this.md.makeHtml(this.text);
      //return this.text.replace(/\n/g, "<br />");
    }
  },
  methods: {
    tool: function (key) {
      const textarea = document.getElementsByTagName('textarea')[0];
      let posStart = textarea.selectionStart;
      let posEnd = textarea.selectionEnd;
      const isSlection = posStart !== posEnd;
      let result;
      //console.log(key);
      if (key) {
        result = this.tb[key].func(this, posStart, posEnd);
      }
      if (!!result && !!result.sel) {
        posStart = result.sel.start;
        posEnd = result.sel.end;
      }
      if (!result || !result.noFocus) {
        textarea.focus();
      }
      setTimeout(() => {
        textarea.setSelectionRange(posStart, posEnd);
      }, 0);
    }
  }
});