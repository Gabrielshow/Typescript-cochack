function create<T>(c : { new(): T}):T { return new c();}

class beekeeper {
hasmask : boolean;
constructor(hasmask: boolean){
this.hasmask = hasmask;} ;}

class zookeeper { 
nametag: string;
constructor(nametag: string){
this.nametag = nametag;}; }

class Animal {
numlegs: number;
constructor(numlegs: number){
this.numlegs = numlegs;};}

class bee extends Animal {
keeper: beekeeper;
super(hasmask: boolean){
this.keeper.hasmask = hasmask};
}

class lion extends Animal {
keeper: zookeeper;
super(nametag: string){
this.keeper.nametag = nametag;};}

function createinstance< A extends Animal> ( c: new () => A): A {
return new c();}

createinstance(lion).keeper.nametag;
createinstance(bee).keeper.hasmask;

