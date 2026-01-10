/**
 * Kata Template - Main Entry Point
 * 
 * Este archivo es el punto de entrada de tu kata.
 * Implementa aquí la lógica principal según las instrucciones.
 */

export function hello(name: string): string {
  // TODO: Implementa la función según las instrucciones de la kata
  return `Hello, ${name}!`
}

// Si necesitas ejecutar código directamente
if (require.main === module) {
  console.log(hello('World'))
}
