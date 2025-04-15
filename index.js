const csvData = `
Date,SKU,Unit Price,Quantity,Total Price
2019-02-01,Death by Chocolate,180,5,900
2019-02-01,Cake Fudge,150,1,150
2019-02-01,Cake Fudge,150,1,150
2019-02-01,Cake Fudge,150,3,450
2019-02-01,Death by Chocolate,180,1,180
2019-02-01,Vanilla Double Scoop,80,3,240
2019-02-01,Butterscotch Single Scoop,60,5,300
2019-02-01,Vanilla Single Scoop,50,5,250
2019-03-01,Cake Fudge,150,5,750
2019-03-01,Hot Chocolate Fudge,120,3,360
2019-03-01,Butterscotch Single Scoop,60,5,300
2019-03-01,Chocolate Europa Double Scoop,100,1,100
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Caramel Crunch Single Scoop,70,4,280
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Hot Chocolate Fudge,120,4,480
2019-03-01,Hot Chocolate Fudge,120,2,240
2019-03-01,Cafe Caramel,160,5,800
2019-01-01,Vanilla Double Scoop,80,4,320
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Vanilla Single Scoop,50,2,100
2019-01-01,Butterscotch Single Scoop,60,3,180
2019-01-01,Vanilla Double Scoop,80,1,80
2019-01-01,Death by Chocolate,180,2,360
2019-01-01,Cafe Caramel,160,2,320
2019-01-01,Pista Single Scoop,60,3,180
2019-01-01,Hot Chocolate Fudge,120,2,240
2019-01-01,Vanilla Single Scoop,50,3,150
2019-01-01,Vanilla Single Scoop,50,5,250
2019-01-01,Cake Fudge,150,1,150
2019-01-01,Vanilla Single Scoop,50,4,200
2019-01-01,Vanilla Double Scoop,80,3,240
2019-01-01,Cake Fudge,150,1,150
2019-01-01,Vanilla Double Scoop,80,5,400
2019-01-01,Hot Chocolate Fudge,120,5,600
2019-01-01,Vanilla Double Scoop,80,2,160
2019-01-01,Vanilla Double Scoop,80,3,240
2019-01-01,Hot Chocolate Fudge,120,5,600
`;

function csvToJson(csvString) {
    const lines = csvString.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
  }

const out=csvToJson(csvData)
console.log(out)