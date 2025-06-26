export function getMission(id, missions) {
    if (!Array.isArray(missions)) {
        return null;
    }
    return missions.find(m => m.id === id) || null;
}
