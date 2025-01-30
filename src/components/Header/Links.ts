export type Link = {
    name?: string;
    link?: string;
  };
  
  export const links: Link[] = [
    { name: 'Home', link: '' },              // Root/Home page
    { name: 'Projects', link: 'projects' },  // Relative path to Projects page
    { name: 'Articles', link: 'articles' },  // Relative path to Articles page
    { name: 'Contact me', link: 'contact' }, // Relative path to Contact page
  ];
  