import { Moment } from '../types/Moment'

const fakeMoments: Moment[] = [
  {
    id: 'b83242ac-95ce-4b4a-918d-8e2f6504996d',
    title: 'Trip to Europe',
    headline: 'My trip to Europe with my wife in 2014',
    description:
      'This trip was when we were waiting for Lucas. Many pictures and great moments.',
    isFavorite: false,
  },
  {
    id: '6bf5c734-c982-4346-95f5-307571483119',
    title: 'Trip to NYC',
    headline: 'My trip to NY with my wife',
    description:
      'It was an amazing trip! Many places to take pictures and visit!',
    isFavorite: false,
  },
  {
    id: 'eaa940ee-e6ff-4df4-ac87-c10a99009bfd',
    title: 'Trip to the Beach',
    headline: 'Fun in the Sun',
    description:
      'Our family had a fantastic day at the beach with sun, sand, and surf.',
    isFavorite: false,
  },
  {
    id: '2234bb8b-32cc-4308-8384-310760e6205f',
    title: 'Family Picnic',
    headline: 'Quality Time Outdoors',
    description:
      'We enjoyed a lovely picnic in the park, filled with laughter and delicious food.',
    isFavorite: false,
  },
  {
    id: 'dca8909c-9981-4190-b129-da5f5b8c3f45',
    title: 'Skydiving Adventure',
    headline: 'Adrenaline Rush',
    description:
      'I jumped out of an airplane for the first time - a remarkable experience.',
    isFavorite: false,
  },
  {
    id: '5cc9f23a-64b1-4138-b45b-01b72e2c9762',
    title: 'Road Trip Across Country',
    headline: 'Exploring New Horizons',
    description:
      'Traveling across the country with my family was an unforgettable adventure.',
    isFavorite: false,
  },
  {
    id: '0d1ff54d-cb76-4552-b5b2-b69680309f45',
    title: 'Skiing in the Mountains',
    headline: 'Snowy Bliss',
    description:
      'We hit the slopes and had a blast skiing in the beautiful mountain scenery.',
    isFavorite: false,
  },
  {
    id: '758e3792-9621-4881-bf0c-8ec992bfca0e',
    title: 'A Surprise Birthday Party',
    headline: 'Celebrating Life',
    description:
      'We threw a surprise party for a loved one, and the joy on their face was priceless.',
    isFavorite: false,
  },
  {
    id: 'c1188b20-13f6-499f-b898-48bbc5a6409a',
    title: 'Historic Museum Visit',
    headline: 'Learning Together',
    description:
      'Our family visited a museum and explored history in an interactive way.',
    isFavorite: false,
  },
  {
    id: 'a76c9b81-397d-4ed2-91f7-75481546633f',
    title: 'Bungee Jumping Thrills',
    headline: 'Free Falling Fun',
    description:
      'Jumping off a bridge attached to a bungee cord was an adrenaline rush.',
    isFavorite: false,
  },
  {
    id: 'f965ad19-03db-4caf-bda5-6e5ae7ea97a3',
    title: 'Hiking in the Wilderness',
    headline: 'Nature is Beauty',
    description:
      'We hiked through the wilderness, surrounded by stunning landscapes.',
    isFavorite: false,
  },
  {
    id: 'c0273ec2-ad53-4c07-9089-664c6ef2191f',
    title: 'Beach Sunset',
    headline: 'Peaceful Serenity',
    description:
      'Watching the sun dip below the horizon while sitting on the beach was magical.',
    isFavorite: false,
  },
  {
    id: 'd520ddda-3ea9-4045-97b6-58f1f5c9cc20',
    title: 'Camping Adventure',
    headline: 'Under the Stars',
    description:
      'We camped in the wilderness, cooked over an open fire, and gazed at the starry night sky.',
    isFavorite: false,
  },
  {
    id: '3139e0fb-c5fc-48b1-b5a4-2d47d06f58a0',
    title: 'Family Movie Night',
    headline: 'Cozy Evening',
    description:
      'We watched our favorite movies at home, surrounded by blankets and popcorn.',
    isFavorite: false,
  },
  {
    id: '50662f8e-c293-48d4-a1e9-7b3d5ba2534d',
    title: 'Hot Air Balloon Ride',
    headline: 'Floating in the Sky',
    description:
      'Soaring high above the landscape in a hot air balloon was a breathtaking experience.',
    isFavorite: false,
  },
  {
    id: '05006eb3-ca61-4284-b29d-47768529e69d',
    title: 'Fishing by the Lake',
    headline: 'Tranquil Moments',
    description:
      'We spent the day fishing by a serene lake, enjoying the peace and quiet.',
    isFavorite: false,
  },
  {
    id: '69026d82-da10-4aeb-aaaf-41da134d0852',
    title: 'Historic Road Trip',
    headline: 'Time Travel',
    description:
      'Exploring historic sites and landmarks on a road trip was both educational and fun.',
    isFavorite: false,
  },
  {
    id: '85902835-9a64-4006-abf0-bfcb0e5c27aa',
    title: 'Anniversary Celebration',
    headline: 'Years of Love',
    description:
      'We celebrated our anniversary with a romantic dinner and exchanged heartfelt gifts.',
    isFavorite: false,
  },
  {
    id: 'ff888240-adf5-4707-9513-8cb772d6f724',
    title: 'Theme Park Fun',
    headline: 'Thrills and Laughter',
    description:
      'A day at the amusement park with roller coasters and cotton candy brought out the kid in all of us.',
    isFavorite: false,
  },
  {
    id: 'd12a68be-ffcf-4607-982f-afe133e85733',
    title: 'Art Gallery Visit',
    headline: 'Creative Inspiration',
    description:
      'We explored an art gallery and were inspired by the diverse works of art on display.',
    isFavorite: false,
  },
  {
    id: '6b8642a5-b9fd-416e-ab28-6e0daf3e6879',
    title: 'Mountain Climbing Expedition',
    headline: 'Conquering Peaks',
    description:
      'Climbing a challenging mountain and reaching the summit was a remarkable achievement.',
    isFavorite: false,
  },
  {
    id: 'a703e8b0-644d-4dc8-b5dd-6723f96cfb3b',
    title: 'Winter Wonderland',
    headline: 'Snowy Adventures',
    description:
      'We embraced the winter season with snowball fights, sledding, and hot cocoa by the fireplace.',
    isFavorite: false,
  },
  {
    id: '5afa82db-b6ae-4918-8232-367fbec490b2',
    title: 'Sailing Adventure',
    headline: 'On the Open Sea',
    description:
      'We set sail on a beautiful day and explored the open sea with the wind in our hair.',
    isFavorite: false,
  },
  {
    id: '77867028-f502-429f-8e30-1bc7c987931f',
    title: 'Cooking Contest',
    headline: 'Culinary Showdown',
    description:
      'Our family held a cooking contest, and we all got to be judges and taste delicious dishes.',
    isFavorite: false,
  },
  {
    id: '54868a5c-fa0f-46d1-81f4-20e6db6e3000',
    title: 'Cultural Festival',
    headline: 'Global Celebrations',
    description:
      'We attended a cultural festival with vibrant performances and diverse cuisines.',
    isFavorite: false,
  },
  {
    id: '31a8b21a-4a76-46d1-9d8b-d39de912204b',
    title: 'Wildlife Safari',
    headline: 'Into the Wild',
    description:
      'On a safari, we spotted incredible wildlife and observed animals in their natural habitat.',
    isFavorite: false,
  },
  {
    id: '0702012f-04c3-478c-8cfe-72f24d38fb2c',
    title: 'Volunteer Work',
    headline: 'Giving Back',
    description:
      'We volunteered as a family to help a local charity and make a positive impact.',
    isFavorite: false,
  },
  {
    id: 'f0c3778a-048c-4dcf-83b8-d848eac90c6c',
    title: 'Scenic Train Ride',
    headline: 'Rails and Landscapes',
    description:
      'We took a scenic train journey through picturesque landscapes and quaint towns.',
    isFavorite: false,
  },
  {
    id: '0e3e0e77-3178-402e-9236-45fb9d4d2c9e',
    title: 'Indoor Skydiving',
    headline: 'Floating on Air',
    description:
      'We experienced the thrill of skydiving in an indoor wind tunnel.',
    isFavorite: false,
  },
  {
    id: 'b9109be5-8db7-4b42-8153-2557095295de',
    title: 'Botanical Garden Visit',
    headline: 'Blooms and Beauty',
    description:
      'Exploring a botanical garden filled with exotic plants and colorful flowers was a tranquil experience.',
    isFavorite: false,
  },
  {
    id: 'b124aed2-409d-47cc-b751-598c17f6814d',
    title: 'Whale Watching',
    headline: 'Majestic Giants',
    description:
      'We went whale watching and were awe-struck by the majestic creatures of the sea.',
    isFavorite: false,
  },
  {
    id: 'af8ae340-2d2f-4707-8120-a562d388d776',
    title: 'Summer Music Festival',
    headline: 'Live Music Bliss',
    description:
      'Dancing to live music under the summer sun at a music festival was unforgettable.',
    isFavorite: false,
  },
  {
    id: '1dd6dd3b-0772-4cbb-a51f-a9c6410586b3',
    title: 'Beach Volleyball Tournament',
    headline: 'Spike It!',
    description:
      'We organized a friendly beach volleyball tournament and had a blast in the sun.',
    isFavorite: false,
  },
  {
    id: '70a61f04-a3af-4c7d-bdd1-154f98e929c8',
    title: 'Antique Shopping',
    headline: 'Hidden Treasures',
    description:
      'We scoured antique shops for unique finds and discovered some valuable items.',
    isFavorite: false,
  },
  {
    id: '9d78cf9c-e3a3-4524-b9f3-7d40eb3edcaa',
    title: 'Ziplining Adventure',
    headline: 'Flying Through the Trees',
    description:
      'Zooming down ziplines high above the forest canopy was a heart-pounding experience.',
    isFavorite: false,
  },
  {
    id: 'cae4fb4c-61c5-4463-b340-d401bbc0caee',
    title: 'Cooking Class',
    headline: 'Mastering the Art',
    description:
      'We took a cooking class and learned to prepare gourmet dishes from a talented chef.',
    isFavorite: false,
  },
  {
    id: 'c9c7cd4b-1a5c-47c2-9592-1e4d0929d350',
    title: 'Wild Camping',
    headline: 'Roughing It',
    description:
      'We ventured into the wilderness for a wild camping trip, building fires and sleeping under the stars.',
    isFavorite: false,
  },
  {
    id: '28d09df6-6c84-4a5e-bb92-8a1c67976108',
    title: 'Gardening Day',
    headline: 'Green Thumbs',
    description:
      'We spent the day planting flowers and vegetables in our garden, creating a colorful oasis.',
    isFavorite: false,
  },
  {
    id: '60ed7c8c-572e-4671-9bcf-a70211577e85',
    title: 'Gourmet Wine Tasting',
    headline: 'Savoring Elegance',
    description:
      'We enjoyed a wine tasting event with exquisite wines and gourmet cheese pairings.',
    isFavorite: false,
  },
  {
    id: '07cfe2ce-5801-48c7-8a9c-806890547221',
    title: 'Hot Springs Relaxation',
    headline: 'Restorative Soak',
    description:
      'We soaked in natural hot springs, surrounded by serene mountain landscapes.',
    isFavorite: false,
  },
  {
    id: '6c0f756b-8ffa-4cd9-bc73-ae6a9c8da004',
    title: 'Rock Climbing Expedition',
    headline: 'Scaling the Heights',
    description:
      'Conquering challenging rock faces and cliffs was a test of skill and courage.',
    isFavorite: false,
  },
  {
    id: '2ad98830-1ecd-46e6-8677-cf1c6cfcd6e9',
    title: 'City Scavenger Hunt',
    headline: 'Urban Adventure',
    description:
      'We explored the city with a fun scavenger hunt, solving clues and riddles.',
    isFavorite: false,
  },
  {
    id: 'c0c3557e-7688-40e0-a579-bdb93489b9b9',
    title: 'Spontaneous Road Trip',
    headline: 'Adventure Awaits',
    description:
      'We embarked on a spontaneous road trip, letting the open road guide us to new discoveries.',
    isFavorite: false,
  },
  {
    id: '8d995fa4-f9b4-4f41-94af-723c6e6cf414',
    title: 'Beach Bonfire',
    headline: 'Nighttime Bliss',
    description:
      'We gathered around a beach bonfire, sharing stories and roasting marshmallows.',
    isFavorite: false,
  },
  {
    id: '4f8b4784-2c0d-423d-bd87-f39d163e5c59',
    title: 'Mountain Biking Expedition',
    headline: 'Downhill Thrills',
    description:
      'Mountain biking through rugged terrain provided exhilarating downhill adventures.',
    isFavorite: false,
  },
  {
    id: '1f8004a2-cebd-4509-a25b-e1d0423899cc',
    title: 'Art and Craft Fair',
    headline: 'Handmade Wonders',
    description:
      'We explored an art and craft fair, discovering unique handmade crafts and artworks.',
    isFavorite: false,
  },
  {
    id: '633d2df8-5a8e-4d10-8e5e-10b2ea4f627c',
    title: 'Karaoke Night',
    headline: 'Unleashing the Diva',
    description:
      'We had a blast singing our hearts out at a karaoke night with friends.',
    isFavorite: false,
  },
  {
    id: '59531a4a-0388-47ac-9f92-6c0876b79b22',
    title: 'Historic Ghost Tour',
    headline: 'Spooky Adventures',
    description:
      'We went on a historic ghost tour and heard chilling tales of the city’s past.',
    isFavorite: false,
  },
  {
    id: 'acea76a6-5927-4f36-8c6c-cc12bd535ead',
    title: 'Boat Ride at Sunset',
    headline: 'Golden Hour Serenity',
    description:
      'We enjoyed a tranquil boat ride, watching the sun set over the water.',
    isFavorite: false,
  },
  {
    id: 'fdf3a627-b8fb-42a1-b5da-9ee76cc4410c',
    title: 'Archery Competition',
    headline: 'Bullseye Triumphs',
    description:
      'We held an archery competition, showcasing our skills with bows and arrows.',
    isFavorite: false,
  },
  {
    id: '2a5b5fe8-8a18-416d-890a-69193dc216e3',
    title: 'Tea Tasting Ceremony',
    headline: 'Sip and Savor',
    description:
      'We experienced a traditional tea tasting ceremony, savoring exotic tea blends.',
    isFavorite: false,
  },
  {
    id: '354ce636-996c-4431-8814-9b05196ead72',
    title: 'Outdoor Yoga Retreat',
    headline: 'Zen in Nature',
    description:
      'We practiced yoga in the midst of nature, finding inner peace and balance.',
    isFavorite: false,
  },
]

export default fakeMoments
