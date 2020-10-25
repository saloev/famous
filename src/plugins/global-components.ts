import { VueConstructor } from "vue";

/**
 * Global components
 */
export default (app: VueConstructor) => {
  const requireComponent = require.context("../components/base", true, /Base[A-Z]\w+\.(vue|js)$/);
  requireComponent.keys().forEach((fileName) => {
    let baseComponentConfig = requireComponent(fileName);
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
    const baseComponentName = baseComponentConfig.name || fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");

    // IE can't recognize component name
    const nameFixForIE = baseComponentName === "VueComponent"
      ? baseComponentConfig.extendOptions.name
      : baseComponentName;
    app.component(nameFixForIE, baseComponentConfig);
  });
};
