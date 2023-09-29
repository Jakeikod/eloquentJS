"use strict";

/** An iterator for the Group class */
class GroupIterator {
    constructor(group){
        this.x = 0;
        this.length = group.group.length;
        this.groupIt = group;
    }
    next(){
        if (this.x == this.length) return {done: true}
        //console.log("Kontroll log \n this.x: " + this.x + " this.group.length: " + this.group.length + "\n")
        let value = this.groupIt.group[this.x]
        this.x += 1;

        return {value, done: false}
    }
}

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
    length(){
        return this.group.length()
    }
}
Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this);
}


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c