const stateMap = new Map([
    [
        0,
        `<span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">Completed</span>`
    ],
    [
        1,
        `<span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">Cancelled</span>`
    ],
    [
        2,
        `<span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">In progress</span>`
    ],
]);

export default function getStateMap() {
    return stateMap;
}