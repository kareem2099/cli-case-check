export default async function run(input) {
  const text = input.text || "";
  return {
    upper: text.toUpperCase(),
    lower: text.toLowerCase()
  };
}
