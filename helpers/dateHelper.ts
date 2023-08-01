export const formatDate = (utcString: string): string => {
  const date = new Date(utcString);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US');
};