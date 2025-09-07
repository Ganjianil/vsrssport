import { useState, useEffect } from "react";
import "./App.css";

// Premium Icons
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

// Contact Icons
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showContactPanel, setShowContactPanel] = useState(true);
  const [selectedState, setSelectedState] = useState("Telangana"); // Default to show Hyderabad venues
  const [showLocationModal, setShowLocationModal] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Tawk.to script - FIXED VERSION
  useEffect(() => {
    // Check if Tawk.to is already loaded
    if (window.Tawk_API) {
      return;
    }

    // Create and configure the script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/68bd4542ff0b1f192377f72c/1j4hld39m";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Add script to head instead of body for better loading
    document.head.appendChild(script);

    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Cleanup function
    return () => {
      // Only remove if we added it
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Premium location data with enhanced features
  const mainLocations = [
    {
      id: "ap",
      name: "Andhra Pradesh",
      description:
        "We construct premium box cricket facilities across AP with cutting-edge synthetic turf, professional coaching infrastructure, and tournament-grade equipment installations.",
      image: "/andhra.jpg",
      badge: "Premium",
      features: [
        "Professional Construction",
        "Tournament Grade Turf",
        "Climate Control Systems",
        "24/7 Support",
      ],
      groundClass: "ap",
    },
    {
      id: "telangana",
      name: "Telangana",
      description:
        "State-of-the-art box cricket venue construction featuring advanced LED lighting systems, climate-controlled environments, and expert coaching facility setups.",
      image: "/hyd.jpg",
      icon: "🏟️",
      badge: "Elite",
      features: [
        "LED Lighting Systems",
        "Expert Construction",
        "Premium Court Building",
        "Live Streaming Setup",
      ],
      groundClass: "telangana",
    },
    {
      id: "bangalore",
      name: "Bangalore",
      description:
        "Premium box cricket center construction in Silicon Valley of India with smart facility systems, professional infrastructure, and corporate-grade installations.",
      image: "/bangalore.jpg",
      icon: "⚡",
      badge: "Corporate",
      features: [
        "Smart Construction",
        "Corporate Infrastructure",
        "Tech Integration",
        "VIP Facility Setup",
      ],
      groundClass: "bangalore",
    },
  ];

  // All locations data
  const hyderabadLocations = [
    {
      name: "Kondapur",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Ultra-modern facility with 6 premium courts, professional coaching academy, advanced player analytics, and corporate event hosting.",
      image: "/c1.jpeg",
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
      name: "Erragadda",
      city: "Hyderabad",
      state: "Telangana",
      description:
        "Strategic location with excellent connectivity, professional tournaments, corporate packages, and advanced booking systems.",
      icon: "🛣️",
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

  const bangaloreLocations = [
    {
      name: "Koramangala",
      city: "Bangalore",
      state: "Karnataka",
      description:
        "Trendy location in startup hub with modern facilities and tech-savvy amenities.",
      icon: "💻",
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
        "Smart scoreboards, performance analytic, and digital coaching tools for enhanced experience.",
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
    { number: "50+", label: "Venues Constructed" },
    { number: "30+", label: "Cities Covered" },
    { number: "100K+", label: "Sq. Ft. Turf Installed" },
    { number: "99%", label: "Client Satisfaction Rate" },
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
  };

  // Handle state card clicks - NEW FUNCTIONALITY
  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
    setShowLocationModal(true);
  };

  // Get locations by state - NEW FUNCTIONALITY
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

  // Get current venues to display based on selected state
  const getCurrentVenues = () => {
    return getLocationsByState(selectedState);
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

  // Contact handlers
  const handleWhatsApp = () => {
    window.open("https://wa.me/919951666645", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919951666645", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:vsrsportsboxcricket@gmail.com", "_self");
  };

  const hideContactPanel = () => {
    setShowContactPanel(false);
  };

  // Handle Tawk.to chat click
  const handleTawkChat = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      // Fallback - try to trigger chat after a short delay
      setTimeout(() => {
        if (window.Tawk_API && window.Tawk_API.maximize) {
          window.Tawk_API.maximize();
        }
      }, 1000);
    }
  };

  return (
    <div className="App">
      {/* Right Side Contact Panel */}
      {showContactPanel && (
        <div className="contact-panel">
          <div className="contact-panel-close" onClick={hideContactPanel}>
            <XIcon />
            <span className="close-tooltip">Close</span>
          </div>
          <div className="contact-item whatsapp" onClick={handleWhatsApp}>
            <WhatsAppIcon />
            <span className="tooltip">WhatsApp</span>
          </div>
          <div className="contact-item email" onClick={handleEmail}>
            <MailIcon />
            <span className="tooltip">Email</span>
          </div>
          <div className="contact-item phone" onClick={handleCall}>
            <PhoneIcon />
            <span className="tooltip">Call</span>
          </div>
        </div>
      )}

      {/* Premium Header with Mobile Search */}
      <header className={`header ${headerScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">
              VSR Sports
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
            VSR Sports
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
            <h1>Premium Box Cricket Construction</h1>
            <div className="subtitle">Where Champions Are Built</div>
            <p>
              We construct world-class box cricket facilities with
              professional-grade synthetic turf, tournament-standard equipment,
              and cutting-edge infrastructure across AP, Telangana, and
              Bangalore.
            </p>
            <div className="cta-buttons">
              <button
                className="cta-button"
                onClick={() => scrollToSection("locations")}
              >
                🏗️ View Our Projects
              </button>
              <button
                className="cta-button secondary"
                onClick={() => scrollToSection("gallery")}
              >
                <PlayIcon /> Construction Gallery
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

      {/* Enhanced Premium Locations Section - CLICKABLE CARDS */}
      <section id="locations" className="locations">
        <div className="container">
          <h2 className="section-title">Our Construction Projects</h2>
          <p className="section-subtitle">
            Click on any state to explore our box cricket construction projects
            and venues
          </p>
          <div className="locations-grid">
            {mainLocations.map((location) => (
              <div
                key={location.id}
                className="location-card animate-fadeInUp"
                onClick={() => handleStateClick(location.name)}
                style={{ cursor: "pointer" }}
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
                  <div className="location-action">
                    <button className="view-venues-btn">📍 View Venues</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Selector Tabs */}
      <section className="state-selector">
        <div className="container">
          <div className="state-tabs">
            {["Telangana", "Bangalore", "Andhra Pradesh"].map((state) => (
              <button
                key={state}
                className={`state-tab ${
                  selectedState === state ? "active" : ""
                }`}
                onClick={() => setSelectedState(state)}
              >
                {state === "Telangana" && "🏟️"}
                {state === "Bangalore" && "⚡"}
                {state === "Andhra Pradesh" && "🏪"}
                {state}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Venues Section Based on Selected State */}
      <section id="categories" className="categories">
        <div className="container">
          <h2 className="section-title">
            {selectedState === "Telangana" && "Hyderabad Premium Venues"}
            {selectedState === "Bangalore" && "Bangalore Premium Venues"}
            {selectedState === "Andhra Pradesh" &&
              "Andhra Pradesh Premium Venues"}
          </h2>
          <p className="section-subtitle">
            Discover our exclusive box cricket construction projects across{" "}
            {selectedState}'s prime locations, each offering unique amenities
            and world-class infrastructure
          </p>
          <div className="categories-grid">
            {getCurrentVenues().map((location, index) => (
              <div key={index} className="category-card animate-fadeInUp">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Modal for Mobile/Tablet */}
      {showLocationModal && (
        <div
          className="location-modal-overlay"
          onClick={() => setShowLocationModal(false)}
        >
          <div className="location-modal" onClick={(e) => e.stopPropagation()}>
            <div className="location-modal-header">
              <h3>🏗️ {selectedState} Construction Projects</h3>
              <button
                className="close-button"
                onClick={() => setShowLocationModal(false)}
              >
                <XIcon />
              </button>
            </div>
            <div className="location-modal-grid">
              {getLocationsByState(selectedState).map((location, index) => (
                <div key={index} className="location-modal-item">
                  <div className="location-modal-image">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="modal-image"
                    />
                    <div className="location-modal-icon">
                      <span>{location.icon}</span>
                    </div>
                  </div>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Premium Gallery Section with Video Support */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Construction Gallery & Projects</h2>
          <p className="section-subtitle">
            Take a virtual tour of our construction projects and witness the
            excellence of our box cricket facility construction
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

      {/* Enhanced Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>VSR Sports</h4>
              <p>
                India's premier box cricket construction company offering
                world-class venue construction, professional infrastructure
                development, and tournament-grade facility installations across
                AP, Telangana, and Bangalore.
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
              <h4>Hyderabad Projects</h4>
              <a href="#">Kondapur</a>
              <a href="#">Gachibowli</a>
              <a href="#">Hitec City</a>
              <a href="#">Jubilee Hills</a>
              <a href="#">Banjara Hills</a>
              <a href="#">Miyapur</a>
              <a href="#">Ameerpet</a>
              <a href="#">Kukatpally</a>
            </div>

            <div className="footer-section">
              <h4>Bangalore Projects</h4>
              <a href="#">Koramangala</a>
              <a href="#">Indiranagar</a>
              <a href="#">Whitefield</a>
              <a href="#">Electronic City</a>
              <a href="#">HSR Layout</a>
              <a href="#">Marathahalli</a>
              <a href="#">Jayanagar</a>
              <a href="#">Sarjapur</a>
            </div>

            <div className="footer-section">
              <h4>Andhra Pradesh Projects</h4>
              <a href="#">Vijayawada</a>
              <a href="#">Visakhapatnam</a>
              <a href="#">Guntur</a>
              <a href="#">Nellore</a>
              <a href="#">Kurnool</a>
              <a href="#">Tirupati</a>
              <a href="#">Kakinada</a>
              <a href="#">Rajahmundry</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2025 VSR Sports. All rights reserved. | Professional Box
              Cricket Construction | Premium facility construction across India
            </p>
          </div>
        </div>
      </footer>

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
