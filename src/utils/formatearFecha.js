export const formatearFecha = (fecha) => {
    if (!fecha) return "";

    return new Date(fecha).toLocaleString(
        "es-MX",
        {
            timeZone: "America/Merida",
            hour12: true
        }
    );
};