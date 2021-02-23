function template(
  { template },
  opts,
  { imports, interfaces, componentName, jsx, exports },
) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({ plugins });
  return typeScriptTpl.ast`${imports}
import {  IconImgProps } from '../Icon.interfaces';
${interfaces}
function ${componentName}({className}: IconImgProps) {
  return ${jsx};
}
${exports}
  `;
}
// eslint-disable-next-line no-undef
module.exports = template;