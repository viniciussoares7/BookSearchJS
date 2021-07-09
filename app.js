const books = require('./database')

// get input
// If  yes, show all available categories and do a question to he/she.
// If not, show all books.

const readline = require('readline-sync')

const firstInput = readline.question('Do you want to search a book? Y/N')

if (firstInput.toLocaleUpperCase() === 'Y') {
  console.log('These are all the categories of books available: ')
  const category = books.filter(category => books.category)
  console.log(
    'Produtividade e estilo de vida',
    'História brasileira',
    'Américas',
    'Tecnologia',
    'Estilo de vida'
  )
  const inputCategory = readline.question('Choise a category: ')
  const returnCategory = books.filter(book => book.category === inputCategory)
  console.table(returnCategory)
} else {
  const sortBooks = books.sort((a, b) => a.pages - b.pages)
  console.log('These are all available books:')
  console.table(sortBooks)
}
