import ErrorRepository from './ErrorRepository';

const errorRepo = new ErrorRepository;

errorRepo.repo.set(1, 'Ошибка аутентификации')
errorRepo.repo.set(2, 'Ошибка сервера')

console.log(errorRepo.translate(1));
console.log(errorRepo.translate(2));
console.log(errorRepo.translate(37));
