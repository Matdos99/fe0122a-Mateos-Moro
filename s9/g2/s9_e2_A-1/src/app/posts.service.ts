export async function leggi() {
    return await (await fetch('assets/db.json')).json();
}
