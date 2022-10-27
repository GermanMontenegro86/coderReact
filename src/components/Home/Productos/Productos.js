  const Productos= [
  {
    categoria: "cane",
    id: 1,
    nombre: "Red fish super cast",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_623614-MLA45716492210_042021-O.webp",
    precio: 5000,
    stock: 9
  },
  {
    categoria: "cane",
    id: 2,
    nombre: "Waterdog Murray",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_736145-MLA46259555637_062021-O.webp",
    precio: 10000,
    stock: 2
  },
  {
    categoria: "cane",
    id: 3,
    nombre: "Caster Valiant",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_799246-MLA51561256202_092022-O.webp",
    precio: 20000,
    stock: 12
  },
  {
    categoria: "reels",
    id: 4,
    nombre: "Spinnig variada",
    imagen: "https://cf.shopee.com.ar/file/65b8b6aa7c96f1fb82c77c9d88e3423f",
    precio: 7000,
    stock: 25
  },
  {
    categoria: "reels",
    id: 5,
    nombre: "Shimano",
    imagen: " https://www.triestina.com.ar/wp-content/uploads/2019/10/CURADO-DC.jpg",
    precio: 18000,
    stock: 5
  },
  {
    categoria: "reels",
    id: 6,
    nombre: "Marine sports",
    imagen: " https://http2.mlstatic.com/D_NQ_NP_650666-MLA31584971045_072019-O.jpg",
    precio: 25000,
    stock: 7
  },
  {
    categoria: "camping",
    id: 7,
    nombre: "Weekrnd",
    imagen: " https://fotos.perfil.com/2019/10/11/cropped/696/696/center/1011carpas-790141.jpg",
    precio: 80000,
    stock: 8
  },
  {
    categoria: "camping",
    id: 8,
    nombre: "Gran ruca",
    imagen: " https://www.triestina.com.ar/wp-content/uploads/2021/01/55480.jpg",
    precio: 60000,
    stock: 5
  },
  {
    categoria: "camping",
    id: 9,
    nombre: "Canadiense",
    imagen: " https://image.jimcdn.com/app/cms/image/transf/none/path/sf5163d68163b73bc/image/i06c8b8b7a6262932/version/1431620757/canadiense-standar.jpg",
    precio: 100000,
    stock: 10
  },
  {
    categoria: "ropa",
    id: 10,
    nombre: "wader",
    imagen: " https://solomosca.com/wp-content/uploads/2018/04/simms-g3-waders-pesca-mosca-1-600x600.jpg",
    precio: 50000,
    stock: 10
  },
  {
    categoria: "ropa",
    id: 11,
    nombre: "Remera termica",
    imagen: " https://cdn.shopify.com/s/files/1/0249/4011/8093/products/remeraverde_fe9bb3cd-be3b-4881-9914-8381ca82c78c_1200x.jpg?v=1631541119",
    precio: 50000,
    stock: 10
  },
  {
    categoria: "ropa",
    id: 12,
    nombre: "Remera termica",
    imagen: " https://http2.mlstatic.com/D_NQ_NP_641233-MLA49509482421_032022-O.webp",
    precio: 50000,
    stock: 10
  }
]

export const EncontrarId=()=>(
  Productos.filter((producto)=>producto.id)
  
)

export default Productos;

