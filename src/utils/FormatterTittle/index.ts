export default function FormatterTittle(title: string) {
    const words = title.length === 0 ? title : title.split(" ").join("-");
    return words
}