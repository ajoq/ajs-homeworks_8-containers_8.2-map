import ErrorRepository from '../app';

test.each([
  [400, 'Некорректный запрос'],
  [401, 'Не авторизован'],
  [402, 'Необходима оплата'],
  [403, 'Запрещено'],
  [404, 'Не найдено'],
  [500, 'Unknown error'],
])('error repo', (obj, expected) => {
  const result = new ErrorRepository();
  expect(result.translate(obj)).toBe(expected);
});
