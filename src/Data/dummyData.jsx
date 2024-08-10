
const users = [
    { id: 1, username: "john_doe", name: "John Doe", email: "john@example.com", lastActive: new Date(2023, 7, 1) },
    { id: 2, username: "jane_smith", name: "Jane Smith", email: "jane@example.com", lastActive: new Date(2023, 7, 8) },
    { id: 3, username: "bob_johnson", name: "Bob Johnson", email: "bob@example.com", lastActive: new Date(2023, 7, 15) },
    { id: 4, username: "alice_williams", name: "Alice Williams", email: "alice@example.com", lastActive: new Date(2023, 7, 22) },
    { id: 5, username: "charlie_brown", name: "Charlie Brown", email: "charlie@example.com", lastActive: new Date(2023, 7, 29) },
    { id: 6, username: "diana_miller", name: "Diana Miller", email: "diana@example.com", lastActive: new Date(2023, 8, 5) },
    { id: 7, username: "edward_davis", name: "Edward Davis", email: "edward@example.com", lastActive: new Date(2023, 8, 12) },
    { id: 8, username: "fiona_taylor", name: "Fiona Taylor", email: "fiona@example.com", lastActive: new Date(2023, 8, 19) },
    { id: 9, username: "george_wilson", name: "George Wilson", email: "george@example.com", lastActive: new Date(2023, 8, 26) },
    { id: 10, username: "hannah_moore", name: "Hannah Moore", email: "hannah@example.com", lastActive: new Date(2023, 9, 3) },
    { id: 11, username: "ian_clark", name: "Ian Clark", email: "ian@example.com", lastActive: new Date(2023, 9, 10) },
    { id: 12, username: "jessica_lee", name: "Jessica Lee", email: "jessica@example.com", lastActive: new Date(2023, 9, 17) },
    { id: 13, username: "kevin_white", name: "Kevin White", email: "kevin@example.com", lastActive: new Date(2023, 9, 24) },
    { id: 14, username: "laura_martin", name: "Laura Martin", email: "laura@example.com", lastActive: new Date(2023, 9, 31) },
    { id: 15, username: "michael_brown", name: "Michael Brown", email: "michael@example.com", lastActive: new Date(2023, 10, 7) },
    { id: 16, username: "natalie_green", name: "Natalie Green", email: "natalie@example.com", lastActive: new Date(2023, 10, 14) },
    { id: 17, username: "oscar_taylor", name: "Oscar Taylor", email: "oscar@example.com", lastActive: new Date(2023, 10, 21) },
    { id: 18, username: "patricia_evans", name: "Patricia Evans", email: "patricia@example.com", lastActive: new Date(2023, 10, 28) },
    { id: 19, username: "quentin_harris", name: "Quentin Harris", email: "quentin@example.com", lastActive: new Date(2023, 11, 5) },
    { id: 20, username: "rachel_roberts", name: "Rachel Roberts", email: "rachel@example.com", lastActive: new Date(2023, 11, 12) }
  ];
  
  const generatePosts = () => {
    const now = new Date();
    return [
      { id: 1, userId: 1, caption: "Beautiful sunset!", mediaUrl: "https://example.com/sunset.jpg", publishedAt: new Date(2023, 7, 15) }, // 2 hours ago
      { id: 2, userId: 2, caption: "My new painting", mediaUrl: "https://example.com/painting.jpg", publishedAt: new Date(2023, 7, 15) }, // 12 hours ago
      { id: 3, userId: 3, caption: "Delicious dinner", mediaUrl: "https://example.com/dinner.jpg", publishedAt: new Date(2023, 7, 15) }, // 23 hours ago
      { id: 4, userId: 4, caption: "Family vacation", mediaUrl: "https://example.com/vacation.jpg", publishedAt: new Date(2023, 7, 15) },
      { id: 5, userId: 5, caption: "New book release", mediaUrl: "https://example.com/book.jpg", publishedAt: new Date(2023, 7, 20) },
      { id: 6, userId: 6, caption: "Hiking adventure", mediaUrl: "https://example.com/hiking.jpg", publishedAt: new Date(2023, 7, 25) },
      { id: 7, userId: 7, caption: "City skyline", mediaUrl: "https://example.com/skyline.jpg", publishedAt: new Date(2023, 8, 1) },
      { id: 8, userId: 8, caption: "Beach day", mediaUrl: "https://example.com/beach.jpg", publishedAt: new Date(2023, 8, 5) },
      { id: 9, userId: 9, caption: "Concert night", mediaUrl: "https://example.com/concert.jpg", publishedAt: new Date(2023, 8, 10) },
      { id: 10, userId: 10, caption: "New recipe", mediaUrl: "https://example.com/recipe.jpg", publishedAt: new Date(2023, 8, 15) },
      { id: 11, userId: 11, caption: "Art exhibition", mediaUrl: "https://example.com/exhibition.jpg", publishedAt: new Date(2023, 8, 20) },
      { id: 12, userId: 12, caption: "Movie premiere", mediaUrl: "https://example.com/movie.jpg", publishedAt: new Date(2023, 8, 25) },
      { id: 13, userId: 13, caption: "Tech conference", mediaUrl: "https://example.com/conference.jpg", publishedAt: new Date(2023, 9, 1) },
      { id: 14, userId: 14, caption: "Garden flowers", mediaUrl: "https://example.com/flowers.jpg", publishedAt: new Date(2023, 9, 5) },
      { id: 15, userId: 15, caption: "New gadget", mediaUrl: "https://example.com/gadget.jpg", publishedAt: new Date(2023, 9, 10) },
      { id: 16, userId: 16, caption: "Fitness challenge", mediaUrl: "https://example.com/fitness.jpg", publishedAt: new Date(2023, 9, 15) },
      { id: 17, userId: 17, caption: "Vintage car show", mediaUrl: "https://example.com/carshow.jpg", publishedAt: new Date(2023, 9, 20) },
      { id: 18, userId: 18, caption: "Fashion week", mediaUrl: "https://example.com/fashion.jpg", publishedAt: new Date(2023, 9, 25) },
      { id: 19, userId: 19, caption: "Wildlife photography", mediaUrl: "https://example.com/wildlife.jpg", publishedAt: new Date(2023, 10, 1) },
      { id: 20, userId: 20, caption: "Space exploration news", mediaUrl: "https://example.com/space.jpg", publishedAt: new Date(2023, 10, 5) }    ];  };
  
  const posts = [

    { id: 1, userId: 1, caption: "Beautiful sunset!", mediaUrl: "https://example.com/sunset.jpg", publishedAt: new Date(2023, 7, 5) },
    { id: 2, userId: 2, caption: "My new painting", mediaUrl: "https://example.com/painting.jpg", publishedAt: new Date(2023, 7, 7) },
    { id: 3, userId: 3, caption: "Delicious dinner", mediaUrl: "https://example.com/dinner.jpg", publishedAt: new Date(2023, 7, 10) },
    { id: 4, userId: 4, caption: "Family vacation", mediaUrl: "https://example.com/vacation.jpg", publishedAt: new Date(2023, 7, 15) },
    { id: 5, userId: 5, caption: "New book release", mediaUrl: "https://example.com/book.jpg", publishedAt: new Date(2023, 7, 20) },
    { id: 6, userId: 6, caption: "Hiking adventure", mediaUrl: "https://example.com/hiking.jpg", publishedAt: new Date(2023, 7, 25) },
    { id: 7, userId: 7, caption: "City skyline", mediaUrl: "https://example.com/skyline.jpg", publishedAt: new Date(2023, 8, 1) },
    { id: 8, userId: 8, caption: "Beach day", mediaUrl: "https://example.com/beach.jpg", publishedAt: new Date(2023, 8, 5) },
    { id: 9, userId: 9, caption: "Concert night", mediaUrl: "https://example.com/concert.jpg", publishedAt: new Date(2023, 8, 10) },
    { id: 10, userId: 10, caption: "New recipe", mediaUrl: "https://example.com/recipe.jpg", publishedAt: new Date(2023, 8, 15) },
    { id: 11, userId: 11, caption: "Art exhibition", mediaUrl: "https://example.com/exhibition.jpg", publishedAt: new Date(2023, 8, 20) },
    { id: 12, userId: 12, caption: "Movie premiere", mediaUrl: "https://example.com/movie.jpg", publishedAt: new Date(2023, 8, 25) },
    { id: 13, userId: 13, caption: "Tech conference", mediaUrl: "https://example.com/conference.jpg", publishedAt: new Date(2023, 9, 1) },
    { id: 14, userId: 14, caption: "Garden flowers", mediaUrl: "https://example.com/flowers.jpg", publishedAt: new Date(2023, 9, 5) },
    { id: 15, userId: 15, caption: "New gadget", mediaUrl: "https://example.com/gadget.jpg", publishedAt: new Date(2023, 9, 10) },
    { id: 16, userId: 16, caption: "Fitness challenge", mediaUrl: "https://example.com/fitness.jpg", publishedAt: new Date(2023, 9, 15) },
    { id: 17, userId: 17, caption: "Vintage car show", mediaUrl: "https://example.com/carshow.jpg", publishedAt: new Date(2023, 9, 20) },
    { id: 18, userId: 18, caption: "Fashion week", mediaUrl: "https://example.com/fashion.jpg", publishedAt: new Date(2023, 9, 25) },
    { id: 19, userId: 19, caption: "Wildlife photography", mediaUrl: "https://example.com/wildlife.jpg", publishedAt: new Date(2023, 10, 1) },
    { id: 20, userId: 20, caption: "Space exploration news", mediaUrl: "https://example.com/space.jpg", publishedAt: new Date(2023, 10, 5) }  ];
  
  export const dummyData = {
    users,
    getPosts: generatePosts,
    getActiveUsers: () => users.filter(user => (new Date() - user.lastActive) / (1000 * 60 * 60 * 24) < 1),
    getRecentPosts: (posts) => posts.filter(post => (new Date() - post.publishedAt) / (1000 * 60 * 60 * 24) < 1)
  };