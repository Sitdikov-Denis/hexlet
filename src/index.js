// import './index.css';
// import { setTimeout } from 'core-js';
import _ from 'lodash';

import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required().positive().integer(),
//   email: yup.string().email(),
//   website: yup.string().url(),
//   createdOn: yup.date().default(() => new Date()), // значение по умолчанию
// });

// const data = {
//   name: 'jimmy',
//   age: 24,
// };

// const data1 = {
//   name: 'Bob',
//   age: 'no',
// };

// if (!schema.isValidSync(data1)) {
//   console.log('Error')
// }
// console.log(schema.validateSync(data1));

const books = [
  { name: 'book', author: 'author' },
  { author: 'author 2' },
];
// const invalidBooks = getInvalidBooks(books); // [{ author: 'author 2' }]

const getInvalidBooks = (books) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    aythor: yup.string().required(),
    pagesCount: yup.number().positive().integer().notRequired(),
    genre: yup.string().notRequired(),
    link: yup.string().url().notRequired()
  })

  
  // for (let book of books){
  //   const invalidBooks = []
  //   if (!schema.isValidSync(book)) {
  //     invalidBooks.push(book)
  //   }
  //   return invalidBooks
  // }
  return books.filter((book) => !schema.isValidSync(book))
  
}

console.log(getInvalidBooks(books))
// {
//   name: 'besi',
//   author: 'dostoevski',
//   pagesCount: 100,
//   genre: 'drama',
//   link: 'https://some.ru',
// },