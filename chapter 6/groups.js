"use strict";

/** A class thats just like the default Set class */
class Group {
    constructor(){
        this.group = []  
    }
    add(element){
        if (!this.has(element)){
            this.group.push(element)
        }
    }
    delete(element){
        if (this.has(element)){
            this.group.splice(this.group.indexOf(element), 1)
        }
    }
    has(element){
        return (this.group.indexOf(element) != -1)
    }
    static from(inArr){
        let newGroup = new Group();
        for (let element of inArr){
            if (inArr.indexOf(element) != -1){
                newGroup.add(element);
            }
        }
        return newGroup;    
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false