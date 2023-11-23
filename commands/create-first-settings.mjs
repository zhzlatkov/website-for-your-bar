import prisma from '../services/prismaClient.mjs';

const settings = {
    name: 'MyBar',
    logo: 'https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_1280.png',
    email: 'info@mybar.com',
    phone: 892461023,
    homeHeading1: 'BAR & DINNER',
    homeHeading2: 'Brunch & Burger after 4 p.m.',
    shortDescription:
        'Out bar is more than just a place to grab a drink; our bar is a place where people can unwind, socialize, and enjoy themselves! Currently the best cocktail bar in Europe, number 1 one in Germany!',
    addressStatus: true,
    address:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23452.460574967714!2d23.255106277246114!3d42.71308800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9a99f1694635%3A0xda4e8399b858ead7!2sHappy%20Bar%20%26%20Grill%20Lyulin!5e0!3m2!1sbg!2sbg!4v1690653957400!5m2!1sbg!2sbg',
    statusFunFacts: true,
    statusJokes: true,
    jokesImage:
        'https://img.freepik.com/free-photo/young-crazy-businessman-dancing_1194-9853.jpg?w=740&t=st=1685564918~exp=1685565518~hmac=f19ecb50ede4a2d570a561c2a63834c294cc604cf8e391736af345887b9ef685',
    statusOrdering: false,
};

const services = [
    {
        name: 'Private Events',
        icon: 'faChampagneGlasses',
        information:
            'From an office party to an at-home celebration, we can help with your next event. Please fill out the form below and we’ll be in touch soon!',
    },
    {
        name: 'Food & Drinks',
        information:
            'Our culinary team provides a seamless blend of traditional and modern cuisine to compliment your evening with the special tastes of food & drinks!',
        icon: 'faMartiniGlassCitrus',
    },
    {
        name: 'Special Events',
        information:
            'Every month we organize different special events that require a personal invitation with the presence of different special guests!',
        icon: 'faIcons',
    },
];

const socialMedias = [
    { name: 'X(Twitter)', icon: 'fa-twitter', link: 'https://www.twitter.com' },
    { name: 'Facebook', icon: 'fa-facebook', link: 'https://www.facebook.com' },
    {
        name: 'Instagram',
        icon: 'fa-instagram',
        link: 'https://www.instagram.com',
    },
    { name: 'Tik-tok', icon: 'fa-tik-tok', link: 'https://www.tik-tok.com' },
];

const funFacts = [
    {
        text: 'The global average consumption was 6.18 liters liters per person in the latest year available.',
        status: true,
    },
    {
        text: 'Beer is the world’s oldest beverage and dates back 5000 years.',
        status: true,
    },
    {
        text: 'Vodka is the world’s most popular alcohol with approx 5 billion litres consumed per year.',
        status: true,
    },
    {
        text: 'After a young woman and a young man drink the same amount of alcohol, the woman will have a higher blood alcohol level.',
        status: true,
    },
    {
        text: "Consuming alcohol causes blood to rush to the skin's surface, which makes you feel warmer but not actually warm you up.",
        status: true,
    },
    {
        text: 'The world’s longest hangover lasted one month exactly; Man from Scotland consumed 60 pints of beer in one sitting.',
        status: true,
    },
];

const barJokes = [
    {
        author: 'Someone',
        place: 'Alaska',
        text: 'In a bar in a remote Alaskan town, a newcomer hears people yell out numbers (#23!, #56, etc.) and then everyone laughs. He asks the guy next to him what’s going on, and he says the jokes have been told so many times, people just yell out their numbers instead of retelling them. So he yells out #27! but nobody laughs. The guy next to him says, “Some people can tell a joke, and some people can’t.',
        status: true,
    },
];

