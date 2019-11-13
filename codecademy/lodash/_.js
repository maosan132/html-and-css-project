const _ = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange (number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      } else if (start > end) {
        const temp = start;
        start = end;
        end = temp;
      };
      return (number >= start && number < end);
    },
    words (string) {
      return string.split(' ');
    },
    pad (string, length) {
      if (string.length >= length) {
        return string;
      };
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length - string.length - startPaddingLength;
      const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
    },
    has (object, key) {
      const hasValue = object[key] !== undefined;
      return hasValue;
    },
    invert (object) {
      const invertedObject = {};
      for (var key in object) {
        const originalValue = object[key];
//        invertedObject[originalValue] = key;
        invertedObject = {originalValue: key};  
      }
      return invertedObject;
    },
    findKey (object, predicate) {
      for (let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        };
      }
      return undefined;
    },
    drop (array, n) {
      if (n === undefined) {
        n = 1;
      };
      return array.slice(n);
    },
    dropWhile (array, predicate) {
      const dropNumber = array.findIndex((element, index) => {
       return !predicate(element, index, array);
      });
      const droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk (array, size) {
      if (size === undefined) {
        size = 1;
      };
      const arrayChunks = [];
      for (let i = 0; i < array.length; i = i + size) {
        arrayChunks.push(array.slice(i, i + size));
      };
      return arrayChunks;
    }
  };
  
  
//  const indexIsSmallerThanElement = (element, index) => index < element;
//  console.log(_.dropWhile([1, 2, 0, 4], indexIsSmallerThanElement));
// Do not write or modify code below this line.
module.exports = _;