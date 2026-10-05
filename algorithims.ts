// // ====================== Algorithms =========================

// // REMOVE DUPLICTES FROM AN ARRAY
// function removeDuplicates(nums: number[]): number{
//     if(nums.length === 0) return 0
//     let slow: number = 0;

//     for(let fast: number = 1; fast < nums.length-1; fast++){
//         if(nums[fast] !== nums[slow]){
//             slow++
//             nums[slow] = nums[fast]
//         }   
//     }
//     return slow + 1;
// }

// let nums: number[] = [1, 2, 3, 3, 5, 5, 7]
// console.log(removeDuplicates(nums));


// // TWO SUM
// function returnTwoSumSorted(arr: number[], target: number): number[] | null {
//     let left = 0;
//     let right = arr.length -1;

//     while(left < right){
//         let sum = arr[left] + arr[right];

//         if(sum === target){
//             return [left, right] 
//         } else if(sum < target){
//             left++
//         } else{
//             right--
//         }
//     }
//     return null
// }
// console.log(returnTwoSumSorted([1,2,3,3,4,5,6,6,7],9))

// // isValidParentheses.
// function isValid(s: string): boolean {
//     const stack = [] // it is used to store the unmatched brackets
//     const obj = {'(':')','[':']','{':'}'}
//     for (const char of s){
//         if(['(','{','['].includes(char)){
//             stack.push(char)}
//         else{
//             if(stack.length === 0 )return false
//             if (obj[stack[stack.length - 1]] !== char){return false};
//             stack.pop()
//         }
//     }
//     return(stack.length === 0)

// };