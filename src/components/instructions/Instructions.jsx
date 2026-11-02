import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket,
  FaUsers,
  FaEdit,
  FaLayerGroup,
  FaChartBar,
  FaHeart,
  FaCog,
  FaLifeRing,
  FaQuestionCircle,
} from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const SECTIONS = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: FaRocket,
    intro: 'Create an account to save your quizzes, flashcards, and progress.',
    steps: [
      'Click Sign In in the sidebar and sign in with your account.',
      'After signing in you land on your Dashboard, which shows your recent activity and recommended quizzes.',
      'Use the sidebar on the left to move between quizzes, flashcards, polls, and favorites. Click the menu button to expand or collapse it.',
      'Open the profile menu in the top right to reach your Profile and Settings.',
    ],
    signedOutLink: { label: 'Sign in to get started', to: '/signin' },
    signedInLink: { label: 'Go to your Dashboard', to: '/dashboard' },
  },
  {
    id: 'taking-a-quiz',
    title: 'Taking a Quiz',
    icon: FaUsers,
    intro: 'Pick from built-in category quizzes or quizzes made by other users and teachers.',
    steps: [
      'Choose Take Quizzes in the sidebar to browse community and teacher quizzes, or start a category quiz from your Dashboard.',
      'Select a quiz to open it. If the quiz is private, enter the password the creator gave you.',
      'You can shuffle the questions before you start. Questions cannot be shuffled once the quiz begins.',
      'Optionally turn on the timer and choose how many minutes you want. The quiz is submitted automatically when time runs out.',
      'Answer every question, then submit the quiz. Each question is worth 1 point, and each question shows where you are, such as "Question 2 of 10".',
      'When you finish, your score is shown and you can download your results as a PDF.',
    ],
    tip: 'Your scores are saved to your profile so you can track your accuracy over time.',
    signedOutLink: { label: 'Sign in to get started', to: '/signin' },
    signedInLink: { label: 'Browse quizzes', to: '/allcustomquizzes' },
  },
  {
    id: 'making-a-quiz',
    title: 'Making a Quiz',
    icon: FaEdit,
    intro: 'Build your own quizzes to study with or share with others.',
    steps: [
      'Choose Make Quiz in the sidebar and enter a title and details for your quiz.',
      'Add questions one at a time. Questions can be Multiple Choice, True/False, or Fill in the Blank.',
      'To add many questions at once, upload a CSV file in the upload section.',
      'Under privacy settings, choose whether the quiz requires a password to access.',
      'Teachers can mark a quiz as a Teacher Quiz. Teacher quizzes are always private and use a password you set.',
      'Save the quiz. You can edit it later from My Quizzes. If you leave the page with unsaved details, your browser asks you to confirm first.',
    ],
    signedOutLink: { label: 'Sign in to get started', to: '/signin' },
    signedInLink: { label: 'Make a quiz', to: '/customquiz' },
  },
  {
    id: 'flashcards',
    title: 'Flashcards & Study Mode',
    icon: FaLayerGroup,
    intro: 'Flashcard decks help you review material before a quiz.',
    steps: [
      'Choose Make Flashcards to create a deck and add cards with a term on the front and a definition on the back. You can also upload cards from a CSV file.',
      'Make a deck public to share it, or keep it private for yourself.',
      'Use Browse Flashcards to find public decks made by other users.',
      'Open a deck from My Flashcards and start Study Mode. Flip each card, then mark it as known or still learning.',
      'At the end of a session, the results screen shows how many cards you know.',
    ],
    signedOutLink: { label: 'Browse Flashcards', to: '/browse-flashcards' },
    signedInLink: { label: 'Browse Flashcards', to: '/browse-flashcards' },
  },
  {
    id: 'polls',
    title: 'Polls',
    icon: FaChartBar,
    intro: 'Teachers can run live polls to get real-time feedback from a class.',
    steps: [
      'Choose Take a Poll in the sidebar.',
      'To create a poll, enter a question and answer options. You get a join code to share with your students.',
      'To join a poll, enter the join code you were given and cast your vote. You can vote once per poll, and you do not need an account.',
      'The poll creator can open or close the poll and choose whether students see live results.',
    ],
    signedOutLink: { label: 'Take a Poll', to: '/poll' },
    signedInLink: { label: 'Take a Poll', to: '/poll' },
  },
  {
    id: 'favorites',
    title: 'Favorites & Progress',
    icon: FaHeart,
    intro: 'Keep the quizzes you use most close at hand.',
    steps: [
      'Mark a quiz as a favorite with the heart icon.',
      'Find all of your saved quizzes under My Favorite Quizzes in the sidebar.',
      'Open your Profile to see your quiz history and accuracy over time.',
    ],
    signedOutLink: { label: 'Sign in to get started', to: '/signin' },
    signedInLink: { label: 'My Favorite Quizzes', to: '/favorites' },
  },
  {
    id: 'profile-settings',
    title: 'Profile & Settings',
    icon: FaCog,
    intro: 'Personalize your account and the way QuizMaster looks.',
    steps: [
      'Open the profile menu in the top right and choose Profile to update your details.',
      'Choose Settings to switch between light and dark mode.',
      'Other users can view your public profile page and the public content you share.',
    ],
    signedOutLink: { label: 'Open Settings', to: '/settings' },
    signedInLink: { label: 'Open Settings', to: '/settings' },
  },
  {
    id: 'help-support',
    title: 'Help & Support',
    icon: FaLifeRing,
    intro: 'Get help when something is not working.',
    steps: [
      'Choose Support in the footer to open a support ticket. You can message the support team from inside the ticket.',
      'Choose Contact Us in the footer to reach the QuizMaster team.',
    ],
    signedOutLink: { label: 'Sign in to get started', to: '/signin' },
    signedInLink: { label: 'Open Support', to: '/support' },
  },
];

