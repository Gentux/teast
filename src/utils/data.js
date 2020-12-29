import teas from "./data.json";

function getShops() {
  return {
    1: {
      shop_id: 1,
      name: "Goutte de thé",
      logo: "",
      location: "Paris, France",
      url: "https://gouttedethe.com/"
    },
    2: {
      shop_id: 2,
      name: "Lupicia",
      logo: "",
      location: "Paris, France",
      url: "https://www.lupicia.fr/"
    }

  };
}

export default function initLocalStorage() {
  localStorage.removeItem('tea_index')
  localStorage.removeItem('shop_index')

  let tea_index = [];
  for (const tea_id in teas) {
    localStorage.setItem("tea-" + tea_id, JSON.stringify(teas[tea_id]))
    tea_index.push(tea_id)
  }
  let shop_index = [];
  const shops = getShops()
  for (const shop_id in shops) {
    localStorage.setItem("shop-" + shop_id, JSON.stringify(shops[shop_id]))
    shop_index.push(shop_id)
  }

  localStorage.setItem("tea_index", JSON.stringify(tea_index))
  localStorage.setItem("shop_index", JSON.stringify(shop_index))
}
