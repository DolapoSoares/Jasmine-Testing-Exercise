const replaceWith = (str, oldChar, newChar) => {
  return str.replace(new RegExp(oldChar, 'g'), newChar);
}

const expand = (arr, multiples) => {
    return Array(multiples).fill(arr).flat();;
}

const acceptNumbersOnly = (...args) => args.every(item => !isNaN(item));

const mergeArrays = (...args) =>{

   return args.flat(Infinity).sort();
}

let obj1= {
  name: "Foo",
  num: 33
}
let obj2 = {
  test: "thing",
  num: 55
}

const mergeObjects = (obj1, obj2) => {
  
  let newObj = {};

  for(let key in obj1){
    newObj[key] = obj1[key];
  }
  for(let key in obj2){
    newObj[key] = obj2[key];
  }

  return newObj;
}

describe("Tests", () => {
  describe("#replaceWith", () => {
    it("can replace characters in a string", () => {
        const replaced = replaceWith("awesome", "e", "z");
        expect(replaced).toEqual("awzsomz");
    });
    it("can replace characters while being case sensitive", () => {
        const replaced = replaceWith("Foo", "F", "B");
        expect(replaced).toEqual("Boo");
    });
  });


  describe("#expand", () => {
    it("can expand an array of numbers n-times", () => {
        const expanded = expand([1, 2, 3], 3);
        expect(expanded).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    });
    it("can expand an array of strings 1-time", () => {
        const expanded = expand(["foo", "test"], 1);
        expect(expanded).toEqual(["foo", "test"]);
    });
  });

  describe("#acceptNumbersOnly", () => {
    it("returns false when it has a non number present", () => {
        const acceptNumber = acceptNumbersOnly(1,"foo");
        expect(acceptNumber).toEqual(false);
    });
    it("returns true when it is all numbers", () => {
      const acceptNumber = acceptNumbersOnly(1,2,3,4,5,6,7);
      expect(acceptNumber).toEqual(true);
    });
    it("returns false when it is not all numbers", () => {
      const acceptNumber = acceptNumbersOnly(1,2,3,4,5,6,NaN);
      expect(acceptNumber).toEqual(false);
    });
  });

  describe('#mergeArrays', () => {
    it('takes in different arrays and merges them', () => {
      const merged = mergeArrays([2,1],[3,4]);
      expect(merged).toEqual([1,2,3,4]);
    });
  });

  describe('#mergeObjects' , () => {
    it('takes in two objects and return an object with the keys and values combined', () => {
      const obj1 = {name: "Foo", num: 33};
      const obj2 = {test: "thing", num: 55};
      const mergedObjects = mergeObjects(obj1, obj2);
      expect(mergedObjects).toEqual({name: "Foo", num: 55, test: "thing"});
    });
  });
});

