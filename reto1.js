//funcion para generar la secuencia de fibonacci hasta n
function generarFibonacci(n) {
    
    if (n < 0) return [];//si n es menor que 0 devolver un array vacio
  
    
    const fibonacci = [0];//array para almacenar la secuencia de fibonacci
  
    if (n >= 1) fibonacci.push(1);    //agregar 1 a la secuencia si n es al menos 1

  
    //generar los numeros de fibonacci mientras sean <= n
    let i = 2; //indice para el siguiente numero de Fibonacci
    while (true) {
      const next = fibonacci[i - 1] + fibonacci[i - 2];
      if (next > n) break;//break->sirve para terminar un bucle, switch o una declaración etiquetada, y transferir el control del programa a la instrucción siguiente //detener si el siguiwente numero supera a n
      fibonacci.push(next);//push()->sirve para agregar uno o más elementos al final de un arreglo y devolver la nueva longitud del arreglo. 
      i++;
    }
  
    return fibonacci;
  }
  
  console.log(generarFibonacci(100)); 
