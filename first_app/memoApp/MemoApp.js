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
      // {
      //   id: 1,
      //   content: "memo #1",
      //   regDate: new Date().toLocaleString(),
      // },
      // {
      //   id: 2,
      //   content: "memo #2",
      //   regDate: new Date().toLocaleString(),
      // },
      // {
      //   id: 3,
      //   content: "memo #3",
      //   regDate: new Date().toLocaleString(),
      // },
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

      localStorage.setItem("memos", JSON.stringify(this.memos));
    },
  },
  // 초기 memo_List을 가져오도록 설정
  created() {
    let memos = localStorage.getItem("memos");
    if (memos) {
      this.memos = JSON.parse(memos);
    }
  },
});
