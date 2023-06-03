const url = 'https://ignio.com/r/export/utf/xml/daily/com.xml';

(async () => {
    try {
        const { default: fetch } = await import('node-fetch');

        const response = await fetch(url);
        const xmlData = await response.text();

        const { parseString } = await import('xml2js');

        parseString(xmlData, (err, result) => {
            if (err) {
                console.log('Error parsing XML:', err);
            } else {
                const jsonData = JSON.stringify(result, null, 2);

                // Сохраняем преобразованные данные в переменную
                const parsedData = result;

                // Используем данные для выполнения других операций
                processData(parsedData);
            }
        });
    } catch (error) {
        console.log('Error:', error.message);
    }
})();

// Функция для обработки данных
function processData(data) {
    // Делайте, что вам необходимо с данными JSON
    const response = data.horo.aries[0].today;
    const cleanedResponse = response.toString().replace(/\n/g, '');

    console.log(cleanedResponse);
    // Используйте данные для дальнейших действий
}