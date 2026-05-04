export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export interface MenuSection {
  title: string;
  note: string;
  items: MenuItem[];
}

export interface RestaurantData {
  key: string;
  name: string;
  cuisine: string;
  menuSourceLabel: string;
  menuSourceUrl: string;
  bookingUrl: string;
  hours: string[];
  heroImage: string;
  sections: MenuSection[];
}

export const restaurantData: RestaurantData = {
  "key": "opa",
  "name": "Opa Bar & Mezze",
  "cuisine": "Greek mezze, oysters, seafood and riverfront banquets",
  "menuSourceLabel": "Official Opa menu",
  "menuSourceUrl": "https://www.opabar.com.au/menu",
  "bookingUrl": "https://www.opabar.com.au/menu",
  "hours": [
    "Open 7 days",
    "All day dining 11:00am-late"
  ],
  "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=85",
  "sections": [
    {
      "title": "Snacks & Dips",
      "note": "Greek starters and dips with village bread.",
      "items": [
        {
          "name": "Baby Yiros",
          "description": "Grilled beef and pork mince, herbs, pita bread, onion, tomato, tzatziki",
          "price": "$16"
        },
        {
          "name": "Tzatziki",
          "description": "Yoghurt, cucumber, dill",
          "price": "$19"
        },
        {
          "name": "Warm Santorini Fava",
          "description": "Split broad bean mousse",
          "price": "$19"
        },
        {
          "name": "Tyrokafteri",
          "description": "Hot pepper and feta",
          "price": "$19"
        }
      ]
    },
    {
      "title": "Mezze",
      "note": "Share plates from the official menu.",
      "items": [
        {
          "name": "Haloumi Chips",
          "description": "Fried, sesame seeds, capsicum jam",
          "price": "$29"
        },
        {
          "name": "Htapodi Octopus",
          "description": "Grilled, olive oil, oregano, lemon",
          "price": "$38"
        },
        {
          "name": "Kalamari",
          "description": "Flash-fried, lemon, salt",
          "price": "$32"
        },
        {
          "name": "Saganaki",
          "description": "Grilled kefalograviera cheese, lemon, ouzo",
          "price": "$29"
        }
      ]
    },
    {
      "title": "Large & Banquet",
      "note": "Big table Greek dining.",
      "items": [
        {
          "name": "Moussaka",
          "description": "Wagyu beef, potatoes, eggplant, bechamel",
          "price": "$48"
        },
        {
          "name": "Lamb Shoulder",
          "description": "Slow baked, oregano, lemon, tzatziki",
          "price": "$60 / $120"
        },
        {
          "name": "Apollo’s Plate",
          "description": "Banquet with taramasalata, village bread, octopus, kalamari, lamb shoulder and dessert",
          "price": "$88pp"
        },
        {
          "name": "Feast of Gods",
          "description": "Seafood-forward banquet with oysters, prawns, octopus, sand crab, lamb shoulder and bugs spaghetti",
          "price": "$135pp"
        }
      ]
    }
  ]
};
