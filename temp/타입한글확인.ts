// import {ArrayCollection} from 'logic-core/ko';
// import {PropertyCollection} from 'logic-core/ko';
import {BaseCollection} from 'logic-entity/ko';
import {ArrayCollection} from 'logic-entity/ko';



var a =  new BaseCollection();
var b =  new ArrayCollection();

a.clear()
b.clear()
a.add()
b.add()
b._list
b.insertAt(1, 20)
b.count
b.remove(1)

/**
    add(...args: any[]): number;
    add(...args: any[]): number;
 * 
 */

// a.add('a');
// a[0].charAt('a'); // 타입 추론 안됨
// a[0].totoUpperCase(); // 타입 추론 안됨

// "aa".

// var b =  new PropertyCollection();
// b.add('a', 'aa');
// b.add()
// b.exists()
// // b[0].
// b['a'].concat('a'); // 타입 추론 안됨
// b[0].at('a'); // 타입 추론 안됨
// // b.
// // b.d
// // b.add(
// b.count
// b.equal()
// b.getTypes()
// b._guid

// const pc = new PropertyCollection()
//    .add('name', 'Alice')
//    .add('age', 30);

// pc['name'].toUpperCase();   // ✅ string 메서드 힌트
// pc['age'].toFixed(1);       // ✅ number 메서드 힌트

// b.add(10);

// b[0]

// Array
// var aa = ['a', 'b', 'c'];
// aa[0].  // 타입 추론이 됨

// const map = new Map();
// map.set('a', 'abc');

// map.get('a')

// var set = new Set();
// set.add('a');
// set.key['a']

// const aa = []
// aa.push(new ArrayCollection);
// aa[0].

console.log('a');