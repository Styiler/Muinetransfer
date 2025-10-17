import React from 'react';

interface IconProps {
  className?: string;
}

export const SunIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.317 4.816 4.898-1.291zM9.062 8.614c-.063-.139-.42-1.053-.518-1.182-.122-.162-.278-.202-.455-.203-.179 0-.376-.019-.566.09-.191.108-.475.47-.611.638-.136.169-.271.378-.271.723 0 .344.137.669.207.766.071.097.457.708 1.113 1.01.812.378 1.13.313 1.34.298.21-.016.66-.269.756-.53.095-.261.095-.483.065-.53-.03-.046-.105-.075-.21-.125z" />
  </svg>
);

export const TelegramIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.1l15.97-5.99c.78-.29 1.45.14 1.2 1.12l-2.82 13.3c-.22.93-1.22 1.15-1.8.72l-4.52-3.32-2.13 2.05c-.23.23-.42.41-.83.41z" />
  </svg>
);

export const CarIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 16.94V19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h11.23"/>
      <path d="M19 12h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-4Z"/>
      <path d="M5 17H3"/>
      <path d="M19 17h-2"/>
      <path d="M14 9h5a2 2 0 0 1 2 2v2"/>
      <path d="M5 9H2a2 2 0 0 0-2 2v2"/>
      <path d="M9 17a2 2 0 1 0-4 0"/>
      <path d="M15 17a2 2 0 1 0-4 0"/>
      <path d="M9 9 5 3 2 9"/>
    </svg>
);

export const PalmTreeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-8"/>
      <path d="M12 14c-4.2 0-8-2.6-8-6s3.8-6 8-6 8 2.6 8 6-3.8 6-8 6z"/>
      <path d="M12 14c4.2 0 8-2.6 8-6"/>
      <path d="M12 14c-4.2 0-8-2.6-8-6"/>
      <path d="M12 14v8"/>
      <path d="m5 11 1-3"/>
      <path d="m19 11-1-3"/>
      <path d="m12 5-1-2"/>
    </svg>
);

export const KeyIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5"/>
      <path d="m21 2-9.6 9.6"/>
      <path d="m15.5 11.5 3 3L22 11l-3-3"/>
    </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const VKIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.162 18.994c.607-.066 1.034-.514 1.034-1.122 0-.21-.023-.42-.069-.63-.39-.143-.88-.293-1.297-.43-1.123-.37-2.273-.72-2.273-1.958 0-.95.68-1.554 1.378-1.782.105-.034.216-.06.33-.082.015-.003.03-.005.045-.008.384-.063.81-.098 1.27-.098 1.109 0 2.036.195 2.515.305.283.064.444.11.53.11.237 0 .42-.143.42-.395s-.162-.48-.372-.614c-.21-.133-.51-.255-.86-.375-.54-.183-1.22-.32-2.02-.38v-2.09c.046 0 .092-.003.138-.003.495 0 .93.21 1.17.555.22.315.33.69.33 1.11 0 .195.023.39.069.585.51.143.99.293 1.35.43.96.35 1.74.68 1.74 1.83 0 .8-.52 1.35-1.14 1.56.84.21 1.53.79 1.53 1.8 0 1.48-1.16 2.37-2.65 2.37-1.1 0-1.9-.17-2.4-.29-.16-.04-.32-.07-.47-.1v.15c0 .66.42 1.11 1.02 1.18zm-6.27-11.45c0-.52.42-.94.94-.94h6.32c.52 0 .94.42.94.94s-.42.94-.94.94h-6.32c-.52 0-.94-.42-.94-.94zm0 4.45c0-.52.42-.94.94-.94h3.69c.52 0 .94.42.94.94s-.42.94-.94.94h-3.69c-.52 0-.94-.42-.94-.94zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/>
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const TicketIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-1.5h5.25m-5.25 0h3m-3 0h-1.5m0 0h-1.5m-1.5 0H3m9 0h-1.5m0 0h-1.5m0 0h-1.5m9-1.5H18m3 0h.008v.008H21V12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);