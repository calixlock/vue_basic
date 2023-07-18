let app = new Vue({
  el: "#app",
  data: {
    mode: "list",
    memos: [
      {
        id: 1,
        content: "memo #1",
        regDate: new Date().toLocaleString(),
      },
      {
        id: 2,
        content: "memo #2",
        regDate: new Date().toLocaleString(),
      },
      {
        id: 3,
        content: "memo #3",
        regDate: new Date().toLocaleString(),
      },
    ],
  },
  methods: {
    write: function () {
      this.mode = "write";
    },
    cancel: function () {
      this.mode = "list";
    },
  },
});
