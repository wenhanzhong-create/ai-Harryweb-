// Utility function to merge Tailwind CSS classes
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