const categories = [
    {
        name: 'Beers',
        image: 'beers.jpg',
        shortDescription:
            'A refreshing alcoholic beverage made from malted barley, hops, and yeast. Beer is one of the oldest and most widely consumed alcoholic drinks in the world.',
        status: true,
    },
    {
        name: 'Classic Cocktails (Alcoholic)',
        image: 'classic_cocktails.jpg',
        shortDescription: 'A selection of timeless alcoholic cocktails.',
        status: true,
    },
    {
        name: 'Mocktails (Non-Alcoholic)',
        image: 'mocktails.jpg',
        shortDescription: 'Non-alcoholic mocktails for everyone to enjoy.',
        status: true,
    },
    {
        name: 'Alcoholic Beverages',
        image: 'alcoholic_beverages.jpg',
        shortDescription:
            'A variety of alcoholic beverages to complement your cocktails.',
        status: true,
    },
    {
        name: 'Mixers and Soft Drinks',
        image: 'mixers_soft_drinks.jpg',
        shortDescription:
            'Mixers and soft drinks to perfect your cocktail recipes.',
        status: true,
    },
    {
        name: 'Snacks and Appetizers',
        image: 'snacks_appetizers.jpg',
        shortDescription:
            'Delicious snacks and appetizers to pair with your drinks.',
        status: true,
    },
    {
        name: 'Light Meals',
        image: 'light_meals.jpg',
        shortDescription:
            "Satisfying light meals for when you're feeling hungry.",
        status: true,
    },
    {
        name: 'Desserts',
        image: 'desserts.jpg',
        shortDescription: 'Indulge in our delectable dessert options.',
        status: true,
    },
];

