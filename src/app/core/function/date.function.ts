export function calculateDateString(date: Date): string {
    const fecha = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    return fecha;
}

export function hoursCurrently(): string {
    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    const minutosActual = fechaActual.getMinutes();
    const nuevaHora = (horaActual + 1) % 24;
    const horaLimite = `${nuevaHora.toString().padStart(2, '0')}:${minutosActual.toString().padStart(2, '0')}`;

    return horaLimite;
}