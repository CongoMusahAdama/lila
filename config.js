/*
  ================================
  EDIT THIS FILE TO PERSONALIZE
  ================================
  Everything you need to change is in here. Look for "EDIT ME" comments.
*/

const CONFIG = {
  // Site title (shows in the browser tab)
  siteTitle: "For Fadilah",

  // EDIT ME: your name, how you'd sign a message to her
  yourName: "Your Habibi",

  // Her name
  herName: "Fadilah",

  // A YouTube video ID for a nasheed/dua that plays softly in the background
  // as soon as she opens the site (muted at first, then unmutes the moment she
  // taps anywhere — browsers require a tap before sound, so this is as close to
  // instant as possible). Default is "The One Who Answers Dua" by MercifulServant.
  // EDIT ME: replace with your own pick — the ID is the part after "v=" in any
  // YouTube URL, e.g. youtube.com/watch?v=THIS_PART.
  duaVideoId: "TvF8RfwfGGs",

  // Her birthday as "MM-DD" (no year). When the site is opened on this date,
  // a birthday banner appears automatically. If that date also happens to
  // be a Friday, a Jummah Mubarak line is added too.
  herBirthday: "08-28",

  // Background photo for the very first "Assalamu Alaikum" gate screen.
  gateBackground: "images/splash.jpg",

  // Videos that play one after another on their own full screen, right after the
  // welcome message and before the Memories tab. Autoplays with sound (allowed at
  // this point since she's already interacted with the page several times by here).
  introVideos: ["videos/adventure.mp4", "videos/adventure 1.mp4", "videos/adventure 2.mp4"],

  // A small photo of her shown at the top of the welcome/birthday message screen.
  welcomePhoto: "images/5591b8ed-fc74-48b3-8699-9c0ef9f46fa0.jpg",

  // EDIT ME: the quiz she answers before getting in.
  // "answers" is a list of acceptable answers (lowercase, she can be a little off
  // and still get it right — matching ignores case/extra spaces/punctuation).
  quiz: [
    {
      question: "Where did we first meet?", // EDIT ME
      answers: ["edit me"], // EDIT ME: put the real answer(s)
    },
    {
      question: "What do I call you the most?", // EDIT ME
      answers: ["edit me"], // EDIT ME: her nickname, e.g. ["habibti", "love"]
    },
    {
      question: "What's something that's just ours — no one else's?", // EDIT ME
      answers: ["edit me"], // EDIT ME: an inside joke, a song, a spot, a word
    },
    {
      question: "Where did we go on our first trip together?", // EDIT ME
      answers: ["edit me"], // EDIT ME: e.g. ["aburi gardens", "aburi"]
    },
  ],

  // The welcome message she sees after the quiz. Supports **bold** for emphasis
  // and blank lines for new paragraphs.
  welcomeMessage:
    "**Happy Birthday, my Fadilah ❤️**\n\n" +
    "Today, I just want to take a moment to appreciate you—not just because it's " +
    "your birthday, but because you genuinely mean a lot to me.\n\n" +
    "There are so many little things about you that I love. The way you talk, " +
    "the way you make even simple conversations feel real and meaningful, and " +
    "the way I can just sit and listen to you. Honestly, I love listening to " +
    "you. Sometimes I don't even need to say much—I just want to hear you talk, " +
    "hear what's on your mind, and know how your day is going.\n\n" +
    "I know sometimes I do things that may hurt you or make you feel like I " +
    "don't care enough, and I'm not going to pretend I'm perfect. But believe " +
    "me, Fadilah, **I truly love you**, and I appreciate having you in my " +
    "life.\n\n" +
    "And sometimes, I wish you would let me in a little more. Talk to me. Tell " +
    "me about the small things, the things that bother you, the things that " +
    "make you happy, even the things you think are not important. **You don't " +
    "always have to keep things to yourself. Let me listen to you.** That's " +
    "something I genuinely enjoy.\n\n" +
    "Even with the distance between us, you have a way of making things feel " +
    "real. And that means more to me than you probably realize.\n\n" +
    "As you enter another year of your life, I pray Allah strengthens your " +
    "heart, increases you in iman, protects you, guides you, and gives you the " +
    "strength to stand firm through every situation. May Allah make you a " +
    "woman who is strong, patient, successful, and always close to Him.\n\n" +
    "Never forget your worth. Keep your head high, keep trusting Allah, and " +
    "keep becoming the beautiful person you were created to be.\n\n" +
    "**Happy birthday, Fadilah. May Allah bless your new age with happiness, " +
    "peace, barakah, and everything good your heart deserves. Ameen.**\n\n" +
    "And yes… sometimes, **please talk to me more. I love hearing from you. ❤️**",

  // The letter — shown in its own "Letter" tab, styled like a keepsake note.
  letter: {
    photo: "images/first time.jpg",
    greeting: "My dearest Fadilah,",
    body:
      "An unforgettable first day with you... that's how I'll always describe it.\n\n" +
      "I still remember standing at Circle, opposite IPMC, just looking around and " +
      "waiting... hoping to see my beautiful girl appear right in front of me. My " +
      "heart was racing, I was so nervous, I didn't even know what I was going to " +
      "say. And then you showed up... and everything just softened. The nerves, the " +
      "overthinking... it all faded because you were there. And seeing you in my " +
      "favorite color made that moment feel even more special.\n\n" +
      "From sharing chocolate, to our little walk, to sitting and talking... " +
      "everything felt so easy and real. But my favorite part will always be us by " +
      "the roadside, with you forcing me to finish my mashed kenkey like I had no " +
      "choice. I won't lie, I enjoyed every second of it — just being with you, " +
      "laughing, living in that moment.\n\n" +
      "I still find myself smiling when I think about that day. I remember heading " +
      "back, smiling all the way and quietly thanking Allah for you.\n\n" +
      "I miss you, Fadilah... I really do. I miss that feeling, that version of us. " +
      "You mean more to me than I can ever fully explain.\n\n" +
      "I just hope we can find our way back to that again.",
    signature: "Always yours.",
  },

  // Starter wishlist items (optional). She can add/remove her own after this.
  wishlistSeed: [
    "Umrah together, insha'Allah",
    "A trip to the beach at sunset",
    "A quiet Jummah morning together",
  ],

  // Photos & videos: drop files into /images (photos) or /videos (video clips),
  // then list them here with a caption. Videos are detected automatically by
  // file extension (.mp4, .webm, .mov) and get a video player instead of an <img>.
  photos: [
    { src: "images/first time.jpg", caption: "August 15, 2022 — standing at Circle, opposite IPMC, waiting to see you 🤍" },
    { src: "images/ac95276d-fa17-4554-bcc0-dc6156ca62c6.jpg", caption: "And then you showed up — seeing you in my favorite color made that moment even more special 💛" },
    { src: "images/bca28b39-4dda-4ae5-bc25-46db6086a0e5.jpg", caption: "Every nerve just melted away" },
    { src: "images/bd0ef4c7-8339-466c-b00d-d920425b8a5e.jpg", caption: "You looked so beautiful that day" },
    { src: "images/first time1.jpg", caption: "Sharing chocolate, our little walk together" },
    { src: "images/first time 2.jpg", caption: "Sitting and talking... everything felt so easy and real" },
    { src: "images/firsy time 3.jpg", caption: "By the roadside, you made me finish my mashed kenkey 😄" },
    { src: "images/first time 4.jpg", caption: "I still smile just thinking about that day" },
    { src: "images/splash.jpg", caption: "Our trip to Aburi Gardens — you resting on my chest in the car. It was smooth and awesome 🤍" },
    { src: "images/trip.jpg", caption: "That same smooth trip to Aburi Gardens — I love this one too" },
    { src: "images/033f0bcd-08d8-4a87-b134-feac6cb8ac11.jpg", caption: "" },
    { src: "images/0b4c5a49-7b09-4d97-8acc-92e9de410d42.jpg", caption: "" },
    { src: "images/zoo5.jpg", caption: "We walked into the zoo not knowing what to expect" },
    { src: "images/21db95f6-2067-4324-8d21-2fe19f4f64c4.jpg", caption: "" },
    { src: "images/22d33ef8-b114-47f3-8248-469c8b5de214.jpg", caption: "" },
    { src: "images/2b2d931c-2ca7-4f64-bb04-f75a3047e015.jpg", caption: "" },
    { src: "images/zoo6.jpg", caption: "Reading every animal fact like curious kids" },
    { src: "images/44e79a1d-a2ce-49ff-a36c-01b6cb9e14ce.jpg", caption: "Just us, messing around in front of the mirror" },
    { src: "images/45a3b26a-8b4a-4be1-881c-614ea7458114.jpg", caption: "" },
    { src: "images/zoo4.jpg", caption: "You lit up every time we found a new enclosure" },
    { src: "images/5591b8ed-fc74-48b3-8699-9c0ef9f46fa0.jpg", caption: "" },
    { src: "images/5c2973e2-d804-4bd6-9f63-84980670a179.jpg", caption: "" },
    { src: "images/601b223a-265c-4b08-b29c-33a84c1df6cf.jpg", caption: "You laughing at whatever I said" },
    { src: "images/6bf9be9f-629f-4fe2-9785-14b282ef1500.jpg", caption: "Being silly together, no one else around" },
    { src: "images/8ca14533-e1f6-4087-93fe-848c443d4294.jpg", caption: "" },
    { src: "images/8cdeca6d-6b40-4bb6-9278-4acf706ce765.jpg", caption: "" },
    { src: "images/8f25af3a-eeb5-47ea-b3b6-639ee4a3f49c.jpg", caption: "" },
    { src: "images/91b130c8-b967-474c-bd0d-a8ae257da38f.jpg", caption: "" },
    { src: "images/9a456e2d-7b3e-443a-8039-0d11bb0fa390.jpg", caption: "" },
    { src: "images/a58a3165-8c78-4c92-a693-1489c6abb21a.jpg", caption: "A quiet little moment, just the two of us" },
    { src: "images/a7eb4ac8-a566-42c9-abb6-b98f83e40bca.jpg", caption: "I love these ordinary moments with you most" },
    { src: "images/zoo.jpg", caption: "Getting a little lost in the greenery together" },
    { src: "images/b198a0cb-b6ee-44ae-9cd6-106d103a5530.jpg", caption: "" },
    { src: "images/zoo1.jpg", caption: "Holding your hand the whole way through" },
    { src: "images/zoo2.jpg", caption: "By the end, neither of us wanted to leave" },
    { src: "images/cf8a833d-a583-4911-8688-626fe884e7db.jpg", caption: "" },
    { src: "images/d490dff6-4801-4e75-99b1-c51395e7755a.jpg", caption: "" },
    { src: "images/f084c5fe-6db2-47f6-afdf-7efa1184d6af.jpg", caption: "" },
    { src: "images/f598701e-d20e-4a16-be80-0041da7048a7.jpg", caption: "" },
    { src: "images/vidoecall.jpg", caption: "A video call we had recently... it was awesome" },
    { src: "images/ffc4603e-2761-4b2e-964d-46b20db92e85.jpg", caption: "" },
  ],

  // Nasheeds: drop mp3 files into the /audio folder, then list them here.
  // Example:
  // { src: "audio/maher-zain-ya-nabi.mp3", title: "Maher Zain — Ya Nabi Salam Alayka" },
  nasheeds: [
    // EDIT ME: add your nasheed mp3s here after copying them into /audio
  ],
};
