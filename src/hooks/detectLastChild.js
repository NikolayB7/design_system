import { ref } from 'vue';

export function lastChildRow(idx){
    const getItemsPerRow = () => {
        if (window.innerWidth < 640) return 2; // Мобильные устройства
        if (window.innerWidth < 1024) return 3; // Планшеты
        return 4; // Десктопы
    };

// Вычисляемые классы для карточек

        const itemsPerRow = getItemsPerRow();
        const isLastInRow = (idx + 1) % itemsPerRow === 0;
        return isLastInRow ? "last-in-row" : "";
}