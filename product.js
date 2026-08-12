let clothes = [
  {
    "id": 1,
    "title": "Classic Crewneck Cotton T-Shirt",
    "price": 24.99,
    "category": "men's clothing",
    "description": "Premium heavyweight t-shirt made from organic cotton. Relaxed fit with reinforced stitching.",
    "images": [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHBsYWluJTIwd2hpdGUlMjB0LXNoaXJ0JTIwc3R1ZGlvfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1654570818480-54524bf0186b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGJsYWNrJTIwdC1zaGlydCUyMGZvbGRlZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "attributes": {"sizes": ["S", "M", "L", "XL"], "colors": ["White", "Black", "Gray"], "material": "100% Cotton"},
    "rating": {"rate": 4.6, "count": 128},
    "stock": 45
  },
  {
    "id": 2,
    "title": "Ribbed Knit Summer Midi Dress",
    "price": 59.50,
    "category": "women's clothing",
    "description": "Elegant lightweight midi dress with a ribbed texture and a subtle side slit.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["XS", "S", "M", "L"], "colors": ["Sage Green", "Oatmeal"], "material": "95% Rayon"},
    "rating": {"rate": 4.8, "count": 94},
    "stock": 20
  },
  {
    "id": 3,
    "title": "Slim-Fit Stretch Denim Jeans",
    "price": 68.00,
    "category": "men's clothing",
    "description": "Modern slim-fit jeans engineered with performance stretch denim for maximum comfort.",
    "images": [
        "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGJsdWUlMjBkZW5pbSUyMGplYW5zfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1713880453396-aa0493e308ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsaW0lMjBmaXQlMjBqZWFucyUyMGZvbGRlZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "attributes": {"sizes": ["30x32", "32x32", "34x32"], "colors": ["Dark Indigo", "Light Wash"], "material": "98% Cotton"},
    "rating": {"rate": 4.2, "count": 210},
    "stock": 60
  },
  {
    "id": 4,
    "title": "Oversized Fleece Pullover Hoodie",
    "price": 49.99,
    "category": "unisex",
    "description": "Ultra-soft fleece hoodie featuring a drop-shoulder design and a spacious kangaroo pocket.",
    "images": [
        "https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3ZlcnNpemVkJTIwc3RyZWV0d2VhciUyMGhvb2RpZSUyMHN0cmVldHdlYXIlMjBmb2xkZWR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1685354217981-26c14a211bf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3ZlcnNpemVkJTIwc3RyZWV0d2VhciUyMGhvb2RpZSUyMHN0cmVldHdlYXJ8ZW58MHx8MHx8fDA%3D"
    ],
    "attributes": {"sizes": ["S", "M", "L", "XL"], "colors": ["Charcoal", "Cream"], "material": "80% Cotton"},
    "rating": {"rate": 4.7, "count": 340},
    "stock": 15
  },
  {
    "id": 5,
    "title": "High-Waisted Wide-Leg Trousers",
    "price": 54.00,
    "category": "women's clothing",
    "description": "Tailored wide-leg pants featuring a high-rise waist and sharp front pleats.",
    "images": [
        "https://plus.unsplash.com/premium_photo-1711051476626-1e8c8b79f122?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW5zJTIwaGlnaCUyMHdhaXN0ZWQlMjB0cm91c2VycyUyMGJlaWdlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1711443813147-def27861b9af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwaGlnaCUyMHdhaXN0ZWQlMjB0cm91c2VycyUyMGJlaWdlJTIwZm9sZGVkfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["2", "4", "6", "8"], "colors": ["Beige", "Black"], "material": "100% Polyester"},
    "rating": {"rate": 4.5, "count": 88},
    "stock": 32
  },
  {
    "id": 6,
    "title": "Button-Down Linen Resort Shirt",
    "price": 45.00,
    "category": "men's clothing",
    "description": "Breathable woven linen shirt with a camp collar, perfect for warm weather.",
    "images": [
        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGxpbmVuJTIwc2hpcnQlMjBzdW1tZXJ8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGxpbmVuJTIwc2hpcnQlMjBzdW1tZXIlMjBmb2xkZWR8ZW58MHx8MHx8fDA%3D"
    ],
    "attributes": {"sizes": ["M", "L", "XL"], "colors": ["White", "Sky Blue"], "material": "100% Linen"},
    "rating": {"rate": 4.4, "count": 76},
    "stock": 25
  },
  {
    "id": 7,
    "title": "Cropped Cable-Knit Sweater",
    "price": 42.50,
    "category": "women's clothing",
    "description": "Cozy cable-knit pullover featuring a modern cropped silhouette and ribbed cuffs.",
    "images": [
        "https://images.unsplash.com/photo-1711443813147-def27861b9af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwaGlnaCUyMHdhaXN0ZWQlMjB0cm91c2VycyUyMGJlaWdlJTIwZm9sZGVkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1711443813147-def27861b9af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwaGlnaCUyMHdhaXN0ZWQlMjB0cm91c2VycyUyMGJlaWdlJTIwZm9sZGVkfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["S", "M", "L"], "colors": ["Ivory", "Soft Pink"], "material": "100% Acrylic"},
    "rating": {"rate": 4.9, "count": 112},
    "stock": 18
  },
  {
    "id": 8,
    "title": "Athletic Runner Shorts",
    "price": 29.99,
    "category": "unisex",
    "description": "Lightweight, moisture-wicking shorts with a built-in liner and zipper key pocket.",
    "images": [
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["S", "M", "L"], "colors": ["Black", "Navy Blue"], "material": "100% Nylon"},
    "rating": {"rate": 4.3, "count": 145},
    "stock": 80
  },
  {
    "id": 9,
    "title": "Water-Resistant Windbreaker Jacket",
    "price": 75.00,
    "category": "unisex",
    "description": "Packable lightweight jacket with an adjustable hood and secure zip pockets.",
    "images": [
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["S", "M", "L", "XL"], "colors": ["Olive Green", "Black"], "material": "100% Polyester"},
    "rating": {"rate": 4.6, "count": 92},
    "stock": 40
  },
  {
    "id": 10,
    "title": "Floral Print Wrap Maxi Dress",
    "price": 65.00,
    "category": "women's clothing",
    "description": "Flowing wrap dress featuring a bohemian floral pattern and V-neckline.",
    "images": [
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW5zJTIwaGlnaCUyMHdhaXN0ZWQlMjB0cm91c2VycyUyMGJlaWdlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW5zJTIwaGlnaCUyMHdhaXN0ZWQlMjB0cm91c2VycyUyMGJlaWdlfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["XS", "S", "M", "L"], "colors": ["Navy Floral", "Red Floral"], "material": "100% Viscose"},
    "rating": {"rate": 4.7, "count": 203},
    "stock": 14
  },
  {
    "id": 11,
    "title": "Slim-Fit Oxford Cotton Shirt",
    "price": 48.00,
    "category": "men's clothing",
    "description": "A classic wardrobe staple woven from durable, comfortable Oxford cotton.",
    "images": [
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["S", "M", "L", "XL"], "colors": ["Light Blue", "White"], "material": "100% Oxford Cotton"},
    "rating": {"rate": 4.5, "count": 165},
    "stock": 55
  },
  {
    "id": 12,
    "title": "High-Rise Denim Shorts",
    "price": 38.00,
    "category": "women's clothing",
    "description": "Vintage-inspired high-waisted shorts featuring raw, frayed hems.",
    "images": [
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["24", "26", "28", "30"], "colors": ["Light Indigo", "Acid Wash"], "material": "100% Cotton"},
    "rating": {"rate": 4.1, "count": 98},
    "stock": 42
  },
  {
    "id": 13,
    "title": "Seamless Workout Sports Bra",
    "price": 32.00,
    "category": "women's clothing",
    "description": "Medium-support seamless bra tailored for yoga, pilates, and gym training.",
    "images": [
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["S", "M", "L"], "colors": ["Teal", "Charcoal"], "material": "90% Nylon, 10% Spandex"},
    "rating": {"rate": 4.8, "count": 187},
    "stock": 65
  },
  {
    "id": 14,
    "title": "High-Waisted Yoga Leggings",
    "price": 45.00,
    "category": "women's clothing",
    "description": "Buttery soft, squat-proof workout leggings with a side drop-in pocket.",
    "images": [
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["XS", "S", "M", "L"], "colors": ["Black", "Plum"], "material": "80% Nylon, 20% Elastane"},
    "rating": {"rate": 4.9, "count": 512},
    "stock": 110
  },
  {
    "id": 15,
    "title": "Heavyweight Boxy Graphic Tee",
    "price": 28.00,
    "category": "unisex",
    "description": "Vintage-wash streetwear graphic t-shirt featuring a structured boxy fit.",
    "images": [
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["M", "L", "XL", "XXL"], "colors": ["Vintage Black", "Faded Off-White"], "material": "100% Carded Cotton"},
    "rating": {"rate": 4.6, "count": 74},
    "stock": 30
  },
  {
    "id": 16,
    "title": "Tailored Double-Breasted Blazer",
    "price": 110.00,
    "category": "women's clothing",
    "description": "Sharp, structured office blazer engineered with tortoiseshell buttons.",
    "images": [
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1546868871-7041f47afc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pc2V4JTIwc2hvcnRzJTIwYXRo bGV0aWMlMjB3ZWFyfGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["4", "6", "8", "10"], "colors": ["Houndstooth", "Solid Black"], "material": "Polyester Blend"},
    "rating": {"rate": 4.7, "count": 56},
    "stock": 12
  },
  {
    "id": 17,
    "title": "Chino Shorts 7-Inch Inseam",
    "price": 39.99,
    "category": "men's clothing",
    "description": "Classic casual flat-front chino shorts woven with comfortable stretch.",
    "images": [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHBsYWluJTIwd2hpdGUlMjB0LXNoaXJ0JTIwc3R1ZGlvfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1654570818480-54524bf0186b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGJsYWNrJTIwdC1zaGlydCUyMGZvbGRlZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "attributes": {"sizes": ["30", "32", "34", "36"], "colors": ["Khaki", "Navy"], "material": "98% Cotton"},
    "rating": {"rate": 4.4, "count": 119},
    "stock": 50
  },
  {
    "id": 18,
    "title": "Satin Slip Midi Skirt",
    "price": 46.00,
    "category": "women's clothing",
    "description": "Elegant bias-cut silk-feel slip skirt featuring a hidden elastic waistband.",
    "images": [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHBsYWluJTIwd2hpdGUlMjB0LXNoaXJ0JTIwc3R1ZGlvfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1654570818480-54524bf0186b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGJsYWNrJTIwdC1zaGlydCUyMGZvbGRlZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "attributes": {"sizes": ["S", "M", "L"], "colors": ["Champagne", "Emerald Green"], "material": "100% Polyester Satin"},
    "rating": {"rate": 4.5, "count": 83},
    "stock": 22
  },
  {
    "id": 19,
    "title": "Sherpa-Lined Corduroy Jacket",
    "price": 89.00,
    "category": "men's clothing",
    "description": "Vintage truck-style corduroy jacket insulated with cozy faux-sherpa lining.",
    "images": [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHBsYWluJTIwd2hpdGUlMjB0LXNoaXJ0JTIwc3R1ZGlvfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1654570818480-54524bf0186b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGJsYWNrJTIwdC1zaGlydCUyMGZvbGRlZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "attributes": {"sizes": ["M", "L", "XL"], "colors": ["Tan Brown", "Forest Green"], "material": "100% Cotton Corduroy"},
    "rating": {"rate": 4.8, "count": 142},
    "stock": 16
  },
  {
    "id": 20,
    "title": "A-Line Denim Mini Skirt",
    "price": 34.99,
    "category": "women's clothing",
    "description": "Classic rigid indigo denim mini skirt designed with a five-pocket layout.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["25", "27", "29"], "colors": ["Medium Indigo"], "material": "100% Cotton Denim"},
    "rating": {"rate": 4.3, "count": 67},
    "stock": 35
  },
  {
    "id": 21,
    "title": "Stretch Slim Athletic Chinos",
    "price": 58.00,
    "category": "men's clothing",
    "description": "Versatile smart-casual pants offering moisture wicking and flexible four-way stretch.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {"sizes": ["30x30", "32x32", "34x32"], "colors": ["Dark Khaki", "Black"], "material": "Nylon Spandex Blend"},
    "rating": {"rate": 4.5, "count": 224},
    "stock": 48
  },
   {
    "id": 22,
    "title": "Mock Neck Ribbed Long Sleeve",
    "price": 29.50,
    "category": "women's clothing",
    "description": "Form-fitting, lightweight knit mock neck top optimized for layering.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["XS", "S", "M", "L"],
      "colors": ["Black", "Burgundy"],
      "material": "Cotton Modal Mix"
    },
    "rating": {"rate": 4.6, "count": 105},
    "stock": 40
  },
  {
    "id": 23,
    "title": "Classic Leather Biker Jacket",
    "price": 199.99,
    "category": "unisex",
    "description": "Heavyweight premium asymmetrical leather jacket equipped with steel zippers.",
    "images": [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHBsYWluJTIwd2hpdGUlMjB0LXNoaXJ0JTIwc3R1ZGlvfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1654570818480-54524bf0186b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGJsYWNrJTIwdC1zaGlydCUyMGZvbGRlZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    "attributes": {
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Matte Black"],
      "material": "100% Genuine Leather"
    },
    "rating": {"rate": 4.9, "count": 89},
    "stock": 10
  },
  {
    "id": 24,
    "title": "Linen Blend Wide-Leg Jumpsuit",
    "price": 72.00,
    "category": "women's clothing",
    "description": "Relaxed breezy linen jumpsuit styled with adjustable shoulder spaghetti straps.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M", "L"],
      "colors": ["Terracotta", "Flax Linen"],
      "material": "55% Linen, 45% Rayon"
    },
    "rating": {"rate": 4.4, "count": 52},
    "stock": 15
  },
  {
    "id": 25,
    "title": "Quarter-Zip Fleece Pullover",
    "price": 45.00,
    "category": "unisex",
    "description": "Warm polar fleece pullover sporting an elastic drawcord waist toggle.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Oatmeal", "Navy"],
      "material": "100% Recycled Polyester"
    },
    "rating": {"rate": 4.7, "count": 134},
    "stock": 28
  },
  {
    "id": 26,
    "title": "V-Neck Cardigan Knit Sweater",
    "price": 54.00,
    "category": "women's clothing",
    "description": "Button-up chunky knit oversized cardigan detailed with drop shoulder lines.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M", "L"],
      "colors": ["Mustard Yellow", "Cream"],
      "material": "Wool Acrylic Blend"
    },
    "rating": {"rate": 4.6, "count": 91},
    "stock": 21
  },
  {
    "id": 27,
    "title": "Plaid Flannel Button-Down",
    "price": 38.50,
    "category": "men's clothing",
    "description": "Soft brushed cotton flannel shirt featuring dual front button chief pockets.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["M", "L", "XL", "XXL"],
      "colors": ["Red Black Plaid", "Green Plaid"],
      "material": "100% Brushed Cotton"
    },
    "rating": {"rate": 4.5, "count": 178},
    "stock": 52
  },
  {
    "id": 28,
    "title": "Tiered Ruffle Mini Dress",
    "price": 49.99,
    "category": "women's clothing",
    "description": "Flirty summer mini dress patterned with tiered ruffles and elastic smocked waist.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["XS", "S", "M"],
      "colors": ["Blush Pink", "White"],
      "material": "100% Chiffon"
    },
    "rating": {"rate": 4.3, "count": 64},
    "stock": 19
  },
  {
    "id": 29,
    "title": "Breton Striped Long Sleeve Tee",
    "price": 32.00,
    "category": "unisex",
    "description": "Nautical-inspired heavy cotton shirt detailed with horizontal sailor stripes.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M", "L"],
      "colors": ["White Navy Stripe"],
      "material": "100% Interlock Cotton"
    },
    "rating": {"rate": 4.6, "count": 82},
    "stock": 33
  },
  {
    "id": 30,
    "title": "Waterproof Puffer Winter Coat",
    "price": 149.50,
    "category": "unisex",
    "description": "Thick down-alternative insulated winter coat featuring a detachable faux-fur hood zipper.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["M", "L", "XL", "XXL"],
      "colors": ["Matte Black", "Navy Blue"],
      "material": "Nylon Shell, Down Alt Fill"
    },
    "rating": {"rate": 4.8, "count": 143},
    "stock": 15
  },
  {
    "id": 31,
    "title": "Polka Dot Silk Blouse",
    "price": 62.00,
    "category": "women's clothing",
    "description": "Sophisticated office-ready silk blouse structured with a classic pussy-bow neck tie line.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M", "L"],
      "colors": ["Black White Dot"],
      "material": "100% Mulberry Silk"
    },
    "rating": {"rate": 4.5, "count": 47},
    "stock": 11
  },
  {
    "id": 32,
    "title": "Premium Track Pants",
    "price": 45.00,
    "category": "men's clothing",
    "description": "Streetwear tapered track pants built with zipper ankles and side seam stripes.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M", "L"],
      "colors": ["Black White Stripe"],
      "material": "Poly-Interlock Blend"
    },
    "rating": {"rate": 4.4, "count": 113},
    "stock": 40
  },
  {
    "id": 33,
    "title": "Athletic Tennis Skirt",
    "price": 35.00,
    "category": "women's clothing",
    "description": "Pleated athletic mini skirt sporting built-in compression shorts and ball pocket spaces.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["XS", "S", "M"],
      "colors": ["White", "Black"],
      "material": "Spandex Nylon Blend"
    },
    "rating": {"rate": 4.7, "count": 156},
    "stock": 50
  },
  {
    "id": 34,
    "title": "Pima Cotton Polo Shirt",
    "price": 39.00,
    "category": "men's clothing",
    "description": "Ultra-soft Peruvian Pima cotton polo shirt finished with clean three-button plackets.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["M", "L", "XL"],
      "colors": ["Burgundy", "Classic Navy"],
      "material": "100% Pima Cotton"
    },
    "rating": {"rate": 4.5, "count": 92},
    "stock": 38
  },
  {
    "id": 35,
    "title": "Off-The-Shoulder Knit Crop Top",
    "price": 26.00,
    "category": "women's clothing",
    "description": "Bandeau style knit long sleeve top featuring foldover Bardot neckline cuts.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M"],
      "colors": ["Cream White", "Sage"],
      "material": "Ribbed Knit Acrylic Mix"
    },
    "rating": {"rate": 4.2, "count": 59},
    "stock": 25
  },
  {
    "id": 36,
    "title": "Denim Trucker Jacket",
    "price": 78.00,
    "category": "unisex",
    "description": "Classic button-up medium wash denim trucker jacket built with chest flap pockets.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Medium Wash Blue"],
      "material": "100% Cotton Denim"
    },
    "rating": {"rate": 4.6, "count": 215},
    "stock": 30
  },
  {
    "id": 37,
    "title": "Linen Button-Up Tailored Vest",
    "price": 42.00,
    "category": "women's clothing",
    "description": "Trendy tailored suiting vest made from structured linen blend textile layers.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M", "L"],
      "colors": ["Oatmeal Beige"],
      "material": "Linen Rayon Blend"
    },
    "rating": {"rate": 4.7, "count": 41},
    "stock": 14
  },
  {
    "id": 38,
    "title": "Cargo Utility Joggers",
    "price": 52.00,
    "category": "men's clothing",
    "description": "Streetwear cargo pants finished with elastic cuffs and roomy tactical side utility flaps.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["30", "32", "34"],
      "colors": ["Olive Drab", "Tech Black"],
      "material": "Cotton Twill Stretch"
    },
    "rating": {"rate": 4.3, "count": 139},
    "stock": 45
  },
  {
    "id": 39,
    "title": "Square Neck Bodysuit",
    "price": 28.00,
    "category": "women's clothing",
    "description": "Sleek double-layered contour fabric bodysuit designed with snap bottom enclosures.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["XS", "S", "M", "L"],
      "colors": ["Black", "White Nuance"],
      "material": "Nylon Elastane Mix"
    },
    "rating": {"rate": 4.8, "count": 195},
    "stock": 60
  },
  {
    "id": 40,
    "title": "Oversized Knit Crewneck Sweater",
    "price": 64.00,
    "category": "unisex",
    "description": "Chunky loose-thread casual vintage style pullover perfect for cold days.",
    "images": [
        "https://images.unsplash.com/photo-1785158377528-d8cbd55a991e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwcmliYmVkJTIwc3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1784385411359-6bbb1532f6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBtaWRpJTIwZHJlc3MlMjBmYXNoaW9ufGVufDB8fDB8fHww"
    ],
    "attributes": {
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Forest Green", "Toffee Brown"],
      "material": "Wool Blended Knit"
    },
    "rating": {"rate": 4.7, "count": 86},
    "stock": 17
  }
]


let urlInfo = new URLSearchParams(window.location.search);

let id = urlInfo.get("id");

let product = clothes.find(function(product) {
    return product.id == id;
});


let productContainer = document.getElementById("product");

productContainer.innerHTML = `
    <h1>${product.title}</h1>
    <img src="${product.images[0]}" width="300">
    
    <p>$${product.price}</p>
    <p>${product.description}</p>

    <h3>Choose your size</h3>

    <div class="sizes"></div>
`;

product.attributes.sizes.forEach(function(size) {
    console.log(size);
});

let sizesContainer = document.querySelector(".sizes");
product.attributes.sizes.forEach(function(size) {
    sizesContainer.innerHTML += `<button>${size}</button>`;
});