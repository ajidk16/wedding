const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Pernikahan Anggi Wahyudi & Eti Nur Hasanah",
    // Opening message/description of the invitation
    description:
      "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.", // Nanti ini dibikin random
    // Groom's name
    groomName: "ANGGI WAHYUDI",
    // Bride's name
    brideName: "ETI NUR HASANAH",
    // Groom's parents names
    parentGroom: "Bapak Groom & Ibu Groom",
    // Bride's parents names
    parentBride: "Bapak Bride & Ibu Bride",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-11-20",
    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.app.goo.gl/KRqFRav4Bs28X3SX9",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d254.20892782925011!2d105.38318186804072!3d-4.169163525594466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1760708151353!5m2!1sid!2sid",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "09:00 - Selesai WIB",
    // Venue/building name
    location: "Rumah Mempelai Wanita",
    // Full address of the wedding venue
    address:
      "Jl. Pisang Timur, Sidomakmur, Penawar Tama, Tulang Bawang Regency, Lampung 34682",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Akad Nikah",
        // Event date (format: YYYY-MM-DD)
        date: "2024-12-24",
        // Start time (format: HH:MM)
        startTime: "16:16",
        // End time (format: HH:MM)
        endTime: "17:30",
        // Event venue
        location: "Rumah Mempelai Wanita",
        // Full address
        address: "Jl. Pisang Timur, Sidomakmur, Penawar Tama, Tulang Bawang Regency, Lampung 34682",
      },

      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true,
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Seabank",
        // Account number
        accountNumber: "901482579809",
        // Account holder name (all uppercase)
        accountName: "ETI NUR HASANAH",
      },
      // {
      //   bank: "Bank Mandiri",
      //   accountNumber: "0987654321",
      //   accountName: "FULANA",
      // },
      // You can add more banks with the same format
    ],
  },
};

export default config;
