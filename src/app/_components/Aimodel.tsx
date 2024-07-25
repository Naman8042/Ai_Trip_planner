
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = 'AIzaSyDphE_UY525y8YNjVT90oUQ-sI9-BY1KSk';
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "generate travel plan for location : Las Vegas, for 3 days for couple with a cheap budget, give me a hotels options list with hotelname address price, hotel image, url geo coordinates,rating description and suggest itinary with placename, place details, place image url , geo coordinates , ticket pricing,time, travel each of the location for 3 days with eash day plan with best time to visit in JSON Format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotel_options\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"image_url\": \"https://images.trvl-media.com/media/content/dam/hotels/images/hotels/252/2525824_1662989872000_00001.jpg?quality=65&width=640&height=360&fit=crop&crop=focalpoint\",\n      \"url\": \"https://www.theD.com/\",\n      \"geo_coordinates\": [36.1697, -115.1435],\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel in the heart of Fremont Street, offering comfortable rooms and a lively casino.\"\n    },\n    {\n      \"name\": \"The Golden Nugget\",\n      \"address\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$70 - $150 per night\",\n      \"image_url\": \"https://images.trvl-media.com/media/content/dam/hotels/images/hotels/1165/1165003_1662985757000_00002.jpg?quality=65&width=640&height=360&fit=crop&crop=focalpoint\",\n      \"url\": \"https://goldennugget.com/las-vegas/\",\n      \"geo_coordinates\": [36.1683, -115.1408],\n      \"rating\": 4.5,\n      \"description\": \"A historic and luxurious hotel with a world-famous shark tank, multiple pools, and a vibrant casino.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"image_url\": \"https://images.trvl-media.com/media/content/dam/hotels/images/hotels/189/189053_1662986314000_00001.jpg?quality=65&width=640&height=360&fit=crop&crop=focalpoint\",\n      \"url\": \"https://www.circuscircus.com/\",\n      \"geo_coordinates\": [36.1183, -115.1727],\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a circus theme, amusement park, and multiple dining options.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"title\": \"Fremont Street Experience\",\n      \"description\": \"Start your day by exploring the vibrant Fremont Street Experience, a pedestrian-friendly zone with live entertainment, street performers, and a giant LED canopy.\",\n      \"places\": [\n        {\n          \"name\": \"Fremont Street Experience\",\n          \"details\": \"Enjoy free concerts, street performers, and the Viva Vision light show on the giant LED canopy.\",\n          \"image_url\": \"https://www.visitlasvegas.com/sites/default/files/styles/1600x800_crop/public/2018-06/DSC_0031_freemontstreet.jpg?itok=111560-o\",\n          \"geo_coordinates\": [36.1692, -115.1424],\n          \"ticket_pricing\": \"Free\",\n          \"time\": \"Morning & Evening\"\n        },\n        {\n          \"name\": \"Four Queens Casino\",\n          \"details\": \"Try your luck at the Four Queens Casino, known for its friendly atmosphere and affordable games.\",\n          \"image_url\": \"https://www.fourqueens.com/images/page-header/four-queens-header-image-2.jpg\",\n          \"geo_coordinates\": [36.1690, -115.1426],\n          \"ticket_pricing\": \"Free\",\n          \"time\": \"Afternoon\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"title\": \"Las Vegas Strip Exploration\",\n      \"description\": \"Take a free shuttle or ride the monorail to explore the famous Las Vegas Strip. Admire iconic hotels, see free shows, and enjoy the vibrant atmosphere.\",\n      \"places\": [\n        {\n          \"name\": \"Bellagio Fountains\",\n          \"details\": \"Witness the dazzling water show synchronized with music at the Bellagio Fountains.\",\n          \"image_url\": \"https://www.visitlasvegas.com/sites/default/files/styles/1600x800_crop/public/2022-10/bellagio-fountains-show-las-vegas-strip-water-show.jpg?itok=5gU7_j0C\",\n          \"geo_coordinates\": [36.1171, -115.1735],\n          \"ticket_pricing\": \"Free\",\n          \"time\": \"Evening\"\n        },\n        {\n          \"name\": \"The Venetian & The Palazzo\",\n          \"details\": \"Stroll through the Grand Canal Shoppes, enjoy a gondola ride, and explore the luxurious Venetian & The Palazzo.\",\n          \"image_url\": \"https://www.venetian.com/content/dam/venetian/images/venetian/hotel/exterior/venetian-exterior-daytime.jpg\",\n          \"geo_coordinates\": [36.1218, -115.1743],\n          \"ticket_pricing\": \"Gondola ride: $30-40 per person\",\n          \"time\": \"Afternoon\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"title\": \"Outdoor Adventures and Nature\",\n      \"description\": \"Escape the city buzz and enjoy the natural beauty of Las Vegas with a visit to Red Rock Canyon National Conservation Area.\",\n      \"places\": [\n        {\n          \"name\": \"Red Rock Canyon National Conservation Area\",\n          \"details\": \"Hike scenic trails, enjoy breathtaking views of red rock formations, and experience the desert landscape.\",\n          \"image_url\": \"https://www.nps.gov/redr/planyourvisit/images/red-rock-canyon-national-conservation-area-landscape.jpg\",\n          \"geo_coordinates\": [36.1584, -115.3655],\n          \"ticket_pricing\": \"Entrance fee: $15 per vehicle\",\n          \"time\": \"Morning\"\n        },\n        {\n          \"name\": \"The Springs Preserve\",\n          \"details\": \"Explore the unique desert environment, learn about Nevada's history and culture, and enjoy interactive exhibits.\",\n          \"image_url\": \"https://www.springspreserve.org/wp-content/uploads/2021/09/DSC_7290-edited-2-2-scaled.jpg\",\n          \"geo_coordinates\": [36.1291, -115.2042],\n          \"ticket_pricing\": \"Adult Admission: $22.95\",\n          \"time\": \"Afternoon\"\n        }\n      ]\n    }\n  }\n}\n```\n\n**Please note:**\n\n* This itinerary is a suggestion and can be customized based on your preferences and interests.\n* Hotel prices are approximate and may vary depending on the season and availability.\n* Ticket prices are subject to change.\n* Consider booking tickets and tours in advance, especially for popular attractions.\n* You can easily find free shuttle services to and from the Strip and Downtown Las Vegas.\n* Don't forget to stay hydrated and wear comfortable shoes while exploring the city.\n* Be aware of the desert climate, especially during summer months.\n* Have fun and enjoy your Las Vegas adventure! \n"},
          ],
        },
      ],
    });
  
    