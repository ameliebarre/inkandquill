import { DM_Serif_Text, DM_Sans } from 'next/font/google';

export const dm_serif_text = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif',
});

export const dm_sans = DM_Sans({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});
