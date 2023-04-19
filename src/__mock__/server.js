module.exports = {
    get: jest.fn(() => {
        return Promise.resolve({
            data: [
                { "id": 1, "name": "Daamin", "species": "Cat", "available": false, "birthYear": 2012, "dateAdded": "19-06-2021", "photoUrl": "https://i.imgur.com/wpfirW7l.jpg" },
            ]
        })
    })
}
