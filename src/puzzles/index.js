import { Puzzle1Original } from './puzzle1/Original'
import { Puzzle1Modified } from './puzzle1/Modified'
import { Puzzle2Original } from './puzzle2/Original'
import { Puzzle2Modified } from './puzzle2/Modified'
import { Puzzle3Original } from './puzzle3/Original'
import { Puzzle3Modified } from './puzzle3/Modified'
import { Puzzle4Original } from './puzzle4/Original'
import { Puzzle4Modified } from './puzzle4/Modified'
import { Puzzle5Original } from './puzzle5/Original'
import { Puzzle5Modified } from './puzzle5/Modified'
import { Puzzle6Original } from './puzzle6/Original'
import { Puzzle6Modified } from './puzzle6/Modified'
import { Puzzle7Original } from './puzzle7/Original'
import { Puzzle7Modified } from './puzzle7/Modified'
import { Puzzle8Original } from './puzzle8/Original'
import { Puzzle8Modified } from './puzzle8/Modified'
import { Puzzle9Original } from './puzzle9/Original'
import { Puzzle9Modified } from './puzzle9/Modified'
import { Puzzle10Original } from './puzzle10/Original'
import { Puzzle10Modified } from './puzzle10/Modified'

export const puzzles = [
  {
    id: 1,
    name: 'E-commerce Product Card',
    difficulty: 'easy',
    totalDifferences: 4,
    differences: [
      { id: 1, description: 'Add to Cart button changed from blue to green' },
      { id: 2, description: 'Star rating reduced from 5 to 4 stars' },
      { id: 3, description: 'Product title text changed from "Wireless Headphones Pro" to "Wireless Headphones Plus"' },
      { id: 4, description: 'Price changed from "$79.99" to "$89.99"' },
    ],
    OriginalComponent: Puzzle1Original,
    ModifiedComponent: Puzzle1Modified,
  },
  {
    id: 2,
    name: 'Sign Up / Login Screen',
    difficulty: 'easy',
    totalDifferences: 4,
    differences: [
      { id: 1, description: 'Sign Up button changed from filled/solid to outlined style (white bg, black border)' },
      { id: 2, description: 'Google icon/button is missing (empty space remains)' },
      { id: 3, description: '"Log in" changed to "Sign in" in the account link' },
      { id: 4, description: 'Password field shows plain text "password123" instead of bullet dots' },
    ],
    OriginalComponent: Puzzle2Original,
    ModifiedComponent: Puzzle2Modified,
  },
  {
    id: 3,
    name: 'Weather Widget',
    difficulty: 'easy',
    totalDifferences: 4,
    differences: [
      { id: 1, description: 'Temperature unit changed from "72°F" to "72°C"' },
      { id: 2, description: 'Weather icon changed from sun to cloud' },
      { id: 3, description: 'City name changed from "San Francisco" to "San Diego"' },
      { id: 4, description: 'Wednesday forecast icon changed from rain to snow' },
    ],
    OriginalComponent: Puzzle3Original,
    ModifiedComponent: Puzzle3Modified,
  },
  {
    id: 4,
    name: 'Blog Article Card Grid',
    difficulty: 'medium',
    totalDifferences: 5,
    differences: [
      { id: 1, description: 'Top-left card category tag changed from "Technology" (blue) to "Science" (purple)' },
      { id: 2, description: 'Top-right card author changed from "Jane Cooper" to "Jane Smith"' },
      { id: 3, description: 'Bottom-left card heart/like icon changed from filled to outlined' },
      { id: 4, description: 'Bottom-right card date changed from "Mar 15, 2024" to "Mar 15, 2025"' },
      { id: 5, description: 'Top-left card title changed from "The Future of AI" to "The Future of ML"' },
    ],
    OriginalComponent: Puzzle4Original,
    ModifiedComponent: Puzzle4Modified,
  },
  {
    id: 5,
    name: 'Music Player',
    difficulty: 'medium',
    totalDifferences: 5,
    differences: [
      { id: 1, description: 'Play button changed from play icon (triangle) to pause icon (two bars)' },
      { id: 2, description: 'Shuffle button changed from active/highlighted to inactive/grey' },
      { id: 3, description: 'Song title changed from "Midnight Drive" to "Midnight Ride"' },
      { id: 4, description: 'Progress bar fill changed from ~40% to ~70%' },
      { id: 5, description: 'Volume icon changed from full volume to muted (with strikethrough)' },
    ],
    OriginalComponent: Puzzle5Original,
    ModifiedComponent: Puzzle5Modified,
  },
  {
    id: 6,
    name: 'Pricing Table',
    difficulty: 'medium',
    totalDifferences: 5,
    differences: [
      { id: 1, description: 'Pro card price changed from "$29/mo" to "$39/mo"' },
      { id: 2, description: 'Basic card "10 GB Storage" changed to "5 GB Storage"' },
      { id: 3, description: 'Pro card badge changed from "MOST POPULAR" to "BEST VALUE"' },
      { id: 4, description: 'Enterprise "Contact Us" button changed from filled to outlined' },
      { id: 5, description: 'Basic card "Email Support" checkmark changed from ✓ to ✗' },
    ],
    OriginalComponent: Puzzle6Original,
    ModifiedComponent: Puzzle6Modified,
  },
  {
    id: 7,
    name: 'Analytics Dashboard',
    difficulty: 'hard',
    totalDifferences: 6,
    differences: [
      { id: 1, description: 'Total Revenue changed from "$48,352" to "$45,352"' },
      { id: 2, description: 'Conversion Rate change flipped from "-0.4%" (red) to "+0.4%" (green)' },
      { id: 3, description: 'Top Pages: "/pricing" changed to "/features"' },
      { id: 4, description: 'Top Pages: /blog view count changed from "4,280" to "4,820"' },
      { id: 5, description: 'Thursday bar in weekly traffic chart is shorter' },
      { id: 6, description: 'Time range changed from "Last 7 days" to "Last 30 days"' },
    ],
    OriginalComponent: Puzzle7Original,
    ModifiedComponent: Puzzle7Modified,
  },
  {
    id: 8,
    name: 'Social Media Post',
    difficulty: 'hard',
    totalDifferences: 6,
    differences: [
      { id: 1, description: 'Heart icon changed from filled (red) to outlined' },
      { id: 2, description: 'Like count changed from "2,847" to "2,347"' },
      { id: 3, description: 'Commenter username changed from "mike_dev" to "mike.dev"' },
      { id: 4, description: 'Profile avatar gradient direction reversed' },
      { id: 5, description: 'Location changed from "San Francisco, CA" to "San Francisco, NY"' },
      { id: 6, description: 'Timestamp changed from "2 hours ago" to "3 hours ago"' },
    ],
    OriginalComponent: Puzzle8Original,
    ModifiedComponent: Puzzle8Modified,
  },
  {
    id: 9,
    name: 'Settings Page',
    difficulty: 'hard',
    totalDifferences: 6,
    differences: [
      { id: 1, description: 'SMS Alerts toggle changed from on to off' },
      { id: 2, description: 'Theme selection changed from "Light" to "Dark"' },
      { id: 3, description: '"Email Digest / Weekly" changed to "Email Updates / Daily"' },
      { id: 4, description: 'Profile Visibility changed from "Everyone" to "Friends"' },
      { id: 5, description: 'Subtitle changed from "Manage your preferences" to "Manage your account"' },
      { id: 6, description: 'Two-Factor Auth description changed from "security" to "privacy"' },
    ],
    OriginalComponent: Puzzle9Original,
    ModifiedComponent: Puzzle9Modified,
  },
  {
    id: 10,
    name: 'Kanban Board',
    difficulty: 'hard',
    totalDifferences: 7,
    differences: [
      { id: 1, description: 'First card tag changed from "Feature" to "Enhancement"' },
      { id: 2, description: 'Bug card priority reduced from "!!" to "!"' },
      { id: 3, description: '"Redesign settings page" changed to "Redesign settings panel"' },
      { id: 4, description: 'Backend card assignee avatar changed from pink to violet' },
      { id: 5, description: '"Launch landing page v2" changed to "v3"' },
      { id: 6, description: '"Done" column status dot changed from green to blue' },
      { id: 7, description: 'Member count changed from "3 members" to "4 members"' },
    ],
    OriginalComponent: Puzzle10Original,
    ModifiedComponent: Puzzle10Modified,
  },
]
