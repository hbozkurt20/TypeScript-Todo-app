//*types

//? const age:number = 12;

//? const name:string = "halil";

//? const tanımsız: undefined = undefined;

//? const dizi:array = [1 , 2 , 3 , 4 , 5];

//? const farketmez: any = "halil" + 5

//*union types farklı tipler , veya

//? let age: string | number | boolean = "21"

//* literal type kullanımı

//? let statusResult: "pending" | "rejected" | "approved";
//şu değerlerden biri setlenebilir sadece demek

//* array tanımı
// const names: string[] = ["halil" , "yusuf"];
// console.log(names);
// const numbers2: Array<number> = [1, 2 ,3];
// console.log(numbers2);

// const array3: Array<string> | Array<number> = [1 , 2 , 3];
// console.log(array3);

// const array4: (string | number)[] = [1 ,2 ,3 ,4 ,"halil"];
// console.log(array4);

//! type - interface

// type User = {
//     name: string,
//     age: number
// }

// interface User {
//     name: string,             // optional type
//     age?: number  // kullanacak kişi age i kullanadabilir kullanmayadabilir
// }

// const array2: User[] = [{name:"halil", age:21}];
// console.log(array2);

// const dev:User = {
//     name:"hlai",
//     age:21
// }
// console.log(dev);


//! function

function topla(a:number , b:number) : number | string { // dönen değerin tip tanımlaması burada
    return a + b;
};
topla(10, 20)

function write(array: Array<string>): void{  // hiçbir şey geri döndürmüyorsa "void" kullanırsın
    array.forEach((arr)=> console.log(arr))
}

const arr: Array<string> = ["halil" , "Yusuf"];
write(arr)

interface Userim {
    name:string,
    age:number
}

function writeclg(array: Array<Userim>): void {
    array.forEach((user) => console.log(user.age))
}


const obj1:Userim = {
    name:"halil",
    age: 21
}
const obj2:Userim = {
    name: "yusuf",
    age: 14
}

const myArray: Userim[] = [obj1,obj2];  // bu arrayin içindekiler bu tipte olmalı demek
writeclg(myArray)


//! generic tip fonksiyonlar

interface GenericType<T> { // buradaki T genericliği temsil ediyor
    name: string,     //any gibi salaary e herşey gelebilir
    age: number,
    salary: T[]
}

const obj3:GenericType<string> = { // buradaki T ye string verdik
    name:"halil",
    age:21,
    salary:["24999" , "30000"]
}
console.log(obj3);

const arrayy: GenericType<string | number>[] = [obj3];
console.log(arrayy);

function write1<T> (array: GenericType<T>[]) : void { // T burada any herşey olabilir dinamik
    array.forEach(arr => console.log(arr));
}
write1(arrayy)


//! miras alma extends

interface OrtakAlanlar {
    id:string,
    oluşturmaTarihi:string,
    oluşturanKişi:string
};
// interface Musteri {
//     musteriNo: string
// }

interface Kurum extends OrtakAlanlar { // ortak alanlardaki herşeyi miras aldı yani onlarda içinde tanımlı
    kurumNo: string
}

const kurum: Kurum = {
    id:"1",
    oluşturmaTarihi:"2025/5/23",
    oluşturanKişi:"halil bozkurt",
    kurumNo:"342423423"
}
console.log(kurum,);

//! utility types Partial , Required , ReadOnly , Pick , Omit

interface Userlar {
    name:string,
    age:number,
    lastName?: string,
    tckn?:string
}
//* Partial optional yapar hepsine ? atmış gibi olur yani

const usr: Partial<Userlar> = { // diper opsiyonları kullanmana gerek yok demek
    name:"halil"
}
console.log(usr);

//* Required herşeyi setlemek zorunda bırakır başında ? olsa bile

const ussr: Required<Userlar> = {
    name:"hlali",
    age:21,
    lastName:"bozkurt",
    tckn:"32324234234"
}
console.log(ussr);

//* Readonly sadece oku üstünde bir daha değişiklik yapamazsın

const userrr: Readonly<Userlar> = {
    name:"halli",
    age:21
}
// userrr.age =25; // değişim yapmana izin vermiyor

console.log(userrr);


//* Pick sadece tek opsiyon varmış gibi algılamasını sağlar

const uusr: Pick<Userlar , "name"> = {
    name:"halil"
}
console.log(uusr);

//* Omit ise bunun dışındaki herşey olsun gibi çalışır

const usser: Omit<Userlar , "name"> = {
    age:21,
    lastName:"kjdsfj",
    tckn:"3423423"
}
console.log(usser);

//! daha fazlası için bunlarla yeterli
// Enum kullanımı (zaten biraz çalışmışsın)

// Type Narrowing (Tür daraltma) örnekleri yap.

// Type Guard ve in, typeof, instanceof kullanımı

// Advanced Generics (conditional types, infer, etc.) — İleri düzey ama zamanla bakarsın.

// React ile birlikte TypeScript (prop types, useState/useEffect tipi vs.