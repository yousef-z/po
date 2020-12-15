export function cmToFeet(cm) {
    let realFeet = ((cm * 0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return feet + '-' + inches;
}  

export function convert_kg_to_lbs(val) {
    return (Math.round(val * 2.2));
}

export function convert_lbs_to_kg(val) {
return (Math.round( val / 2.2));
}
  