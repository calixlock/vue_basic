let app = new Vue({
  el: "#app",
  data: {
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
});
