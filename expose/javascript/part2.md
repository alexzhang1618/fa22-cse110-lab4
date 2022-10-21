1) 3 will be printed because i was initialized with var, so its scope continues outside the for loop.
2) 150 will be printed because the last value of discountedPrice is stored, which is (300 * 0.5).
3) 150 is printed because the last value of finalPrice is discountedPrice rounded to the nearest cent, which is 150.
4) [50, 100, 150] is returned because each element in prices is halved, rounded to the nearest cent, and added to the array. Then the array is [100 / 2, 200 / 2, 300 / 2].
5) An error occurs because i loses scope after the for block because it was initialized using let.
6) An error occurs because discountedPrice loses scope after the for block because it was initialized using let.
7) 150 is printed because finalPrice was initialized using let in the function block, so its scope is maintained.
8) [50, 100, 150] is returned because the function acts the same as the previous function, but initialized variables with let.
9) An error occurs because i loses scope after the for block because it was initialized using let.
10) 3 is printed because the length of the array is 3.
11) [50, 100, 150] is printed because each element in the array is halved and added to the return array.
12) A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13) A) '32', since 2 is converted to a string
    B) 1, since 3 is converted to an int
    C) 3, since null is converted to 0
    D) '3null', since null is converted to 'null'
    E) 4, since true is converted to 1
    F) 0, since false and null are converted to 0
    G) '3undefined', since undefined is converted to 'undefined'
    H) NaN, since undefined is not a number
14) A) true, since '2' is converted to 2
    B) false, since '2' is lexicographically larger than '1'
    C) true, since '2' is converted to 2
    D) false, since '2' and 2 are different types
    E) false, since true converts to 1
    F) true, since Boolean(2) is true
15) '==' checks that the two objects have the same value, while '===' checks that the two objects have the same value and the same type.
16) See part2-question16.js
17) [2,4,6] is returned because each item in the array is replaced by callback called on it, which multiplies it by 2.
18) See part2-question18.js
19) The code prints 1 4 3 on new lines, then waits 1 second and prints 2 on a new line.