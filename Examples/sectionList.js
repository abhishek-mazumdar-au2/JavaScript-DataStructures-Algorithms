// // contact = {
// //     name: 'Abhishek',
// //     phone: 8697922216
// // }

// // input
// // [
// //     {...contatcs}
// // ]

// // output
// // [
// //     {
// //         title: 'A',
// //         data: [
// //             {..contacts}
// //         ]
// //     }
// // ]

// sectionList = (arr) => {
//     const output = [];
//     for(var i = 0; i < arr.length; i++){
//         let contact = arr[i];
//         let initial = contact.name[0].toUpperCase();
//         console.log(contact);
//         console.log(initial);
//         for(var j = 0; j <= output.length; j++){
//             if(output.length===0){
//                 let firstTitledData = { 
//                     title: initial, 
//                     data: [{name: contact.name,phone:contact.phone}] 
//                  };
//                  output[0] = firstTitledData;
//                  console.log(output);
// break;
//             }else if(output[j]===undefined){
//                 let newTitledData = { 
//                                                            title: initial, 
//                                                            data: [{name: contact.name,phone:contact.phone}] 
//                                                         };
//                 output.concat(newTitledData);
//                 break
//              }
//             else if(output[j].title===initial){
//                 output[j].data.concat(contact)
//                 break
//             }
            
//     }
// }return output
// }
// var  input  =  [
//     {
//         name: 'Abhishek',
//         phone: 789
//     }, 
//     {
//         name: 'Sushmita', 
//         phone: 232
//     }, 
//     {
//         name: 'rashmoni', 
//         phone: 777
//     },
//     {
//         name: 'Anish', 
//         phone: 789
//     }
// ]

// console.log(sectionList(input))



sectionList = (arr) => {
    let output =[]
    for(var i = 0; i < arr.length; i++){
        var contact = arr[i];
        var initial = contact.name[0].toUpperCase();
                let Data= [{name: contact.name, phone: contact.phone }]
                output  = output.concat({title: initial, data: Data})
          }
          console.log(output)
          for(var j = 0; j < output.length; j++){
              for(var k = j+1; k < output.length-1; k++){
                  let p1 = output[j].title;
                  let p2 = output[k].title;
                  if(p1===p2){
                      output[j].data = output[j].data.concat(output[k].data)
                      output[k]=null
                      break
                  }
              }
          }
          console.log(output)
        }
      


var input   =  [
        {
            name: 'Abhishek',
            phone: 789
        }, 
        {
            name: 'Hrishav', 
            phone: 232
        },{
            name: 'Ashim',
            phone: 789
        }, 
        {
            name: 'Debojyoti', 
            phone: 232
        },{
            name: 'Anish',
            phone: 789
        }, 
        {
            name: 'Sneha', 
            phone: 232
        }
    ]

    console.log(sectionList(input))