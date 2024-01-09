//1) Jonines - 2024 m. birzelio 23 d.
//2) Mindaugo karunavimas - 2024 m. liepos 6 d. 
//3) Zolines - 2024 m. rugpjucio 15 d.

function spausdintiSvente(index,holiday){
    
    const name = holiday.name;
    const year = holiday.date.year;
    const month = holiday.date.month;
    const day = holiday.date.day;
    const monthNames = ['Sausio', 'Vasario','kovo','Balandzio',
    'Geguzes','Birzelio','Liepos','Rugpjucio',
    'Rugsejo','Spalio','Lapkricio','Gruodzio']
    const monthName = monthNames[month-1];
    return `${index + 1}. ${name} - ${year} m. ${monthName} ${day} d. `
    
    }




    



export default spausdintiSvente;