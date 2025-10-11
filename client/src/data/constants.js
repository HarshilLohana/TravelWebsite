// --- Data Definitions ---

// Array of images for the hero section
export const heroImages = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg"
];

export const navItems = [
  { name: "Home", href: "/", type: "link" },
  { 
    name: "Trips", 
    type: "dropdown", 
    items: [
      { name: "Start Planning", href: "#startplanning" },
      { name: "Services", href: "#services" },
      { name: "Holidays", href: "#holidays" }
    ]
  },
  { name: "Blog", href: "#blogs", type: "link" },
  { name: "Rent a Car", href: "/rentacar", type: "link" },
  { name: "Reviews", href: "#reviews", type: "link" },
  { name: "Contact", href: "#contactus", type: "link" }
];

export const statsData = [
  { countTo: 10, title: "Years of Experience", iconName: "Award", suffix: "+" },
  { countTo: 5000, title: "Happy Customers", iconName: "Users", suffix: "+" },
  { countTo: 100, title: "Tour Destinations", iconName: "MapPin", suffix: "+" },
];

export const destinations = [
  { id: 1, name: "Paris, France", text: "Iconic landmarks, exquisite cuisine, and world-class art.", image: '/images/image5.jpg' },
  { id: 2, name: "Tokyo, Japan", text: "A mesmerizing blend of ancient temples and futuristic cityscapes.", image: '/images/image6.jpg' },
  { id: 3, name: "Bora Bora", text: "Private villas, turquoise waters, and ultimate relaxation.", image: '/images/image7.jpg' },
];

export const tours = [
  { id: 1, name: "Adventure Seeker", duration: "7 Days", text: "Premium experience in exotic destinations, perfect for thrill-seekers.", image: 'https://images.unsplash.com/photo-1504101185010-3882f05a5a1e?q=80&w=2574&auto=format&fit=crop' },
  { id: 2, name: "Relaxation Retreat", duration: "10 Days", text: "Thrilling activities and breathtaking adventures for a peaceful getaway.", image: 'https://images.unsplash.com/photo-1502759683294-ea460d37e602?q=80&w=2574&auto=format&fit=crop' },
  { id: 3, name: "Cultural Explorer", duration: "5 Days", text: "Perfect for couples seeking tranquility and deep cultural immersion.", image: 'https://images.unsplash.com/photo-1522854084620-1a777646a782?q=80&w=2574&auto=format&fit=crop' },
];

export const whyUsItems = [
  { id: 1, title: "Expert Guidance", text: "Our travel experts provide personalized advice.", iconName: "Compass" },
  { id: 2, title: "Unbeatable Prices", text: "We find the best deals for your dream vacation.", iconName: "Star" },
  { id: 3, title: "24/7 Support", text: "We are here to help you every step of the way.", iconName: "Globe" },
];

export const testimonials = [
  { id: 1, name: "Alice Johnson", feedback: "The experience was absolutely phenomenal! Everything was perfectly organized from start to finish. The team handled all the planning seamlessly, leaving us only to enjoy our trip.", image: '/images/user1.jpg' },
  { id: 2, name: "Mark Smith", feedback: "This was the best travel experience ever. I highly recommend them! The destination was breathtaking, and the service from the local guides was truly top-notch.", image: '/images/user2.jpg' },
  { id: 3, name: "Sophie Lee", feedback: "They provided luxury and comfort combined with genuine adventure. I loved it! I will definitely book my next vacation through them for their stress-free service.", image: '/images/user3.jpg' },
  { id: 4, name: "David Kim", feedback: "Incredible value for money. They found amazing, exclusive spots we would never have discovered on our own. Five stars for attention to detail!", image: '/images/user4.jpg' },
];
