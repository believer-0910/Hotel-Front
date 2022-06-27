import {map} from "../Model/Value";

export const iterate = (count)=> {
    let b = []
    map.forEach((value, key) => {
      if(key === count){
          b=[...value]
    }})
    return b;
}
