export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Некорректный запрос'],
      [401, 'Не авторизован'],
      [402, 'Необходима оплата'],
      [403, 'Запрещено'],
      [404, 'Не найдено'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
