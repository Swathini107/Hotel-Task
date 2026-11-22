const hotels = [
  {
    id: 1,
    title: "The Grand Palace Hotel",
    description: "Experience luxury and comfort with spacious rooms, a swimming pool and premium facilities.",
    latitude: 11.0168,
    longitude: 76.9558,
    price: 4500,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
  },
  {
    id: 2,
    title: "Ocean View Resort",
    description: "Enjoy a peaceful beachside stay with beautiful ocean views.",
    latitude: 9.9252,
    longitude: 78.1198,
    price: 6500,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
  },
  {
    id: 3,
    title: "Mountain Paradise",
    description: "A relaxing mountain retreat surrounded by beautiful landscapes.",
    latitude: 10.0889,
    longitude: 77.0595,
    price: 3200,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800"
  },
  {
    id: 4,
    title: "Royal Heritage Inn",
    description: "Enjoy traditional architecture, comfortable accommodation and local food.",
    latitude: 11.4102,
    longitude: 76.695,
    price: 2800,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
  },
  {
    id: 5,
    title: "Green Valley Stay",
    description: "A peaceful hotel surrounded by greenery, ideal for family vacations.",
    latitude: 10.3624,
    longitude: 77.9695,
    price: 3800,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800"
  },
  {
    id: 6,
    title: "City Comfort Suites",
    description: "Modern city accommodation offering comfortable rooms.",
    latitude: 13.0827,
    longitude: 80.2707,
    price: 2200,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
  },
  {
    id: 7,
    title: "Lotus Madurai Resort",
    description: "Enjoy a relaxing resort stay with scenic views, a spa and leisure activities.",
    latitude: 9.9031,
    longitude: 78.1387,
    price: 7000,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
  },
  {
    id: 8,
    title: "Golden Resort",
    description: "Enjoy a relaxing resort stay with scenic views, a spa and leisure activities.",
    latitude: 12.2633,
    longitude: 76.618,
    price: 5200,
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800"
  },
  {
    id: 9,
    title: "Tranquil Grand Palace",
    description: "Experience luxury and comfort with spacious rooms, a swimming pool and premium facilities.",
    latitude: 10.7681,
    longitude: 78.7118,
    price: 7400,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
  },
  {
    id: 10,
    title: "Jasmine Heritage Inn",
    description: "Enjoy traditional architecture, comfortable accommodation and local food.",
    latitude: 10.9892,
    longitude: 76.9924,
    price: 3600,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
  },
  {
    id: 11,
    title: "Blue Valparai Resort",
    description: "Enjoy a relaxing resort stay with scenic views, a spa and leisure activities.",
    latitude: 10.3538,
    longitude: 76.9593,
    price: 7900,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
  },
  {
    id: 12,
    title: "Coral Plaza",
    description: "Centrally located hotel with a restaurant, free Wi-Fi and easy access to attractions.",
    latitude: 9.9294,
    longitude: 78.1462,
    price: 2800,
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800"
  },
  {
    id: 13,
    title: "Silver Residency",
    description: "Clean, comfortable rooms with great service at an affordable price.",
    latitude: 9.511,
    longitude: 76.3606,
    price: 1600,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
  },
  {
    id: 14,
    title: "Heritage Trichy Resort",
    description: "Enjoy a relaxing resort stay with scenic views, a spa and leisure activities.",
    latitude: 10.8172,
    longitude: 78.6777,
    price: 10200,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
  },
  {
    id: 15,
    title: "Silver Valley Stay",
    description: "A peaceful hotel surrounded by greenery, ideal for family vacations.",
    latitude: 10.0997,
    longitude: 77.0622,
    price: 5300,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
  },
  {
    id: 16,
    title: "Tranquil Munnar Plaza",
    description: "Centrally located hotel with a restaurant, free Wi-Fi and easy access to attractions.",
    latitude: 10.1037,
    longitude: 77.0869,
    price: 3400,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
  },
  {
    id: 17,
    title: "Golden Thanjavur Grand Palace",
    description: "Experience luxury and comfort with spacious rooms, a swimming pool and premium facilities.",
    latitude: 10.7791,
    longitude: 79.1031,
    price: 6600,
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800"
  },
  {
    id: 18,
    title: "Coral Valley Stay",
    description: "A peaceful hotel surrounded by greenery, ideal for family vacations.",
    latitude: 9.2843,
    longitude: 79.2941,
    price: 5400,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
  },
  {
    id: 19,
    title: "Imperial Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 12.3276,
    longitude: 76.6314,
    price: 2100,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
  },
  {
    id: 20,
    title: "Golden Kodaikanal Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 10.2069,
    longitude: 77.4994,
    price: 3000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
  },
  {
    id: 21,
    title: "Coral Retreat",
    description: "A quiet getaway with cozy rooms, fresh air and home-style meals.",
    latitude: 11.4179,
    longitude: 76.6924,
    price: 4600,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800"
  },
  {
    id: 22,
    title: "Blue Grand Palace",
    description: "Experience luxury and comfort with spacious rooms, a swimming pool and premium facilities.",
    latitude: 12.3159,
    longitude: 76.6609,
    price: 8400,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
  },
  {
    id: 23,
    title: "Sunrise Kanyakumari Resort",
    description: "Enjoy a relaxing resort stay with scenic views, a spa and leisure activities.",
    latitude: 8.0486,
    longitude: 77.5563,
    price: 8700,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800"
  },
  {
    id: 24,
    title: "Serene Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 11.6939,
    longitude: 78.1299,
    price: 1400,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
  },
  {
    id: 25,
    title: "Green Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 9.9522,
    longitude: 76.2705,
    price: 2000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
  },
  {
    id: 26,
    title: "Majestic Grand Palace",
    description: "Experience luxury and comfort with spacious rooms, a swimming pool and premium facilities.",
    latitude: 12.9405,
    longitude: 77.5836,
    price: 4200,
    image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800"
  },
  {
    id: 27,
    title: "Emerald Madurai Suites",
    description: "Modern accommodation offering comfortable rooms and business-friendly amenities.",
    latitude: 9.961,
    longitude: 78.0867,
    price: 4300,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"
  },
  {
    id: 28,
    title: "Serene Kochi Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 9.9397,
    longitude: 76.3044,
    price: 3000,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
  },
  {
    id: 29,
    title: "Serene Trichy Residency",
    description: "Clean, comfortable rooms with great service at an affordable price.",
    latitude: 10.7602,
    longitude: 78.6827,
    price: 2400,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
  },
  {
    id: 30,
    title: "Imperial Lake View",
    description: "Wake up to calm lake views with comfortable rooms and a lakeside restaurant.",
    latitude: 10.9774,
    longitude: 76.9724,
    price: 5300,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
  },
  {
    id: 31,
    title: "Golden Valparai Valley Stay",
    description: "A peaceful hotel surrounded by greenery, ideal for family vacations.",
    latitude: 10.2917,
    longitude: 76.93,
    price: 4200,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
  },
  {
    id: 32,
    title: "Imperial Valley Stay",
    description: "A peaceful hotel surrounded by greenery, ideal for family vacations.",
    latitude: 9.929,
    longitude: 76.2901,
    price: 5200,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
  },
  {
    id: 33,
    title: "Blue Alleppey Retreat",
    description: "A quiet getaway with cozy rooms, fresh air and home-style meals.",
    latitude: 9.4926,
    longitude: 76.3327,
    price: 5700,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"
  },
  {
    id: 34,
    title: "Jasmine Madurai Resort",
    description: "Enjoy a relaxing resort stay with scenic views, a spa and leisure activities.",
    latitude: 9.9541,
    longitude: 78.0997,
    price: 11600,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
  },
  {
    id: 35,
    title: "Pearl Munnar Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 10.0712,
    longitude: 77.0395,
    price: 1600,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
  },
  {
    id: 36,
    title: "Tranquil Mahabalipuram Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 12.582,
    longitude: 80.162,
    price: 2900,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
  },
  {
    id: 37,
    title: "Majestic Thanjavur Valley Stay",
    description: "A peaceful hotel surrounded by greenery, ideal for family vacations.",
    latitude: 10.7641,
    longitude: 79.1299,
    price: 4800,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
  },
  {
    id: 38,
    title: "Coral Munnar Retreat",
    description: "A quiet getaway with cozy rooms, fresh air and home-style meals.",
    latitude: 10.123,
    longitude: 77.0823,
    price: 4100,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800"
  },
  {
    id: 39,
    title: "Tranquil Retreat",
    description: "A quiet getaway with cozy rooms, fresh air and home-style meals.",
    latitude: 12.3133,
    longitude: 76.6118,
    price: 5700,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800"
  },
  {
    id: 40,
    title: "Imperial Madurai Residency",
    description: "Clean, comfortable rooms with great service at an affordable price.",
    latitude: 9.9254,
    longitude: 78.148,
    price: 2500,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800"
  },
  {
    id: 41,
    title: "Silver Grand Palace",
    description: "Experience luxury and comfort with spacious rooms, a swimming pool and premium facilities.",
    latitude: 11.3757,
    longitude: 76.6604,
    price: 5500,
    image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800"
  },
  {
    id: 42,
    title: "Imperial Trichy Retreat",
    description: "A quiet getaway with cozy rooms, fresh air and home-style meals.",
    latitude: 10.7968,
    longitude: 78.6679,
    price: 4000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
  },
  {
    id: 43,
    title: "Imperial Retreat",
    description: "A quiet getaway with cozy rooms, fresh air and home-style meals.",
    latitude: 8.0736,
    longitude: 77.5194,
    price: 5100,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
  },
  {
    id: 44,
    title: "Green Rameswaram Valley Stay",
    description: "A peaceful hotel surrounded by greenery, ideal for family vacations.",
    latitude: 9.2716,
    longitude: 79.2982,
    price: 5400,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
  },
  {
    id: 45,
    title: "Crown Kochi Resort",
    description: "Enjoy a relaxing resort stay with scenic views, a spa and leisure activities.",
    latitude: 9.9709,
    longitude: 76.2332,
    price: 9600,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
  },
  {
    id: 46,
    title: "Orchid Bengaluru Suites",
    description: "Modern accommodation offering comfortable rooms and business-friendly amenities.",
    latitude: 13.0019,
    longitude: 77.5842,
    price: 2300,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800"
  },
  {
    id: 47,
    title: "Palm Plaza",
    description: "Centrally located hotel with a restaurant, free Wi-Fi and easy access to attractions.",
    latitude: 9.9639,
    longitude: 78.1444,
    price: 5000,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
  },
  {
    id: 48,
    title: "Blue Coimbatore Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 10.9875,
    longitude: 76.925,
    price: 3000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
  },
  {
    id: 49,
    title: "Palm Trichy Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 10.7674,
    longitude: 78.6921,
    price: 2400,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
  },
  {
    id: 50,
    title: "Golden Salem Inn",
    description: "Budget-friendly stay with warm hospitality and essential comforts.",
    latitude: 11.675,
    longitude: 78.1723,
    price: 1400,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
  }
];

export default hotels;