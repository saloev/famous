import { VueConstructor } from "vue";

/**
 * Регистрируем глобальгные компоненты
 */
export default (app: VueConstructor) => {
  const requireComponent = require.context("../components/base", true, /Base[A-Z]\w+\.(vue|js)$/);
  requireComponent.keys().forEach((fileName) => {
    let baseComponentConfig = requireComponent(fileName);
    // console.log(baseComponentConfig);
    // alert(baseComponentConfig);
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
    const baseComponentName = baseComponentConfig.name || fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");

    // IE can't recognaze compoennet name
    const nameFixForIE = baseComponentName === "VueComponent"
      ? baseComponentConfig.extendOptions.name
      : baseComponentName;
    app.component(nameFixForIE, baseComponentConfig);
  });
};
