// Answer to Q1
function average(mat){
    console.log('Answer to Q1');
    let sumOfAll=0;
    let divideBy=0;
    for(let i=0; i < mat.length; i++){
        for(let j=0; j < mat[i].length; j++){
            sumOfAll += mat[i][j];
            divideBy++;
        }
    }
    let result = sumOfAll/divideBy;
    console.log(result);
}
average([[1,2,3],[4,5,6],[7,8,9]]);

// Answer to Q2
function sortArray(arr){
    console.log('Answer to Q2');
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
sortArray([7,3,4,1,1]);

// Answer to Q3
function commonData(arr1, arr2){
    console.log('Answer to Q3');
    let arrResult=[];
    for(let i=0; i < arr1.length; i++){
        for(let j=0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                let temp = arr1[i]
                arrResult.push(temp);
            }
        }
    }
    arrResult.sort();
    for(let i=0; i < arrResult.length; i++){
        if(arrResult[i] == arrResult[i+1]){
            arrResult[i] = arrResult[arrResult.length-1];
            arrResult.pop();
            arrResult.sort();
            i--;
        }
    }
    return arrResult;
}
let resultQ3 = commonData([1,2,3,2,3,4],[1,7,3,5,2]);
console.log(resultQ3);

// Answer to Q4
function primeMatrix(mat){
    console.log('Answer to Q4');
    let counter=0;
    for (let i=0; i < mat.length; i++){
        for (let j=0; j < mat[i].length; j++) {
            let notPrime=false;
            for(let n=2; n < mat[i][j]; n++){
                if(mat[i][j]%n == 0){
                    notPrime=true;
                    break;
                }
            }
            if(notPrime == false){
                counter++;
            }
        }
    }
    return counter;
}
let resultQ4 = primeMatrix([[2,3,4,5],[6,7,8,9],[10,11,12]]);
console.log(resultQ4);

// Answer to Q5
function amountOfCapsMatrix(mat){
    console.log('Answer to Q5');
    let counter=0;
    for(let i=0; i < mat.length; i++){
        for(let j=0; j < mat[i].length; j++){
            if(mat[i][j] >= 'A' && mat[i][j] <= 'Z'){
                counter++;
            }
            if(mat[i][j].length > 1){
                let str = mat[i][j];
                for(let s=0; s < str.length; s++){
                    if(str.charAt(s) >= 'A' && str.charAt(s) <= 'Z'){
                        counter++;
                    }
                }
            }
        }
    }
    return counter;
}
let resultQ5 = amountOfCapsMatrix(
    [['a','A','b','B'],
    ['aA','bB','cC','dD'],
    [1,2,3,4,'zeZeR']]
);
console.log(resultQ5);

// Answer to Q6
function islandMatrix(mat){
    console.log('Answer to Q6');
    let counter=0;
    // loop row
    for(let i=0; i < mat.length; i++){
        // check if row & column are equal
        if(mat.length == mat[i].length){
            // loop column
            for(let j=0; j < mat[i].length; j++){
                // lock on index with '1'
                if(mat[i][j] == 1){
                    // check if row is first
                    if(i == 0){
                        // check if column is first
                        if(j == 0){
                            if(mat[i][j+1] == 0){
                                if(mat[i+1][j] == 0){
                                    if(mat[i+1][j+1] == 0){
                                        counter++;
                                    }
                                }
                            }
                        }
                        // check if column is last
                        else if(j == mat[i].length-1){
                            if(mat[i][j-1] == 0){
                                if(mat[i+1][j-1] == 0){
                                    if(mat[i+1][j] == 0){
                                        counter++;
                                    }
                                }
                            }
                        }
                        // treat any other column
                        else{
                            if(mat[i][j-1] == 0){
                                if(mat[i][j+1] == 0){
                                    if(mat[i+1][j-1] == 0){
                                        if(mat[i+1][j] == 0){
                                            if(mat[i+1][j+1] == 0){
                                                counter++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // check if row is last
                    else if(i == mat.length-1){
                        // check if column is first
                        if(j == 0){
                            if(mat[i-1][j] == 0){
                                if(mat[i-1][j+1] == 0){
                                    if(mat[i][j+1] == 0){
                                        counter++;
                                    }
                                }
                            }
                        }
                        // check if column is last
                        else if(j == mat[i].length-1){
                            if(mat[i-1][j-1] == 0){
                                if(mat[i-1][j] == 0){
                                    if(mat[i][j-1] == 0){
                                        counter++;
                                    }
                                }
                            }
                        }
                        // treat any other column
                        else{
                            if(mat[i-1][j-1] == 0){
                                if(mat[i-1][j] == 0){
                                    if(mat[i-1][j+1] == 0){
                                        if(mat[i][j-1] == 0){
                                            if(mat[i][j+1] == 0){
                                                counter++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // treat any other row
                    else{
                        // check if column is first
                        if(j == 0){
                            if(mat[i-1][j] == 0){
                                if(mat[i-1][j+1] == 0){
                                    if(mat[i][j+1] == 0){
                                        if(mat[i+1][j] == 0){
                                            if(mat[i+1][j+1] == 0){
                                                counter++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        // check if column is last
                        else if(j == mat[i].length-1){
                            if(mat[i-1][j-1] == 0){
                                if(mat[i-1][j] == 0){
                                    if(mat[i][j-1] == 0){
                                        if(mat[i+1][j-1] == 0){
                                            if(mat[i+1][j] == 0){
                                                counter++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        // treat any other column
                        else{
                            if(mat[i-1][j-1] == 0){
                                if(mat[i-1][j] == 0){
                                    if(mat[i-1][j+1] == 0){
                                        if(mat[i][j-1] == 0){
                                            if(mat[i][j+1] == 0){
                                                if(mat[i+1][j-1] == 0){
                                                    if(mat[i+1][j] == 0){
                                                        if(mat[i+1][j+1] == 0){
                                                            counter++;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        // display "square equal" error
        } else{
            console.log('Matrix rows & columns must be equal');
            break;
        }
    }
    console.log(`this matrix has ${counter} islands`);
}
let island = [
    [0,0,1,0,1],
    [1,0,0,0,1],
    [1,0,1,0,0],
    [0,0,0,0,1],
    [1,0,0,0,0]
];
islandMatrix(island);

// Answer to Q7
function sudokuRows(mat){
    console.log('Answer to Q7');
    let allTrue = true;
    if(mat.length == 9){
        for(let i=0; i < mat.length; i++){
            mat[i].sort();
            if(mat[i].length == 9){
                for(let j=0; j < mat[i].length; j++){
                    if(mat[i][j] == mat[i][j+1]){
                        allTrue = false;
                        console.log(`row ${i} is false`);
                        break;
                    }
                }
            } else{
                console.log(`length of row ${i} must be 9`);
            }
        }
        if(allTrue == true){
            console.log('all rows are approved');
        }
    } else{
        console.log('9 rows required');
    }
}
let nineByNine = [
    [1,2,3,4,5,6,7,8,9],
    [1,3,5,7,9,2,4,6,8],
    [7,5,3,2,4,7,6,9,8],
    [6,3,1,5,2,4,8,9,7],
    [2,4,5,3,6,7,9,7,8],
    [3,1,4,2,5,7,6,8,8],
    [1,2,4,3,6,5,9,8,7],
    [2,4,3,6,5,7,8,3,5],
    [1,4,2,6,3,8,5,5,7]
]
sudokuRows(nineByNine);