const myArray = [
    {name: 'Mohan', phone: 'xxxxxx'},
    {name: 'Ramanujan', phone: 'xxxxxx'},
    {name: 'Rabindranath', phone: 'xxxxxx'},
    {name: 'Satyajit', phone: 'xxxxxx'},
    {name: 'Subhash', phone: 'xxxxxx'},
    {name: 'Bahadur', phone: 'xxxxxx'},
  ];


 const data = {};

 myArray.forEach((obj) => {
   if(data[obj.name[0]]) {
        data[obj.name[0]].push(obj);
   } else {
     data[obj.name[0]] = [obj];
   }
 });

const arr = Object.entries(data).map((value) => {
  return {
    title: value[0],
    data: value[1],
  }
});