import { ref } from 'vue';
import axios from 'axios';

export function useNotionDatabase() {
    const databaseItems = ref([]);
    const notionAPI = axios.create({
        baseURL: '/api/v1/',
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`,
            'Notion-Version': '2022-06-28',
        },
    });

    const getDatabaseItems = async (databaseId) => {
        try {
            const response = await notionAPI.post(`databases/${databaseId}/query`);
            databaseItems.value = response.data.results;
        } catch (error) {
            console.error('Ошибка при запросе к Notion API:', error);
        }
    };

    return {
        databaseItems,
        getDatabaseItems,
    };
}
