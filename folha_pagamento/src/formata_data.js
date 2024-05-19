function formataData (data) {
    return data.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
}

module.exports = formataData