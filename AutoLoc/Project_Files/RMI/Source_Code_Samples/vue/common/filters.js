export function addComma (value) {
    if (!value) return '';
    return parseInt(value, 10).toLocaleString();
}

export function ymdJaJp (value) {
    const date = new Date(value);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}
