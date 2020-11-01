const fs = require('fs');
const path = require('path');

// file system

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//   if (err) throw new Error(err);
//
//   console.log('Папка создана.');
// }) // асинхронно! дабы не блокировать поток

// fs.writeFile(
//   path.join(__dirname, 'notes', 'my_notes.txt'),
//   'Hello World',
//   (err => {
//     if (err) throw err;
//     console.log('Файл создан');
//
//     fs.appendFile(
//       path.join(__dirname, 'notes', 'my_notes.txt'),
//       ' Изменение!',
//       (err => {
//         if (err) throw err;
//         console.log('Файл изменен');
//
//         fs.readFile(
//           path.join(__dirname, 'notes', 'my_notes.txt'),
//           'utf-8',
//           (err, data) => {
//             if (err) throw err;
//             console.log(data);
//           }
//         )
//       })
//     )
//   })
// )

fs.rename(
  path.join(__dirname, 'notes', 'my_notes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw err;
    console.log('Файл переименован');
  }
)

