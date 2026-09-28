/* Données partagées Chez Bibi Steinmetz — utilisées par index.html et admin.html */
const DEFAULT_DISHES = [
  { id:'attieke', nom:'Attiéké poisson alloco', cat:'classique', prix:2500, desc:"Attiéké moelleux, poisson frit croustillant, alloco dorés, oignons et piment doux. Le best-seller de la maison.", img:'ATT.jpeg', badge:'Populaire', rating:'5.0', visible:true },
  { id:'atassi', nom:'Atassi poisson', cat:'classique', prix:2500, desc:"Riz-haricot atassi parfumé, poisson frit, accompagné d'alloco, fromage et œuf. Complet et nourrissant.", img:'atss.jpeg', badge:'Généreux', rating:'5.0', visible:true },
  { id:'riz-aileron', nom:'Riz au gras aileron', cat:'classique', prix:2000, desc:"Riz au gras bien rouge, aileron de poulet fondant, sauce tomate relevée. Recette de famille.", img:'RGAILERON.jpeg', badge:'', rating:'4.6', visible:true },
  { id:'riz-poisson', nom:'Riz au gras poisson', cat:'classique', prix:2000, desc:"Riz au gras savoureux au poisson frit, sauce tomate maison légèrement pimentée.", img:'RGPOISSON.jpeg', badge:'4.8 ★', rating:'4.8', visible:true },
  { id:'couscous', nom:'Couscous aileron', cat:'classique', prix:2000, desc:"Couscous moelleux, aileron braisé, légumes et jus corsé. Léger mais qui cale bien.", img:'ccaileron.jpeg', badge:'', rating:'4.5', visible:true },
  { id:'akassa', nom:'Akassa moyo', cat:'classique', prix:1000, desc:"Akassa lisse et douce, sauce moyo fraîche tomate-oignon-piment. Simple et efficace.", img:'akassa.jpeg', badge:'Petit prix', rating:'4.4', visible:true },
  { id:'piron', nom:'Piron', cat:'classique', prix:2000, desc:"Piron (eba) bien pilé, sauce tomate relevée au poisson. Pour les amateurs de vrai goût.", img:'eba.jpeg', badge:'', rating:'4.5', visible:true },
  { id:'chawarma-poulet', nom:'Chawarma poulet', cat:'fastfood', prix:2500, desc:"Galette grillée, poulet mariné, crudités, frites et sauce blanche. Disponible poulet 2500 F / viande 2000 F.", img:'chawarma.jpeg', badge:'Top snack', rating:'4.7', visible:true },
  { id:'panini', nom:'Cheese Panini', cat:'fastfood', prix:1500, desc:"Pain panini pressé, fromage fondant, poulet/viande, crudités. Croustillant dehors, fondant dedans.", img:'paninicheese.jpeg', badge:'', rating:'4.5', visible:true },
  { id:'sandwich', nom:'Sandwich garni', cat:'fastfood', prix:1100, desc:"Pain frais, œuf, crudités, mayonnaise maison. Le snack rapide et pas cher qui dépanne bien.", img:'sandwich.jpeg', badge:'', rating:'4.5', visible:true },
  { id:'salade', nom:'Salade maison', cat:'salade', prix:2000, desc:"Laitue croquante, tomates, concombres, œuf, maïs et vinaigrette maison. Fraîche et colorée.", img:'top-view-homemade-delicious-salad-with-many-ingredients-plate-black-green-mix-colors-background.jpg', badge:'Fraîcheur', rating:'4.6', visible:true },
  { id:'jus-anans', nom:"Jus d'ananas", cat:'jus', prix:600, desc:"Ananas frais pressé, sucré naturellement. Vitaminé et glacé, parfait avec l'attiéké.", img:'ananas.jpeg', badge:'Naturel', rating:'4.8', visible:true },
  { id:'jus-gingembre', nom:'Jus de gingembre', cat:'jus', prix:600, desc:"Gingembre fort et parfumé, relevé au citron. Le préféré des clients, bien glacé.", img:'gingembre.jpeg', badge:'Naturel', rating:'4.9', visible:true },
  { id:'jus-baobab', nom:'Jus de baobab', cat:'jus', prix:600, desc:"Pain de singe onctueux, doux et nourrissant. Riche en calcium et vitamine C.", img:'baobab.jpeg', badge:'Naturel', rating:'4.7', visible:true },
  { id:'jus-pasteque', nom:'Jus de pastèque', cat:'jus', prix:600, desc:"Pastèque juteuse pressée minute, ultra fraîche. Désaltérant n°1 quand il fait chaud.", img:'pasteque.jpeg', badge:'Naturel', rating:'4.7', visible:true },
  { id:'jus-citronnelle', nom:'Citronnelle glacée', cat:'jus', prix:600, desc:"Infusion de citronnelle bien glacée, légère et digestive. Douceur naturelle.", img:'citronelle.jpeg', badge:'Naturel', rating:'4.6', visible:true },
  { id:'jus-tamarin', nom:'Jus de tamarin', cat:'jus', prix:600, desc:"Tamarin acidulé-sucré, fait maison. Goût authentique qui réveille les papilles.", img:'tamarin.jpeg', badge:'Naturel', rating:'4.6', visible:true },
  { id:'jus-orange', nom:"Jus d'orange", cat:'jus', prix:600, desc:"Oranges pressées à froid, 100% pur jus. Frais, vitaminé, sans sucre ajouté.", img:'orange.jpeg', badge:'Naturel', rating:'4.7', visible:true },
];

const DEFAULT_SETTINGS = {
  deliveryFee: 500,
  waNumber: '2290197601568',
  displayNumber: '0197601568',
  adminPass: 'bibi123'
};

const LS_DISHES = 'bibi_dishes_v1';
const LS_SETTINGS = 'bibi_settings_v1';

function loadDishes(){
  try{
    const raw = localStorage.getItem(LS_DISHES);
    if(!raw) return JSON.parse(JSON.stringify(DEFAULT_DISHES));
    const arr = JSON.parse(raw);
    if(!Array.isArray(arr) || arr.length === 0) return JSON.parse(JSON.stringify(DEFAULT_DISHES));
    return arr;
  }catch(e){ return JSON.parse(JSON.stringify(DEFAULT_DISHES)); }
}
function saveDishes(arr){ localStorage.setItem(LS_DISHES, JSON.stringify(arr)); }
function loadSettings(){
  try{
    const raw = localStorage.getItem(LS_SETTINGS);
    if(!raw) return Object.assign({}, DEFAULT_SETTINGS);
    return Object.assign({}, DEFAULT_SETTINGS, JSON.parse(raw));
  }catch(e){ return Object.assign({}, DEFAULT_SETTINGS); }
}
function saveSettings(s){ localStorage.setItem(LS_SETTINGS, JSON.stringify(s)); }
function resetMenu(){ localStorage.removeItem(LS_DISHES); localStorage.removeItem(LS_SETTINGS); }
