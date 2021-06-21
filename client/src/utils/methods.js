
export const sortVideogamesAsc = ( array, field) => {
  array.sort((a, b) => {
    if (a[field] > b[field]) {
      return 1;
    }
    if (a[field] < b[field]) {
      return -1;
    }
  return 0;
})
  return array;
};


export const sortVideogamesDesc = ( array, field) => {
  array.sort((a, b) => {
    if (a[field] < b[field]) {
      return 1;
    }
    if (a[field] > b[field]) {
      return -1;
    }
    return 0;
  })
  return array;
}


export const filterBySource = (source, array) => {
  let arr=[]
  if(source === 'CREATED') return arr = array.filter(e => e.id.toString().length > 10)
  if(source === 'ORIGINALS') return arr = array.filter(e => typeof e.id === 'number')
  console.log(arr)
  return arr;
}


export const filterByGenre = (genre, array) => {
  let filtered = array.filter( v => {
    if(v.genres) {
      for (let i = 0; i < v.genres.length; i++) {
        if( v.genres[i].name === genre){
          return true
        }
      }
    }
      return false
  }) 
  return filtered
}

export const interseccion = (array1,  array2 ) => {
  let filtered = array1.filter( e => {
    if(array2) {
      for (let i = 0; i < array2.length; i++) {
        if(parseInt( array2[i].id )=== parseInt( e.id)){
          return true;
        }
      }
    }
      return false;
  })
  return filtered
}

