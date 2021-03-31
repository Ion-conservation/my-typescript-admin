<script>
export default {
  name: "JSX",
  render() {
    return (
      <div>
        <h1 style="color: red" class="isActive">
          JSX语法 {this.desc}
        </h1>
        <a-input
          v-model_trim={this.text}
          placeholder={this.placeholder}
          style={{ color: "blue" }}
          class={{ "my-input": true, isActive: false }}
        ></a-input>
        <a-button type="primary" onclick={this.hanleClick}>
          事件绑定
        </a-button>
        <ul>
          {this.userList.map((ele) => (
            <li>{ele.name}</li>
          ))}
        </ul>
      </div>
    );
  },
  data() {
    return {
      desc: "javascript xml",
      placeholder: "请输入",
      text: "",
      userList: [
        { name: "小明" },
        { name: "张飞" },
        { name: "刘备" },
        { name: "我" },
      ],
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    hanleClick() {
      console.log("事件绑定");
    },
  },
};
</script>

<style>
</style>