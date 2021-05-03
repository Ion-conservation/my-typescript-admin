<script>
export default {
  name: "anchored-heading",
  render: function (h) {
    if (this.level === 1) {
      return h(
        "h1",
        {
          on: {
            click: this.handleClick,
          },
        },
        "这是h1标题"
      );
    } else {
      return h(
        "div",
        {
          on: {
            click: this.handleClick,
          },
        },
        "这是div"
      );
    }
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      e.stopPropagation();
      console.log(e.target);
    },
  },
};
</script>
