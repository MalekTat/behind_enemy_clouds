function invertHash(hash) {
    
    const keysArr = Object.keys(hash);
    const valuesArr = Object.values(hash);
    let invertedHash ={}

    for(i=0 ; i < keysArr.length ; i++){
        console.log(valuesArr[i])
        invertedHash[`${valuesArr[i]}`] = keysArr[i]; 
    }
         

  return invertedHash
}

  console.log(invertHash( { a: '1',
    b: '2',
    c: '3' }))