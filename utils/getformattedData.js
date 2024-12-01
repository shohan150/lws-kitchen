export default function convertDateFormat(dateString) {
   const months = [
     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
   ];
 
   // Split the input date string
   const [year, month, day] = dateString.split('-');
 
   // Convert month from 0-based index to 1-based index
   const monthName = months[parseInt(month, 10) - 1];
 
   // Return the formatted date
   return `${parseInt(day, 10)} ${monthName} ${year}`;
 }
 
 