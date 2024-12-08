export const collectFilters = (array, filterName) => {//создаю функцию которая принимает два аргумента массив и имя фильтра
    return array.map(item => item[filterName]); //возвращаю новый массив с помощью метода map 
};
export const uniqueElements = (array) => {//Обьявляем функцию в которую передаем наш массив
    return Array.from(new Set(array));//использую set для создания ункикальных знвчений.Затем применяю Array.from для преоброзования этих уникальных значений в массив
}
export const uniquePrice = (array) => {//создаем функцию в которую передаем нащ уникальный массив
    const max = Math.max(...array)//использую метод Math для нахождения максимального и минимального значения 
    const min = Math.min(...array)//так же использую оператор spread для распоковки элементов массива  и передать их в минимальное и максимальное значение
    return { max, min }//возвращаю максимальное и минимальное значение
}