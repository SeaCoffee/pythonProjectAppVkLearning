from typing import List, Dict
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from typing import List, Dict

def analyze_user_results(user_results: List[Dict[str, int]]) -> int:
    """
    Анализирует результаты пользователей и определяет оптимальное количество кластеров.

    :param user_results: список словарей с результатами пользователей, где ключи - идентификаторы уроков, значения - оценки
    :return: оптимальное количество кластеров для сегментации пользователей
    """
    # Обработка и нормализация данных
    data = [list(result.values()) for result in user_results]
    scaler = StandardScaler()
    data = scaler.fit_transform(data)

    # Поиск оптимального количества кластеров
    kmeans_kwargs = {"init": "random", "n_init": 10, "max_iter": 300, "random_state": 42}
    sse = []
    for k in range(1, 11):
        kmeans = KMeans(n_clusters=k, **kmeans_kwargs)
        kmeans.fit(data)
        sse.append(kmeans.inertia_)

    # Определение оптимального количества кластеров с помощью "локтя"
    elbow = sse.index(min(sse)) + 1
    return elbow

def analyze_user_scores(user_scores: List[Dict[str, float]]) -> Dict[str, float]:
    """
    Анализирует результаты пользователей и определяет корректировки для обучающего контента.

    :param user_scores: список словарей с результатами пользователей, где ключи - идентификаторы уроков, значения - оценки
    :return: словарь с корректировками для обучающего контента
    """
    # Здесь будет ваш код для анализа результатов пользователей и определения корректировок контента