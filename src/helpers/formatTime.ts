export const GetHourMinutes = (date:Date) =>{
    const hora = date.getHours();
    const minutos = date.getMinutes();
    const horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    return horaMinutos;
}
