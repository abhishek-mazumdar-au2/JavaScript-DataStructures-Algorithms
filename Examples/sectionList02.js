sectionList = (original) => {
    let titlemap=new Map();
 original.forEach(item=>{
   let title=item.name[0];
   if(!titlemap.has(title))
     titlemap.set(title,[]);
   titlemap.get(title).push(item);
 });
 let result=[];
 titlemap.forEach((list,title)=>result.push({title:title,data:list}));
 result.sort((a,b)=>a.title.charCodeAt(0)-b.title.charCodeAt(0));
 console.log(result);
 }  

 const myArray = [
    {name: 'Mohan', phone: 'xxxxxx'},
    {name: 'Ramanujan', phone: 'xxxxxx'},
    {name: 'Rabindranath', phone: 'xxxxxx'},
    {name: 'Satyajit', phone: 'xxxxxx'},
    {name: 'Subhash', phone: 'xxxxxx'},
    {name: 'Bahadur', phone: 'xxxxxx'},
  ]

sectionList(myArray);