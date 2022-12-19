////////////////////////// CONDITIONAL STATEMENT ///////////////////////////
/**
 * Aturan :
 * 1. Membutuhkan nilai boolean
 *
 * Jenis :
 * 1. IF...ELSE STATEMENT
 * 2. SWITCH...CASE STATEMENT
 *
*/

// Aturan penulisan IF...ELSE STATMENT
/**
 * Aturan penulisan :
 * if(condition){
 *      //task
 * }
 * 
 * if(condition){
 *      //task
 * }else{
 *      //task
 * }
 * 
 * if(condition){
 *      //task
 * }else  if(condition){
 *      //task
 * }else{
 *      //task
 * }
 * 
 * variasi :
 * if(condition)
 *    // single_line_task
 * else
 *    // single_line_task
 * 
 * Ternary operator :
 * condition ? single_line_task : single_line_task  
 * condition ? single_line_task : condition ? single_line_task : single_line_task  
 * */

// 2. SWITCH CASE
/**
 * Aturan penulisan :
 * switch(condition){
 *      case equality :
 *          // task;
 *          break
 *      case equality:
 *          return value;
 *      default:
 *          return value;
 * }
*/

/////////////////////////////////////// LOOP STATEMENT //////////////////////////////////////
/**
 * WHILE or DO...WHILE LOOP : digunakan ketika akhir loop tidak pasti
 * while(condition){
 *      // task
 * }
 * 
 * do{
 *      // task
 * }while(condition);
*/

/**
 * FOR...LOOP : digunakan ketika tau batas loopingnya
 * 
 * for(statement_1;statement_2;statement_3){
 *      // task
 *      for(statement_1;statement_2;statement_3){
 *          // task
 *       }
 * }
*/

let arr = [
    [2, 3, 5, 6],
    [10, 20],
    [100, 80, 25, 12, 13]
];

let sum2D = (array) => {
    let amount = 0;
    array.forEach(element => {
        let sum = 0;
        element.forEach(val => sum += val);
        amount += sum;
    });
    return amount;
}

console.log(sum2D(arr));
// Output --> amount of number