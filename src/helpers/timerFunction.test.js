import { timerFunction, fetchData } from "./timerFunction";

describe('Тестирование setTimeout с Jest', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    test('Функция должна вызвать callback через заданное время', () => {
        const callback = jest.fn();
        const delay = 1000;

        timerFunction(callback, delay);

        expect(callback).not.toBeCalled();

        jest.advanceTimersByTime(delay);

        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith('done');
    });
});

describe('Тестирование асинхронного кода', () => {
    beforeEach(() => {
        jest.useRealTimers();
    });

    test('Функция fetchData возвращает корректные данные (async/await)', async () => {
        const data = await fetchData();
        expect(data).toBe('data received');
    });

    test('Функция fetchData возвращает корректные данные (Promise)', () => {
        return fetchData().then(data => {
            expect(data).toBe('data received');
        });
    });

    test('Функция fetchData возвращает корректные данные (done)', (done) => {
        fetchData()
            .then(data => {
                expect(data).toBe('data received');
                done();
            })
            .catch(err => done(err));
    });
});