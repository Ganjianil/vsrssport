import { useState, useEffect } from "react";
import "./App.css";

// Premium Icons (same as before)
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
  </svg>
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21"></polygon>
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Premium location data with enhanced features
  const mainLocations = [
    {
      id: "ap",
      name: "Andhra Pradesh",
      description:
        "Experience world-class box cricket facilities across AP with cutting-edge synthetic turf, professional coaching, and tournament-grade equipment.",
      image: "/andhra.jpg",
      phone: "+91-9876543210",
      badge: "Premium",
      features: [
        "Professional Coaching",
        "Tournament Grade",
        "Climate Control",
        "24/7 Available",
      ],
      groundClass: "ap",
    },
    {
      id: "telangana",
      name: "Telangana",
      description:
        "State-of-the-art box cricket venues featuring advanced LED lighting, climate-controlled environments, and expert coaching staff.",
      image: "/hyd.jpg",
      icon: "🏟️",
      phone: "+91-9876543211",
      badge: "Elite",
      features: [
        "LED Lighting",
        "Expert Coaches",
        "Premium Courts",
        "Live Streaming",
      ],
      groundClass: "telangana",
    },
    {
      id: "bangalore",
      name: "Bangalore",
      description:
        "Premium box cricket centers in Silicon Valley of India with smart booking systems, professional facilities, and corporate packages.",
      image: "/bangalore.jpg",
      icon: "⚡",
      phone: "+91-9876543212",
      badge: "Corporate",
      features: [
        "Smart Booking",
        "Corporate Packages",
        "Tech Integration",
        "VIP Lounges",
      ],
      groundClass: "bangalore",
    },
  ];

  // All locations data (same as before but with ground images)
  const hyderabadLocations = [
    {
      name: "Kondapur",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Ultra-modern facility with 6 premium courts, professional coaching academy, advanced player analytics, and corporate event hosting.",
      image: "/c1.jpeg",
      phone: "+91-9876543213",
      icon: "🏢",
      features: [
        "6 Premium Courts",
        "Coaching Academy",
        "Player Analytics",
        "Corporate Events",
        "Parking Available",
      ],
    },
    {
      name: "Gachibowli",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Corporate hub facility with flexible timing, team building packages, conference rooms, and tech-enabled smart courts.",
      icon: "🏢",
      phone: "+91-9876543217",
      image: "/c2.jpeg",
      features: [
        "Smart Courts",
        "Team Building",
        "Conference Rooms",
        "Flexible Timing",
        "Tech Integration",
      ],
    },
    {
      name: "Hitec City",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Tech-enabled facility in IT corridor with smart courts, digital scoreboards, live match streaming, and VIP lounges.",
      icon: "🚀",
      phone: "+91-9876543215",
      image: "/c3.jpeg",
      features: [
        "Digital Scoreboards",
        "Live Streaming",
        "VIP Lounges",
        "IT Corridor",
        "Metro Connectivity",
      ],
    },
    {
      name: "Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Elite facility with spa services, fine dining restaurant, luxury changing rooms, and exclusive member benefits.",
      icon: "👑",
      phone: "+91-9876543219",
      image: "/c4.jpeg",
      features: [
        "Spa Services",
        "Fine Dining",
        "Luxury Rooms",
        "Member Benefits",
        "Valet Parking",
      ],
    },
    {
      name: "Banjara Hills",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Premium location with rooftop courts, panoramic city views, exclusive member benefits, and celebrity coaching sessions.",
      icon: "🌟",
      phone: "+91-9876543216",
      image: "/c5.jpeg",
      features: [
        "Rooftop Courts",
        "City Views",
        "Celebrity Coaches",
        "Premium Location",
        "Exclusive Access",
      ],
    },
    {
      name: "Chandanagar",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Family-friendly venue with kids academy, birthday party packages, recreational activities, and weekend tournaments.",
      icon: "🎪",
      phone: "+91-9876543250",
      image: "/c6.jpeg",
      features: [
        "Kids Academy",
        "Birthday Parties",
        "Family Packages",
        "Weekend Tournaments",
        "Play Area",
      ],
    },
    {
      name: "Miyapur",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Suburban facility with spacious courts, ample parking, weekend tournaments, and metro connectivity for easy access.",
      icon: "🌳",
      phone: "+91-9876543223",
      image: "/c7.jpeg",
      features: [
        "Spacious Courts",
        "Ample Parking",
        "Metro Access",
        "Weekend Leagues",
        "Suburban Location",
      ],
    },
    {
      name: "Madinaguda",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Modern facility with state-of-the-art equipment, professional coaching, youth development programs, and community events.",
      icon: "🎯",
      phone: "+91-9876543251",
      image: "/c8.jpeg",
      features: [
        "Modern Equipment",
        "Youth Programs",
        "Community Events",
        "Professional Coaching",
        "Training Facilities",
      ],
    },
    {
      name: "Kukatpally",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Community-focused venue with kids academy, birthday party packages, recreational activities, and local tournament hosting.",
      icon: "🎪",
      phone: "+91-9876543220",
      image: "/c9.jpeg",
      features: [
        "Community Focus",
        "Kids Programs",
        "Local Tournaments",
        "Recreation Center",
        "Family Events",
      ],
    },
    {
      name: "Nizampet",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Growing residential area facility with modern courts, family packages, coaching classes, and flexible membership options.",
      icon: "🏘️",
      phone: "+91-9876543252",
      image: "/c10.jpeg",
      features: [
        "Residential Area",
        "Family Packages",
        "Coaching Classes",
        "Flexible Membership",
        "Modern Courts",
      ],
    },
    {
      name: "Yerragadda",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Strategic location with excellent connectivity, professional tournaments, corporate packages, and advanced booking systems.",
      icon: "🛣️",
      phone: "+91-9876543253",
      image: "/c11.jpeg",
      features: [
        "Strategic Location",
        "Excellent Connectivity",
        "Professional Tournaments",
        "Corporate Packages",
        "Online Booking",
      ],
    },
    {
      name: "Pragathi Nagar",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Emerging area facility with modern infrastructure, youth development programs, weekend leagues, and community engagement.",
      icon: "🌱",
      phone: "+91-9876543254",
      image: "/c12.jpeg",
      features: [
        "Modern Infrastructure",
        "Youth Development",
        "Weekend Leagues",
        "Community Programs",
        "Emerging Location",
      ],
    },
    {
      name: "ECIL",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Industrial area facility with corporate-friendly packages, team building events, flexible timings, and professional coaching.",
      icon: "🏭",
      phone: "+91-9876543255",
      image: "/c13.jpeg",
      features: [
        "Industrial Location",
        "Corporate Packages",
        "Team Building",
        "Flexible Timings",
        "Professional Setup",
      ],
    },
    {
      name: "Kompally",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Outer ring road facility with spacious grounds, tournament hosting, ample parking, and weekend special programs.",
      icon: "🛤️",
      phone: "+91-9876543256",
      image: "/c22.jpeg",
      features: [
        "ORR Location",
        "Spacious Grounds",
        "Tournament Hosting",
        "Ample Parking",
        "Weekend Specials",
      ],
    },
    {
      name: "Suchitra",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Residential hub facility with family-oriented programs, kids coaching, birthday celebrations, and community tournaments.",
      icon: "🏡",
      phone: "+91-9876543257",
      image: "/c23.jpeg",
      features: [
        "Residential Hub",
        "Family Programs",
        "Kids Coaching",
        "Birthday Celebrations",
        "Community Focus",
      ],
    },
    {
      name: "Bowenpally",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Traditional area facility with heritage ambiance, local community programs, affordable packages, and cultural events.",
      icon: "🏛️",
      phone: "+91-9876543258",
      image: "/c16.jpeg",
      features: [
        "Heritage Ambiance",
        "Community Programs",
        "Affordable Packages",
        "Cultural Events",
        "Traditional Charm",
      ],
    },
    {
      name: "Ameerpet",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Central location with easy metro connectivity, student-friendly packages, coaching classes, and educational partnerships.",
      icon: "🚇",
      phone: "+91-9876543222",
      image: "/c17.jpeg",
      features: [
        "Metro Connectivity",
        "Student Packages",
        "Coaching Classes",
        "Educational Partnerships",
        "Central Location",
      ],
    },
    {
      name: "Panjagutta",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Commercial hub facility with business-friendly packages, corporate events, professional networking, and premium amenities.",
      icon: "🏪",
      phone: "+91-9876543259",
      image: "/c18.jpeg",
      features: [
        "Commercial Hub",
        "Business Packages",
        "Corporate Events",
        "Professional Networking",
        "Premium Amenities",
      ],
    },
    {
      name: "Mehdipatnam",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Historic area facility with traditional hospitality, modern equipment, cultural events, and community engagement programs.",
      icon: "🕌",
      phone: "+91-9876543260",
      image: "/c19.jpeg",
      features: [
        "Historic Location",
        "Traditional Hospitality",
        "Modern Equipment",
        "Cultural Events",
        "Community Engagement",
      ],
    },
    {
      name: "Attapur",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Growing suburb facility with modern infrastructure, family packages, youth programs, and weekend entertainment.",
      icon: "🌆",
      phone: "+91-9876543261",
      image: "/c20.jpeg",
      features: [
        "Growing Suburb",
        "Modern Infrastructure",
        "Family Packages",
        "Youth Programs",
        "Weekend Entertainment",
      ],
    },
    {
      name: "Tarnaka",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "University area facility with student-friendly programs, educational discounts, coaching academies, and skill development.",
      icon: "🎓",
      phone: "+91-9876543262",
      image: "/c21.jpeg",
      features: [
        "University Area",
        "Student Programs",
        "Educational Discounts",
        "Coaching Academies",
        "Skill Development",
      ],
    },
    {
      name: "Uppal",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Eastern hub with multiple courts, professional lighting, corporate event hosting, and tournament-grade facilities.",
      icon: "🌅",
      phone: "+91-9876543224",
      image: "/c22.jpeg",
      features: [
        "Multiple Courts",
        "Professional Lighting",
        "Corporate Events",
        "Tournament Grade",
        "Eastern Hub",
      ],
    },
    {
      name: "Patancheru",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Industrial town facility with corporate partnerships, team building programs, spacious grounds, and professional coaching.",
      icon: "🏭",
      phone: "+91-9876543263",
      image: "/c23.jpeg",
      features: [
        "Industrial Town",
        "Corporate Partnerships",
        "Team Building",
        "Spacious Grounds",
        "Professional Coaching",
      ],
    },
    {
      name: "Lingampally",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "IT corridor extension facility with modern amenities, tech integration, corporate packages, and flexible scheduling.",
      icon: "💻",
      phone: "+91-9876543264",
      image: "/c1.jpeg",
      features: [
        "IT Corridor",
        "Modern Amenities",
        "Tech Integration",
        "Corporate Focus",
        "Flexible Scheduling",
      ],
    },
  ];

  // Bangalore and AP locations (same structure as before)
  const bangaloreLocations = [
    {
      name: "Koramangala",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Trendy location in startup hub with modern facilities and tech-savvy amenities.",
      icon: "💻",
      phone: "+91-9876543225",
      image: "/c2.jpeg",
      features: [
        "Startup Hub",
        "Modern Tech",
        "Trendy Location",
        "Tech Amenities",
        "Innovation Center",
      ],
    },
    {
      name: "Indiranagar",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Premium facility in upscale neighborhood with fine dining and entertainment options.",
      icon: "🍽️",
      phone: "+91-9876543226",
      image: "/c3.jpeg",
      features: [
        "Upscale Area",
        "Fine Dining",
        "Entertainment",
        "Premium Location",
        "Lifestyle Hub",
      ],
    },
    {
      name: "Whitefield",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "IT corridor location with corporate packages, flexible timings, and team building events.",
      icon: "🏢",
      phone: "+91-9876543227",
      image: "/c4.jpeg",
      features: [
        "IT Corridor",
        "Corporate Packages",
        "Flexible Timing",
        "Team Building",
        "Professional Setup",
      ],
    },
    {
      name: "Electronic City",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Tech park facility with advanced booking systems and professional coaching staff.",
      icon: "⚡",
      phone: "+91-9876543228",
      image: "/c5.jpeg",
      features: [
        "Tech Park",
        "Advanced Booking",
        "Professional Coaching",
        "Modern Infrastructure",
        "Corporate Hub",
      ],
    },
    {
      name: "Jayanagar",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Traditional area with modern courts, family packages, and cultural events.",
      icon: "🏛️",
      phone: "+91-9876543229",
      image: "/c6.jpeg",
      features: [
        "Traditional Area",
        "Modern Courts",
        "Family Packages",
        "Cultural Events",
        "Heritage Location",
      ],
    },
    {
      name: "HSR Layout",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Residential hub with community-focused programs and weekend leagues.",
      icon: "🏘️",
      phone: "+91-9876543230",
      image: "/c7.jpeg",
      features: [
        "Residential Hub",
        "Community Programs",
        "Weekend Leagues",
        "Family Friendly",
        "Modern Facilities",
      ],
    },
    {
      name: "Marathahalli",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Central location with excellent connectivity and professional tournament hosting.",
      icon: "🛣️",
      phone: "+91-9876543231",
      image: "/c8.jpeg",
      features: [
        "Central Location",
        "Excellent Connectivity",
        "Tournament Hosting",
        "Professional Setup",
        "Corporate Friendly",
      ],
    },
    {
      name: "Banashankari",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "South Bangalore facility with spacious courts and coaching academy.",
      icon: "🏟️",
      phone: "+91-9876543232",
      image: "/11.jpeg",
      features: [
        "South Bangalore",
        "Spacious Courts",
        "Coaching Academy",
        "Professional Training",
        "Modern Equipment",
      ],
    },
    {
      name: "Sarjapur",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Emerging IT hub with state-of-the-art facilities and tech integration.",
      icon: "🌐",
      phone: "+91-9876543245",
      image: "/i2.jpeg",
      features: [
        "IT Hub",
        "Modern Facilities",
        "Tech Integration",
        "Corporate Packages",
        "Professional Setup",
      ],
    },
    {
      name: "Bellandur",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Lake-side facility with premium amenities and corporate event hosting.",
      icon: "🏞️",
      phone: "+91-9876543246",
      image: "/i3.jpeg",
      features: [
        "Lake Side",
        "Premium Amenities",
        "Corporate Events",
        "Scenic Location",
        "Modern Infrastructure",
      ],
    },
    {
      name: "Hebbal",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "North Bangalore venue with excellent connectivity and modern facilities.",
      icon: "🛤️",
      phone: "+91-9876543247",
      image: "/i4.jpeg",
      features: [
        "North Bangalore",
        "Excellent Connectivity",
        "Modern Facilities",
        "Professional Setup",
        "Corporate Friendly",
      ],
    },
    {
      name: "Rajajinagar",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Central location with traditional charm and modern sports facilities.",
      icon: "🏛️",
      phone: "+91-9876543248",
      image: "/i5.jpeg",
      features: [
        "Central Location",
        "Traditional Charm",
        "Modern Sports",
        "Family Friendly",
        "Cultural Heritage",
      ],
    },
  ];

  const apLocations = [
    {
      name: "Vijayawada",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      description:
        "Commercial capital facility with premium courts and business-friendly packages.",
      icon: "🏪",
      phone: "+91-9876543233",
      image: "/i6.jpeg",
      features: [
        "Commercial Capital",
        "Premium Courts",
        "Business Packages",
        "Strategic Location",
        "Professional Setup",
      ],
    },
    {
      name: "Visakhapatnam",
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      description:
        "Coastal city venue with sea-view courts and resort-style amenities.",
      icon: "🌊",
      phone: "+91-9876543234",
      image: "/i7.jpeg",
      features: [
        "Coastal Location",
        "Sea Views",
        "Resort Style",
        "Premium Amenities",
        "Scenic Environment",
      ],
    },
    {
      name: "Guntur",
      city: "Guntur",
      state: "Andhra Pradesh",
      description:
        "Agricultural hub with community-focused programs and local tournament hosting.",
      icon: "🌾",
      phone: "+91-9876543235",
      image: "/c1.jpeg",
      features: [
        "Agricultural Hub",
        "Community Programs",
        "Local Tournaments",
        "Traditional Values",
        "Modern Facilities",
      ],
    },
    {
      name: "Nellore",
      city: "Nellore",
      state: "Andhra Pradesh",
      description:
        "Growing city facility with modern equipment and youth development programs.",
      icon: "🌱",
      phone: "+91-9876543236",
      image: "/c1.jpeg",
      features: [
        "Growing City",
        "Modern Equipment",
        "Youth Programs",
        "Professional Coaching",
        "Community Focus",
      ],
    },
    {
      name: "Kurnool",
      city: "Kurnool",
      state: "Andhra Pradesh",
      description:
        "Historic city venue with traditional hospitality and modern facilities.",
      icon: "🏰",
      phone: "+91-9876543237",
      image: "/c1.jpeg",
      features: [
        "Historic City",
        "Traditional Hospitality",
        "Modern Facilities",
        "Cultural Heritage",
        "Professional Setup",
      ],
    },
    {
      name: "Rajahmundry",
      city: "Rajahmundry",
      state: "Andhra Pradesh",
      description:
        "Cultural hub with heritage ambiance and professional coaching programs.",
      icon: "🎭",
      phone: "+91-9876543238",
      image: "/c1.jpeg",
      features: [
        "Cultural Hub",
        "Heritage Ambiance",
        "Professional Coaching",
        "Traditional Values",
        "Modern Equipment",
      ],
    },
    {
      name: "Tirupati",
      city: "Tirupati",
      state: "Andhra Pradesh",
      description:
        "Spiritual city facility with peaceful environment and family-friendly packages.",
      icon: "🕉️",
      phone: "+91-9876543239",
      image: "/c1.jpeg",
      features: [
        "Spiritual City",
        "Peaceful Environment",
        "Family Packages",
        "Traditional Values",
        "Modern Amenities",
      ],
    },
    {
      name: "Kakinada",
      city: "Kakinada",
      state: "Andhra Pradesh",
      description:
        "Port city venue with international standard courts and maritime-themed decor.",
      icon: "⚓",
      phone: "+91-9876543240",
      image: "/c1.jpeg",
      features: [
        "Port City",
        "International Standards",
        "Maritime Theme",
        "Professional Setup",
        "Modern Infrastructure",
      ],
    },
    {
      name: "Anantapur",
      city: "Anantapur",
      state: "Andhra Pradesh",
      description:
        "District headquarters facility with government partnerships and community programs.",
      icon: "🏛️",
      phone: "+91-9876543270",
      image: "/c1.jpeg",
      features: [
        "District HQ",
        "Government Partnerships",
        "Community Programs",
        "Professional Setup",
        "Modern Facilities",
      ],
    },
    {
      name: "Chittoor",
      city: "Chittoor",
      state: "Andhra Pradesh",
      description:
        "Border city facility with interstate connectivity and diverse cultural programs.",
      icon: "🌉",
      phone: "+91-9876543271",
      image: "/c1.jpeg",
      features: [
        "Border City",
        "Interstate Connectivity",
        "Cultural Programs",
        "Modern Facilities",
        "Professional Coaching",
      ],
    },
  ];

  // Complete locations database
  const allLocations = [
    ...hyderabadLocations,
    ...bangaloreLocations,
    ...apLocations,
  ];

  const timeSlots = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];

  // Updated gallery items with video support
  const galleryItems = [
    {
      type: "video",
      title: "Championship Courts",
      description:
        "Tournament-grade synthetic turf courts with professional lighting and climate control systems.",
      video: "/v1.mp4",
      icon: "🏆",
    },
    {
      type: "video",
      title: "Training Excellence",
      description:
        "Watch our professional coaches in action, developing the next generation of cricket champions.",
      video: "/v2.mp4",
      icon: "🎥",
    },
    {
      type: "video",
      title: "Modern Facilities",
      description:
        "State-of-the-art changing rooms, equipment storage, and spectator areas with premium amenities.",
      video: "/v3.mp4",
      icon: "🏢",
    },
    {
      type: "video",
      title: "Match Highlights",
      description:
        "Exciting moments from recent tournaments and championships held at our premium venues.",
      video: "/v4.mp4",
      icon: "⚡",
    },
    {
      type: "video",
      title: "Technology Integration",
      description:
        "Smart scoreboards, performance analytics, and digital coaching tools for enhanced experience.",
      video: "/v5.mp4",
      icon: "📱",
    },
    {
      type: "video",
      title: "Community Events",
      description:
        "Corporate tournaments, family events, and community championships that bring people together.",
      video: "/v6.mp4",
      icon: "🎪",
    },
  ];

  const stats = [
    { number: "50+", label: "Premium Venues" },
    { number: "15K+", label: "Happy Players" },
    { number: "800+", label: "Tournaments Hosted" },
    { number: "24/7", label: "Customer Support" },
  ];

  // Enhanced search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const filtered = allLocations.filter(
      (location) =>
        location.name.toLowerCase().includes(query.toLowerCase()) ||
        location.city.toLowerCase().includes(query.toLowerCase()) ||
        location.state.toLowerCase().includes(query.toLowerCase()) ||
        location.description.toLowerCase().includes(query.toLowerCase()) ||
        (location.features &&
          location.features.some((feature) =>
            feature.toLowerCase().includes(query.toLowerCase())
          ))
    );

    setSearchResults(filtered);
    setShowSearchResults(true);
  };

  const handleSearchResultClick = (location) => {
    setSearchQuery("");
    setShowSearchResults(false);
    setShowMobileSearch(false);
    handleBooking(`${location.name}, ${location.city}`, location);
  };

  // Handle state card clicks in hero section - FIXED
  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
    setShowLocationModal(true);
  };

  const getLocationsByState = (stateName) => {
    switch (stateName) {
      case "Andhra Pradesh":
        return apLocations;
      case "Telangana":
        return hyderabadLocations;
      case "Bangalore":
        return bangaloreLocations;
      default:
        return [];
    }
  };

  const handleBooking = (locationName, locationData = null) => {
    setSelectedLocation(locationName);
    setShowBookingModal(true);
    setShowLocationModal(false);
  };

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleWhatsAppBooking = () => {
    if (!selectedTimeSlot) {
      alert("Please select a time slot to proceed with booking");
      return;
    }

    const message = `🏏 VSRSSports Premium Booking Request

📍 Location: ${selectedLocation}
⏰ Time Slot: ${selectedTimeSlot}
📅 Date: ${new Date().toLocaleDateString()}
🎯 Booking Type: Premium Box Cricket

Hi! I would like to book a premium box cricket slot at your ${selectedLocation} facility. Please confirm availability and send booking details with pricing.

✅ Features I'm interested in:
• Professional Equipment
• Climate Controlled Environment
• LED Lighting
• Digital Scoreboard
• Changing Rooms
• Refreshments

Thank you for your premium service!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setShowBookingModal(false);
    setSelectedTimeSlot("");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileNavOpen(false);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
    if (!showMobileSearch) {
      setMobileNavOpen(false);
    }
  };

  return (
    <div className="App">
      {/* Premium Header with Mobile Search */}
      <header className={`header ${headerScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">
              VSRSSports
            </a>

            {/* Desktop Navigation */}
            <nav className="nav desktop-nav">
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
              <a href="#locations" onClick={() => scrollToSection("locations")}>
                Locations
              </a>
              <a
                href="#categories"
                onClick={() => scrollToSection("categories")}
              >
                Venues
              </a>
              <a href="#gallery" onClick={() => scrollToSection("gallery")}>
                Gallery
              </a>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </nav>

            {/* Desktop Search */}
            <div className="desktop-search">
              <div className="search-container">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search locations..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery && setShowSearchResults(true)}
                />
                <div className="search-icon">
                  <SearchIcon />
                </div>

                {showSearchResults && (
                  <div className="search-results">
                    {searchResults.length > 0 ? (
                      searchResults.map((location, index) => (
                        <div
                          key={index}
                          className="search-result-item"
                          onClick={() => handleSearchResultClick(location)}
                        >
                          <div className="search-result-icon">
                            <span>{location.icon}</span>
                          </div>
                          <div className="search-result-content">
                            <h4>
                              {location.name}, {location.city}
                            </h4>
                            <p>
                              {location.state} •{" "}
                              {location.description.substring(0, 60)}...
                            </p>
                            {location.features && (
                              <div className="search-result-features">
                                {location.features.slice(0, 2).join(" • ")}
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="no-results">
                        <p>No locations found</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="mobile-controls">
              <button
                className="mobile-search-btn"
                onClick={toggleMobileSearch}
              >
                <SearchIcon />
              </button>
              <button className="mobile-menu" onClick={toggleMobileNav}>
                <MenuIcon />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showMobileSearch && (
            <div className="mobile-search-container">
              <div className="mobile-search-bar">
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  autoFocus
                />
                <button onClick={() => setShowMobileSearch(false)}>
                  <XIcon />
                </button>
              </div>

              {showSearchResults && (
                <div className="mobile-search-results">
                  {searchResults.length > 0 ? (
                    searchResults.map((location, index) => (
                      <div
                        key={index}
                        className="mobile-search-result-item"
                        onClick={() => handleSearchResultClick(location)}
                      >
                        <div className="mobile-search-result-icon">
                          <span>{location.icon}</span>
                        </div>
                        <div className="mobile-search-result-content">
                          <h4>{location.name}</h4>
                          <p>
                            {location.city}, {location.state}
                          </p>
                          <div className="mobile-search-result-features">
                            {location.features.slice(0, 2).join(" • ")}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="mobile-no-results">
                      <p>No locations found</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <a href="#" className="logo">
            VSRSSports
          </a>
          <button className="mobile-menu" onClick={toggleMobileNav}>
            <XIcon />
          </button>
        </div>
        <div className="mobile-nav-links">
          <a href="#home" onClick={() => scrollToSection("home")}>
            🏠 Home
          </a>
          <a href="#locations" onClick={() => scrollToSection("locations")}>
            📍 Locations
          </a>
          <a href="#categories" onClick={() => scrollToSection("categories")}>
            🏟️ Venues
          </a>
          <a href="#gallery" onClick={() => scrollToSection("gallery")}>
            📸 Gallery
          </a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            📞 Contact
          </a>
        </div>
      </div>

      {/* Hero Section with Floating Shapes */}
      <section id="home" className="hero">
        <div className="hero-shapes">
          <div className="hero-shape"></div>
          <div className="hero-shape"></div>
          <div className="hero-shape"></div>
        </div>
        <div className="container">
          <div className="hero-content animate-fadeInUp">
            <h1>Premium Box Cricket Experience</h1>
            <div className="subtitle">Where Champions Are Made</div>
            <p>
              Book your slot across AP, Telangana, and Bangalore with VSRSSports
              - Experience world-class facilities, professional coaching, and
              tournament-grade equipment at India's most premium box cricket
              venues.
            </p>
            <div className="cta-buttons">
              <button
                className="cta-button"
                onClick={() => setShowMobileSearch(true)}
              >
                🏏 Book Your Slot
              </button>
              <button
                className="cta-button secondary"
                onClick={() => scrollToSection("gallery")}
              >
                <PlayIcon /> Watch Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item animate-fadeInUp">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Premium Locations Section with Ground Images */}
      <section id="locations" className="locations">
        <div className="container">
          <h2 className="section-title">Our Premium Locations</h2>
          <p className="section-subtitle">
            Click on any state to explore all available venues and book your
            preferred slot
          </p>
          <div className="locations-grid">
            {mainLocations.map((location) => (
              <div
                key={location.id}
                className="location-card animate-fadeInUp"
                onClick={() => handleStateClick(location.name)}
              >
                <div className="location-image-container">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="location-image"
                  />
                  <div className="location-badge">{location.badge}</div>
                  {location.icon && (
                    <div className="location-icon-overlay">
                      <span>{location.icon}</span>
                    </div>
                  )}
                </div>
                <div className="location-content">
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <div className="location-features">
                    {location.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="location-buttons">
                    <button
                      className="book-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStateClick(location.name);
                      }}
                    >
                      📍 View All Locations
                    </button>
                    <button
                      className="call-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCall(location.phone);
                      }}
                    >
                      <PhoneIcon /> Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Hyderabad Venues Section with Ground Images */}
      <section id="categories" className="categories">
        <div className="container">
          <h2 className="section-title">Hyderabad Premium Venues</h2>
          <p className="section-subtitle">
            Discover our exclusive box cricket facilities across Hyderabad's
            prime locations, each offering unique amenities and world-class
            experiences
          </p>
          <div className="categories-grid">
            {hyderabadLocations.map((location, index) => (
              <div
                key={index}
                className="category-card animate-fadeInUp"
                onClick={() =>
                  handleBooking(`${location.name}, ${location.city}`, location)
                }
              >
                <div className="category-icon-container">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="category-image"
                  />
                  <div className="category-icon-overlay">
                    <span>{location.icon}</span>
                  </div>
                </div>
                <h4>
                  <MapPinIcon /> {location.name}
                </h4>
                <p>{location.description}</p>
                <div className="category-features">
                  {location.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="feature-tag-small">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="category-actions">
                  <div className="book-now">Book Slot</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCall(location.phone);
                    }}
                    className="call-btn"
                  >
                    <PhoneIcon /> Call
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Gallery Section with Video Support */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Gallery & Experience</h2>
          <p className="section-subtitle">
            Take a virtual tour of our premium facilities and witness the
            excitement of box cricket at its finest
          </p>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item animate-fadeInUp">
                <div className="gallery-media">
                  {item.type === "video" ? (
                    <video
                      className="gallery-video"
                      controls
                      poster={item.image || "/c1.jpeg"}
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-image"
                    />
                  )}
                  <div className="gallery-overlay">
                    <span className="gallery-icon">{item.icon}</span>
                    {item.type === "video" && (
                      <div className="play-button">
                        <PlayIcon />
                      </div>
                    )}
                  </div>
                </div>
                <div className="gallery-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer with All Locations */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>VSRSSports</h4>
              <p>
                India's premier box cricket facility network offering
                world-class venues, professional coaching, and tournament-grade
                equipment across AP, Telangana, and Bangalore.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  📘
                </a>
                <a href="#" className="social-link">
                  📷
                </a>
                <a href="#" className="social-link">
                  🐦
                </a>
                <a href="#" className="social-link">
                  📺
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Hyderabad Locations</h4>
              <a href="#" onClick={() => handleBooking("Kondapur, Hyderabad")}>
                Kondapur
              </a>
              <a
                href="#"
                onClick={() => handleBooking("Gachibowli, Hyderabad")}
              >
                Gachibowli
              </a>
              <a
                href="#"
                onClick={() => handleBooking("Hitec City, Hyderabad")}
              >
                Hitec City
              </a>
              <a
                href="#"
                onClick={() => handleBooking("Jubilee Hills, Hyderabad")}
              >
                Jubilee Hills
              </a>
              <a
                href="#"
                onClick={() => handleBooking("Banjara Hills, Hyderabad")}
              >
                Banjara Hills
              </a>
              <a href="#" onClick={() => handleBooking("Miyapur, Hyderabad")}>
                Miyapur
              </a>
              <a href="#" onClick={() => handleBooking("Ameerpet, Hyderabad")}>
                Ameerpet
              </a>
              <a
                href="#"
                onClick={() => handleBooking("Kukatpally, Hyderabad")}
              >
                Kukatpally
              </a>
            </div>

            <div className="footer-section">
              <h4>Bangalore Locations</h4>
              <a
                href="#"
                onClick={() => handleBooking("Koramangala, Bangalore")}
              >
                Koramangala
              </a>
              <a
                href="#"
                onClick={() => handleBooking("Indiranagar, Bangalore")}
              >
                Indiranagar
              </a>
              <a
                href="#"
                onClick={() => handleBooking("Whitefield, Bangalore")}
              >
                Whitefield
              </a>
              <a
                href="#"
                onClick={() => handleBooking("Electronic City, Bangalore")}
              >
                Electronic City
              </a>
              <a
                href="#"
                onClick={() => handleBooking("HSR Layout, Bangalore")}
              >
                HSR Layout
              </a>
              <a
                href="#"
                onClick={() => handleBooking("Marathahalli, Bangalore")}
              >
                Marathahalli
              </a>

              <a href="#" onClick={() => handleBooking("Jayanagar, Bangalore")}>
                Jayanagar
              </a>
              <a href="#" onClick={() => handleBooking("Sarjapur, Bangalore")}>
                Sarjapur
              </a>
            </div>

            <div className="footer-section">
              <h4>Andhra Pradesh Locations</h4>
              <a href="#" onClick={() => handleBooking("Vijayawada")}>
                Vijayawada
              </a>
              <a href="#" onClick={() => handleBooking("Visakhapatnam")}>
                Visakhapatnam
              </a>
              <a href="#" onClick={() => handleBooking("Guntur")}>
                Guntur
              </a>

              <a href="#" onClick={() => handleBooking("Nellore")}>
                Nellore
              </a>
              <a href="#" onClick={() => handleBooking("Kurnool")}>
                Kurnool
              </a>
              <a href="#" onClick={() => handleBooking("Tirupati")}>
                Tirupati
              </a>
              <a href="#" onClick={() => handleBooking("Kakinada")}>
                Kakinada
              </a>
              <a href="#" onClick={() => handleBooking("Rajahmundry")}>
                Rajahmundry
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2024 VSRSSports. All rights reserved. | Designed for
              cricket enthusiasts | Premium box cricket experience across India
            </p>
          </div>
        </div>
      </footer>

      {/* Location Modal - FIXED */}
      {showLocationModal && (
        <div
          className="location-modal-overlay"
          onClick={() => setShowLocationModal(false)}
        >
          <div className="location-modal" onClick={(e) => e.stopPropagation()}>
            <div className="location-modal-header">
              <h3>🏏 {selectedState} Locations</h3>
              <button
                className="close-button"
                onClick={() => setShowLocationModal(false)}
              >
                <XIcon />
              </button>
            </div>

            <div className="location-modal-grid">
              {getLocationsByState(selectedState).map((location, index) => (
                <div
                  key={index}
                  className="location-modal-item"
                  onClick={() =>
                    handleBooking(
                      `${location.name}, ${location.city}`,
                      location
                    )
                  }
                >
                  <h4>
                    <MapPinIcon /> {location.name}
                  </h4>
                  <p>{location.description}</p>
                  <div className="location-modal-features">
                    {location.features &&
                      location.features
                        .slice(0, 4)
                        .map((feature, idx) => (
                          <span key={idx}>{feature}</span>
                        ))}
                  </div>
                  <div className="location-modal-buttons">
                    <button className="location-modal-book">Book Slot</button>
                    <button
                      className="location-modal-call"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCall(location.phone);
                      }}
                    >
                      <PhoneIcon /> Call
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Booking Modal */}
      {showBookingModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowBookingModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🏏 Book Premium Slot - {selectedLocation}</h3>
              <button
                className="close-button"
                onClick={() => setShowBookingModal(false)}
              >
                <XIcon />
              </button>
            </div>

            <div className="time-slots-section">
              <h4>
                <ClockIcon /> Select Your Preferred Time Slot
              </h4>
              <div className="time-slots">
                {timeSlots.map((slot) => (
                  <div
                    key={slot}
                    className={`time-slot ${
                      selectedTimeSlot === slot ? "selected" : ""
                    }`}
                    onClick={() => setSelectedTimeSlot(slot)}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                padding: "2rem",
                borderRadius: "20px",
                marginBottom: "2rem",
              }}
            >
              <h4
                style={{
                  color: "#2c3e50",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "1.3rem",
                }}
              >
                <StarIcon /> Premium Features Included
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                  fontSize: "1rem",
                  color: "#64748b",
                }}
              >
                <div>✅ Professional Equipment</div>
                <div>✅ Climate Controlled</div>
                <div>✅ LED Lighting</div>
                <div>✅ Digital Scoreboard</div>
                <div>✅ Changing Rooms</div>
                <div>✅ Refreshments Available</div>
                <div>✅ Professional Coaching</div>
                <div>✅ Tournament Grade Courts</div>
              </div>
            </div>

            <div className="modal-buttons">
              <button
                className="modal-button secondary"
                onClick={() => setShowBookingModal(false)}
              >
                Cancel
              </button>
              <button
                className="modal-button primary"
                onClick={handleWhatsAppBooking}
              >
                📱 Confirm Booking via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close search results */}
      {showSearchResults && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 998,
          }}
          onClick={() => setShowSearchResults(false)}
        />
      )}
    </div>
  );
}

export default App;
