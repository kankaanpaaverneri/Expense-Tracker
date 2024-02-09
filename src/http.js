export async function fetchGet(url, updatedUser = {}) {
    const promise = await fetch(url);
    const data = await promise.json();

    if(!promise.ok)
        throw new Error("Failed to fetch data");
    return data;
}

export async function fetchPost(url, updatedUser) {
    const promise = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    });
    const data = await promise.json();

    if(!promise.ok)
        throw new Error("Failed to fetch data");
    return data;
}

export async function fetchDelete(url) {
    const promise = await fetch(url, {
        method: "DELETE"
    });

    if(!promise.ok)
        throw new Error("Failed to DELETE data");
    return promise;
}