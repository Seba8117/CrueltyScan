
const ObtenerImagenMarca = (nom_marca) => {
    switch (nom_marca) {
        case "Catrice":
            return require('../../assets/IMG/marcas/Catrice.png');
        case "Ballerina":
            return require('../../assets/IMG/marcas/Ballerina.png');
        case "Dove":
            return require('../../assets/IMG/marcas/Dove.jpg');
        case "Sedal":
            return require('../../assets/IMG/marcas/Sedal.png');
        case "Natura":
            return require('../../assets/IMG/marcas/Natura.jpeg');
        case "Vichy":
            return require('../../assets/IMG/marcas/Vichy.webp');
        default:
            return require('../../assets/IMG/marcas/no-image.png');
    }
}

export default ObtenerImagenMarca