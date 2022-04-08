//case Sensitive
const str = "the Dog";
const rgx = /Dog/;
console.log(rgx.test(str));

const str1 = "cat";
const rgx1 = /cat|dog/;
console.log(rgx1.test(str1));

//i flag ignores case
const str2 = "cAt";
const rgx2 = /cat/i;
console.log(rgx2.test(str2));

//Extract word
const str3 = "match can extract words";
const rgx3 = /extract/;
const result3 = str3.match(rgx3);
console.log(result3);

//global flag
const str4 = "Repeat repeat Repeat";
const rgx4 = /Repeat/gi;
const result4 = str4.match(rgx4);
console.log(result4);

//period means anything
const str5 = "hum hug";
const rgx5 = /hu./g;
const result5 = str5.match(rgx5);
console.log(result5);

const str6 = "big bag bbg";
const rgx6 = /b[ai]g/g;
const result6 = str6.match(rgx6);
console.log(result6);

const str7 = "Hello World";
const rgx7 = /[a-z]/gi;
const result7 = str7.match(rgx7);
console.log(result7);

const str8 = "Hello World 12345";
const rgx8 = /[h-z2-5]/gi;
const result8 = str8.match(rgx8);
console.log(result8);

//negated character sets
const str9 = "Hello World 12345";
const rgx9 = /[^hel1-4]/gi;
const result9 = str9.match(rgx9);
console.log(result9);

//1 or more
const str10 = "Mississipis";
const rgx10 = /s+/gi;
const result10 = str10.match(rgx10);
console.log(result10);

const str11 = "goooal";
const rgx11 = /g*/gi;
const result11 = str11.match(rgx11);
console.log(result11);

//greedy matching =>default && lazy matching
const str12 = "<pi>hi</pi>";
const rgx12 = /<.*>/;
const rgx12_2 = /<.*?>/;
const result12 = str12.match(rgx12);
const result12_2 = str12.match(rgx12_2);
console.log(...result12, ...result12_2);

//beginning of string
const str13 = "carrot";
const rgx13 = /^carr/;
const result13 = rgx13.test(str13);
console.log(result13);

//end of string
const str14 = "carrot";
const rgx14 = /rot$/;
const result14 = rgx14.test(str14);
console.log(result14);

const str15 = "abcABC123_ .";
const rgx15 = /\w/g;
const result15 = str15.match(rgx15).length;
console.log(result15);

const str16 = "abcABC123_ .";
const rgx16 = /\W/g;
const result16 = str16.match(rgx16).length;
console.log(result16);

//all numbers
const str17 = "5.00$";
const rgx17 = /\d/g;
const result17 = str17.match(rgx17).length;
console.log(result17);

//not numbers
const str18 = "5.00$";
const rgx18 = /\D/g;
const result18 = str18.match(rgx18).length;
console.log(result18);

//whitespace
const str19 = "a a a";
const rgx19 = /\s/g;
const result19 = str19.match(rgx19);
console.log(result19);

//mon whitespace
const str20 = "a a a";
const rgx20 = /\S/g;
const result20 = str20.match(rgx20);
console.log(result20);

//quantity specifiers
const str21 = "b aa aaa";
const rgx21 = /[a-z]{2,}/g;
const result21 = str21.match(rgx21);
console.log(result21);

const str22 = "heeey";
const rgx22 = /he{3}y/g;
const result22 = rgx22.test(str22);
console.log(result22);

const str23 = "favorite";
const rgx23 = /favou?rite/g;
const result23 = rgx23.test(str23);
console.log(result23);

//positive & negative lookahead
const str24 = "ea ";
const rgx24 = /e(?=a)/;
const rgx24_2 = /e(?!a)/;
const result24 = str24.match(rgx24);
const result24_2 = str24.match(rgx24_2);
console.log(...result24, result24_2);

//capture group
const str25 = "regex regex";
const rgx25 = /(\w+)\s\1/;
const result25 = str25.match(rgx25);
console.log(result25);
