const Inventory = [
    {
        _id: "001",
        name: "Fruits",
        details: [
            {
                _id: "5b21ca3eeb7f6fbccd471819",
                name: "Mango",
                color: "#008121",
                options: "large",
                skuid: "SKU",
                stocks: 24,
                isToggle: true
            },
            {
                _id: "5b21ca3eeb7f6fbccd471810",
                name: "Orange",
                color: "#008121",
                options: "Small",
                skuid: "SKU",
                stocks: 24
            },
            {
                _id: "5b21ca3eeb7f6fbccd471811",
                name: "Grapes",
                color: "#008121",
                options: "Medium",
                skuid: "SKU",
                stocks: 24
            },
            {
                _id: "5b21ca3eeb7f6fbccd471812",
                name: "Water Millon",
                color: "#008121",
                options: "large",
                skuid: "SKU",
                stocks: 24
            }
        ]
    },
    {
        _id: "002",
        name: "Vegetables",
        details: [
            {
                _id: "5b21ca3eeb7f6fbccd471815",
                name: "Cucumber",
                color: "#008121",
                options: "large",
                skuid: "SKU",
                stocks: 24
            },
            {
                _id: "5b21ca3eeb7f6fbccd471816",
                name: "Green Chilli",
                color: "#008121",
                options: "Small",
                skuid: "SKU",
                stocks: 24
            },
            {
                _id: "5b21ca3eeb7f6fbccd471817",
                name: "Carrot",
                color: "#008121",
                options: "Medium",
                skuid: "SKU",
                stocks: 24
            },
            {
                _id: "5b21ca3eeb7f6fbccd471818",
                name: "Potato",
                color: "#008121",
                options: "large",
                skuid: "SKU",
                stocks: 24
            }
        ]
    },
];

export function getInventory() {
    return Inventory;
}
