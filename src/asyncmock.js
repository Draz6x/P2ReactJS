const productos = [
    {id: "1", nombre: "vino",    precio: 1000, img: "./img/CartIcon.png",idCat: "2"},
    {id: "2", nombre: "ron",     precio: 2000, img: "./img/Domin.jpg" ,idCat: "2"},
    {id: "3", nombre: "ron2",    precio: 3000, img: "./img/JWRL.jpg" ,idCat: "3"},
    {id: "4", nombre: "whiskey", precio: 4000, img: "./img/JWBlL.jpg" ,idCat: "3"},
    {id: "5", nombre: "cerveza", precio: 5000, img: "./img/Volc4.jpg" ,idCat: "3"},
]  
export const gesProductos = () => {
    return new Promise ( (resolve) => {
        setTimeout( ()=> {
                resolve (productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout ( () => {
            const producto = productos.find(prod => prod.id ===id );
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) =>{
    return Promise (resolve =>{
        setTimeout(() =>{
            const productosCategoria =  productos.filter(prod => prod.idCat === idCategoria);
            resolve (productosCategoria);
           },100)
    })
}