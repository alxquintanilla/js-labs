
//Calculator function that returns an object with methods and variables
export default function calc (){
  return {
    result: 0,

    addition: function(value){
      if(this.isNumber(value))
      this.result+=(Number.parseFloat(value));
    },

    substraction: function(value){
      if(this.isNumber(value))
        this.result-=(Number.parseFloat(value));
    },

    multiplication: function(value){
      if(this.isNumber(value))
        this.result*=(Number.parseFloat(value));
    },

    division: function(value){
      if(this.isNumber(value))
        this.result/=(Number.parseFloat(value));
    },

    isNumber: function(value){
      return (value!=="");
    }
  };
};
