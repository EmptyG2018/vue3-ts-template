const pathComponentTypeMap = {
  "布局组件：layout": "src/components/layout/{{properCase name}}.vue",
  "基础组件: base": "src/components/{{properCase name}}.vue",
  "业务组件：module": "src/components/module/{{properCase name}}.vue",
};

const getComponentType = () => {
  const componentType = [];
  for (const key in pathComponentTypeMap) {
    componentType.push(key);
  }
  return componentType;
};

module.exports = {
  description: "创建组件",
  prompts: [
    {
      type: "list",
      name: "type",
      message: "请选择组件类型：",
      choices: getComponentType(),
    },
    {
      type: "input",
      name: "name",
      message: "请输入组件名称（无需填写后缀名）：",
      validate: (v) => {
        if (!v || v.trim === "") {
          return "组件名称不能为空";
        }
        return true;
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: pathComponentTypeMap[data.type],
        templateFile: ".plop/template/component.vue",
      },
    ];
    console.log("xxx", actions);
    return actions;
  },
}