const FAQS = [
  {
    q: 'Why do some pages send me back to the home page?',
    a: 'Quizzes, flashcards, favorites, your profile, and support need an account. If you are not signed in, those pages send you back to the home page. Sign in and open the page again.',
  },
  {
    q: 'How do I take a private quiz?',
    a: 'Open the quiz and enter the password the creator gave you. Teacher quizzes are always private.',
  },
  {
    q: 'Can I shuffle questions during a quiz?',
    a: 'No. You can shuffle the questions before you start, but not once the quiz has begun.',
  },
  {
    q: 'Do I need an account to join a poll?',
    a: 'No. Enter the join code you were given and cast your vote. You can vote once per poll.',
  },
  {
    q: 'How do I change between light and dark mode?',
    a: 'Open the profile menu in the top right, choose Settings, and switch between light and dark mode.',
  },
];

const NAV_ITEMS = [
  ...SECTIONS.map(({ id, title, icon }) => ({ id, title, icon })),
  { id: 'faq', title: 'FAQ', icon: FaQuestionCircle },
];

export default function Instructions() {
  const { isAuthenticated } = useAuth();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-primary text-primary px-4 py-10 max-w-3xl mx-auto flex flex-col gap-8">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-primary mb-4">
          How to Use QuizMaster
        </h1>
        <p className="text-lg text-secondary">
          Everything you need to take quizzes, build your own, and study smarter.
        </p>
      </header>

      {!isAuthenticated && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-accent bg-card p-5">
          <p className="text-secondary">
            Sign in to try these features. Polls and public flashcards work without an account.
          </p>
          <Link
            to="/signin"
            className="shrink-0 rounded-full bg-accent hover:bg-accent-hover text-btn-primary font-semibold px-6 py-2 transition"
          >
            Sign In
          </Link>
        </div>
      )}

      <nav
        aria-label="Sections"
        className="flex flex-wrap gap-3 rounded-2xl border border-primary bg-card p-5"
      >
        {NAV_ITEMS.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm text-secondary hover:border-accent hover:text-accent transition"
          >
            <Icon aria-hidden="true" />
            {title}
          </button>
        ))}
      </nav>

      {SECTIONS.map(({ id, title, icon: Icon, intro, steps, tip, signedOutLink, signedInLink }) => {
        const link = isAuthenticated ? signedInLink : signedOutLink;
        return (
          <section
            key={id}
            id={id}
            className="scroll-mt-6 rounded-2xl border border-accent bg-card p-6"
          >
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gradient-primary mb-3">
              <Icon aria-hidden="true" className="text-accent" />
              {title}
            </h2>
            <p className="text-lg text-secondary mb-4">{intro}</p>
            <ol className="list-decimal pl-6 space-y-2 text-secondary">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            {tip && (
              <p className="mt-5 border-t border-primary pt-4 text-sm text-secondary">
                <span className="font-semibold text-accent">Tip:</span> {tip}
              </p>
            )}
            <Link to={link.to} className="inline-block mt-5 text-accent hover:underline">
              {link.label} &rarr;
            </Link>
          </section>
        );
      })}

      <section id="faq" className="scroll-mt-6 rounded-2xl border border-accent bg-card p-6">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-gradient-primary mb-4">
          <FaQuestionCircle aria-hidden="true" className="text-accent" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-primary px-4 py-3">
              <summary className="cursor-pointer font-semibold text-primary list-none flex items-center justify-between">
                {q}
                <span aria-hidden="true" className="text-xs text-secondary group-open:rotate-180 transition">
                  &#9660;
                </span>
              </summary>
              <p className="mt-3 text-secondary">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
