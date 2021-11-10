class calculadora {
   public somar(num1: number, num2: number): number {
      const soma: number = num1 + num2;
      return soma;
   }
}
function main() {
   const calc = new calculadora();
   let result = calc.somar(1, 3);
   console.log(result);
}
main();
