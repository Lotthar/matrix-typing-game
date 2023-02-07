import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

export default async ({ app }) => {
  const requireComponent = require.context("../components", true, /[\w-]+\.vue$/);
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(camelCase(fileName.split("/").pop().replace(/\.\w+$/, "") ));
    app.component(`${componentName}`, componentConfig.default || componentConfig);
  });
};
