const medicines = [
    { name: "Агалгін", expirationDate: new Date("2022-05-01") },
    { name: "Ношпа", expirationDate: new Date("2025-07-02") },
    { name: "Альфахолін", expirationDate: new Date("2024-12-21") },
    { name: "Аспірин", expirationDate: new Date("2022-08-15") },
    { name: "Аспаркам", expirationDate: new Date("2024-04-18") }
];

const medicineNames = medicines.map(({ name }) => name);
console.log("Масив лише з назвами препаратів:", medicineNames.join(', '));

const currentDate = new Date();
const validMedicines = medicines.filter(({ expirationDate }) => expirationDate > currentDate);
console.log("Медикаменти зі строком зберігання, які ще не минули:");
if (validMedicines.length > 0) {
    validMedicines.forEach((medicine, index) => {
        console.log(`${index + 1}. ${medicine.name} - ${medicine.expirationDate.toLocaleDateString()}`);
    });
} else {
    console.log("Усі медикаменти минули строк придатності.");
}

validMedicines.sort((a, b) => a.expirationDate - b.expirationDate);
console.log("Медикаменти у хронологічному порядку:");
if (validMedicines.length > 0) {
    validMedicines.forEach((medicine, index) => {
        console.log(`${index + 1}. ${medicine.name} - ${medicine.expirationDate.toLocaleDateString()}`);
    });
} else {
    console.log("Усі медикаменти минули строк придатності.");
}


