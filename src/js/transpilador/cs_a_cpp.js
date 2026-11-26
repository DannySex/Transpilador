import { sumaAFlujo, csACpp } from './tarea.js';
import { pares } from './pares.js';

const prepararContenido = (cuadro) =>
  csACpp(cuadro.includes('"') ? sumaAFlujo(cuadro) : cuadro, pares);

export const reglas = [
  {
    name: 'impresion-writeline',
    pattern: /^(\s*)Console\.WriteLine\((.*)\);\s*$/,
    reemplazar: (_comparar, indentificar, cuadro) =>
      `${indentificar}std::cout << ${prepararContenido(cuadro)} << std::endl;`,
  },
  {
    name: 'impresion-write',
    pattern: /^(\s*)Console\.Write\((.*)\);\s*$/,
    reemplazar: (_comparar, indentificar, cuadro) =>
      `${indentificar}std::cout << ${prepararContenido(cuadro)};`,
  },

  {
    name: 'variable-string',
    pattern: /^(\s*)string\s+(\w+)\s*=\s*(.*);\s*$/,
    reemplazar: (_comparar, indentificar, nombre, valor) =>
      `${indentificar}std::string ${nombre} = ${valor};`,
  },
];