const products = [
    {
        name: 'Heineken',
        price: 2,
        quantity: 330,
        quantityType: 'ml',
        shortDescription:
            'Heineken is a pale lager beer with 5% alcohol by volume. It is brewed by Heineken International and is one of the most popular beers in the world.',
        longDescription:
            "Heineken is a pale lager beer with 5% alcohol by volume. It is brewed by Heineken International and is one of the most popular beers in the world. The beer has a bright golden color and a mild, slightly bitter taste. It is made from malted barley, hops, and water, and is fermented using Heineken's unique A-yeast. Heineken is known for its iconic green bottle and red star logo. The beer pairs well with a variety of foods, including pizza, burgers, and spicy dishes. Heineken has been brewed since 1873 and is now sold in over 170 countries.",
        categoryId: 1,
        status: true,
        image: 'https://cdn.pixabay.com/photo/2016/03/27/20/00/beer-1283863_960_720.jpg',
    },
    {
        name: 'Guinness',
        price: 3,
        quantity: 440,
        quantityType: 'ml',
        shortDescription:
            'Guinness is a dark stout beer with 4.2% alcohol by volume. It is brewed by Guinness Brewery and is one of the most recognizable beers in the world.',
        longDescription:
            'Guinness is a dark stout beer with 4.2% alcohol by volume. It is brewed by Guinness Brewery and is one of the most recognizable beers in the world. The beer has a rich, creamy texture and a distinctive roasted flavor that comes from using roasted barley in the brewing process. Guinness is known for its iconic black color and creamy white head. The beer pairs well with hearty dishes such as stews, roasts, and grilled meats. Guinness has been brewed since 1759 and is now sold in over 150 countries.',
        categoryId: 1,
        status: true,
        image: 'https://cdn.pixabay.com/photo/2017/09/08/16/09/guinness-2732939_960_720.jpg',
    },
    {
        name: 'Budweiser',
        price: 2,
        quantity: 330,
        quantityType: 'ml',
        shortDescription:
            'Budweiser is a pale lager beer with 5% alcohol by volume. It is brewed by Anheuser-Busch InBev and is one of the most popular beers in the United States.',
        longDescription:
            'Budweiser is a pale lager beer with 5% alcohol by volume. It is brewed by Anheuser-Busch InBev and is one of the most popular beers in the United States. The beer has a light golden color and a crisp, clean taste that comes from using rice as an adjunct in the brewing process. Budweiser is known for its iconic red can and bowtie logo. The beer pairs well with classic American foods such as burgers, hot dogs, and pizza. Budweiser has been brewed since 1876 and is now sold in over 80 countries.',
        categoryId: 1,
        status: true,
        image: 'https://cdn.pixabay.com/photo/2016/03/27/20/00/beer-1283863_960_720.jpg',
    },
    {
        name: 'Blue Moon Belgian White Ale',
        price: 3,
        quantity: 330,
        quantityType: 'ml',
        shortDescription:
            'Blue Moon Belgian White Ale is a Belgian-style wheat ale with a refreshing, citrusy taste.',
        longDescription:
            'Blue Moon Belgian White Ale is a Belgian-style wheat ale with a refreshing, citrusy taste. The beer is brewed with coriander and orange peel, which gives it a unique flavor profile. Blue Moon is known for its hazy appearance and light, effervescent mouthfeel. The beer pairs well with a variety of foods, including seafood, salads, and spicy dishes.',
        categoryId: 1,
        status: true,
        image: 'https://cdn.pixabay.com/photo/2017/05/09/13/33/drink-2298288_960_720.jpg',
    },
    {
        name: 'Sierra Nevada Pale Ale',
        price: 4,
        quantity: 330,
        quantityType: 'ml',
        shortDescription:
            'Sierra Nevada Pale Ale is an American-style pale ale with a bold, hoppy flavor.',
        longDescription:
            'Sierra Nevada Pale Ale is an American-style pale ale with a bold, hoppy flavor. The beer is brewed with Cascade hops, which gives it a distinctive piney aroma and citrusy taste. Sierra Nevada Pale Ale is known for its deep golden color and creamy head. The beer pairs well with spicy foods, grilled meats, and strong cheeses.',
        categoryId: 1,
        status: true,
        image: 'https://cdn.pixabay.com/photo/2016/03/27/20/00/beer-1283863_960_720.jpg',
    },
    {
        name: 'Corona Extra',
        price: 5,
        quantity: 330,
        quantityType: 'ml',
        shortDescription:
            'Corona Extra is a pale lager beer with 4.6% alcohol by volume. It is brewed by Grupo Modelo and is one of the most popular beers in Mexico.',
        longDescription:
            'Corona Extra is a pale lager beer with 4.6% alcohol by volume. It is brewed by Grupo Modelo and is one of the most popular beers in Mexico. The beer has a light golden color and a refreshing taste that comes from using malted barley, hops, corn, and water in the brewing process. Corona Extra is known for its iconic clear bottle and lime wedge garnish. The beer pairs well with spicy foods, seafood, and grilled meats.',
        categoryId: 1,
        status: true,
        image: 'https://cdn.pixabay.com/photo/2017/05/09/13/33/drink-2298288_960_720.jpg',
    },
    {
        name: 'Mojjito Cocktail',
        price: 9.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription:
            'A classic cocktail with a refreshing mix of rum, fresh mint, lime juice, and soda water.',
        longDescription:
            "Transport yourself to the sunny shores of Cuba with our Mojito cocktail. Made with the finest rum, muddled fresh mint, lime juice, and a splash of soda water, this cocktail is the epitome of refreshment. Served over ice and garnished with a sprig of mint and a lime wedge, it's the perfect drink to quench your thirst on a hot summer day. Whether you're sipping it at a beach bar or in the comfort of your own home, our Mojito cocktail is sure to transport you to a tropical paradise.",
        categoryId: 2,
        image: 'mojito.jpg',
    },
    {
        name: 'Pinna Colada Cocktail',
        price: 10.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription:
            'A tropical delight blending rum, coconut cream, pineapple juice, and crushed ice.',
        longDescription:
            "Escape to a tropical paradise with our Piña Colada cocktail. Blending the richness of rum, the creaminess of coconut, and the sweetness of pineapple juice, this cocktail is a taste of the tropics in a glass. Served with crushed ice and garnished with a pineapple wedge and a cherry, it's a refreshing and indulgent treat that will transport you to a sunny beach. Close your eyes, take a sip, and let the flavors whisk you away to paradise.",
        categoryId: 2,
        image: 'pina_colada.jpg',
    },
    {
        name: 'Cosmopolitan Cocktail',
        price: 8.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription:
            'A glamorous cocktail featuring vodka, cranberry juice, triple sec, and a hint of lime.',
        longDescription:
            "Indulge in the glamorous world of the Cosmopolitan cocktail. Made with premium vodka, tangy cranberry juice, triple sec, and a hint of fresh lime, this cocktail is the epitome of sophistication. Served in a martini glass with a twist of lime or an orange peel, it's a stylish and vibrant drink that is perfect for celebrations or a night out on the town. Whether you're channeling your inner Carrie Bradshaw or simply enjoying the flavors, our Cosmopolitan cocktail is a must-try for cocktail enthusiasts.",
        categoryId: 2,
        image: 'cosmopolitan.jpg',
    },
    {
        name: 'Daiquiri Cocktail',
        price: 9.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription:
            'A refreshing cocktail with rum, lime juice, and a touch of sweetness.',
        longDescription:
            "Quench your thirst with our classic Daiquiri cocktail. Made with the finest rum, freshly squeezed lime juice, and a touch of sweetness, this cocktail strikes the perfect balance between tart and sweet. Served chilled in a cocktail glass or a coupe, it's a timeless drink that is perfect for any occasion. Whether you're enjoying it on a sunny patio or at a cozy bar, our Daiquiri cocktail is sure to delight your taste buds and transport you to a Caribbean getaway.",
        categoryId: 2,
        image: 'daiquiri.jpg',
    },
    {
        name: 'Gin and Tonic Cocktail',
        price: 7.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription:
            'A classic cocktail made with gin, tonic water, and a twist of citrus.',
        longDescription:
            "Savor the crisp and refreshing taste of our Gin and Tonic cocktail. Crafted with premium gin, sparkling tonic water, and a twist of citrus, this classic cocktail is perfect for those who appreciate simplicity and elegance. Served over ice in a highball glass and garnished with a slice of lemon or lime, it's a timeless drink that is loved by gin enthusiasts around the world. Whether you're sipping it at a sophisticated bar or enjoying it at home, our Gin and Tonic cocktail is a classic choice that never disappoints.",
        categoryId: 2,
        image: 'gin_and_tonic.jpg',
    },
    {
        name: 'Virgin Mojito Mocktail',
        price: 6.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription:
            'A non-alcoholic twist on the classic Mojito, combining fresh mint, lime juice, sugar, and soda water.',
        longDescription:
            "For those seeking a non-alcoholic alternative, our Virgin Mojito mocktail is a refreshing choice. Made with muddled fresh mint, lime juice, sugar, and soda water, it captures the essence of the classic Mojito without the alcohol. Served over ice and garnished with a sprig of mint and a lime wedge, it's a perfect option for those who want to enjoy the flavors and experience of a Mojito without the buzz. Cheers to a delightful and refreshing mocktail experience.",
        categoryId: 3,
        image: 'virgin_mojito.jpg',
    },
    {
        name: 'Shirley Temple Mocktail',
        price: 5.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription:
            'A delightful and bubbly mocktail with grenadine, ginger ale, and a maraschino cherry garnish.',
        longDescription:
            "Named after the famous child star, the Shirley Temple mocktail is a beloved classic. With its combination of sweet grenadine syrup and fizzy ginger ale, it's a delightful and bubbly treat for both kids and adults. Served in a tall glass filled with ice and garnished with a maraschino cherry, it's the perfect mocktail to brighten up any occasion. Whether you're hosting a children's party or simply in the mood for a nostalgic beverage, our Shirley Temple mocktail is sure to bring a smile to your face.",
        categoryId: 3,
        image: 'shirley_temple.jpg',
    },
    {
        name: 'Virgin Pina Colada Mocktail',
        price: 6.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription:
            'A non-alcoholic version of the tropical Piña Colada, blending coconut cream, pineapple juice, and crushed ice.',
        longDescription:
            "Indulge in the tropical flavors of our Virgin Piña Colada mocktail, a non-alcoholic twist on the classic cocktail. Blending creamy coconut, sweet pineapple juice, and crushed ice, it's a refreshing and delightful treat that transports you to a sunny beach. Served in a glass with a pineapple wedge and a cherry garnish, it's a perfect choice for those who want to enjoy the taste of a Piña Colada without the alcohol. Sip, relax, and let the flavors whisk you away on an imaginary vacation.",
        categoryId: 3,
        image: 'virgin_pina_colada.jpg',
    },
    {
        name: 'Fruit Punch',
        price: 5.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription: 'A refreshing mix of fruit juices, served over ice.',
        longDescription:
            "Our Fruit Punch is a refreshing and fruity mocktail that combines a variety of fruit juices for a sweet and tangy flavor. It's served over ice and garnished with a slice of orange for an extra burst of citrus. This mocktail is a great choice for those who love fruity flavors and want a refreshing drink that's alcohol-free.",
        categoryId: 3,
        image: 'fruit_punch.jpg',
    },
    {
        name: 'Virgin Strawberry Daiquiri',
        price: 6.99,
        quantity: 1,
        quantityType: 'glass',
        status: true,
        shortDescription:
            'A non-alcoholic version of the classic Strawberry Daiquiri, made with fresh strawberries, lime juice, and sugar.',
        longDescription:
            "Our Virgin Strawberry Daiquiri is a non-alcoholic version of the classic cocktail, blending fresh strawberries, lime juice, and sugar for a sweet and tangy flavor. It's served over ice and garnished with a strawberry for an extra touch of freshness. This mocktail is a great choice for those who love the taste of strawberries and want a refreshing drink that's alcohol-free.",
        categoryId: 3,
        image: 'virgin_strawberry_daiquiri.jpg',
    },
    {
        name: 'Vodka',
        price: 15.99,
        quantity: 50,
        quantityType: 'ml',
        status: true,
        shortDescription: 'Premium vodka with a smooth and clean taste.',
        longDescription:
            "Our premium vodka is meticulously crafted using the finest ingredients and a unique distillation process. It offers a smooth and clean taste that is perfect for creating a wide range of cocktails. Whether you're mixing up a classic martini or experimenting with your own creations, our vodka will elevate your cocktail experience. Each bottle contains 750ml of pure delight. Sourced from the finest grains and distilled to perfection, it's a versatile spirit that complements any cocktail recipe. Whether it's a lively party or a relaxing evening, our vodka is sure to leave a lasting impression.",
        categoryId: 4,
        image: 'vodka.jpg',
    },
    {
        name: 'Gin',
        price: 19.99,
        quantity: 100,
        quantityType: 'ml',
        status: true,
        shortDescription:
            'Artisanal gin with botanical flavors for a refreshing twist.',
        longDescription:
            'Indulge in the delightful flavors of our artisanal gin, meticulously crafted with a blend of handpicked botanicals. Its complex yet well-balanced profile offers a refreshing twist to your favorite cocktails. From the classic gin and tonic to innovative gin-based creations, this 700ml bottle of excellence will elevate your mixology game. Cheers to a truly unforgettable cocktail experience. Each sip takes you on a journey through the intricate world of botanicals, with every flavor note complementing the next. Made with care and dedication, our gin is a testament to the artistry of distillation.',
        categoryId: 4,
        image: 'gin.jpg',
    },
    {
        name: 'Rum',
        price: 22.5,
        quantity: 50,
        quantityType: 'ml',
        status: true,
        shortDescription:
            'Premium aged rum with rich caramel and vanilla undertones.',
        longDescription:
            "Discover the exquisite taste of our premium aged rum, matured to perfection in oak barrels. Savor the rich caramel and vanilla undertones that infuse every sip, making it a delightful addition to a wide range of cocktails. Whether you're enjoying a classic rum and coke or a sophisticated Mai Tai, our 750ml bottle of smooth indulgence is sure to impress. Each batch is carefully crafted with passion and expertise, ensuring an unforgettable drinking experience that lingers on your palate.",
        categoryId: 4,
        image: 'rum.jpg',
    },
    {
        name: 'Tequila',
        price: 25.75,
        quantity: 50,
        quantityType: 'ml',
        status: true,
        shortDescription:
            'Premium tequila with bold agave flavors and a smooth finish.',
        longDescription:
            "Experience the true essence of Mexico with our premium tequila, crafted from the finest agave plants. Embrace the bold agave flavors that shine through in every sip, accompanied by a smooth and satisfying finish. Whether you're sipping it neat or mixing up a zesty margarita, our 750ml bottle of tequila excellence is perfect for any occasion. Celebrate life's moments",
        categoryId: 4,
        image: 'tequila.jpg',
    },
    {
        name: 'Tonic Water',
        price: 1.49,
        quantity: 1,
        quantityType: 'bottle',
        status: true,
        shortDescription: 'Crisp and refreshing tonic water.',
        longDescription:
            'Our tonic water is crisp and refreshing, perfect for mixing with your favorite spirits or enjoying on its own.',
        categoryId: 5,
        image: 'tonic_water.jpg',
    },
    {
        name: 'Ginger Ale',
        price: 1.99,
        quantity: 1,
        quantityType: 'bottle',
        status: true,
        shortDescription: 'Spicy and sweet ginger ale.',
        longDescription:
            'Our ginger ale is a perfect balance of spicy and sweet, making it a great mixer for a variety of cocktails or a refreshing drink on its own.',
        categoryId: 5,
        image: 'ginger_ale.jpg',
    },
    {
        name: 'Coca-Cola',
        price: 1.99,
        quantity: 1,
        quantityType: 'bottle',
        status: true,
        shortDescription: 'Classic Coca-Cola soft drink.',
        longDescription:
            'Enjoy the refreshing taste of Coca-Cola. Perfect for quenching your thirst.',
        categoryId: 5,
        image: 'coca_cola.jpg',
    },
    {
        name: 'Sprite',
        price: 1.99,
        quantity: 1,
        quantityType: 'bottle',
        status: true,
        shortDescription: 'Crisp and refreshing lemon-lime soda.',
        longDescription:
            "Sprite is a classic lemon-lime soda that's crisp, refreshing, and perfect for a hot day.",
        categoryId: 5,
        image: 'sprite.jpg',
    },
    {
        name: 'Club Soda',
        price: 1.49,
        quantity: 1,
        quantityType: 'bottle',
        status: true,
        shortDescription: 'Versatile and refreshing club soda.',
        longDescription:
            "Our club soda is a versatile mixer with a refreshing taste. It's perfect for mixing with your favorite spirits or enjoying on its own for a crisp, clean drink.",
        categoryId: 5,
        image: 'club_soda.jpg',
    },
    {
        name: 'Fanta',
        price: 1.99,
        quantity: 1,
        quantityType: 'bottle',
        status: true,
        shortDescription: 'Bright and bubbly orange soda.',
        longDescription:
            "Fanta is a popular orange soda with a bright, bubbly taste that's sure to refresh. Enjoy it on its own or use it as a mixer for a fun and fruity cocktail.",
        categoryId: 5,
        image: 'fanta.jpg',
    },
    {
        name: 'Nachos with Cheese',
        price: 5.99,
        quantity: 1,
        quantityType: 'plate',
        status: true,
        shortDescription:
            'Crispy nachos served with a side of warm, creamy cheese.',
        longDescription:
            "Our Nachos with Cheese are a crowd favorite. We serve a generous portion of crispy, salty nachos with a side of our warm, creamy cheese. It's the perfect snack to share... or to keep all to yourself!",
        categoryId: 6,
        image: 'nachos_cheese.jpg',
    },
    {
        name: 'Vegetable Spring Rolls',
        price: 6.99,
        quantity: 1,
        quantityType: 'piece',
        status: true,
        shortDescription: 'Crispy spring rolls filled with fresh vegetables.',
        longDescription:
            "Our Vegetable Spring Rolls are a light and crispy snack filled with fresh, flavorful vegetables. They're served with a side of our special dipping sauce for an extra burst of flavor.",
        categoryId: 6,
        image: 'veg_spring_rolls.jpg',
    },
    {
        name: 'Chicken Wings',
        price: 7.99,
        quantity: 1,
        quantityType: 'piece',
        status: true,
        shortDescription: 'Juicy chicken wings with a choice of sauces.',
        longDescription:
            "Our Chicken Wings are a must-try. We serve them juicy and tender with a choice of our homemade sauces. Whether you like them hot and spicy or sweet and tangy, we've got a flavor for you.",
        categoryId: 6,
        image: 'chicken_wings.jpg',
    },
    {
        name: 'Cheese Platter',
        price: 9.99,
        quantity: 1,
        quantityType: 'platter',
        status: true,
        shortDescription: 'An assortment of fine cheeses.',
        longDescription:
            "Our Cheese Platter features an assortment of fine cheeses, perfect for pairing with wine or enjoying on their own. It's a sophisticated snack for those with a taste for the finer things.",
        categoryId: 6,
        image: 'cheese_platter.jpg',
    },
    {
        name: 'Bruschetta',
        price: 5.99,
        quantity: 1,
        quantityType: 'piece',
        status: true,
        shortDescription: 'Toasted bread topped with fresh tomatoes and basil.',
        longDescription:
            "Our Bruschetta is a classic Italian appetizer. We top toasted slices of bread with a mixture of fresh tomatoes, basil, and garlic for a snack that's simple yet delicious.",
        categoryId: 6,
        image: 'bruschetta.jpg',
    },
    {
        name: 'Stuffed Mushrooms',
        price: 6.99,
        quantity: 1,
        quantityType: 'piece',
        status: true,
        shortDescription: 'Mushrooms stuffed with a delicious cheese filling.',
        longDescription:
            "Our Stuffed Mushrooms are a savory treat. We fill mushroom caps with a delicious cheese filling, then bake them until they're golden and bubbly. It's a snack you won't be able to resist.",
        categoryId: 6,
        image: 'stuffed_mushrooms.jpg',
    },
    {
        name: 'Caesar Salad',
        price: 7.99,
        quantity: 1,
        quantityType: 'bowl',
        status: true,
        shortDescription:
            'Classic Caesar salad with crisp romaine lettuce, creamy dressing, croutons, and Parmesan.',
        longDescription:
            "Our Caesar Salad is a classic favorite. We toss crisp romaine lettuce with a creamy Caesar dressing, crunchy croutons, and a sprinkle of Parmesan cheese. It's a light yet satisfying meal that's sure to please.",
        categoryId: 7,
        image: 'caesar_salad.jpg',
    },
    {
        name: 'Vegetable Soup',
        price: 5.99,
        quantity: 1,
        quantityType: 'bowl',
        status: true,
        shortDescription:
            'Hearty vegetable soup made with fresh, seasonal vegetables.',
        longDescription:
            "Our Vegetable Soup is a hearty and healthy choice. We make it with fresh, seasonal vegetables and a flavorful broth. It's a light meal that's full of nutrition.",
        categoryId: 7,
        image: 'vegetable_soup.jpg',
    },
    {
        name: 'Chicken Wrap',
        price: 6.99,
        quantity: 1,
        quantityType: 'wrap',
        status: true,
        shortDescription:
            'Grilled chicken wrap with fresh vegetables and a tangy sauce.',
        longDescription:
            "Our Chicken Wrap is a tasty and convenient light meal. We fill a soft tortilla with grilled chicken, fresh vegetables, and a tangy sauce. It's a delicious and balanced meal that's easy to eat on the go.",
        categoryId: 7,
        image: 'chicken_wrap.jpg',
    },
    {
        name: 'Quinoa Salad',
        price: 7.99,
        quantity: 1,
        quantityType: 'bowl',
        status: true,
        shortDescription:
            'Nutritious quinoa salad with mixed vegetables and a light vinaigrette.',
        longDescription:
            "Our Quinoa Salad is a nutritious and tasty light meal. We mix cooked quinoa with a variety of fresh vegetables and dress it with a light vinaigrette. It's a healthy choice that's packed with protein and fiber.",
        categoryId: 7,
        image: 'quinoa_salad.jpg',
    },
    {
        name: 'Pasta Primavera',
        price: 8.99,
        quantity: 1,
        quantityType: 'plate',
        status: true,
        shortDescription:
            'Light and fresh pasta primavera with seasonal vegetables.',
        longDescription:
            "Our Pasta Primavera is a light and fresh meal option. We toss pasta with a variety of seasonal vegetables and a light sauce. It's a satisfying meal that's full of flavor but won't weigh you down.",
        categoryId: 7,
        image: 'pasta_primavera.jpg',
    },
    {
        name: 'Greek Salad',
        price: 7.99,
        quantity: 1,
        quantityType: 'bowl',
        status: true,
        shortDescription:
            'Refreshing Greek salad with tomatoes, cucumbers, olives, and feta.',
        longDescription:
            "Our Greek Salad is a refreshing and light meal. We combine ripe tomatoes, crisp cucumbers, tangy olives, and creamy feta cheese for a salad that's full of texture and flavor. It's served with a light vinaigrette on the side.",
        categoryId: 7,
        image: 'greek_salad.jpg',
    },
    {
        name: 'Vegetable Stir Fry',
        price: 8.99,
        quantity: 1,
        quantityType: 'plate',
        status: true,
        shortDescription: 'Colorful vegetable stir fry with a flavorful sauce.',
        longDescription:
            "Our Vegetable Stir Fry is a vibrant and tasty light meal. We stir fry a variety of fresh vegetables in a flavorful sauce. It's a great way to enjoy a variety of vegetables in one delicious dish.",
        categoryId: 7,
        image: 'vegetable_stir_fry.jpg',
    },
    {
        name: 'Chocolate Cake',
        price: 4.99,
        quantity: 1,
        quantityType: 'slice',
        status: true,
        shortDescription: 'Rich and moist chocolate cake.',
        longDescription:
            "Our Chocolate Cake is a dessert lover's dream. It's rich, moist, and full of chocolate flavor. Each slice is served with a dollop of whipped cream on the side.",
        categoryId: 8,
        image: 'chocolate_cake.jpg',
    },
    {
        name: 'Apple Pie',
        price: 3.99,
        quantity: 1,
        quantityType: 'slice',
        status: true,
        shortDescription: 'Classic apple pie with a flaky crust.',
        longDescription:
            "Our Apple Pie is a classic dessert. We fill a flaky crust with sweet, spiced apples and bake it until it's golden. Each slice is served with a scoop of vanilla ice cream on the side.",
        categoryId: 8,
        image: 'apple_pie.jpg',
    },
    {
        name: 'Cheesecake',
        price: 4.99,
        quantity: 1,
        quantityType: 'slice',
        status: true,
        shortDescription: 'Creamy cheesecake with a graham cracker crust.',
        longDescription:
            "Our Cheesecake is a creamy, decadent dessert. It's made with a graham cracker crust and a rich cream cheese filling. Each slice is served with a drizzle of strawberry sauce on top.",
        categoryId: 8,
        image: 'cheesecake.jpg',
    },
    {
        name: 'Ice Cream Sundae',
        price: 3.99,
        quantity: 1,
        quantityType: 'sundae',
        status: true,
        shortDescription:
            'Vanilla ice cream sundae with your choice of toppings.',
        longDescription:
            "Our Ice Cream Sundae is a sweet treat that's customizable to your tastes. We start with a scoop of vanilla ice cream and let you choose your toppings. Whether you like chocolate sauce, caramel, nuts, or all of the above, we've got you covered.",
        categoryId: 8,
        image: 'ice_cream_sundae.jpg',
    },
];

async function openMyBar() {
    try {
        await prisma.settings.create({
            data: settings,
        });
        await Promise.all(
            services.map(async (service) => {
                await prisma.services.create({
                    data: service,
                });
            })
        );
        await Promise.all(
            socialMedias.map(async (socialMedia) => {
                await prisma.socialMedias.create({
                    data: socialMedia,
                });
            })
        );
        await Promise.all(
            funFacts.map(async (funFact) => {
                await prisma.funFacts.create({
                    data: funFact,
                });
            })
        );
        await Promise.all(
            barJokes.map(async (barJoke) => {
                await prisma.jokes.create({
                    data: barJoke,
                });
            })
        );
        await Promise.all(
            categories.map(async (categorie) => {
                await prisma.categories.create({
                    data: categorie,
                });
            })
        );
        await Promise.all(
            products.map(async (product) => {
                await prisma.products.create({
                    data: product,
                });
            })
        );
    } catch (e) {
        return console.error(e);
    }
    console.log('Nice, you just created your bar website.');
}

openMyBar();
