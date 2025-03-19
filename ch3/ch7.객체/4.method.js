const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}:'사과'`); //객체 내부에서 키워드에 접근하려면 this를 붙여줘야함.
  },
};

apple.display();
