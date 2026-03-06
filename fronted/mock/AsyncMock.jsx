const empanadasMock = [
  {
    id: 1,
    name: "Empanada de Carne Clasica",
    description: "Carne vacuna cortada a cuchillo, cebolla y especias tradicionales.",
    price: 2.5,
    category: "carne",
    image: "https://images.pexels.com/photos/13689920/pexels-photo-13689920.jpeg"
  },
  {
    id: 2,
    name: "Empanada de Carne Picante",
    description: "Carne vacuna con ají picante y condimentos intensos.",
    price: 2.7,
    category: "carne",
    image: "https://images.pexels.com/photos/32912393/pexels-photo-32912393.jpeg"
  },
  {
    id: 3,
    name: "Empanada de Carne y Huevo",
    description: "Carne sazonada con huevo duro y aceitunas.",
    price: 2.8,
    category: "carne",
    image: "https://images.pexels.com/photos/13689920/pexels-photo-13689920.jpeg"
  },
  {
    id: 4,
    name: "Empanada de Carne Dulce",
    description: "Carne con pasas de uva al estilo norteño.",
    price: 2.8,
    category: "carne",
    image: "https://images.pexels.com/photos/22764451/pexels-photo-22764451.jpeg"
  },
  {
    id: 5,
    name: "Empanada de Pollo Clasica",
    description: "Pollo desmenuzado con cebolla y pimientos.",
    price: 2.6,
    category: "pollo",
    image: "https://images.pexels.com/photos/22764451/pexels-photo-22764451.jpeg"
  },
  {
    id: 6,
    name: "Empanada de Pollo y Queso",
    description: "Pollo sazonado con queso fundido.",
    price: 2.9,
    category: "pollo",
    image: "https://images.pexels.com/photos/13689920/pexels-photo-13689920.jpeg"
  },
  {
    id: 7,
    name: "Empanada de Pollo Picante",
    description: "Pollo con ají y especias intensas.",
    price: 2.7,
    category: "pollo",
    image: "https://images.pexels.com/photos/22764451/pexels-photo-22764451.jpeg"
  },
  {
    id: 8,
    name: "Empanada de Pollo Mediterranea",
    description: "Pollo con aceitunas negras y hierbas.",
    price: 2.9,
    category: "pollo",
    image: "https://images.pexels.com/photos/13689920/pexels-photo-13689920.jpeg"
  },
  {
    id: 9,
    name: "Empanada de Verdura Clasica",
    description: "Acelga salteada con cebolla y especias.",
    price: 2.4,
    category: "verduras",
    image: "https://images.pexels.com/photos/22764451/pexels-photo-22764451.jpeg"
  },
  {
    id: 10,
    name: "Empanada de Espinaca y Queso",
    description: "Espinaca fresca con queso cremoso.",
    price: 2.6,
    category: "verduras",
    image: "https://images.pexels.com/photos/32912393/pexels-photo-32912393.jpeg"
  },
  {
    id: 11,
    name: "Empanada Caprese",
    description: "Tomate, mozzarella y albahaca fresca.",
    price: 2.7,
    category: "verduras",
    image: "https://images.pexels.com/photos/22764451/pexels-photo-22764451.jpeg"
  },
  {
    id: 12,
    name: "Empanada de Verduras Asadas",
    description: "Mix de verduras grilladas con aceite de oliva.",
    price: 2.8,
    category: "verduras",
    image: "https://images.pexels.com/photos/32912393/pexels-photo-32912393.jpeg"
  }
];

export default empanadasMock;

export const getEmpanadas = ()=>{
    let mock= false
    return new Promise((resolve, reject) => {
        if(!mock){
            resolve(empanadasMock)
        }
        else{
            reject('error')
        }
    })
}
     

