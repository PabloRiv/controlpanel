import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-lusitana', // Optional: Define a variable for CSS usage
});   