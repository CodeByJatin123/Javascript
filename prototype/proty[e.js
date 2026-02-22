//Prototype = ek object jisse dusre objects properties inherit karte hain.

const prithviraj={
    name:"prithviraj",
    gernation:"grandfather",
    cooktraditionaldish(){
        return `${this.name} is cooking traditional dish`;
    },
};

// console.log(prithviraj);

const raj=Object.create(prithviraj);
raj.name="raj";
raj.gernation="father";
raj.buisness= function(){
    return `${this.name} is doing a buisnees`;
}


const ranbir=Object.create(raj);
ranbir.name="ranbir";
ranbir.gernation="son";
ranbir.makerfilm=function(){
    return `${this.name} is making a film`;
}

// console.log(ranbir.cooktraditionaldish());
// console.log(ranbir.buisness());
// console.log(ranbir.makerfilm());


Array.prototype.last=function(){    // making new protype metthod last
    return this[this.length-1];
}

const arr=[1,2,3,4,5];
// console.log(arr.last());

String.prototype.makebig=function(){    //<<make new make big methood
    return this.toUpperCase();
}

const string="jatin";
// console.log(string.makebig())

// makiing of foreach loop using prototype
Array.prototype.myforeach=function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this);
    }
}

const myarr=[1,3,4,44,4];
    myarr.myforeach(function(value){
        console.log(value);
    })