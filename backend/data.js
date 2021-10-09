const bcrypt = require('bcrypt');

const data = {
    users: [

        {
            name: 'Mohamed',
            email: 'admin@exmail.com',
            password: bcrypt.hashSync('1234', 7),
            isAdmin: true,

        },
        {
            name: 'Jasmin',
            email: 'jasmin@exmail.com',
            password: bcrypt.hashSync('1234', 7),
            isAdmin: false,

        },
    ],
    
    products: [
       {
           
            name: 'samsung galaxy s21',
            category: 'cell phones',
            image: '/images/p-1.jpeg',
            price:  200,
            countInStock: 10,
            brand:'samsung',
            rating: 3.5,
            numReviews: 45,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team. '

        },
        {
            
            name: 'Wilson tennis Racket',
            category: 'sport',
            image: '/images/5.jpg',
            price:  150,
            countInStock: 20,
            brand:'Wilson',
            rating: 4.5,
            numReviews: 1.1524,
            description: 'Ein echter Hingucker ist zudem das verrückte Design aus grauen Elementen und einem orangenen Element am oberen Rahmen. Mit 295 Gramm zählt der Clash 100 zu den leichteren Schlägern. Dadurch genießt Du eine gute Geschwindigkeit bei jedem Schwung, um mit der nötigen Kontrolle zu spielen. Auf den Spin musst Du dank des 16/19-Besaitungsbilds auch nicht verzichten. Dieses Racket wird Dich jedenfalls auf ein ganz neues Level bringen.'

        },
        
        {
           
            name: ' kids focus bike FFR448',
            category: 'rennRad',
            image: '/images/p-3.jpg',
            price:  99,
            countInStock: 30,
            brand:'focus',
            rating: 3.5,
            numReviews: 154,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team.'

        },
        
       
        {
           
            name: 'focus bike',
            category: 'rennRad',
            image: '/images/p-7.jpg',
            price:  3120,
            countInStock: 20,
            brand:'focus',
            rating: 3.5,
            numReviews: 154,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team.',

        },
        {
           
            name: 'samsung galaxy s21',
            category: 'cell phones',
            image: '/images/p-1.jpeg',
            price:  200,
            countInStock: 12,
            brand:'samsung',
            rating: 4.5,
            numReviews: 140,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team.'



        },
        {
           
            name: 'Wilson tennis Racket',
            category: 'sport',
            image: '/images/p-2.jpg',
            price:  220,
            countInStock: 0,
            brand:'Wilson',
            rating: 2.5,
            numReviews: 125,
            description: 'Ein echter Hingucker ist zudem das verrückte Design aus grauen Elementen und einem orangenen Element am oberen Rahmen. Mit 295 Gramm zählt der Clash 100 zu den leichteren Schlägern. Dadurch genießt Du eine gute Geschwindigkeit bei jedem Schwung, um mit der nötigen Kontrolle zu spielen. Auf den Spin musst Du dank des 16/19-Besaitungsbilds auch nicht verzichten. Dieses Racket wird Dich jedenfalls auf ein ganz neues Level bringen.'

        },
        {
           
            name: 'focus bike Dx1448',
            category: 'rennRad',
            image: '/images/p-3.jpg',
            price:  3120,
            countInStock: 30,
            brand:'focus',
            rating: 3.5,
            numReviews: 154,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team.'

        },
  
        {
          
            name: 'Wilson tennis Racket',
            category: 'sport',
            image: '/images/p-2.jpg',
            price:  220,
            countInStock: 0,
            brand:'Wilson',
            rating: 2.5,
            numReviews: 125,
            description: 'Ein echter Hingucker ist zudem das verrückte Design aus grauen Elementen und einem orangenen Element am oberen Rahmen. Mit 295 Gramm zählt der Clash 100 zu den leichteren Schlägern. Dadurch genießt Du eine gute Geschwindigkeit bei jedem Schwung, um mit der nötigen Kontrolle zu spielen. Auf den Spin musst Du dank des 16/19-Besaitungsbilds auch nicht verzichten. Dieses Racket wird Dich jedenfalls auf ein ganz neues Level bringen.'

        },

        {
          
            name: 'focus bike',
            category: 'rennRad',
            image: '/images/p-3.jpg',
            price:  3120,
            countInStock: 20,
            brand:'focus',
            rating: 3.5,
            numReviews: 154,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team.'

        },
        {
            
            name: 'focus bike',
            category: 'rennRad',
            image: '/images/p-3.jpg',
            price:  3120,
            countInStock: 20,
            brand:'focus',
            rating: 3.5,
            numReviews: 157,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team.'

        },
        {

            name: 'samsung galaxy s21',
            category: 'cell phones',
            image: '/images/p-1.jpeg',
            price:  200,
            countInStock: 20,
            brand:'samsung',
            rating: 4.5,
            numReviews: 110,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team.',
        

        },
        {
          
            name: 'samsung galaxy s21',
            category: 'cell phones',
            image: '/images/p-1.jpeg',
            price:  200,
            countInStock: 20,
            brand:'samsung',
            rating: 4.5,
            numReviews: 110,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team.'



        },
        {
            
            name: 'focus bike',
            category: 'rennRad',
            image: '/images/p-3.jpg',
            price:  3120,
            countInStock: 20,
            brand:'focus',
            rating: 4.5,
            numReviews: 100,
            description: 'Die deutsche Marke Focus wurde 1992 in Cloppenburg gegründet und ist seit jeher in der Derby Cycle Gesellschaft eingegliedert. Um den ersten deutschen Weltmeister Mike Kluge wurden erstmals Mountainbikes unter der Marke Focus entwickelt, da ihm seine bisherigen Sponsoren keine passenden Bikes zur Verfügung stellten. Bis heute hat sich Focus zu einer festen Größe im Radsport entwickelt und erprobt seine Rennräder aktuell mit dem "AG2R LA MONDIALE" Pro Tour Team.)'

        },
        {
            
            name: 'Wilson tennis Racket',
            category: 'sport',
            image: '/images/5.jpg',
            price:  150,
            countInStock: 20,
            brand:'Wilson',
            rating: 4.5,
            numReviews: 1.1524,
            description: 'Ein echter Hingucker ist zudem das verrückte Design aus grauen Elementen und einem orangenen Element am oberen Rahmen. Mit 295 Gramm zählt der Clash 100 zu den leichteren Schlägern. Dadurch genießt Du eine gute Geschwindigkeit bei jedem Schwung, um mit der nötigen Kontrolle zu spielen. Auf den Spin musst Du dank des 16/19-Besaitungsbilds auch nicht verzichten. Dieses Racket wird Dich jedenfalls auf ein ganz neues Level bringen.'

        },
    ],
};

module.exports = data;