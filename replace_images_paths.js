import fs from "fs";
import path from "path";

// Получаем путь к текущей директории через import.meta.url
const __dirname = path.resolve(new URL(import.meta.url.substring(8)).pathname); // Избавляемся от "file:///" и получаем абсолютный путь

// Параметры
const searchPattern = /\/images\//g; // Путь, который мы ищем
const replacePattern = "/hotbox2/images/"; // Путь, на который мы заменяем

// Формируем путь к директории .output/public
const directoryPath = path.join(__dirname, ".output", "public");

// Выводим путь для отладки
// console.log(import.meta.url);
// console.log(new URL(import.meta.url).pathname);
// console.log(path.resolve(new URL(import.meta.url).pathname));
console.log("Используем путь:", directoryPath);

// Функция для замены путей в файлах
const replacePathsInFiles = (directory, searchPattern, replacePattern) => {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Рекурсивный вызов для вложенных директорий
      replacePathsInFiles(filePath, searchPattern, replacePattern);
    } else if (
      filePath.endsWith(".html") ||
      filePath.endsWith(".css") ||
      filePath.endsWith(".js")
    ) {
      // Чтение содержимого файла
      let content = fs.readFileSync(filePath, "utf8");
      // Замена путей
      content = content.replace(searchPattern, replacePattern);
      // Запись измененного контента обратно в файл
      fs.writeFileSync(filePath, content, "utf8");
    }
  });
};

// Проверяем существование директории
if (fs.existsSync(directoryPath)) {
  replacePathsInFiles(directoryPath, searchPattern, replacePattern);
  console.log("Пути успешно обновлены.");
} else {
  console.log(`Директория ${directoryPath} не существует.`);
}
