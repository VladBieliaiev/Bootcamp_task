class Foo {

   constructor(name, fluid_level) {
      if (typeof name === "string" && name.length > 0) {
         this.name = name
      }

      if (typeof fluid_level === "number" && fluid_level >= 0) {
         this.fluid_level = fluid_level
      }
   }

   interaction(name, volume) {
      if (typeof name === "object" && typeof volume === "number" && volume <= name.fluid_level) {
         this.fluid_level += volume;
         name.fluid_level -= volume;
      }
      else if (typeof name !== "object" || typeof volume !== "number" || volume > name.fluid_level) {
         console.log("error");
      }
   }
}


const human = new Foo("human", 0);
const glass = new Foo("glass", 200);

const cat = new Foo("cat", 0)
const bowl = new Foo("bowl", 100);

const car = new Foo("car", 0);
const canister = new Foo("canister", 500);


console.log(human);
console.log(glass);
console.log(cat);
console.log(bowl);
console.log(car);
console.log(canister);


console.log("...............");

human.interaction(glass, 150)


console.log(human);
console.log(glass);



console.log("...............");

cat.interaction(bowl, 10)


console.log(cat);
console.log(bowl);


console.log("...............");

car.interaction(canister, 300)


console.log(cat);
console.log(bowl);


console.log("....interaction with error....");

human.interaction(glass, 250)


