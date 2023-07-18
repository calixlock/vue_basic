let app = new Vue({
  el: "#app",
  data: {
    mode: "list",
    memo: {
      id: null,
      content: null,
      regDate: null,
    },
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
    write() {
      this.mode = "write";
    },
    cancel: function () {
      this.mode = "list";
    },
    save: function () {
      this.memos.push({
        id: this.memos.length + 1,
        content: this.memo.content,
        regDate: new Date().toLocaleString(),
      });
      this.memo.content = null;
      this.mode = "list";
    },
  },
});
