export function transpileCode(codigo, reglas) {
  return codigo
    .split('\n')
    .map((line) => {
      for (const regla of reglas) {
        const match = line.match(regla.pattern);
        if (match) return regla.reemplazar(...match);
      }
      return line;
    })
    .join('\n');
}