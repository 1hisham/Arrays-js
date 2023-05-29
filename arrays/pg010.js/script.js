let array = ["io", "appppppppppppppppppppppppp", "bapppppppppppppppppppppp"];
let ref = array[0];
function smallestWordLength(array) {
  let i = 0;
  let wordlen = array[0];
  while (i < array.length) {
    if (wordlen.length > array[i].length) {
      wordlen = array[i];
    }
    i++;
  }
  return wordlen;
}
function prifix(array) {
  let wordlen = smallestWordLength(array);
  let prvcount = wordlen.length;
  let j = 0;
  while (j < array.length) {
    let k = 0;
    let count = 0;
    while (k < wordlen.length) {
      let word = array[j];
      if (word[k] == wordlen[k]) {
        count++;
        k++;
        continue;
      }
      break;
    }
    if (prvcount > count) {
      prvcount = count;
    }
    j++;
  }
  if (prvcount === 0) {
    return "item not prifix";
  }
  let k = 0;
  let str = "";
  while (k < prvcount) {
    str = str + wordlen[k];
    k++;
  }
  return str;
}
console.log(prifix(array));
