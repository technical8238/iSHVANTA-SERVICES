import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  label: string;
  value: string;
}

interface ProjectCard {
  category: string;
  title: string;
  location: string;
  date: string;
  rating: number;
  beforeImg: string;
  afterImg: string;
}

interface FeaturedProject {
  title: string;
  description: string;
  category: string;
  image: string;
}

interface Testimonial {
  name: string;
  photo: string;
  service: string;
  rating: number;
  quote: string;
}

interface TrustItem {
  title: string;
  detail: string;
}

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-work.html',
  styleUrls: ['./our-work.css']
})
export class OurWorkPage {
  activeFilter = 'All';
  isFiltering = false;

  filters = [
    'All',
    'Electrical',
    'Plumbing',
    'AC & Fridge',
    'Furniture',
    'Fabrication',
    'House Painting',
    'Kitchen Appliances',
    'Two Wheeler',
    'CCTV'
  ];

  stats: StatItem[] = [
    { label: 'Jobs Completed', value: '500+' },
    { label: 'Happy Customers', value: '300+' },
    { label: 'Service Categories', value: '10+' },
    { label: 'Years Experience', value: '4+' }
  ];

  projectCards: ProjectCard[] = [
    {
      category: 'Electrical',
      title: 'Complete Home Wiring Upgrade',
      location: 'Vadodara',
      date: 'Feb 2026',
      rating: 4.9,
      beforeImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      afterImg: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Plumbing',
      title: 'Water Tank Repair & Piping',
      location: 'Tarsali',
      date: 'Mar 2026',
      rating: 4.8,
      beforeImg: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
      afterImg: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'AC & Fridge',
      title: 'AC Installation & Cooling Audit',
      location: 'Manjalpur',
      date: 'Jan 2026',
      rating: 4.9,
      beforeImg: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80',
      afterImg: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Furniture',
      title: 'Modular Furniture Repair',
      location: 'Karelibaug',
      date: 'Apr 2026',
      rating: 4.7,
      beforeImg: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80',
      afterImg: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Fabrication',
      title: 'Custom Gate Fabrication',
      location: 'Makarpura',
      date: 'Dec 2025',
      rating: 4.8,
      beforeImg: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=900&q=80',
      afterImg: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'CCTV',
      title: 'Full CCTV Security Setup',
      location: 'Gotri',
      date: 'May 2026',
      rating: 5.0,
      beforeImg: 'https://images.unsplash.com/photo-1518546310933-49dd0f013c6d?auto=format&fit=crop&w=900&q=80',
      afterImg: 'https://images.unsplash.com/photo-1516728778615-2d590ea1856f?auto=format&fit=crop&w=900&q=80'
    }
  ];

  featuredProjects: FeaturedProject[] = [
    {
      title: 'Complete House Wiring',
      description: 'Premium electrical transformation with smart lighting and safe circuits.',
      category: 'Electrical',
      image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'AC Installation',
      description: 'Efficient cooling setup with load assessment and gas recharge.',
      category: 'AC & Fridge',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Water Tank Plumbing Repair',
      description: 'Leakproof plumbing restoration with premium fittings & testing.',
      category: 'Plumbing',
      image: 'https://images.unsplash.com/photo-1507668077125-162d0e0fb22f?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Modular Furniture Repair',
      description: 'Seamless restoration for modern cupboards and living room furniture.',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
    }
  ];

  processSteps = [
    'Service Request',
    'Technician Assigned',
    'Inspection',
    'Service Completion',
    'Customer Satisfaction'
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Amit Patel',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      service: 'AC Installation',
      rating: 5,
      quote: 'Professional, punctual, and the AC runs perfectly after service. Highly recommended for reliable home maintenance.'
    },
    {
      name: 'Neha Shah',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      service: 'Plumbing Repair',
      rating: 5,
      quote: 'Excellent workmanship and clear communication. My water tank problem was fixed fast with premium quality parts.'
    },
    {
      name: 'Rohit Srivastava',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      service: 'CCTV Installation',
      rating: 5,
      quote: 'Detailed installation, neat cabling, and quick support. I feel much safer in my home now.'
    }
  ];

  coverageAreas = [
    'Vadodara',
    'Tarsali',
    'Manjalpur',
    'Makarpura',
    'Waghodia',
    'Karelibaug',
    'Gotri',
    'Ajwa',
    'Harni'
  ];

  trustItems: TrustItem[] = [
    { title: 'Verified Technicians', detail: 'Skilled professionals with verified credentials.' },
    { title: 'Genuine Service', detail: 'Honest assessments and dependable repairs.' },
    { title: 'Transparent Pricing', detail: 'No surprise fees, clear estimates upfront.' },
    { title: 'Quick Response', detail: 'Rapid booking and on-time support.' },
    { title: 'Quality Guarantee', detail: 'Reliable service backed by satisfaction promise.' }
  ];

  setFilter(filter: string): void {
    if (this.activeFilter === filter) {
      return;
    }

    this.isFiltering = true;
    this.activeFilter = filter;

    window.setTimeout(() => {
      this.isFiltering = false;
    }, 300);
  }

  get filteredProjects(): ProjectCard[] {
    return this.activeFilter === 'All'
      ? this.projectCards
      : this.projectCards.filter((project) => project.category === this.activeFilter);
  }
}

