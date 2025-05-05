export function updateResultById(id: string, text: string): void {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}