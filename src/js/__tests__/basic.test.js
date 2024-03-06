import ErrorRepository from '../ErrorRepository';

test.each([
  ['известной ошибки 1', 1, 'Ошибка аутентификации'],
  ['известной ошибки 2', 2, 'Ошибка сервера'],
  ['неизвестной ошибки 3', 3, 'Unknown error'],
])('Тест %s', (title, code, result) => {
  const errRepo = new ErrorRepository();
  errRepo.repo.set(1, 'Ошибка аутентификации');
  errRepo.repo.set(2, 'Ошибка сервера');
  expect(errRepo.translate(code)).toBe(result);
});
