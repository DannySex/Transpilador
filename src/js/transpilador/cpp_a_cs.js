import { flujoASuma, cppACs } from './tarea.js';

const prepararContenido = (cuadro) =>
  cppACs(cuadro.includes('"') ? flujoASuma(cuadro) : cuadro);

export const reglas = [
  {
    name: 'impresion-endl',
    pattern: /^(\s*)std::cout\s*<<\s*(.*?)\s*<<\s*std::endl;\s*$/,
    reemplazar: (_comparar, indentificar, cuadro) =>
      `${indentificar}Console.WriteLine(${prepararContenido(cuadro)});`,
  },
  {
    name: 'impresion-sin-endl',
    pattern: /^(\s*)std::cout\s*<<\s*(.*?)\s*;\s*$/,
    reemplazar: (_comparar, indentificar, cuadro) =>
      `${indentificar}Console.Write(${prepararContenido(cuadro)});`,
  },
  {
    name: 'variable-string',
    pattern: /^(\s*)std::string\s+(\w+)\s*=\s*(.*);\s*$/,
    reemplazar: (_comparar, indentificar, nombre, valor) =>
      `${indentificar}string ${nombre} = ${valor};`,
  },
  
];