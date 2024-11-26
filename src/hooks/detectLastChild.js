import { ref } from 'vue';

export function lastChildRow(idx){
    const getItemsPerRow = () => {
        if (window.innerWidth < 1024) return 2; // Мобильные устройства
        if (window.innerWidth < 1280) return 3; // Планшеты
        if (window.innerWidth < 1535) return 4; // Планшеты
        return 5; // Десктопы
    };

// Вычисляемые классы для карточек

        const itemsPerRow = getItemsPerRow();
        const isLastInRow = (idx + 1) % itemsPerRow === 0;
        return isLastInRow ? "last-in-row" : "";
}