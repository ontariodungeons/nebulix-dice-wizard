import { API, FileInfo, JSCodeshift } from 'jscodeshift';
import * as ts from 'typescript';

const jsExtensions = ['.js', '.jsx', '.ts', '.tsx'];

export default function transformer(file: FileInfo, api: API) {

  if (!jsExtensions.includes(file.ext)) {
    return file.source; 
  }

  console.log(`Transforming ${file.path}...`);

  const j = api.jscodeshift;

  j(file.source)
    .find(j.CallExpression as ts.CallExpression)
    .filter((path) => {
      if (path.value) {
        return path.value.callee.name === 'require';
      } else {
        return false;
      }
    })
    .replaceWith((path) => {
      if (path.value) {
        const arg = path.value.arguments[0];
        return j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier(arg.value as string))],
          j.literal(arg.value as string)
        );  
      }
    });

  j(file.source)
    .find(j.MemberExpression as ts.MemberExpression) 
    .filter((path) => {
      if (path.value) {
        return path.value.object.name === 'module' &&
               path.value.property.name === 'exports';
      } else {
        return false; 
      }
    })
    .replaceWith((path) => {
      if (path.value) {
        return path.value.object;
      }
    });

  // AssignmentExpression filter and remove similarly updated

  return file.source;

}
