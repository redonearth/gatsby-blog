---
title: '[ES6] for...of'
date: 2022-10-21 21:10:53
category: development
draft: false
---

## forEach와 다른 점

- `iterable`(반복가능한) 객체(`Array`, `String`, `Map`, `Set`, `NodeList` 등)에서 사용할 수 있다.

  forEach는 _Array_ 에서만 쓸 수 있다.

- `const` 대신 `let`도 사용할 수 있다.

- Loop를 멈출 수 있다.

  ```js
  const foods = [
    'Pizza',
    'Chicken',
    'Burger',
    'Pasta',
    'Bibimbap',
    'Sandwich',
    'Barbecue',
  ]

  for (const food of foods) {
    if (food === 'Bibimbap') {
      break
    } else {
      console.log(food)
    }
  }
  ```

  ```js
  // Pizza
  // Chicken
  // Burger
  // Pasta
  ```

### 참고 링크

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of>
<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>
