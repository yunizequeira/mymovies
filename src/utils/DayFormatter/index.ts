export const FormatterDay = (value: string) => {
  const newDate = new Date(value);
  const month = newDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const day = newDate.getUTCDate();
  const añoTexto = newDate.getUTCFullYear();
  const dateText = month + " " + day + " " + añoTexto;
  return dateText;
};
export const FormatterTime = (value: string) => {
  const fecha = new Date(`2000-01-01T${value}`);
  const horaFormatter = fecha.toLocaleString("en-US", {
    hour: "numeric", // Hora en formato numérico
    minute: "numeric", // Minuto en formato numérico
    hour12: true, // Usa el formato de 12 horas (AM/PM)
  });
  return horaFormatter;
};
